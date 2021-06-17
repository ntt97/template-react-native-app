import { ItemProduct } from './../@types/index';
import { ParamsGetProduct } from '@types';
import axios from 'axios';

const getProductApi = async (params: ParamsGetProduct): Promise<ItemProduct> => {
  const { page, limit } = params.pagination;
  return await axios.get(`https://60c1ccda4f7e880017dc067f.mockapi.io/api/v1/item?page=${page}&limit=${limit}`);
};
export { getProductApi };
