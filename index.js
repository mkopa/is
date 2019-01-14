'use strict';

function isUndefined(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Undefined]';
}

function isNull(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Null]';
}

function isBoolean(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Boolean]';
}

function isNumber(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Number]';
}

function isString(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object String]';
}

function isSymbol(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Symbol]';
}

function isArray(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Array]';
}

function isObject(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Object]';
}

function isFunction(input) {
  const type = Object.prototype.toString.call(input);
  return type === '[object Function]' ||
		type === '[object GeneratorFunction]' ||
		type === '[object AsyncFunction]';
}

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
