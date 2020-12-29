// import AsyncStorage from '@react-native-community/async-storage';

// eslint-disable-next-line
const jwtDecode = require('jwt-decode');

const setDefaultLanguage = async (language: string) => {
  // return AsyncStorage.setItem(LANGUAGE_STORAGE, language);
};

const getDefaultLanguage = async () => {
  // return AsyncStorage.getItem(LANGUAGE_STORAGE);
};

const setToken = async (value: string) => {
  // return AsyncStorage.setItem(USER_TOKEN, value);
};

const getToken = async () => {
  // return AsyncStorage.getItem(USER_TOKEN);
};

const setRefreshToken = async (value: string) => {
  // return AsyncStorage.setItem(USER_REFRESH_TOKEN, value);
};

const getRefreshToken = () => {
  // return AsyncStorage.getItem(USER_REFRESH_TOKEN);
};

const getTokenExpirationDate = (token: string): Date => {
  const decoded = jwtDecode(token);

  if (decoded.exp === undefined) return new Date();

  const date = new Date(0);
  date.setUTCSeconds(decoded.exp);
  return date;
};

const isTokenExpired = async (value?: any) => {
  let token = value;
  if (!value) {
    token = await getToken();
  }
  const date = getTokenExpirationDate(token);
  if (date === undefined) return false;
  return !(date.valueOf() > new Date().valueOf());
};
const getErrorMessage = (error?: any, message = 'Something went wrong!') => {
  try {
    const result =
      error && error.data && error.data.message && typeof error.data.message === 'string'
        ? error.data.message
        : message;
    return result;
  } catch (e) {
    return message;
  }
};

export {
  setDefaultLanguage,
  getDefaultLanguage,
  setToken,
  getToken,
  setRefreshToken,
  getRefreshToken,
  isTokenExpired,
  getErrorMessage,
};
