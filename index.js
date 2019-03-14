'use strict';

function isUndefined(input) {
  return input === undefined;
}

function isNull(input) {
  return input === null;
}

function isBoolean(input) {
  return typeof input === 'boolean';
}

function isNumber(input) {
  return typeof input === 'number' && !isNaN(input);
}

function isString(input) {
  return typeof input === 'string';
}

function isSymbol(input) {
  return typeof input === 'symbol';
}

function isArray(input) {
  return Array.isArray(input);
}

function isObject(input) {
  return !!input && typeof input === 'object' && input.constructor === Object;
}

function isFunction(input) {
  return typeof input === 'function';
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
