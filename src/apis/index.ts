import axios, { AxiosError } from 'axios';
import { getToken, setToken, isTokenExpired, getRefreshToken, setRefreshToken } from 'helpers';
import { store } from '@store/configureStore';
import { RequestMethod } from '@constants/index';
const BASE_URL = 'yrl';
axios.interceptors.request.use(
  async function (config) {
    if (!config.headers.Authorization) {
      const token = await getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(undefined, async function (error: AxiosError) {
  // token expiry
  const originalRequest = error.config;

  if (error.response && error.response.status === 401) {
    const apiLogins: string | string[] = [
      // `${BASE_URL}/auth/patient/login`,
      // `${BASE_URL}/auth/patient/verifyOTP`,
      // `${BASE_URL}/auth/patient/resetOTP`,
      // `${BASE_URL}/languages`,
      // `${BASE_URL}/languages/contents/en/languages`,
      // `${BASE_URL}/languages/contents/vi/languages`,
    ];
    if (apiLogins.indexOf(error.config.url as string) > -1) {
      return Promise.reject(error);
    } else {
      const isExpired = await isTokenExpired();
      if (isExpired) {
        const refreshToken = await getRefreshToken();
        return axios
          .post(`${BASE_URL}/auth/refreshToken`, { refreshToken }) // refreshToken
          .then(async (response: any) => {
            await setToken(response.data.accessToken);
            await setRefreshToken(response.data.refreshToken);
            originalRequest.headers['Authorization'] = `Bearer ${response.data.accessToken}`;
            return axios(originalRequest);
          })
          .catch(error => {
            setToken('').then(() => {
              // store.dispatch({
              //   // type: NAVIGATION_ROOT_WITH_SAGA,
              //   // payload: { name: LOGIN_SCREEN },
              // });
            });
          });
      }
    }
  }
  if (error.response) {
    return Promise.reject(error.response);
  }
  if (error.request) {
    return Promise.reject(error.request);
  }
  return Promise.reject(error.message);
});
export default class BaseService {
  // private readonly authApi: AuthService;
  // private readonly registerApi: RegisterService;

  public static readonly instance: BaseService = new BaseService();

  // public get register(): RegisterService {
  //   return this.registerApi;
  // }

  // public get auth(): AuthService {
  //   return this.authApi;
  // }

  constructor() {
    if (BaseService.instance) {
      throw new Error('Error: Singleton, use BaseService.instance');
    }
    // this.registerApi = new RegisterService(this);
    // this.authApi = new AuthService(this);
  }

  public readonly request = (
    method: RequestMethod,
    endpoint: string,
    body?: Record<string, any>,
    optionalHeaders?: Record<string, any>,
    params?: Record<string, any>,
  ) => {
    const options = {
      baseURL: BASE_URL,
      endpoint: `${endpoint}`,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...optionalHeaders,
      },
    };
    // console.log(method, endpoint, body);
    return axios({
      baseURL: options.baseURL,
      headers: options.headers,
      timeout: DEFAULT_TIMEOUT,
      ...optionalHeaders,
      method: options.method,
      url: options.endpoint,
      data: method == 'GET' ? undefined : body,
      params,
    });
  };
}
