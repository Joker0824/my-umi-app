import request from '@/utils/request';
import _ from 'lodash';
import { formatFromData } from '@/utils/helper';

export const login = (data: ILoginData) =>
  request({
    url: '/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: formatFromData(data),
  });
