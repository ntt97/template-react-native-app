import { all, fork } from 'redux-saga/effects';
import navigationRootSaga from './navigation.saga';

export default function* rootSaga() {
  yield all([fork(navigationRootSaga)]);
}
