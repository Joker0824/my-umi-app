import request from '@/utils/request';
import { AxiosPromise } from 'axios';

export const addData = () =>
  request({
    url: '/data/add',
    method: 'post',
  });
