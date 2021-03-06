'use strict';

const _objTypes = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Object', 'Array', 'Symbol'];

export class objectScan {
  /** This Returns Object Type */
  getType(val) {
    return Object.prototype.toString.call(val);
  }
  /** This Checks and Return if Object is Defined */
  isDefined(val) {
    return val !== void 0 || typeof val !== 'undefined';
  }
  /** Run a Map on an Array **/
  map(arr, fn) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        res.push(fn(arr[i], i));
    }
    arr = null;
    return res;
  }
  /** Checks and Return if the prop is Objects own Property */
  hasOwnProp(obj, val) {
    return Object.prototype.hasOwnProperty.call(obj, val);
  }
  /** Extend properties from extending Object to initial Object */
  extend(newObj, oldObj) {
    for (let prop in oldObj) {
        if (hasOwnProp(oldObj, prop)) {
            newObj[prop] = oldObj[prop];
        }
    }
    return newObj;
  }
}

export default _objTypes.forEach(
  name => {
    objectScan[`is${name}`] = obj => Object.prototype.toString.call(obj) === `[object ${name}]`;
  }
)

// NOTE: 10/08/18 changed toString.call(x) => Object.prototype.toString.call(obj) (e.g bellow) to correct a bug in IE
// function isString(x) {
//   return Object.prototype.toString.call(x) === "[object String]"
// }