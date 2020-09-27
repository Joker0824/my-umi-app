import _ from 'lodash';

export /**
 * @description 把数据格式化成form对象
 * @param {Object} data
 * @returns
 */
const formatFromData = (data: Object) => {
  const formData = new FormData();
  Object.keys(data).forEach(key => {
    formData.append(key, _.get(data, key));
  });
  return formData;
};
