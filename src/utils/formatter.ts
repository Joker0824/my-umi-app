import _ from 'lodash';
export /**
 * @description 把对象或者数组里面的true和false转换成1和0
 * @template T
 * @param {T} object
 * @param {string[]} keys
 * @returns
 */
const boolean2Number = <T extends Object | Array<any>>(
  object: T,
  keys: string[],
) => {
  const obj: any = {};
  _.forEach(object, (item, key) => {
    if (keys.includes(key) && _.isBoolean(item)) {
      obj[key] = item ? 1 : 0;
    } else {
      obj[key] = item;
    }
  });
  return obj;
};
export /**
 * @description 把对象或者数组里面的1和0转换成true和false
 * @template T
 * @param {T} object
 * @param {string[]} keys
 * @returns
 */
const number2Boolean = <T extends Object | Array<any>>(
  object: T,
  keys: string[],
) => {
  return _.map(object, (item, key) => {
    if (keys.includes(key) && _.isNumber(item)) {
      return item === 1 ? true : false;
    }
    return item;
  });
};
