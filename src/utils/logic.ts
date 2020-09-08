export /**
 * @description 判断对象是不是{}空对象
 * @param {Object} obj
 * @returns {boolean}
 */
const isEmptyObject = (obj: Object): boolean => Object.keys(obj).length === 0;
