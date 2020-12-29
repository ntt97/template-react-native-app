// import { loginWithSagaSuccess } from 'actions/auth.action';
// import {
//   LOGOUT_WITH_SAGA,
//   LOGIN_WITH_SAGA_FAILED,
//   LOGIN_WITH_SAGA,
//   LOGIN_WITH_SAGA_SUCCESS,

// } from '@constants/index';

// export interface AuthState {
//   login: {
//     isError: boolean;
//     message:string;
//     user:object
//   };
// }

// const defaultState = {
//   login: {
//     isError: false,
//     message:"",
//     user:{}
//   }
// };

// export default function authReducer(state: AuthState = defaultState, action: any) {
//   switch (action.type) {
//     case LOGOUT_WITH_SAGA:
//       return { ...defaultState,login: { isError: false ,message:"",user:{} } };
//     case LOGIN_WITH_SAGA:
//       return { ...defaultState, login: { isError: false,message: action.payload.message || 'Something went wrong!' ,user:{} } };
//     case LOGIN_WITH_SAGA_FAILED:

//       return { ...defaultState, login: { isError: true ,message:action.payload,user:{} } };

//       case LOGIN_WITH_SAGA_SUCCESS:
//         return { ...defaultState,login: { isError: false ,message:action.payload,user:action.payload } };

//     default:
//       return state;
//   }
// }
