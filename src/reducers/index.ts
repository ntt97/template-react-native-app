import { combineReducers } from 'redux';
import navigationReducer from './navigation.reducer';
import { NavigationState } from '@actions/navigation.action';
import loadingReducer, { LoadingState } from './loading.reducer';

export interface RootState {
  navigation: NavigationState;
  loading: LoadingState;
}

const rootState = {
  navigation: navigationReducer,
  loading: loadingReducer,
};

const rootReducer = combineReducers(rootState);
export default rootReducer;
