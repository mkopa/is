# is [![Build Status](https://travis-ci.org/mkopa/is.svg?branch=master)](https://travis-ci.org/mkopa/is)

> Strong values checking


## Install

```
$ npm install is
```


## Usage

```js
const _is = require('is');

//isUndefined
_is.isUndefined(undefined)
//=> true
_is.isUndefined("foo")
//=> false

//isNull
_is.isNull(null)
//=> true
_is.isNull("foo")
//=> false

//isBoolean
_is.isBoolean(false)
//=> true
_is.isBoolean("foo")
//=> false

//isNumber
_is.isNumber(11)
//=> true
_is.isNumber("foo")
//=> false

//isString
_is.isString("foo")
//=> true
_is.isString(() => {})
//=> false

//isSymbol
_is.isSymbol(Symbol())
//=> true
_is.isSymbol("foo")
//=> false

//isArray
_is.isArray(["foo", "bar"])
//=> true
_is.isArray("foo")
//=> false

//isObject
_is.isObject(_is)
//=> true
_is.isObject("foo")
//=> false

//isFunvtion
_is.isFunction(() => {})
//=> true
_is.isFunction("foo")
//=> false

```


## Related

- [@mkopa/is](https://github.com/mkopa/is) - Type check values


## License

MIT © [Marcin Kopa](https://mkopa.github.io)