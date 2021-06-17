import { combineReducers } from 'redux';
import navigationReducer from './navigation.reducer';
import { NavigationState } from '@actions/navigation.action';
import loadingReducer, { LoadingState } from './loading.reducer';
import languageReducer, { LanguageState } from './language.reducer';
import ProductReducer, { ProductState } from './product.reducer';
import CartReducer, { CartState } from './cart.reducer';
import { reducer as networkStatus, INetworkStatus } from '../modules/network';

export interface RootState {
  navigation: NavigationState;
  loading: LoadingState;
  language: LanguageState;
  cart: CartState;
  product: ProductState;
  networkStatus: INetworkStatus;
}

const rootState = {
  navigation: navigationReducer,
  loading: loadingReducer,
  language: languageReducer,
  cart: CartReducer,
  product: ProductReducer,
  networkStatus,
};

const rootReducer = combineReducers(rootState);
export default rootReducer;
