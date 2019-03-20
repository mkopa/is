const isUndefined = input => input === undefined;

const isNull = input => input === null;

const isBoolean = input => typeof input === 'boolean';

const isNumber = input => typeof input === 'number' && input === input;

const isString = input => typeof input === 'string';

const isSymbol = input => typeof input === 'symbol';

const isArray = input => Array.isArray(input);

const isObject = input => !!input && typeof input === 'object' && input.constructor === Object;

const isFunction = input => typeof input === 'function';

module.exports = {
  isUndefined,
  isNull,
  isBoolean,
  isNumber,
  isString,
  isSymbol,
  isArray,
  isObject,
  isFunction
};
