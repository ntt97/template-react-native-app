// import {
//   CHECK_PHONE_FAILED,
//   CHECK_PHONE_SUCCESS,
//   LOGIN_WITH_SAGA,
//   LOGIN_WITH_SAGA_FAILED,
//   LOGIN_WITH_SAGA_SUCCESS,
//   LOGOUT_WITH_SAGA,
//   RESET_ALL_STATE,
// } from '@constants/index';
// import { PayloadAction } from 'types/types';

// export interface PayloadLogin {
//   phone: string;
//   code: string;
//   deviceId: string;
// }

// export interface RootAction {
//   type: string;
//   payload: PayloadLogin;
// }

// const loginWithSaga = (payload: PayloadLogin): PayloadAction<string, PayloadLogin> => {
//   return {
//     type: LOGIN_WITH_SAGA,
//     payload,
//   };
// };

// const loginWithSagaSuccess = (payload: any) => {
//   return {
//     type: LOGIN_WITH_SAGA_SUCCESS,
//     payload,
//   };
// };
// const loginWithSagaFailed = (payload: any = 'something went wrong!'): PayloadAction<string, undefined> => {
//   return {
//     type: LOGIN_WITH_SAGA_FAILED,
//     payload: payload,
//   };
// };

// const resetAllState = (): PayloadAction<string, undefined> => {
//   return {
//     type: RESET_ALL_STATE,
//     payload: undefined,
//   };
// };

// const CheckPhoneWithSagaSuccess = (payload: any) => {
//   return {
//     type: CHECK_PHONE_SUCCESS,
//     payload: payload,
//   };
// };
// const CheckPhoneWithSagaFailed = (payload: any = 'something went wrong!'): PayloadAction<string, undefined> => {
//   return {
//     type: CHECK_PHONE_FAILED,
//     payload: payload,
//   };
// };
// const logoutWithSaga = (): PayloadAction<string, undefined> => {
//   return {
//     type: LOGOUT_WITH_SAGA,
//     payload: undefined,
//   };
// };

// export {
//   resetAllState,
//   loginWithSaga,
//   loginWithSagaSuccess,
//   loginWithSagaFailed,
//   CheckPhoneWithSagaSuccess,
//   CheckPhoneWithSagaFailed,
//   logoutWithSaga,
// };
