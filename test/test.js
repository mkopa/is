const assert = require('assert');
const _ = require('../index');

describe('Testing \'is\' library', function() {
  describe('isUndefined', function() {
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(_), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(async () => {}), false);
    });
    it('should return \'true\' when the value is a \'undefined\'', function() {
      assert.equal(_.isUndefined(undefined), true);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(null), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined('foo'), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(true), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(false), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(NaN), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(1), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'undefined\'', function() {
      assert.equal(_.isUndefined(Symbol()), false);
    });
  });

  describe('isNull', function() {
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(_), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(undefined), false);
    });
    it('should return \'true\' when the value is a \'Null\'', function() {
      assert.equal(_.isNull(null), true);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(true), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(false), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(1), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'Null\'', function() {
      assert.equal(_.isNull(Symbol()), false);
    });
  });

  describe('isBoolean', function() {
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(_), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(null), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(/foo/), false);
    });
    it('should return \'true\' when the value is a \'Boolean\'', function() {
      assert.equal(_.isBoolean(true), true);
    });
    it('should return \'true\' when the value is a \'Boolean\'', function() {
      assert.equal(_.isBoolean(false), true);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(1), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'Boolean\'', function() {
      assert.equal(_.isBoolean(Symbol()), false);
    });
  });

  describe('isNumber', function() {
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(_), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(null), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(true), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(false), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(NaN), false);
    });
    it('should return \'true\' when the value is a \'Number\'', function() {
      assert.equal(_.isNumber(1), true);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'Number\'', function() {
      assert.equal(_.isNumber(Symbol()), false);
    });
  });

  describe('isString', function() {
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(_), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(undefined), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(null), false);
    });
    it('should return \'true\' when the value is a \'String\'', function() {
      assert.equal(_.isString('foo'), true);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(true), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(false), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(NaN), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(1), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(Symbol()), false);
    });
  });

  describe('isSymbol', function() {
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(_), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(null), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(true), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(false), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(1), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'Symbol\'', function() {
      assert.equal(_.isSymbol(['foo', 'bar']), false);
    });
    it('should return \'true\' when the value is a \'Symbol\'', function() {
      assert.equal(_.isSymbol(Symbol()), true);
    });
  });

  describe('isArray', function() {
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(_), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(null), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(true), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(false), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray(1), false);
    });
    it('should return \'false\' when the value is not a \'Array\'', function() {
      assert.equal(_.isArray({foo: true}), false);
    });
    it('should return \'true\' when the value is a \'Array\'', function() {
      assert.equal(_.isArray(['foo', 'bar']), true);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(Symbol()), false);
    });
  });

  describe('isObject', function() {
    it('should return \'true\' when the value is a \'Object\'', function() {
      assert.equal(_.isObject(_), true);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(function * () {}), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(null), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(true), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(false), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(1), false);
    });
    it('should return \'true\' when the value is a \'Object\'', function() {
      assert.equal(_.isObject({foo: true}), true);
    });
    it('should return \'false\' when the value is not a \'Object\'', function() {
      assert.equal(_.isObject(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'String\'', function() {
      assert.equal(_.isString(Symbol()), false);
    });
  });

  describe('isFunction', function() {
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(_), false);
    });
    it('should return \'true\' when the value is a \'Function\'', function() {
      assert.equal(_.isFunction(() => {}), true);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(function * () {}), true);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(async () => {}), true);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(null), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(true), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(false), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(1), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'Function\'', function() {
      assert.equal(_.isFunction(Symbol()), false);
    });
  });

  describe('isAsyncFunction', function() {
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(_), false);
    });
    it('should return \'true\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(() => {}), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(function * () {}), false);
    });
    it('should return \'false\' when the value is a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(async () => {}), true);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(null), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(true), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(false), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(1), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'Async Function\'', function() {
      assert.equal(_.isAsyncFunction(Symbol()), false);
    });
  });

  describe('isGeneratorFunction', function() {
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(_), false);
    });
    it('should return \'true\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(() => {}), false);
    });
    it('should return \'false\' when the value is a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(function * () {}), true);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(async () => {}), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(undefined), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(null), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction('foo'), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(/foo/), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(true), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(false), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(NaN), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(1), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction({foo: true}), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(['foo', 'bar']), false);
    });
    it('should return \'false\' when the value is not a \'Generator Function\'', function() {
      assert.equal(_.isGeneratorFunction(Symbol()), false);
    });
  });
});