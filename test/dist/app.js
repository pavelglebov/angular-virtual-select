/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseFilter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ "./node_modules/lodash/filter.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ "./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ "./node_modules/ui-select/dist/select.js":
/*!***********************************************!*\
  !*** ./node_modules/ui-select/dist/select.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * ui-select
 * http://github.com/angular-ui/ui-select
 * Version: 0.19.8 - 2017-04-18T05:43:43.673Z
 * License: MIT
 */


(function () { 
"use strict";
var KEY = {
    TAB: 9,
    ENTER: 13,
    ESC: 27,
    SPACE: 32,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    HOME: 36,
    END: 35,
    BACKSPACE: 8,
    DELETE: 46,
    COMMAND: 91,

    MAP: { 91 : "COMMAND", 8 : "BACKSPACE" , 9 : "TAB" , 13 : "ENTER" , 16 : "SHIFT" , 17 : "CTRL" , 18 : "ALT" , 19 : "PAUSEBREAK" , 20 : "CAPSLOCK" , 27 : "ESC" , 32 : "SPACE" , 33 : "PAGE_UP", 34 : "PAGE_DOWN" , 35 : "END" , 36 : "HOME" , 37 : "LEFT" , 38 : "UP" , 39 : "RIGHT" , 40 : "DOWN" , 43 : "+" , 44 : "PRINTSCREEN" , 45 : "INSERT" , 46 : "DELETE", 48 : "0" , 49 : "1" , 50 : "2" , 51 : "3" , 52 : "4" , 53 : "5" , 54 : "6" , 55 : "7" , 56 : "8" , 57 : "9" , 59 : ";", 61 : "=" , 65 : "A" , 66 : "B" , 67 : "C" , 68 : "D" , 69 : "E" , 70 : "F" , 71 : "G" , 72 : "H" , 73 : "I" , 74 : "J" , 75 : "K" , 76 : "L", 77 : "M" , 78 : "N" , 79 : "O" , 80 : "P" , 81 : "Q" , 82 : "R" , 83 : "S" , 84 : "T" , 85 : "U" , 86 : "V" , 87 : "W" , 88 : "X" , 89 : "Y" , 90 : "Z", 96 : "0" , 97 : "1" , 98 : "2" , 99 : "3" , 100 : "4" , 101 : "5" , 102 : "6" , 103 : "7" , 104 : "8" , 105 : "9", 106 : "*" , 107 : "+" , 109 : "-" , 110 : "." , 111 : "/", 112 : "F1" , 113 : "F2" , 114 : "F3" , 115 : "F4" , 116 : "F5" , 117 : "F6" , 118 : "F7" , 119 : "F8" , 120 : "F9" , 121 : "F10" , 122 : "F11" , 123 : "F12", 144 : "NUMLOCK" , 145 : "SCROLLLOCK" , 186 : ";" , 187 : "=" , 188 : "," , 189 : "-" , 190 : "." , 191 : "/" , 192 : "`" , 219 : "[" , 220 : "\\" , 221 : "]" , 222 : "'"
    },

    isControl: function (e) {
        var k = e.which;
        switch (k) {
        case KEY.COMMAND:
        case KEY.SHIFT:
        case KEY.CTRL:
        case KEY.ALT:
            return true;
        }

        if (e.metaKey || e.ctrlKey || e.altKey) return true;

        return false;
    },
    isFunctionKey: function (k) {
        k = k.which ? k.which : k;
        return k >= 112 && k <= 123;
    },
    isVerticalMovement: function (k){
      return ~[KEY.UP, KEY.DOWN].indexOf(k);
    },
    isHorizontalMovement: function (k){
      return ~[KEY.LEFT,KEY.RIGHT,KEY.BACKSPACE,KEY.DELETE].indexOf(k);
    },
    toSeparator: function (k) {
      var sep = {ENTER:"\n",TAB:"\t",SPACE:" "}[k];
      if (sep) return sep;
      // return undefined for special keys other than enter, tab or space.
      // no way to use them to cut strings.
      return KEY[k] ? undefined : k;
    }
  };

function isNil(value) {
  return angular.isUndefined(value) || value === null;
}

/**
 * Add querySelectorAll() to jqLite.
 *
 * jqLite find() is limited to lookups by tag name.
 * TODO This will change with future versions of AngularJS, to be removed when this happens
 *
 * See jqLite.find - why not use querySelectorAll? https://github.com/angular/angular.js/issues/3586
 * See feat(jqLite): use querySelectorAll instead of getElementsByTagName in jqLite.find https://github.com/angular/angular.js/pull/3598
 */
if (angular.element.prototype.querySelectorAll === undefined) {
  angular.element.prototype.querySelectorAll = function(selector) {
    return angular.element(this[0].querySelectorAll(selector));
  };
}

/**
 * Add closest() to jqLite.
 */
if (angular.element.prototype.closest === undefined) {
  angular.element.prototype.closest = function( selector) {
    var elem = this[0];
    var matchesSelector = elem.matches || elem.webkitMatchesSelector || elem.mozMatchesSelector || elem.msMatchesSelector;

    while (elem) {
      if (matchesSelector.bind(elem)(selector)) {
        return elem;
      } else {
        elem = elem.parentElement;
      }
    }
    return false;
  };
}

var latestId = 0;

var uis = angular.module('ui.select', [])

.constant('uiSelectConfig', {
  theme: 'bootstrap',
  searchEnabled: true,
  sortable: false,
  placeholder: '', // Empty by default, like HTML tag <select>
  refreshDelay: 1000, // In milliseconds
  closeOnSelect: true,
  skipFocusser: false,
  dropdownPosition: 'auto',
  removeSelected: true,
  resetSearchInput: true,
  generateId: function() {
    return latestId++;
  },
  appendToBody: false,
  spinnerEnabled: false,
  spinnerClass: 'glyphicon glyphicon-refresh ui-select-spin',
  backspaceReset: true
})

// See Rename minErr and make it accessible from outside https://github.com/angular/angular.js/issues/6913
.service('uiSelectMinErr', function() {
  var minErr = angular.$$minErr('ui.select');
  return function() {
    var error = minErr.apply(this, arguments);
    var message = error.message.replace(new RegExp('\nhttp://errors.angularjs.org/.*'), '');
    return new Error(message);
  };
})

// Recreates old behavior of ng-transclude. Used internally.
.directive('uisTranscludeAppend', function () {
  return {
    link: function (scope, element, attrs, ctrl, transclude) {
        transclude(scope, function (clone) {
          element.append(clone);
        });
      }
    };
})

/**
 * Highlights text that matches $select.search.
 *
 * Taken from AngularUI Bootstrap Typeahead
 * See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L340
 */
.filter('highlight', function() {
  function escapeRegexp(queryToEscape) {
    return ('' + queryToEscape).replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
  }

  return function(matchItem, query) {
    return query && matchItem ? ('' + matchItem).replace(new RegExp(escapeRegexp(query), 'gi'), '<span class="ui-select-highlight">$&</span>') : matchItem;
  };
})

/**
 * A read-only equivalent of jQuery's offset function: http://api.jquery.com/offset/
 *
 * Taken from AngularUI Bootstrap Position:
 * See https://github.com/angular-ui/bootstrap/blob/master/src/position/position.js#L70
 */
.factory('uisOffset',
  ['$document', '$window',
  function ($document, $window) {

  return function(element) {
    var boundingClientRect = element[0].getBoundingClientRect();
    return {
      width: boundingClientRect.width || element.prop('offsetWidth'),
      height: boundingClientRect.height || element.prop('offsetHeight'),
      top: boundingClientRect.top + ($window.pageYOffset || $document[0].documentElement.scrollTop),
      left: boundingClientRect.left + ($window.pageXOffset || $document[0].documentElement.scrollLeft)
    };
  };
}]);

uis.directive('uiSelectChoices',
  ['uiSelectConfig', 'uisRepeatParser', 'uiSelectMinErr', '$compile', '$window',
  function(uiSelectConfig, RepeatParser, uiSelectMinErr, $compile, $window) {

  return {
    restrict: 'EA',
    require: '^uiSelect',
    replace: true,
    transclude: true,
    templateUrl: function(tElement) {
      // Needed so the uiSelect can detect the transcluded content
      tElement.addClass('ui-select-choices');

      // Gets theme attribute from parent (ui-select)
      var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
      return theme + '/choices.tpl.html';
    },

    compile: function(tElement, tAttrs) {

      if (!tAttrs.repeat) throw uiSelectMinErr('repeat', "Expected 'repeat' expression.");

      // var repeat = RepeatParser.parse(attrs.repeat);
      var groupByExp = tAttrs.groupBy;
      var groupFilterExp = tAttrs.groupFilter;

      if (groupByExp) {
        var groups = tElement.querySelectorAll('.ui-select-choices-group');
        if (groups.length !== 1) throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-group but got '{0}'.", groups.length);
        groups.attr('ng-repeat', RepeatParser.getGroupNgRepeatExpression());
      }

      var parserResult = RepeatParser.parse(tAttrs.repeat);

      var choices = tElement.querySelectorAll('.ui-select-choices-row');
      if (choices.length !== 1) {
        throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row but got '{0}'.", choices.length);
      }

      choices.attr('ng-repeat', parserResult.repeatExpression(groupByExp))
             .attr('ng-if', '$select.open'); //Prevent unnecessary watches when dropdown is closed


      var rowsInner = tElement.querySelectorAll('.ui-select-choices-row-inner');
      if (rowsInner.length !== 1) {
        throw uiSelectMinErr('rows', "Expected 1 .ui-select-choices-row-inner but got '{0}'.", rowsInner.length);
      }
      rowsInner.attr('uis-transclude-append', ''); //Adding uisTranscludeAppend directive to row element after choices element has ngRepeat

      // If IE8 then need to target rowsInner to apply the ng-click attr as choices will not capture the event.
      var clickTarget = $window.document.addEventListener ? choices : rowsInner;
      clickTarget.attr('ng-click', '$select.select(' + parserResult.itemName + ',$select.skipFocusser,$event)');

      return function link(scope, element, attrs, $select) {


        $select.parseRepeatAttr(attrs.repeat, groupByExp, groupFilterExp); //Result ready at $select.parserResult
        $select.disableChoiceExpression = attrs.uiDisableChoice;
        $select.onHighlightCallback = attrs.onHighlight;
        $select.minimumInputLength = parseInt(attrs.minimumInputLength) || 0;
        $select.dropdownPosition = attrs.position ? attrs.position.toLowerCase() : uiSelectConfig.dropdownPosition;

        scope.$watch('$select.search', function(newValue) {
          if(newValue && !$select.open && $select.multiple) $select.activate(false, true);
          $select.activeIndex = $select.tagging.isActivated ? -1 : 0;
          if (!attrs.minimumInputLength || $select.search.length >= attrs.minimumInputLength) {
            $select.refresh(attrs.refresh);
          } else {
            $select.items = [];
          }
        });

        attrs.$observe('refreshDelay', function() {
          // $eval() is needed otherwise we get a string instead of a number
          var refreshDelay = scope.$eval(attrs.refreshDelay);
          $select.refreshDelay = refreshDelay !== undefined ? refreshDelay : uiSelectConfig.refreshDelay;
        });

        scope.$watch('$select.open', function(open) {
          if (open) {
            tElement.attr('role', 'listbox');
            $select.refresh(attrs.refresh);
          } else {
            element.removeAttr('role');
          }
        });
      };
    }
  };
}]);

/**
 * Contains ui-select "intelligence".
 *
 * The goal is to limit dependency on the DOM whenever possible and
 * put as much logic in the controller (instead of the link functions) as possible so it can be easily tested.
 */
uis.controller('uiSelectCtrl',
  ['$scope', '$element', '$timeout', '$filter', '$$uisDebounce', 'uisRepeatParser', 'uiSelectMinErr', 'uiSelectConfig', '$parse', '$injector', '$window',
  function($scope, $element, $timeout, $filter, $$uisDebounce, RepeatParser, uiSelectMinErr, uiSelectConfig, $parse, $injector, $window) {

  var ctrl = this;

  var EMPTY_SEARCH = '';

  ctrl.placeholder = uiSelectConfig.placeholder;
  ctrl.searchEnabled = uiSelectConfig.searchEnabled;
  ctrl.sortable = uiSelectConfig.sortable;
  ctrl.refreshDelay = uiSelectConfig.refreshDelay;
  ctrl.paste = uiSelectConfig.paste;
  ctrl.resetSearchInput = uiSelectConfig.resetSearchInput;
  ctrl.refreshing = false;
  ctrl.spinnerEnabled = uiSelectConfig.spinnerEnabled;
  ctrl.spinnerClass = uiSelectConfig.spinnerClass;
  ctrl.removeSelected = uiSelectConfig.removeSelected; //If selected item(s) should be removed from dropdown list
  ctrl.closeOnSelect = true; //Initialized inside uiSelect directive link function
  ctrl.skipFocusser = false; //Set to true to avoid returning focus to ctrl when item is selected
  ctrl.search = EMPTY_SEARCH;

  ctrl.activeIndex = 0; //Dropdown of choices
  ctrl.items = []; //All available choices

  ctrl.open = false;
  ctrl.focus = false;
  ctrl.disabled = false;
  ctrl.selected = undefined;

  ctrl.dropdownPosition = 'auto';

  ctrl.focusser = undefined; //Reference to input element used to handle focus events
  ctrl.multiple = undefined; // Initialized inside uiSelect directive link function
  ctrl.disableChoiceExpression = undefined; // Initialized inside uiSelectChoices directive link function
  ctrl.tagging = {isActivated: false, fct: undefined};
  ctrl.taggingTokens = {isActivated: false, tokens: undefined};
  ctrl.lockChoiceExpression = undefined; // Initialized inside uiSelectMatch directive link function
  ctrl.clickTriggeredSelect = false;
  ctrl.$filter = $filter;
  ctrl.$element = $element;

  // Use $injector to check for $animate and store a reference to it
  ctrl.$animate = (function () {
    try {
      return $injector.get('$animate');
    } catch (err) {
      // $animate does not exist
      return null;
    }
  })();

  ctrl.searchInput = $element.querySelectorAll('input.ui-select-search');
  if (ctrl.searchInput.length !== 1) {
    throw uiSelectMinErr('searchInput', "Expected 1 input.ui-select-search but got '{0}'.", ctrl.searchInput.length);
  }

  ctrl.isEmpty = function() {
    return isNil(ctrl.selected) || ctrl.selected === '' || (ctrl.multiple && ctrl.selected.length === 0);
  };

  function _findIndex(collection, predicate, thisArg){
    if (collection.findIndex){
      return collection.findIndex(predicate, thisArg);
    } else {
      var list = Object(collection);
      var length = list.length >>> 0;
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return i;
        }
      }
      return -1;
    }
  }

  // Most of the time the user does not want to empty the search input when in typeahead mode
  function _resetSearchInput() {
    if (ctrl.resetSearchInput) {
      ctrl.search = EMPTY_SEARCH;
      //reset activeIndex
      if (ctrl.selected && ctrl.items.length && !ctrl.multiple) {
        ctrl.activeIndex = _findIndex(ctrl.items, function(item){
          return angular.equals(this, item);
        }, ctrl.selected);
      }
    }
  }

    function _groupsFilter(groups, groupNames) {
      var i, j, result = [];
      for(i = 0; i < groupNames.length ;i++){
        for(j = 0; j < groups.length ;j++){
          if(groups[j].name == [groupNames[i]]){
            result.push(groups[j]);
          }
        }
      }
      return result;
    }

  // When the user clicks on ui-select, displays the dropdown list
  ctrl.activate = function(initSearchValue, avoidReset) {
    if (!ctrl.disabled  && !ctrl.open) {
      if(!avoidReset) _resetSearchInput();

      $scope.$broadcast('uis:activate');
      ctrl.open = true;
      ctrl.activeIndex = ctrl.activeIndex >= ctrl.items.length ? 0 : ctrl.activeIndex;
      // ensure that the index is set to zero for tagging variants
      // that where first option is auto-selected
      if ( ctrl.activeIndex === -1 && ctrl.taggingLabel !== false ) {
        ctrl.activeIndex = 0;
      }

      var container = $element.querySelectorAll('.ui-select-choices-content');
      var searchInput = $element.querySelectorAll('.ui-select-search');
      if (ctrl.$animate && ctrl.$animate.on && ctrl.$animate.enabled(container[0])) {
        var animateHandler = function(elem, phase) {
          if (phase === 'start' && ctrl.items.length === 0) {
            // Only focus input after the animation has finished
            ctrl.$animate.off('removeClass', searchInput[0], animateHandler);
            $timeout(function () {
              ctrl.focusSearchInput(initSearchValue);
            });
          } else if (phase === 'close') {
            // Only focus input after the animation has finished
            ctrl.$animate.off('enter', container[0], animateHandler);
            $timeout(function () {
              ctrl.focusSearchInput(initSearchValue);
            });
          }
        };

        if (ctrl.items.length > 0) {
          ctrl.$animate.on('enter', container[0], animateHandler);
        } else {
          ctrl.$animate.on('removeClass', searchInput[0], animateHandler);
        }
      } else {
        $timeout(function () {
          ctrl.focusSearchInput(initSearchValue);
          if(!ctrl.tagging.isActivated && ctrl.items.length > 1) {
            _ensureHighlightVisible();
          }
        });
      }
    }
    else if (ctrl.open && !ctrl.searchEnabled) {
      // Close the selection if we don't have search enabled, and we click on the select again
      ctrl.close();
    }
  };

  ctrl.focusSearchInput = function (initSearchValue) {
    ctrl.search = initSearchValue || ctrl.search;
    ctrl.searchInput[0].focus();
  };

  ctrl.findGroupByName = function(name) {
    return ctrl.groups && ctrl.groups.filter(function(group) {
      return group.name === name;
    })[0];
  };

  ctrl.parseRepeatAttr = function(repeatAttr, groupByExp, groupFilterExp) {
    function updateGroups(items) {
      var groupFn = $scope.$eval(groupByExp);
      ctrl.groups = [];
      angular.forEach(items, function(item) {
        var groupName = angular.isFunction(groupFn) ? groupFn(item) : item[groupFn];
        var group = ctrl.findGroupByName(groupName);
        if(group) {
          group.items.push(item);
        }
        else {
          ctrl.groups.push({name: groupName, items: [item]});
        }
      });
      if(groupFilterExp){
        var groupFilterFn = $scope.$eval(groupFilterExp);
        if( angular.isFunction(groupFilterFn)){
          ctrl.groups = groupFilterFn(ctrl.groups);
        } else if(angular.isArray(groupFilterFn)){
          ctrl.groups = _groupsFilter(ctrl.groups, groupFilterFn);
        }
      }
      ctrl.items = [];
      ctrl.groups.forEach(function(group) {
        ctrl.items = ctrl.items.concat(group.items);
      });
    }

    function setPlainItems(items) {
      ctrl.items = items || [];
    }

    ctrl.setItemsFn = groupByExp ? updateGroups : setPlainItems;

    ctrl.parserResult = RepeatParser.parse(repeatAttr);

    ctrl.isGrouped = !!groupByExp;
    ctrl.itemProperty = ctrl.parserResult.itemName;

    //If collection is an Object, convert it to Array

    var originalSource = ctrl.parserResult.source;

    //When an object is used as source, we better create an array and use it as 'source'
    var createArrayFromObject = function(){
      var origSrc = originalSource($scope);
      $scope.$uisSource = Object.keys(origSrc).map(function(v){
        var result = {};
        result[ctrl.parserResult.keyName] = v;
        result.value = origSrc[v];
        return result;
      });
    };

    if (ctrl.parserResult.keyName){ // Check for (key,value) syntax
      createArrayFromObject();
      ctrl.parserResult.source = $parse('$uisSource' + ctrl.parserResult.filters);
      $scope.$watch(originalSource, function(newVal, oldVal){
        if (newVal !== oldVal) createArrayFromObject();
      }, true);
    }

    ctrl.refreshItems = function (data){
      data = data || ctrl.parserResult.source($scope);
      var selectedItems = ctrl.selected;
      //TODO should implement for single mode removeSelected
      if (ctrl.isEmpty() || (angular.isArray(selectedItems) && !selectedItems.length) || !ctrl.multiple || !ctrl.removeSelected) {
        ctrl.setItemsFn(data);
      }else{
        if ( data !== undefined && data !== null ) {
          var filteredItems = data.filter(function(i) {
            return angular.isArray(selectedItems) ? selectedItems.every(function(selectedItem) {
              return !angular.equals(i, selectedItem);
            }) : !angular.equals(i, selectedItems);
          });
          ctrl.setItemsFn(filteredItems);
        }
      }
      if (ctrl.dropdownPosition === 'auto' || ctrl.dropdownPosition === 'up'){
        $scope.calculateDropdownPos();
      }
      $scope.$broadcast('uis:refresh');
    };

    // See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L259
    $scope.$watchCollection(ctrl.parserResult.source, function(items) {
      if (items === undefined || items === null) {
        // If the user specifies undefined or null => reset the collection
        // Special case: items can be undefined if the user did not initialized the collection on the scope
        // i.e $scope.addresses = [] is missing
        ctrl.items = [];
      } else {
        if (!angular.isArray(items)) {
          throw uiSelectMinErr('items', "Expected an array but got '{0}'.", items);
        } else {
          //Remove already selected items (ex: while searching)
          //TODO Should add a test
          ctrl.refreshItems(items);

          //update the view value with fresh data from items, if there is a valid model value
          if(angular.isDefined(ctrl.ngModel.$modelValue)) {
            ctrl.ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
          }
        }
      }
    });

  };

  var _refreshDelayPromise;

  /**
   * Typeahead mode: lets the user refresh the collection using his own function.
   *
   * See Expose $select.search for external / remote filtering https://github.com/angular-ui/ui-select/pull/31
   */
  ctrl.refresh = function(refreshAttr) {
    if (refreshAttr !== undefined) {
      // Debounce
      // See https://github.com/angular-ui/bootstrap/blob/0.10.0/src/typeahead/typeahead.js#L155
      // FYI AngularStrap typeahead does not have debouncing: https://github.com/mgcrea/angular-strap/blob/v2.0.0-rc.4/src/typeahead/typeahead.js#L177
      if (_refreshDelayPromise) {
        $timeout.cancel(_refreshDelayPromise);
      }
      _refreshDelayPromise = $timeout(function() {
        if ($scope.$select.search.length >= $scope.$select.minimumInputLength) {
          var refreshPromise = $scope.$eval(refreshAttr);
          if (refreshPromise && angular.isFunction(refreshPromise.then) && !ctrl.refreshing) {
            ctrl.refreshing = true;
            refreshPromise.finally(function() {
              ctrl.refreshing = false;
            });
          }
        }
      }, ctrl.refreshDelay);
    }
  };

  ctrl.isActive = function(itemScope) {
    if ( !ctrl.open ) {
      return false;
    }
    var itemIndex = ctrl.items.indexOf(itemScope[ctrl.itemProperty]);
    var isActive =  itemIndex == ctrl.activeIndex;

    if ( !isActive || itemIndex < 0 ) {
      return false;
    }

    if (isActive && !angular.isUndefined(ctrl.onHighlightCallback)) {
      itemScope.$eval(ctrl.onHighlightCallback);
    }

    return isActive;
  };

  var _isItemSelected = function (item) {
    return (ctrl.selected && angular.isArray(ctrl.selected) &&
        ctrl.selected.filter(function (selection) { return angular.equals(selection, item); }).length > 0);
  };

  var disabledItems = [];

  function _updateItemDisabled(item, isDisabled) {
    var disabledItemIndex = disabledItems.indexOf(item);
    if (isDisabled && disabledItemIndex === -1) {
      disabledItems.push(item);
    }

    if (!isDisabled && disabledItemIndex > -1) {
      disabledItems.splice(disabledItemIndex, 1);
    }
  }

  function _isItemDisabled(item) {
    return disabledItems.indexOf(item) > -1;
  }

  ctrl.isDisabled = function(itemScope) {

    if (!ctrl.open) return;

    var item = itemScope[ctrl.itemProperty];
    var itemIndex = ctrl.items.indexOf(item);
    var isDisabled = false;

    if (itemIndex >= 0 && (angular.isDefined(ctrl.disableChoiceExpression) || ctrl.multiple)) {

      if (item.isTag) return false;

      if (ctrl.multiple) {
        isDisabled = _isItemSelected(item);
      }

      if (!isDisabled && angular.isDefined(ctrl.disableChoiceExpression)) {
        isDisabled = !!(itemScope.$eval(ctrl.disableChoiceExpression));
      }

      _updateItemDisabled(item, isDisabled);
    }

    return isDisabled;
  };


  // When the user selects an item with ENTER or clicks the dropdown
  ctrl.select = function(item, skipFocusser, $event) {
    if (isNil(item) || !_isItemDisabled(item)) {

      if ( ! ctrl.items && ! ctrl.search && ! ctrl.tagging.isActivated) return;

      if (!item || !_isItemDisabled(item)) {
        // if click is made on existing item, prevent from tagging, ctrl.search does not matter
        ctrl.clickTriggeredSelect = false;
        if($event && ($event.type === 'click' || $event.type === 'touchend') && item)
          ctrl.clickTriggeredSelect = true;

        if(ctrl.tagging.isActivated && ctrl.clickTriggeredSelect === false) {
          // if taggingLabel is disabled and item is undefined we pull from ctrl.search
          if ( ctrl.taggingLabel === false ) {
            if ( ctrl.activeIndex < 0 ) {
              if (item === undefined) {
                item = ctrl.tagging.fct !== undefined ? ctrl.tagging.fct(ctrl.search) : ctrl.search;
              }
              if (!item || angular.equals( ctrl.items[0], item ) ) {
                return;
              }
            } else {
              // keyboard nav happened first, user selected from dropdown
              item = ctrl.items[ctrl.activeIndex];
            }
          } else {
            // tagging always operates at index zero, taggingLabel === false pushes
            // the ctrl.search value without having it injected
            if ( ctrl.activeIndex === 0 ) {
              // ctrl.tagging pushes items to ctrl.items, so we only have empty val
              // for `item` if it is a detected duplicate
              if ( item === undefined ) return;

              // create new item on the fly if we don't already have one;
              // use tagging function if we have one
              if ( ctrl.tagging.fct !== undefined && typeof item === 'string' ) {
                item = ctrl.tagging.fct(item);
                if (!item) return;
              // if item type is 'string', apply the tagging label
              } else if ( typeof item === 'string' ) {
                // trim the trailing space
                item = item.replace(ctrl.taggingLabel,'').trim();
              }
            }
          }
          // search ctrl.selected for dupes potentially caused by tagging and return early if found
          if (_isItemSelected(item)) {
            ctrl.close(skipFocusser);
            return;
          }
        }
        _resetSearchInput();
        $scope.$broadcast('uis:select', item);

        if (ctrl.closeOnSelect) {
          ctrl.close(skipFocusser);
        }
      }
    }
  };

  // Closes the dropdown
  ctrl.close = function(skipFocusser) {
    if (!ctrl.open) return;
    if (ctrl.ngModel && ctrl.ngModel.$setTouched) ctrl.ngModel.$setTouched();
    ctrl.open = false;
    _resetSearchInput();
    $scope.$broadcast('uis:close', skipFocusser);

  };

  ctrl.setFocus = function(){
    if (!ctrl.focus) ctrl.focusInput[0].focus();
  };

  ctrl.clear = function($event) {
    ctrl.select(null);
    $event.stopPropagation();
    $timeout(function() {
      ctrl.focusser[0].focus();
    }, 0, false);
  };

  // Toggle dropdown
  ctrl.toggle = function(e) {
    if (ctrl.open) {
      ctrl.close();
      e.preventDefault();
      e.stopPropagation();
    } else {
      ctrl.activate();
    }
  };

  // Set default function for locked choices - avoids unnecessary
  // logic if functionality is not being used
  ctrl.isLocked = function () {
    return false;
  };

  $scope.$watch(function () {
    return angular.isDefined(ctrl.lockChoiceExpression) && ctrl.lockChoiceExpression !== "";
  }, _initaliseLockedChoices);

  function _initaliseLockedChoices(doInitalise) {
    if(!doInitalise) return;

    var lockedItems = [];

    function _updateItemLocked(item, isLocked) {
      var lockedItemIndex = lockedItems.indexOf(item);
      if (isLocked && lockedItemIndex === -1) {
        lockedItems.push(item);
        }

      if (!isLocked && lockedItemIndex > -1) {
        lockedItems.splice(lockedItemIndex, 1);
      }
    }

    function _isItemlocked(item) {
      return lockedItems.indexOf(item) > -1;
    }

    ctrl.isLocked = function (itemScope, itemIndex) {
      var isLocked = false,
          item = ctrl.selected[itemIndex];

      if(item) {
        if (itemScope) {
          isLocked = !!(itemScope.$eval(ctrl.lockChoiceExpression));
          _updateItemLocked(item, isLocked);
        } else {
          isLocked = _isItemlocked(item);
        }
      }

      return isLocked;
    };
  }


  var sizeWatch = null;
  var updaterScheduled = false;
  ctrl.sizeSearchInput = function() {

    var input = ctrl.searchInput[0],
        container = ctrl.$element[0],
        calculateContainerWidth = function() {
          // Return the container width only if the search input is visible
          return container.clientWidth * !!input.offsetParent;
        },
        updateIfVisible = function(containerWidth) {
          if (containerWidth === 0) {
            return false;
          }
          var inputWidth = containerWidth - input.offsetLeft;
          if (inputWidth < 50) inputWidth = containerWidth;
          ctrl.searchInput.css('width', inputWidth+'px');
          return true;
        };

    ctrl.searchInput.css('width', '10px');
    $timeout(function() { //Give tags time to render correctly
      if (sizeWatch === null && !updateIfVisible(calculateContainerWidth())) {
        sizeWatch = $scope.$watch(function() {
          if (!updaterScheduled) {
            updaterScheduled = true;
            $scope.$$postDigest(function() {
              updaterScheduled = false;
              if (updateIfVisible(calculateContainerWidth())) {
                sizeWatch();
                sizeWatch = null;
              }
            });
          }
        }, angular.noop);
      }
    });
  };

  function _handleDropDownSelection(key) {
    var processed = true;
    switch (key) {
      case KEY.DOWN:
        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        else if (ctrl.activeIndex < ctrl.items.length - 1) {
          var idx = ++ctrl.activeIndex;
          while(_isItemDisabled(ctrl.items[idx]) && idx < ctrl.items.length) {
            ctrl.activeIndex = ++idx;
          }
        }
        break;
      case KEY.UP:
        var minActiveIndex = (ctrl.search.length === 0 && ctrl.tagging.isActivated) ? -1 : 0;
        if (!ctrl.open && ctrl.multiple) ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        else if (ctrl.activeIndex > minActiveIndex) {
          var idxmin = --ctrl.activeIndex;
          while(_isItemDisabled(ctrl.items[idxmin]) && idxmin > minActiveIndex) {
            ctrl.activeIndex = --idxmin;
          }
        }
        break;
      case KEY.TAB:
        if (!ctrl.multiple || ctrl.open) ctrl.select(ctrl.items[ctrl.activeIndex], true);
        break;
      case KEY.ENTER:
        if(ctrl.open && (ctrl.tagging.isActivated || ctrl.activeIndex >= 0)){
          ctrl.select(ctrl.items[ctrl.activeIndex], ctrl.skipFocusser); // Make sure at least one dropdown item is highlighted before adding if not in tagging mode
        } else {
          ctrl.activate(false, true); //In case its the search input in 'multiple' mode
        }
        break;
      case KEY.ESC:
        ctrl.close();
        break;
      default:
        processed = false;
    }
    return processed;
  }

  // Bind to keyboard shortcuts
  ctrl.searchInput.on('keydown', function(e) {

    var key = e.which;

    if (~[KEY.ENTER,KEY.ESC].indexOf(key)){
      e.preventDefault();
      e.stopPropagation();
    }

    $scope.$apply(function() {

      var tagged = false;

      if (ctrl.items.length > 0 || ctrl.tagging.isActivated) {
        if(!_handleDropDownSelection(key) && !ctrl.searchEnabled) {
          e.preventDefault();
          e.stopPropagation();
        }
        if ( ctrl.taggingTokens.isActivated ) {
          for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {
            if ( ctrl.taggingTokens.tokens[i] === KEY.MAP[e.keyCode] ) {
              // make sure there is a new value to push via tagging
              if ( ctrl.search.length > 0 ) {
                tagged = true;
              }
            }
          }
          if ( tagged ) {
            $timeout(function() {
              ctrl.searchInput.triggerHandler('tagged');
              var newItem = ctrl.search.replace(KEY.MAP[e.keyCode],'').trim();
              if ( ctrl.tagging.fct ) {
                newItem = ctrl.tagging.fct( newItem );
              }
              if (newItem) ctrl.select(newItem, true);
            });
          }
        }
      }

    });

    if(KEY.isVerticalMovement(key) && ctrl.items.length > 0){
      _ensureHighlightVisible();
    }

    if (key === KEY.ENTER || key === KEY.ESC) {
      e.preventDefault();
      e.stopPropagation();
    }

  });

  ctrl.searchInput.on('paste', function (e) {
    var data;

    if (window.clipboardData && window.clipboardData.getData) { // IE
      data = window.clipboardData.getData('Text');
    } else {
      data = (e.originalEvent || e).clipboardData.getData('text/plain');
    }

    // Prepend the current input field text to the paste buffer.
    data = ctrl.search + data;

    if (data && data.length > 0) {
      // If tagging try to split by tokens and add items
      if (ctrl.taggingTokens.isActivated) {
        var items = [];
        for (var i = 0; i < ctrl.taggingTokens.tokens.length; i++) {  // split by first token that is contained in data
          var separator = KEY.toSeparator(ctrl.taggingTokens.tokens[i]) || ctrl.taggingTokens.tokens[i];
          if (data.indexOf(separator) > -1) {
            items = data.split(separator);
            break;  // only split by one token
          }
        }
        if (items.length === 0) {
          items = [data];
        }
        var oldsearch = ctrl.search;
        angular.forEach(items, function (item) {
          var newItem = ctrl.tagging.fct ? ctrl.tagging.fct(item) : item;
          if (newItem) {
            ctrl.select(newItem, true);
          }
        });
        ctrl.search = oldsearch || EMPTY_SEARCH;
        e.preventDefault();
        e.stopPropagation();
      } else if (ctrl.paste) {
        ctrl.paste(data);
        ctrl.search = EMPTY_SEARCH;
        e.preventDefault();
        e.stopPropagation();
      }
    }
  });

  ctrl.searchInput.on('tagged', function() {
    $timeout(function() {
      _resetSearchInput();
    });
  });

  // See https://github.com/ivaynberg/select2/blob/3.4.6/select2.js#L1431
  function _ensureHighlightVisible() {
    var container = $element.querySelectorAll('.ui-select-choices-content');
    var choices = container.querySelectorAll('.ui-select-choices-row');
    if (choices.length < 1) {
      throw uiSelectMinErr('choices', "Expected multiple .ui-select-choices-row but got '{0}'.", choices.length);
    }

    if (ctrl.activeIndex < 0) {
      return;
    }

    var highlighted = choices[ctrl.activeIndex];
    var posY = highlighted.offsetTop + highlighted.clientHeight - container[0].scrollTop;
    var height = container[0].offsetHeight;

    if (posY > height) {
      container[0].scrollTop += posY - height;
    } else if (posY < highlighted.clientHeight) {
      if (ctrl.isGrouped && ctrl.activeIndex === 0)
        container[0].scrollTop = 0; //To make group header visible when going all the way up
      else
        container[0].scrollTop -= highlighted.clientHeight - posY;
    }
  }

  var onResize = $$uisDebounce(function() {
    ctrl.sizeSearchInput();
  }, 50);

  angular.element($window).bind('resize', onResize);

  $scope.$on('$destroy', function() {
    ctrl.searchInput.off('keyup keydown tagged blur paste');
    angular.element($window).off('resize', onResize);
  });

  $scope.$watch('$select.activeIndex', function(activeIndex) {
    if (activeIndex)
      $element.find('input').attr(
        'aria-activedescendant',
        'ui-select-choices-row-' + ctrl.generatedId + '-' + activeIndex);
  });

  $scope.$watch('$select.open', function(open) {
    if (!open)
      $element.find('input').removeAttr('aria-activedescendant');
  });
}]);

uis.directive('uiSelect',
  ['$document', 'uiSelectConfig', 'uiSelectMinErr', 'uisOffset', '$compile', '$parse', '$timeout',
  function($document, uiSelectConfig, uiSelectMinErr, uisOffset, $compile, $parse, $timeout) {

  return {
    restrict: 'EA',
    templateUrl: function(tElement, tAttrs) {
      var theme = tAttrs.theme || uiSelectConfig.theme;
      return theme + (angular.isDefined(tAttrs.multiple) ? '/select-multiple.tpl.html' : '/select.tpl.html');
    },
    replace: true,
    transclude: true,
    require: ['uiSelect', '^ngModel'],
    scope: true,

    controller: 'uiSelectCtrl',
    controllerAs: '$select',
    compile: function(tElement, tAttrs) {

      // Allow setting ngClass on uiSelect
      var match = /{(.*)}\s*{(.*)}/.exec(tAttrs.ngClass);
      if(match) {
        var combined = '{'+ match[1] +', '+ match[2] +'}';
        tAttrs.ngClass = combined;
        tElement.attr('ng-class', combined);
      }

      //Multiple or Single depending if multiple attribute presence
      if (angular.isDefined(tAttrs.multiple))
        tElement.append('<ui-select-multiple/>').removeAttr('multiple');
      else
        tElement.append('<ui-select-single/>');

      if (tAttrs.inputId)
        tElement.querySelectorAll('input.ui-select-search')[0].id = tAttrs.inputId;

      return function(scope, element, attrs, ctrls, transcludeFn) {

        var $select = ctrls[0];
        var ngModel = ctrls[1];

        $select.generatedId = uiSelectConfig.generateId();
        $select.baseTitle = attrs.title || 'Select box';
        $select.focusserTitle = $select.baseTitle + ' focus';
        $select.focusserId = 'focusser-' + $select.generatedId;

        $select.closeOnSelect = function() {
          if (angular.isDefined(attrs.closeOnSelect)) {
            return $parse(attrs.closeOnSelect)();
          } else {
            return uiSelectConfig.closeOnSelect;
          }
        }();

        scope.$watch('skipFocusser', function() {
            var skipFocusser = scope.$eval(attrs.skipFocusser);
            $select.skipFocusser = skipFocusser !== undefined ? skipFocusser : uiSelectConfig.skipFocusser;
        });

        $select.onSelectCallback = $parse(attrs.onSelect);
        $select.onRemoveCallback = $parse(attrs.onRemove);

        //Set reference to ngModel from uiSelectCtrl
        $select.ngModel = ngModel;

        $select.choiceGrouped = function(group){
          return $select.isGrouped && group && group.name;
        };

        if(attrs.tabindex){
          attrs.$observe('tabindex', function(value) {
            $select.focusInput.attr('tabindex', value);
            element.removeAttr('tabindex');
          });
        }

        scope.$watch(function () { return scope.$eval(attrs.searchEnabled); }, function(newVal) {
          $select.searchEnabled = newVal !== undefined ? newVal : uiSelectConfig.searchEnabled;
        });

        scope.$watch('sortable', function() {
            var sortable = scope.$eval(attrs.sortable);
            $select.sortable = sortable !== undefined ? sortable : uiSelectConfig.sortable;
        });

        attrs.$observe('backspaceReset', function() {
          // $eval() is needed otherwise we get a string instead of a boolean
          var backspaceReset = scope.$eval(attrs.backspaceReset);
          $select.backspaceReset = backspaceReset !== undefined ? backspaceReset : true;
        });

        attrs.$observe('limit', function() {
          //Limit the number of selections allowed
          $select.limit = (angular.isDefined(attrs.limit)) ? parseInt(attrs.limit, 10) : undefined;
        });

        scope.$watch('removeSelected', function() {
            var removeSelected = scope.$eval(attrs.removeSelected);
            $select.removeSelected = removeSelected !== undefined ? removeSelected : uiSelectConfig.removeSelected;
        });

        attrs.$observe('disabled', function() {
          // No need to use $eval() (thanks to ng-disabled) since we already get a boolean instead of a string
          $select.disabled = attrs.disabled !== undefined ? attrs.disabled : false;
        });

        attrs.$observe('resetSearchInput', function() {
          // $eval() is needed otherwise we get a string instead of a boolean
          var resetSearchInput = scope.$eval(attrs.resetSearchInput);
          $select.resetSearchInput = resetSearchInput !== undefined ? resetSearchInput : true;
        });

        attrs.$observe('paste', function() {
          $select.paste = scope.$eval(attrs.paste);
        });

        attrs.$observe('tagging', function() {
          if(attrs.tagging !== undefined)
          {
            // $eval() is needed otherwise we get a string instead of a boolean
            var taggingEval = scope.$eval(attrs.tagging);
            $select.tagging = {isActivated: true, fct: taggingEval !== true ? taggingEval : undefined};
          }
          else
          {
            $select.tagging = {isActivated: false, fct: undefined};
          }
        });

        attrs.$observe('taggingLabel', function() {
          if(attrs.tagging !== undefined )
          {
            // check eval for FALSE, in this case, we disable the labels
            // associated with tagging
            if ( attrs.taggingLabel === 'false' ) {
              $select.taggingLabel = false;
            }
            else
            {
              $select.taggingLabel = attrs.taggingLabel !== undefined ? attrs.taggingLabel : '(new)';
            }
          }
        });

        attrs.$observe('taggingTokens', function() {
          if (attrs.tagging !== undefined) {
            var tokens = attrs.taggingTokens !== undefined ? attrs.taggingTokens.split('|') : [',','ENTER'];
            $select.taggingTokens = {isActivated: true, tokens: tokens };
          }
        });

        attrs.$observe('spinnerEnabled', function() {
          // $eval() is needed otherwise we get a string instead of a boolean
          var spinnerEnabled = scope.$eval(attrs.spinnerEnabled);
          $select.spinnerEnabled = spinnerEnabled !== undefined ? spinnerEnabled : uiSelectConfig.spinnerEnabled;
        });

        attrs.$observe('spinnerClass', function() {
          var spinnerClass = attrs.spinnerClass;
          $select.spinnerClass = spinnerClass !== undefined ? attrs.spinnerClass : uiSelectConfig.spinnerClass;
        });

        //Automatically gets focus when loaded
        if (angular.isDefined(attrs.autofocus)){
          $timeout(function(){
            $select.setFocus();
          });
        }

        //Gets focus based on scope event name (e.g. focus-on='SomeEventName')
        if (angular.isDefined(attrs.focusOn)){
          scope.$on(attrs.focusOn, function() {
              $timeout(function(){
                $select.setFocus();
              });
          });
        }

        function onDocumentClick(e) {
          if (!$select.open) return; //Skip it if dropdown is close

          var contains = false;

          if (window.jQuery) {
            // Firefox 3.6 does not support element.contains()
            // See Node.contains https://developer.mozilla.org/en-US/docs/Web/API/Node.contains
            contains = window.jQuery.contains(element[0], e.target);
          } else {
            contains = element[0].contains(e.target);
          }

          if (!contains && !$select.clickTriggeredSelect) {
            var skipFocusser;
            if (!$select.skipFocusser) {
              //Will lose focus only with certain targets
              var focusableControls = ['input','button','textarea','select'];
              var targetController = angular.element(e.target).controller('uiSelect'); //To check if target is other ui-select
              skipFocusser = targetController && targetController !== $select; //To check if target is other ui-select
              if (!skipFocusser) skipFocusser =  ~focusableControls.indexOf(e.target.tagName.toLowerCase()); //Check if target is input, button or textarea
            } else {
              skipFocusser = true;
            }
            $select.close(skipFocusser);
            scope.$digest();
          }
          $select.clickTriggeredSelect = false;
        }

        // See Click everywhere but here event http://stackoverflow.com/questions/12931369
        $document.on('click', onDocumentClick);

        scope.$on('$destroy', function() {
          $document.off('click', onDocumentClick);
        });

        // Move transcluded elements to their correct position in main template
        transcludeFn(scope, function(clone) {
          // See Transclude in AngularJS http://blog.omkarpatil.com/2012/11/transclude-in-angularjs.html

          // One day jqLite will be replaced by jQuery and we will be able to write:
          // var transcludedElement = clone.filter('.my-class')
          // instead of creating a hackish DOM element:
          var transcluded = angular.element('<div>').append(clone);

          var transcludedMatch = transcluded.querySelectorAll('.ui-select-match');
          transcludedMatch.removeAttr('ui-select-match'); //To avoid loop in case directive as attr
          transcludedMatch.removeAttr('data-ui-select-match'); // Properly handle HTML5 data-attributes
          if (transcludedMatch.length !== 1) {
            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-match but got '{0}'.", transcludedMatch.length);
          }
          element.querySelectorAll('.ui-select-match').replaceWith(transcludedMatch);

          var transcludedChoices = transcluded.querySelectorAll('.ui-select-choices');
          transcludedChoices.removeAttr('ui-select-choices'); //To avoid loop in case directive as attr
          transcludedChoices.removeAttr('data-ui-select-choices'); // Properly handle HTML5 data-attributes
          if (transcludedChoices.length !== 1) {
            throw uiSelectMinErr('transcluded', "Expected 1 .ui-select-choices but got '{0}'.", transcludedChoices.length);
          }
          element.querySelectorAll('.ui-select-choices').replaceWith(transcludedChoices);

          var transcludedNoChoice = transcluded.querySelectorAll('.ui-select-no-choice');
          transcludedNoChoice.removeAttr('ui-select-no-choice'); //To avoid loop in case directive as attr
          transcludedNoChoice.removeAttr('data-ui-select-no-choice'); // Properly handle HTML5 data-attributes
          if (transcludedNoChoice.length == 1) {
            element.querySelectorAll('.ui-select-no-choice').replaceWith(transcludedNoChoice);
          }
        });

        // Support for appending the select field to the body when its open
        var appendToBody = scope.$eval(attrs.appendToBody);
        if (appendToBody !== undefined ? appendToBody : uiSelectConfig.appendToBody) {
          scope.$watch('$select.open', function(isOpen) {
            if (isOpen) {
              positionDropdown();
            } else {
              resetDropdown();
            }
          });

          // Move the dropdown back to its original location when the scope is destroyed. Otherwise
          // it might stick around when the user routes away or the select field is otherwise removed
          scope.$on('$destroy', function() {
            resetDropdown();
          });
        }

        // Hold on to a reference to the .ui-select-container element for appendToBody support
        var placeholder = null,
            originalWidth = '';

        function positionDropdown() {
          // Remember the absolute position of the element
          var offset = uisOffset(element);

          // Clone the element into a placeholder element to take its original place in the DOM
          placeholder = angular.element('<div class="ui-select-placeholder"></div>');
          placeholder[0].style.width = offset.width + 'px';
          placeholder[0].style.height = offset.height + 'px';
          element.after(placeholder);

          // Remember the original value of the element width inline style, so it can be restored
          // when the dropdown is closed
          originalWidth = element[0].style.width;

          // Now move the actual dropdown element to the end of the body
          $document.find('body').append(element);

          element[0].style.position = 'absolute';
          element[0].style.left = offset.left + 'px';
          element[0].style.top = offset.top + 'px';
          element[0].style.width = offset.width + 'px';
        }

        function resetDropdown() {
          if (placeholder === null) {
            // The dropdown has not actually been display yet, so there's nothing to reset
            return;
          }

          // Move the dropdown element back to its original location in the DOM
          placeholder.replaceWith(element);
          placeholder = null;

          element[0].style.position = '';
          element[0].style.left = '';
          element[0].style.top = '';
          element[0].style.width = originalWidth;

          // Set focus back on to the moved element
          $select.setFocus();
        }

        // Hold on to a reference to the .ui-select-dropdown element for direction support.
        var dropdown = null,
            directionUpClassName = 'direction-up';

        // Support changing the direction of the dropdown if there isn't enough space to render it.
        scope.$watch('$select.open', function() {

          if ($select.dropdownPosition === 'auto' || $select.dropdownPosition === 'up'){
            scope.calculateDropdownPos();
          }

        });

        var setDropdownPosUp = function(offset, offsetDropdown){

          offset = offset || uisOffset(element);
          offsetDropdown = offsetDropdown || uisOffset(dropdown);

          dropdown[0].style.position = 'absolute';
          dropdown[0].style.top = (offsetDropdown.height * -1) + 'px';
          element.addClass(directionUpClassName);

        };

        var setDropdownPosDown = function(offset, offsetDropdown){

          element.removeClass(directionUpClassName);

          offset = offset || uisOffset(element);
          offsetDropdown = offsetDropdown || uisOffset(dropdown);

          dropdown[0].style.position = '';
          dropdown[0].style.top = '';

        };

        var calculateDropdownPosAfterAnimation = function() {
          // Delay positioning the dropdown until all choices have been added so its height is correct.
          $timeout(function() {
            if ($select.dropdownPosition === 'up') {
              //Go UP
              setDropdownPosUp();
            } else {
              //AUTO
              element.removeClass(directionUpClassName);

              var offset = uisOffset(element);
              var offsetDropdown = uisOffset(dropdown);

              //https://code.google.com/p/chromium/issues/detail?id=342307#c4
              var scrollTop = $document[0].documentElement.scrollTop || $document[0].body.scrollTop; //To make it cross browser (blink, webkit, IE, Firefox).

              // Determine if the direction of the dropdown needs to be changed.
              if (offset.top + offset.height + offsetDropdown.height > scrollTop + $document[0].documentElement.clientHeight) {
                //Go UP
                setDropdownPosUp(offset, offsetDropdown);
              }else{
                //Go DOWN
                setDropdownPosDown(offset, offsetDropdown);
              }
            }

            // Display the dropdown once it has been positioned.
            dropdown[0].style.opacity = 1;
          });
        };

        var opened = false;
        
        scope.calculateDropdownPos = function() {
          if ($select.open) {
            dropdown = angular.element(element).querySelectorAll('.ui-select-dropdown');

            if (dropdown.length === 0) {
              return;
            }

           // Hide the dropdown so there is no flicker until $timeout is done executing.
           if ($select.search === '' && !opened) {
              dropdown[0].style.opacity = 0;
              opened = true;
           }

            if (!uisOffset(dropdown).height && $select.$animate && $select.$animate.on && $select.$animate.enabled(dropdown)) {
              var needsCalculated = true;

              $select.$animate.on('enter', dropdown, function (elem, phase) {
                if (phase === 'close' && needsCalculated) {
                  calculateDropdownPosAfterAnimation();
                  needsCalculated = false;
                }
              });
            } else {
              calculateDropdownPosAfterAnimation();
            }
          } else {
            if (dropdown === null || dropdown.length === 0) {
              return;
            }

            // Reset the position of the dropdown.
            dropdown[0].style.opacity = 0;
            dropdown[0].style.position = '';
            dropdown[0].style.top = '';
            element.removeClass(directionUpClassName);
          }
        };
      };
    }
  };
}]);

uis.directive('uiSelectMatch', ['uiSelectConfig', function(uiSelectConfig) {
  return {
    restrict: 'EA',
    require: '^uiSelect',
    replace: true,
    transclude: true,
    templateUrl: function(tElement) {
      // Needed so the uiSelect can detect the transcluded content
      tElement.addClass('ui-select-match');

      var parent = tElement.parent();
      // Gets theme attribute from parent (ui-select)
      var theme = getAttribute(parent, 'theme') || uiSelectConfig.theme;
      var multi = angular.isDefined(getAttribute(parent, 'multiple'));

      return theme + (multi ? '/match-multiple.tpl.html' : '/match.tpl.html');      
    },
    link: function(scope, element, attrs, $select) {
      $select.lockChoiceExpression = attrs.uiLockChoice;
      attrs.$observe('placeholder', function(placeholder) {
        $select.placeholder = placeholder !== undefined ? placeholder : uiSelectConfig.placeholder;
      });

      function setAllowClear(allow) {
        $select.allowClear = (angular.isDefined(allow)) ? (allow === '') ? true : (allow.toLowerCase() === 'true') : false;
      }

      attrs.$observe('allowClear', setAllowClear);
      setAllowClear(attrs.allowClear);

      if($select.multiple){
        $select.sizeSearchInput();
      }

    }
  };

  function getAttribute(elem, attribute) {
    if (elem[0].hasAttribute(attribute))
      return elem.attr(attribute);

    if (elem[0].hasAttribute('data-' + attribute))
      return elem.attr('data-' + attribute);

    if (elem[0].hasAttribute('x-' + attribute))
      return elem.attr('x-' + attribute);
  }
}]);

uis.directive('uiSelectMultiple', ['uiSelectMinErr','$timeout', function(uiSelectMinErr, $timeout) {
  return {
    restrict: 'EA',
    require: ['^uiSelect', '^ngModel'],

    controller: ['$scope','$timeout', function($scope, $timeout){

      var ctrl = this,
          $select = $scope.$select,
          ngModel;

      if (angular.isUndefined($select.selected))
        $select.selected = [];

      //Wait for link fn to inject it
      $scope.$evalAsync(function(){ ngModel = $scope.ngModel; });

      ctrl.activeMatchIndex = -1;

      ctrl.updateModel = function(){
        ngModel.$setViewValue(Date.now()); //Set timestamp as a unique string to force changes
        ctrl.refreshComponent();
      };

      ctrl.refreshComponent = function(){
        //Remove already selected items
        //e.g. When user clicks on a selection, the selected array changes and
        //the dropdown should remove that item
        if($select.refreshItems){
          $select.refreshItems();
        }
        if($select.sizeSearchInput){
          $select.sizeSearchInput();
        }
      };

      // Remove item from multiple select
      ctrl.removeChoice = function(index){

        // if the choice is locked, don't remove it
        if($select.isLocked(null, index)) return false;

        var removedChoice = $select.selected[index];

        var locals = {};
        locals[$select.parserResult.itemName] = removedChoice;

        $select.selected.splice(index, 1);
        ctrl.activeMatchIndex = -1;
        $select.sizeSearchInput();

        // Give some time for scope propagation.
        $timeout(function(){
          $select.onRemoveCallback($scope, {
            $item: removedChoice,
            $model: $select.parserResult.modelMapper($scope, locals)
          });
        });

        ctrl.updateModel();

        return true;
      };

      ctrl.getPlaceholder = function(){
        //Refactor single?
        if($select.selected && $select.selected.length) return;
        return $select.placeholder;
      };


    }],
    controllerAs: '$selectMultiple',

    link: function(scope, element, attrs, ctrls) {

      var $select = ctrls[0];
      var ngModel = scope.ngModel = ctrls[1];
      var $selectMultiple = scope.$selectMultiple;

      //$select.selected = raw selected objects (ignoring any property binding)

      $select.multiple = true;

      //Input that will handle focus
      $select.focusInput = $select.searchInput;

      //Properly check for empty if set to multiple
      ngModel.$isEmpty = function(value) {
        return !value || value.length === 0;
      };

      //From view --> model
      ngModel.$parsers.unshift(function () {
        var locals = {},
            result,
            resultMultiple = [];
        for (var j = $select.selected.length - 1; j >= 0; j--) {
          locals = {};
          locals[$select.parserResult.itemName] = $select.selected[j];
          result = $select.parserResult.modelMapper(scope, locals);
          resultMultiple.unshift(result);
        }
        return resultMultiple;
      });

      // From model --> view
      ngModel.$formatters.unshift(function (inputValue) {
        var data = $select.parserResult && $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
            locals = {},
            result;
        if (!data) return inputValue;
        var resultMultiple = [];
        var checkFnMultiple = function(list, value){
          if (!list || !list.length) return;
          for (var p = list.length - 1; p >= 0; p--) {
            locals[$select.parserResult.itemName] = list[p];
            result = $select.parserResult.modelMapper(scope, locals);
            if($select.parserResult.trackByExp){
                var propsItemNameMatches = /(\w*)\./.exec($select.parserResult.trackByExp);
                var matches = /\.([^\s]+)/.exec($select.parserResult.trackByExp);
                if(propsItemNameMatches && propsItemNameMatches.length > 0 && propsItemNameMatches[1] == $select.parserResult.itemName){
                  if(matches && matches.length>0 && result[matches[1]] == value[matches[1]]){
                      resultMultiple.unshift(list[p]);
                      return true;
                  }
                }
            }
            if (angular.equals(result,value)){
              resultMultiple.unshift(list[p]);
              return true;
            }
          }
          return false;
        };
        if (!inputValue) return resultMultiple; //If ngModel was undefined
        for (var k = inputValue.length - 1; k >= 0; k--) {
          //Check model array of currently selected items
          if (!checkFnMultiple($select.selected, inputValue[k])){
            //Check model array of all items available
            if (!checkFnMultiple(data, inputValue[k])){
              //If not found on previous lists, just add it directly to resultMultiple
              resultMultiple.unshift(inputValue[k]);
            }
          }
        }
        return resultMultiple;
      });

      //Watch for external model changes
      scope.$watchCollection(function(){ return ngModel.$modelValue; }, function(newValue, oldValue) {
        if (oldValue != newValue){
          //update the view value with fresh data from items, if there is a valid model value
          if(angular.isDefined(ngModel.$modelValue)) {
            ngModel.$modelValue = null; //Force scope model value and ngModel value to be out of sync to re-run formatters
          }
          $selectMultiple.refreshComponent();
        }
      });

      ngModel.$render = function() {
        // Make sure that model value is array
        if(!angular.isArray(ngModel.$viewValue)){
          // Have tolerance for null or undefined values
          if (isNil(ngModel.$viewValue)){
            ngModel.$viewValue = [];
          } else {
            throw uiSelectMinErr('multiarr', "Expected model value to be array but got '{0}'", ngModel.$viewValue);
          }
        }
        $select.selected = ngModel.$viewValue;
        $selectMultiple.refreshComponent();
        scope.$evalAsync(); //To force $digest
      };

      scope.$on('uis:select', function (event, item) {
        if($select.selected.length >= $select.limit) {
          return;
        }
        $select.selected.push(item);
        var locals = {};
        locals[$select.parserResult.itemName] = item;

        $timeout(function(){
          $select.onSelectCallback(scope, {
            $item: item,
            $model: $select.parserResult.modelMapper(scope, locals)
          });
        });
        $selectMultiple.updateModel();
      });

      scope.$on('uis:activate', function () {
        $selectMultiple.activeMatchIndex = -1;
      });

      scope.$watch('$select.disabled', function(newValue, oldValue) {
        // As the search input field may now become visible, it may be necessary to recompute its size
        if (oldValue && !newValue) $select.sizeSearchInput();
      });

      $select.searchInput.on('keydown', function(e) {
        var key = e.which;
        scope.$apply(function() {
          var processed = false;
          // var tagged = false; //Checkme
          if(KEY.isHorizontalMovement(key)){
            processed = _handleMatchSelection(key);
          }
          if (processed  && key != KEY.TAB) {
            //TODO Check si el tab selecciona aun correctamente
            //Crear test
            e.preventDefault();
            e.stopPropagation();
          }
        });
      });
      function _getCaretPosition(el) {
        if(angular.isNumber(el.selectionStart)) return el.selectionStart;
        // selectionStart is not supported in IE8 and we don't want hacky workarounds so we compromise
        else return el.value.length;
      }
      // Handles selected options in "multiple" mode
      function _handleMatchSelection(key){
        var caretPosition = _getCaretPosition($select.searchInput[0]),
            length = $select.selected.length,
            // none  = -1,
            first = 0,
            last  = length-1,
            curr  = $selectMultiple.activeMatchIndex,
            next  = $selectMultiple.activeMatchIndex+1,
            prev  = $selectMultiple.activeMatchIndex-1,
            newIndex = curr;

        if(caretPosition > 0 || ($select.search.length && key == KEY.RIGHT)) return false;

        $select.close();

        function getNewActiveMatchIndex(){
          switch(key){
            case KEY.LEFT:
              // Select previous/first item
              if(~$selectMultiple.activeMatchIndex) return prev;
              // Select last item
              else return last;
              break;
            case KEY.RIGHT:
              // Open drop-down
              if(!~$selectMultiple.activeMatchIndex || curr === last){
                $select.activate();
                return false;
              }
              // Select next/last item
              else return next;
              break;
            case KEY.BACKSPACE:
              // Remove selected item and select previous/first
              if(~$selectMultiple.activeMatchIndex){
                if($selectMultiple.removeChoice(curr)) {
                  return prev;
                } else {
                  return curr;
                }

              } else {
                // If nothing yet selected, select last item
                return last;
              }
              break;
            case KEY.DELETE:
              // Remove selected item and select next item
              if(~$selectMultiple.activeMatchIndex){
                $selectMultiple.removeChoice($selectMultiple.activeMatchIndex);
                return curr;
              }
              else return false;
          }
        }

        newIndex = getNewActiveMatchIndex();

        if(!$select.selected.length || newIndex === false) $selectMultiple.activeMatchIndex = -1;
        else $selectMultiple.activeMatchIndex = Math.min(last,Math.max(first,newIndex));

        return true;
      }

      $select.searchInput.on('keyup', function(e) {

        if ( ! KEY.isVerticalMovement(e.which) ) {
          scope.$evalAsync( function () {
            $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
          });
        }
        // Push a "create new" item into array if there is a search string
        if ( $select.tagging.isActivated && $select.search.length > 0 ) {

          // return early with these keys
          if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || KEY.isVerticalMovement(e.which) ) {
            return;
          }
          // always reset the activeIndex to the first item when tagging
          $select.activeIndex = $select.taggingLabel === false ? -1 : 0;
          // taggingLabel === false bypasses all of this
          if ($select.taggingLabel === false) return;

          var items = angular.copy( $select.items );
          var stashArr = angular.copy( $select.items );
          var newItem;
          var item;
          var hasTag = false;
          var dupeIndex = -1;
          var tagItems;
          var tagItem;

          // case for object tagging via transform `$select.tagging.fct` function
          if ( $select.tagging.fct !== undefined) {
            tagItems = $select.$filter('filter')(items,{'isTag': true});
            if ( tagItems.length > 0 ) {
              tagItem = tagItems[0];
            }
            // remove the first element, if it has the `isTag` prop we generate a new one with each keyup, shaving the previous
            if ( items.length > 0 && tagItem ) {
              hasTag = true;
              items = items.slice(1,items.length);
              stashArr = stashArr.slice(1,stashArr.length);
            }
            newItem = $select.tagging.fct($select.search);
            // verify the new tag doesn't match the value of a possible selection choice or an already selected item.
            if (
              stashArr.some(function (origItem) {
                 return angular.equals(origItem, newItem);
              }) ||
              $select.selected.some(function (origItem) {
                return angular.equals(origItem, newItem);
              })
            ) {
              scope.$evalAsync(function () {
                $select.activeIndex = 0;
                $select.items = items;
              });
              return;
            }
            if (newItem) newItem.isTag = true;
          // handle newItem string and stripping dupes in tagging string context
          } else {
            // find any tagging items already in the $select.items array and store them
            tagItems = $select.$filter('filter')(items,function (item) {
              return item.match($select.taggingLabel);
            });
            if ( tagItems.length > 0 ) {
              tagItem = tagItems[0];
            }
            item = items[0];
            // remove existing tag item if found (should only ever be one tag item)
            if ( item !== undefined && items.length > 0 && tagItem ) {
              hasTag = true;
              items = items.slice(1,items.length);
              stashArr = stashArr.slice(1,stashArr.length);
            }
            newItem = $select.search+' '+$select.taggingLabel;
            if ( _findApproxDupe($select.selected, $select.search) > -1 ) {
              return;
            }
            // verify the the tag doesn't match the value of an existing item from
            // the searched data set or the items already selected
            if ( _findCaseInsensitiveDupe(stashArr.concat($select.selected)) ) {
              // if there is a tag from prev iteration, strip it / queue the change
              // and return early
              if ( hasTag ) {
                items = stashArr;
                scope.$evalAsync( function () {
                  $select.activeIndex = 0;
                  $select.items = items;
                });
              }
              return;
            }
            if ( _findCaseInsensitiveDupe(stashArr) ) {
              // if there is a tag from prev iteration, strip it
              if ( hasTag ) {
                $select.items = stashArr.slice(1,stashArr.length);
              }
              return;
            }
          }
          if ( hasTag ) dupeIndex = _findApproxDupe($select.selected, newItem);
          // dupe found, shave the first item
          if ( dupeIndex > -1 ) {
            items = items.slice(dupeIndex+1,items.length-1);
          } else {
            items = [];
            if (newItem) items.push(newItem);
            items = items.concat(stashArr);
          }
          scope.$evalAsync( function () {
            $select.activeIndex = 0;
            $select.items = items;

            if ($select.isGrouped) {
              // update item references in groups, so that indexOf will work after angular.copy
              var itemsWithoutTag = newItem ? items.slice(1) : items;
              $select.setItemsFn(itemsWithoutTag);
              if (newItem) {
                // add tag item as a new group
                $select.items.unshift(newItem);
                $select.groups.unshift({name: '', items: [newItem], tagging: true});
              }
            }
          });
        }
      });
      function _findCaseInsensitiveDupe(arr) {
        if ( arr === undefined || $select.search === undefined ) {
          return false;
        }
        var hasDupe = arr.filter( function (origItem) {
          if ( $select.search.toUpperCase() === undefined || origItem === undefined ) {
            return false;
          }
          return origItem.toUpperCase() === $select.search.toUpperCase();
        }).length > 0;

        return hasDupe;
      }
      function _findApproxDupe(haystack, needle) {
        var dupeIndex = -1;
        if(angular.isArray(haystack)) {
          var tempArr = angular.copy(haystack);
          for (var i = 0; i <tempArr.length; i++) {
            // handle the simple string version of tagging
            if ( $select.tagging.fct === undefined ) {
              // search the array for the match
              if ( tempArr[i]+' '+$select.taggingLabel === needle ) {
              dupeIndex = i;
              }
            // handle the object tagging implementation
            } else {
              var mockObj = tempArr[i];
              if (angular.isObject(mockObj)) {
                mockObj.isTag = true;
              }
              if ( angular.equals(mockObj, needle) ) {
                dupeIndex = i;
              }
            }
          }
        }
        return dupeIndex;
      }

      $select.searchInput.on('blur', function() {
        $timeout(function() {
          $selectMultiple.activeMatchIndex = -1;
        });
      });

    }
  };
}]);

uis.directive('uiSelectNoChoice',
    ['uiSelectConfig', function (uiSelectConfig) {
        return {
            restrict: 'EA',
            require: '^uiSelect',
            replace: true,
            transclude: true,
            templateUrl: function (tElement) {
                // Needed so the uiSelect can detect the transcluded content
                tElement.addClass('ui-select-no-choice');
      
                // Gets theme attribute from parent (ui-select)
                var theme = tElement.parent().attr('theme') || uiSelectConfig.theme;
                return theme + '/no-choice.tpl.html';
            }
        };
    }]);

uis.directive('uiSelectSingle', ['$timeout','$compile', function($timeout, $compile) {
  return {
    restrict: 'EA',
    require: ['^uiSelect', '^ngModel'],
    link: function(scope, element, attrs, ctrls) {

      var $select = ctrls[0];
      var ngModel = ctrls[1];

      //From view --> model
      ngModel.$parsers.unshift(function (inputValue) {
        // Keep original value for undefined and null
        if (isNil(inputValue)) {
          return inputValue;
        }

        var locals = {},
            result;
        locals[$select.parserResult.itemName] = inputValue;
        result = $select.parserResult.modelMapper(scope, locals);
        return result;
      });

      //From model --> view
      ngModel.$formatters.unshift(function (inputValue) {
        // Keep original value for undefined and null
        if (isNil(inputValue)) {
          return inputValue;
        }

        var data = $select.parserResult && $select.parserResult.source (scope, { $select : {search:''}}), //Overwrite $search
            locals = {},
            result;
        if (data){
          var checkFnSingle = function(d){
            locals[$select.parserResult.itemName] = d;
            result = $select.parserResult.modelMapper(scope, locals);
            return result === inputValue;
          };
          //If possible pass same object stored in $select.selected
          if ($select.selected && checkFnSingle($select.selected)) {
            return $select.selected;
          }
          for (var i = data.length - 1; i >= 0; i--) {
            if (checkFnSingle(data[i])) return data[i];
          }
        }
        return inputValue;
      });

      //Update viewValue if model change
      scope.$watch('$select.selected', function(newValue) {
        if (ngModel.$viewValue !== newValue) {
          ngModel.$setViewValue(newValue);
        }
      });

      ngModel.$render = function() {
        $select.selected = ngModel.$viewValue;
      };

      scope.$on('uis:select', function (event, item) {
        $select.selected = item;
        var locals = {};
        locals[$select.parserResult.itemName] = item;

        $timeout(function() {
          $select.onSelectCallback(scope, {
            $item: item,
            $model: isNil(item) ? item : $select.parserResult.modelMapper(scope, locals)
          });
        });
      });

      scope.$on('uis:close', function (event, skipFocusser) {
        $timeout(function(){
          $select.focusser.prop('disabled', false);
          if (!skipFocusser) $select.focusser[0].focus();
        },0,false);
      });

      scope.$on('uis:activate', function () {
        focusser.prop('disabled', true); //Will reactivate it on .close()
      });

      //Idea from: https://github.com/ivaynberg/select2/blob/79b5bf6db918d7560bdd959109b7bcfb47edaf43/select2.js#L1954
      var focusser = angular.element("<input ng-disabled='$select.disabled' class='ui-select-focusser ui-select-offscreen' type='text' id='{{ $select.focusserId }}' aria-label='{{ $select.focusserTitle }}' aria-haspopup='true' role='button' />");
      $compile(focusser)(scope);
      $select.focusser = focusser;

      //Input that will handle focus
      $select.focusInput = focusser;

      element.parent().append(focusser);
      focusser.bind("focus", function(){
        scope.$evalAsync(function(){
          $select.focus = true;
        });
      });
      focusser.bind("blur", function(){
        scope.$evalAsync(function(){
          $select.focus = false;
        });
      });
      focusser.bind("keydown", function(e){

        if (e.which === KEY.BACKSPACE && $select.backspaceReset !== false) {
          e.preventDefault();
          e.stopPropagation();
          $select.select(undefined);
          scope.$apply();
          return;
        }

        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
          return;
        }

        if (e.which == KEY.DOWN  || e.which == KEY.UP || e.which == KEY.ENTER || e.which == KEY.SPACE){
          e.preventDefault();
          e.stopPropagation();
          $select.activate();
        }

        scope.$digest();
      });

      focusser.bind("keyup input", function(e){

        if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC || e.which == KEY.ENTER || e.which === KEY.BACKSPACE) {
          return;
        }

        $select.activate(focusser.val()); //User pressed some regular key, so we pass it to the search input
        focusser.val('');
        scope.$digest();

      });


    }
  };
}]);

// Make multiple matches sortable
uis.directive('uiSelectSort', ['$timeout', 'uiSelectConfig', 'uiSelectMinErr', function($timeout, uiSelectConfig, uiSelectMinErr) {
  return {
    require: ['^^uiSelect', '^ngModel'],
    link: function(scope, element, attrs, ctrls) {
      if (scope[attrs.uiSelectSort] === null) {
        throw uiSelectMinErr('sort', 'Expected a list to sort');
      }

      var $select = ctrls[0];
      var $ngModel = ctrls[1];

      var options = angular.extend({
          axis: 'horizontal'
        },
        scope.$eval(attrs.uiSelectSortOptions));

      var axis = options.axis;
      var draggingClassName = 'dragging';
      var droppingClassName = 'dropping';
      var droppingBeforeClassName = 'dropping-before';
      var droppingAfterClassName = 'dropping-after';

      scope.$watch(function(){
        return $select.sortable;
      }, function(newValue){
        if (newValue) {
          element.attr('draggable', true);
        } else {
          element.removeAttr('draggable');
        }
      });

      element.on('dragstart', function(event) {
        element.addClass(draggingClassName);

        (event.dataTransfer || event.originalEvent.dataTransfer).setData('text', scope.$index.toString());
      });

      element.on('dragend', function() {
        removeClass(draggingClassName);
      });

      var move = function(from, to) {
        /*jshint validthis: true */
        this.splice(to, 0, this.splice(from, 1)[0]);
      };

      var removeClass = function(className) {
        angular.forEach($select.$element.querySelectorAll('.' + className), function(el){
          angular.element(el).removeClass(className);
        });
      };

      var dragOverHandler = function(event) {
        event.preventDefault();

        var offset = axis === 'vertical' ? event.offsetY || event.layerY || (event.originalEvent ? event.originalEvent.offsetY : 0) : event.offsetX || event.layerX || (event.originalEvent ? event.originalEvent.offsetX : 0);

        if (offset < (this[axis === 'vertical' ? 'offsetHeight' : 'offsetWidth'] / 2)) {
          removeClass(droppingAfterClassName);
          element.addClass(droppingBeforeClassName);

        } else {
          removeClass(droppingBeforeClassName);
          element.addClass(droppingAfterClassName);
        }
      };

      var dropTimeout;

      var dropHandler = function(event) {
        event.preventDefault();

        var droppedItemIndex = parseInt((event.dataTransfer || event.originalEvent.dataTransfer).getData('text'), 10);

        // prevent event firing multiple times in firefox
        $timeout.cancel(dropTimeout);
        dropTimeout = $timeout(function() {
          _dropHandler(droppedItemIndex);
        }, 20);
      };

      var _dropHandler = function(droppedItemIndex) {
        var theList = scope.$eval(attrs.uiSelectSort);
        var itemToMove = theList[droppedItemIndex];
        var newIndex = null;

        if (element.hasClass(droppingBeforeClassName)) {
          if (droppedItemIndex < scope.$index) {
            newIndex = scope.$index - 1;
          } else {
            newIndex = scope.$index;
          }
        } else {
          if (droppedItemIndex < scope.$index) {
            newIndex = scope.$index;
          } else {
            newIndex = scope.$index + 1;
          }
        }

        move.apply(theList, [droppedItemIndex, newIndex]);

        $ngModel.$setViewValue(Date.now());

        scope.$apply(function() {
          scope.$emit('uiSelectSort:change', {
            array: theList,
            item: itemToMove,
            from: droppedItemIndex,
            to: newIndex
          });
        });

        removeClass(droppingClassName);
        removeClass(droppingBeforeClassName);
        removeClass(droppingAfterClassName);

        element.off('drop', dropHandler);
      };

      element.on('dragenter', function() {
        if (element.hasClass(draggingClassName)) {
          return;
        }

        element.addClass(droppingClassName);

        element.on('dragover', dragOverHandler);
        element.on('drop', dropHandler);
      });

      element.on('dragleave', function(event) {
        if (event.target != element) {
          return;
        }

        removeClass(droppingClassName);
        removeClass(droppingBeforeClassName);
        removeClass(droppingAfterClassName);

        element.off('dragover', dragOverHandler);
        element.off('drop', dropHandler);
      });
    }
  };
}]);

/**
 * Debounces functions
 *
 * Taken from UI Bootstrap $$debounce source code
 * See https://github.com/angular-ui/bootstrap/blob/master/src/debounce/debounce.js
 *
 */
uis.factory('$$uisDebounce', ['$timeout', function($timeout) {
  return function(callback, debounceTime) {
    var timeoutPromise;

    return function() {
      var self = this;
      var args = Array.prototype.slice.call(arguments);
      if (timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }

      timeoutPromise = $timeout(function() {
        callback.apply(self, args);
      }, debounceTime);
    };
  };
}]);

uis.directive('uisOpenClose', ['$parse', '$timeout', function ($parse, $timeout) {
  return {
    restrict: 'A',
    require: 'uiSelect',
    link: function (scope, element, attrs, $select) {
      $select.onOpenCloseCallback = $parse(attrs.uisOpenClose);

      scope.$watch('$select.open', function (isOpen, previousState) {
        if (isOpen !== previousState) {
          $timeout(function () {
            $select.onOpenCloseCallback(scope, {
              isOpen: isOpen
            });
          });
        }
      });
    }
  };
}]);

/**
 * Parses "repeat" attribute.
 *
 * Taken from AngularJS ngRepeat source code
 * See https://github.com/angular/angular.js/blob/v1.2.15/src/ng/directive/ngRepeat.js#L211
 *
 * Original discussion about parsing "repeat" attribute instead of fully relying on ng-repeat:
 * https://github.com/angular-ui/ui-select/commit/5dd63ad#commitcomment-5504697
 */

uis.service('uisRepeatParser', ['uiSelectMinErr','$parse', function(uiSelectMinErr, $parse) {
  var self = this;

  /**
   * Example:
   * expression = "address in addresses | filter: {street: $select.search} track by $index"
   * itemName = "address",
   * source = "addresses | filter: {street: $select.search}",
   * trackByExp = "$index",
   */
  self.parse = function(expression) {


    var match;
    //var isObjectCollection = /\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)/.test(expression);
    // If an array is used as collection

    // if (isObjectCollection){
    // 000000000000000000000000000000111111111000000000000000222222222222220033333333333333333333330000444444444444444444000000000000000055555555555000000000000000000000066666666600000000
    match = expression.match(/^\s*(?:([\s\S]+?)\s+as\s+)?(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(\s*[\s\S]+?)?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);

    // 1 Alias
    // 2 Item
    // 3 Key on (key,value)
    // 4 Value on (key,value)
    // 5 Source expression (including filters)
    // 6 Track by

    if (!match) {
      throw uiSelectMinErr('iexp', "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",
              expression);
    }
    
    var source = match[5], 
        filters = '';

    // When using (key,value) ui-select requires filters to be extracted, since the object
    // is converted to an array for $select.items 
    // (in which case the filters need to be reapplied)
    if (match[3]) {
      // Remove any enclosing parenthesis
      source = match[5].replace(/(^\()|(\)$)/g, '');
      // match all after | but not after ||
      var filterMatch = match[5].match(/^\s*(?:[\s\S]+?)(?:[^\|]|\|\|)+([\s\S]*)\s*$/);
      if(filterMatch && filterMatch[1].trim()) {
        filters = filterMatch[1];
        source = source.replace(filters, '');
      }      
    }

    return {
      itemName: match[4] || match[2], // (lhs) Left-hand side,
      keyName: match[3], //for (key, value) syntax
      source: $parse(source),
      filters: filters,
      trackByExp: match[6],
      modelMapper: $parse(match[1] || match[4] || match[2]),
      repeatExpression: function (grouped) {
        var expression = this.itemName + ' in ' + (grouped ? '$group.items' : '$select.items');
        if (this.trackByExp) {
          expression += ' track by ' + this.trackByExp;
        }
        return expression;
      } 
    };

  };

  self.getGroupNgRepeatExpression = function() {
    return '$group in $select.groups track by $group.name';
  };

}]);

}());
angular.module("ui.select").run(["$templateCache", function($templateCache) {$templateCache.put("bootstrap/choices.tpl.html","<ul class=\"ui-select-choices ui-select-choices-content ui-select-dropdown dropdown-menu\" ng-show=\"$select.open && $select.items.length > 0\"><li class=\"ui-select-choices-group\" id=\"ui-select-choices-{{ $select.generatedId }}\"><div class=\"divider\" ng-show=\"$select.isGrouped && $index > 0\"></div><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label dropdown-header\" ng-bind=\"$group.name\"></div><div ng-attr-id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\" role=\"option\"><span class=\"ui-select-choices-row-inner\"></span></div></li></ul>");
$templateCache.put("bootstrap/match-multiple.tpl.html","<span class=\"ui-select-match\"><span ng-repeat=\"$item in $select.selected track by $index\"><span class=\"ui-select-match-item btn btn-default btn-xs\" tabindex=\"-1\" type=\"button\" ng-disabled=\"$select.disabled\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'btn-primary\':$selectMultiple.activeMatchIndex === $index, \'select-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span class=\"close ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&nbsp;&times;</span> <span uis-transclude-append=\"\"></span></span></span></span>");
$templateCache.put("bootstrap/match.tpl.html","<div class=\"ui-select-match\" ng-hide=\"$select.open && $select.searchEnabled\" ng-disabled=\"$select.disabled\" ng-class=\"{\'btn-default-focus\':$select.focus}\"><span tabindex=\"-1\" class=\"btn btn-default form-control ui-select-toggle\" aria-label=\"{{ $select.baseTitle }} activate\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" style=\"outline: 0;\"><span ng-show=\"$select.isEmpty()\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"ui-select-match-text pull-left\" ng-class=\"{\'ui-select-allow-clear\': $select.allowClear && !$select.isEmpty()}\" ng-transclude=\"\"></span> <i class=\"caret pull-right\" ng-click=\"$select.toggle($event)\"></i> <a ng-show=\"$select.allowClear && !$select.isEmpty() && ($select.disabled !== true)\" aria-label=\"{{ $select.baseTitle }} clear\" style=\"margin-right: 10px\" ng-click=\"$select.clear($event)\" class=\"btn btn-xs btn-link pull-right\"><i class=\"glyphicon glyphicon-remove\" aria-hidden=\"true\"></i></a></span></div>");
$templateCache.put("bootstrap/no-choice.tpl.html","<ul class=\"ui-select-no-choice dropdown-menu\" ng-show=\"$select.items.length == 0\"><li ng-transclude=\"\"></li></ul>");
$templateCache.put("bootstrap/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple ui-select-bootstrap dropdown form-control\" ng-class=\"{open: $select.open}\"><div><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" class=\"ui-select-search input-xs\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-click=\"$select.activate()\" ng-model=\"$select.search\" role=\"combobox\" aria-expanded=\"{{$select.open}}\" aria-label=\"{{$select.baseTitle}}\" ng-class=\"{\'spinner\': $select.refreshing}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
$templateCache.put("bootstrap/select.tpl.html","<div class=\"ui-select-container ui-select-bootstrap dropdown\" ng-class=\"{open: $select.open}\"><div class=\"ui-select-match\"></div><span ng-show=\"$select.open && $select.refreshing && $select.spinnerEnabled\" class=\"ui-select-refreshing {{$select.spinnerClass}}\"></span> <input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" aria-expanded=\"true\" aria-label=\"{{ $select.baseTitle }}\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" class=\"form-control ui-select-search\" ng-class=\"{ \'ui-select-search-hidden\' : !$select.searchEnabled }\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-show=\"$select.open\"><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
$templateCache.put("select2/choices.tpl.html","<ul tabindex=\"-1\" class=\"ui-select-choices ui-select-choices-content select2-results\"><li class=\"ui-select-choices-group\" ng-class=\"{\'select2-result-with-children\': $select.choiceGrouped($group) }\"><div ng-show=\"$select.choiceGrouped($group)\" class=\"ui-select-choices-group-label select2-result-label\" ng-bind=\"$group.name\"></div><ul id=\"ui-select-choices-{{ $select.generatedId }}\" ng-class=\"{\'select2-result-sub\': $select.choiceGrouped($group), \'select2-result-single\': !$select.choiceGrouped($group) }\"><li role=\"option\" ng-attr-id=\"ui-select-choices-row-{{ $select.generatedId }}-{{$index}}\" class=\"ui-select-choices-row\" ng-class=\"{\'select2-highlighted\': $select.isActive(this), \'select2-disabled\': $select.isDisabled(this)}\"><div class=\"select2-result-label ui-select-choices-row-inner\"></div></li></ul></li></ul>");
$templateCache.put("select2/match-multiple.tpl.html","<span class=\"ui-select-match\"><li class=\"ui-select-match-item select2-search-choice\" ng-repeat=\"$item in $select.selected track by $index\" ng-class=\"{\'select2-search-choice-focus\':$selectMultiple.activeMatchIndex === $index, \'select2-locked\':$select.isLocked(this, $index)}\" ui-select-sort=\"$select.selected\"><span uis-transclude-append=\"\"></span> <a href=\"javascript:;\" class=\"ui-select-match-close select2-search-choice-close\" ng-click=\"$selectMultiple.removeChoice($index)\" tabindex=\"-1\"></a></li></span>");
$templateCache.put("select2/match.tpl.html","<a class=\"select2-choice ui-select-match\" ng-class=\"{\'select2-default\': $select.isEmpty()}\" ng-click=\"$select.toggle($event)\" aria-label=\"{{ $select.baseTitle }} select\"><span ng-show=\"$select.isEmpty()\" class=\"select2-chosen\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty()\" class=\"select2-chosen\" ng-transclude=\"\"></span> <abbr ng-if=\"$select.allowClear && !$select.isEmpty()\" class=\"select2-search-choice-close\" ng-click=\"$select.clear($event)\"></abbr> <span class=\"select2-arrow ui-select-toggle\"><b></b></span></a>");
$templateCache.put("select2/no-choice.tpl.html","<div class=\"ui-select-no-choice dropdown\" ng-show=\"$select.items.length == 0\"><div class=\"dropdown-content\"><div data-selectable=\"\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("select2/select-multiple.tpl.html","<div class=\"ui-select-container ui-select-multiple select2 select2-container select2-container-multi\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled}\"><ul class=\"select2-choices\"><span class=\"ui-select-match\"></span><li class=\"select2-search-field\"><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" aria-activedescendant=\"ui-select-choices-row-{{ $select.generatedId }}-{{ $select.activeIndex }}\" class=\"select2-input ui-select-search\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-disabled=\"$select.disabled\" ng-hide=\"$select.disabled\" ng-model=\"$select.search\" ng-click=\"$select.activate()\" style=\"width: 34px;\" ondrop=\"return false;\"></li></ul><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open || $select.items.length === 0}\"><div class=\"ui-select-choices\"></div></div></div>");
$templateCache.put("select2/select.tpl.html","<div class=\"ui-select-container select2 select2-container\" ng-class=\"{\'select2-container-active select2-dropdown-open open\': $select.open, \'select2-container-disabled\': $select.disabled, \'select2-container-active\': $select.focus, \'select2-allowclear\': $select.allowClear && !$select.isEmpty()}\"><div class=\"ui-select-match\"></div><div class=\"ui-select-dropdown select2-drop select2-with-searchbox select2-drop-active\" ng-class=\"{\'select2-display-none\': !$select.open}\"><div class=\"search-container\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled, \'select2-search\':$select.searchEnabled}\"><input type=\"search\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" ng-class=\"{\'select2-active\': $select.refreshing}\" role=\"combobox\" aria-expanded=\"true\" aria-owns=\"ui-select-choices-{{ $select.generatedId }}\" aria-label=\"{{ $select.baseTitle }}\" class=\"ui-select-search select2-input\" ng-model=\"$select.search\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div></div>");
$templateCache.put("selectize/choices.tpl.html","<div ng-show=\"$select.open\" class=\"ui-select-choices ui-select-dropdown selectize-dropdown\" ng-class=\"{\'single\': !$select.multiple, \'multi\': $select.multiple}\"><div class=\"ui-select-choices-content selectize-dropdown-content\"><div class=\"ui-select-choices-group optgroup\"><div ng-show=\"$select.isGrouped\" class=\"ui-select-choices-group-label optgroup-header\" ng-bind=\"$group.name\"></div><div role=\"option\" class=\"ui-select-choices-row\" ng-class=\"{active: $select.isActive(this), disabled: $select.isDisabled(this)}\"><div class=\"option ui-select-choices-row-inner\" data-selectable=\"\"></div></div></div></div></div>");
$templateCache.put("selectize/match-multiple.tpl.html","<div class=\"ui-select-match\" data-value=\"\" ng-repeat=\"$item in $select.selected track by $index\" ng-click=\"$selectMultiple.activeMatchIndex = $index;\" ng-class=\"{\'active\':$selectMultiple.activeMatchIndex === $index}\" ui-select-sort=\"$select.selected\"><span class=\"ui-select-match-item\" ng-class=\"{\'select-locked\':$select.isLocked(this, $index)}\"><span uis-transclude-append=\"\"></span> <span class=\"remove ui-select-match-close\" ng-hide=\"$select.disabled\" ng-click=\"$selectMultiple.removeChoice($index)\">&times;</span></span></div>");
$templateCache.put("selectize/match.tpl.html","<div ng-hide=\"$select.searchEnabled && ($select.open || $select.isEmpty())\" class=\"ui-select-match\"><span ng-show=\"!$select.searchEnabled && ($select.isEmpty() || $select.open)\" class=\"ui-select-placeholder text-muted\">{{$select.placeholder}}</span> <span ng-hide=\"$select.isEmpty() || $select.open\" ng-transclude=\"\"></span></div>");
$templateCache.put("selectize/no-choice.tpl.html","<div class=\"ui-select-no-choice selectize-dropdown\" ng-show=\"$select.items.length == 0\"><div class=\"selectize-dropdown-content\"><div data-selectable=\"\" ng-transclude=\"\"></div></div></div>");
$templateCache.put("selectize/select-multiple.tpl.html","<div class=\"ui-select-container selectize-control multi plugin-remove_button\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()\"><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled}\" placeholder=\"{{$selectMultiple.getPlaceholder()}}\" ng-model=\"$select.search\" ng-disabled=\"$select.disabled\" aria-expanded=\"{{$select.open}}\" aria-label=\"{{ $select.baseTitle }}\" ondrop=\"return false;\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");
$templateCache.put("selectize/select.tpl.html","<div class=\"ui-select-container selectize-control single\" ng-class=\"{\'open\': $select.open}\"><div class=\"selectize-input\" ng-class=\"{\'focus\': $select.open, \'disabled\': $select.disabled, \'selectize-focus\' : $select.focus}\" ng-click=\"$select.open && !$select.searchEnabled ? $select.toggle($event) : $select.activate()\"><div class=\"ui-select-match\"></div><input type=\"search\" autocomplete=\"off\" tabindex=\"-1\" class=\"ui-select-search ui-select-toggle\" ng-class=\"{\'ui-select-search-hidden\':!$select.searchEnabled}\" ng-click=\"$select.toggle($event)\" placeholder=\"{{$select.placeholder}}\" ng-model=\"$select.search\" ng-hide=\"!$select.isEmpty() && !$select.open\" ng-disabled=\"$select.disabled\" aria-label=\"{{ $select.baseTitle }}\"></div><div class=\"ui-select-choices\"></div><div class=\"ui-select-no-choice\"></div></div>");}]);

/***/ }),

/***/ "./node_modules/ui-select/index.js":
/*!*****************************************!*\
  !*** ./node_modules/ui-select/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./dist/select.js */ "./node_modules/ui-select/dist/select.js");
module.exports = 'ui.select';


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./test/app.js":
/*!*********************!*\
  !*** ./test/app.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js");
/* harmony import */ var lodash_filter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_filter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ui_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ui-select */ "./node_modules/ui-select/index.js");
/* harmony import */ var ui_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ui_select__WEBPACK_IMPORTED_MODULE_1__);



angular.module('TestApp', ['angular-virtual-select', 'ui.select'])
	.controller('TestAppController', function($scope) {
		this.listLength = 5000;

		this.composeList = function(size) {
			size = size || this.listLength;

			this.list = [];

			for (let i = 0; i < this.listLength; i++) {
				let obj = {
					label: 'User_#' + Math.round(Math.random()*this.listLength*10),
					name: 'John' + Math.round(Math.random()*this.listLength*10),
					age: Math.round(Math.random()*100)
				};

				this.list.push(obj);
			};
		}

		this.activate = function(par) {
			$scope.$broadcast('virtualScrollActivate', par);
		};

		this.changeArraySize = function(size) {
			this.listLength = size;
			this.selected = null;
			this.selected2 = null;
			this.selected3 = null;

			this.composeList(size);
		};

		this.trustAsHtml = function(value) {
			return $sce.trustAsHtml(value);
		};

		this.composeList();
	})
	.filter('byAge', function() {
		return function(items, limit) {
			let filtered = lodash_filter__WEBPACK_IMPORTED_MODULE_0___default()(items, function(item) {
				return item.age <= limit;
			});
			return filtered;
		}
	})
	.filter('propsFilter', function() {
		return function(items, props) {
			var out = [];
			if (angular.isArray(items)) {
				items.forEach(function(item) {
					var itemMatches = false;

					var keys = Object.keys(props);
					for (var i = 0; i < keys.length; i++) {
						var prop = keys[i];
						var text = props[prop].toLowerCase();
						if (item[prop].toString().toLowerCase().indexOf(text) !== -1) {
							itemMatches = true;
							break;
						}
					}

					if (itemMatches) {
						out.push(item);
					}
				});
			} else {
				// Let the output be the input untouched
				out = items;
			}

			return out;
		}
	});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fRGF0YVZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fSGFzaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19MaXN0Q2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fTWFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX01hcENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1Byb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1NldENhY2hlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N0YWNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19VaW50OEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1dlYWtNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlMaWtlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcnJheVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXJyYXlTb21lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Fzc29jSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUZvck93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRBbGxLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VHZXRUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUhhc0luLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlSXNFcXVhbERlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTWF0Y2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUlzTmF0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VJc1R5cGVkQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VLZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VQcm9wZXJ0eURlZXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZVRpbWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlVW5hcnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY2FzdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY29yZUpzRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVCYXNlRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQXJyYXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2VxdWFsQnlUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZXF1YWxPYmplY3RzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2ZyZWVHbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0QWxsS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRNYXBEYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXROYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0UmF3VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFN5bWJvbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZ2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldFZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaENsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hEZWxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzaEdldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19oYXNoSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2hhc2hTZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0tleWFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNNYXNrZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faXNTdHJpY3RDb21wYXJhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZURlbGV0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19saXN0Q2FjaGVHZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbGlzdENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2xpc3RDYWNoZVNldC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19tYXBDYWNoZUNsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcENhY2hlU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX21hcFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWF0Y2hlc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbWVtb2l6ZUNhcHBlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19uYXRpdmVDcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fbmF0aXZlS2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19ub2RlVXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vYmplY3RUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyQXJnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVBZGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0Q2FjaGVIYXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fc2V0VG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdGFja0NsZWFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrRGVsZXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrR2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrSGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0YWNrU2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3N0cmluZ1RvUGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b0tleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL190b1NvdXJjZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2VxLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaGFzSW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pZGVudGl0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJndW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNCdWZmZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc09iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3ltYm9sLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gva2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL21lbW9pemUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3N0dWJGYWxzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL3RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91aS1zZWxlY3QvZGlzdC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VpLXNlbGVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsUUFBUTtBQUNuQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsTUFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDdEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsYUFBYTtBQUMxQjtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLFNBQVM7QUFDcEIsYUFBYSxNQUFNO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3BCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE9BQU87QUFDcEI7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNmQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsYUFBYTtBQUN4QixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE1BQU07QUFDakIsV0FBVyxTQUFTO0FBQ3BCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLE1BQU07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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRCx3Q0FBd0MsRUFBRTtBQUM3Rjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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QUdQO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxFIiwiZmlsZSI6InRlc3QvZGlzdC9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi90ZXN0L2FwcC5qc1wiKTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgRGF0YVZpZXcgPSBnZXROYXRpdmUocm9vdCwgJ0RhdGFWaWV3Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGF0YVZpZXc7XG4iLCJ2YXIgaGFzaENsZWFyID0gcmVxdWlyZSgnLi9faGFzaENsZWFyJyksXG4gICAgaGFzaERlbGV0ZSA9IHJlcXVpcmUoJy4vX2hhc2hEZWxldGUnKSxcbiAgICBoYXNoR2V0ID0gcmVxdWlyZSgnLi9faGFzaEdldCcpLFxuICAgIGhhc2hIYXMgPSByZXF1aXJlKCcuL19oYXNoSGFzJyksXG4gICAgaGFzaFNldCA9IHJlcXVpcmUoJy4vX2hhc2hTZXQnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgaGFzaCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIEhhc2goZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgSGFzaGAuXG5IYXNoLnByb3RvdHlwZS5jbGVhciA9IGhhc2hDbGVhcjtcbkhhc2gucHJvdG90eXBlWydkZWxldGUnXSA9IGhhc2hEZWxldGU7XG5IYXNoLnByb3RvdHlwZS5nZXQgPSBoYXNoR2V0O1xuSGFzaC5wcm90b3R5cGUuaGFzID0gaGFzaEhhcztcbkhhc2gucHJvdG90eXBlLnNldCA9IGhhc2hTZXQ7XG5cbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsInZhciBsaXN0Q2FjaGVDbGVhciA9IHJlcXVpcmUoJy4vX2xpc3RDYWNoZUNsZWFyJyksXG4gICAgbGlzdENhY2hlRGVsZXRlID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlRGVsZXRlJyksXG4gICAgbGlzdENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlR2V0JyksXG4gICAgbGlzdENhY2hlSGFzID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlSGFzJyksXG4gICAgbGlzdENhY2hlU2V0ID0gcmVxdWlyZSgnLi9fbGlzdENhY2hlU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBsaXN0IGNhY2hlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTGlzdENhY2hlKGVudHJpZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBlbnRyaWVzID09IG51bGwgPyAwIDogZW50cmllcy5sZW5ndGg7XG5cbiAgdGhpcy5jbGVhcigpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciBlbnRyeSA9IGVudHJpZXNbaW5kZXhdO1xuICAgIHRoaXMuc2V0KGVudHJ5WzBdLCBlbnRyeVsxXSk7XG4gIH1cbn1cblxuLy8gQWRkIG1ldGhvZHMgdG8gYExpc3RDYWNoZWAuXG5MaXN0Q2FjaGUucHJvdG90eXBlLmNsZWFyID0gbGlzdENhY2hlQ2xlYXI7XG5MaXN0Q2FjaGUucHJvdG90eXBlWydkZWxldGUnXSA9IGxpc3RDYWNoZURlbGV0ZTtcbkxpc3RDYWNoZS5wcm90b3R5cGUuZ2V0ID0gbGlzdENhY2hlR2V0O1xuTGlzdENhY2hlLnByb3RvdHlwZS5oYXMgPSBsaXN0Q2FjaGVIYXM7XG5MaXN0Q2FjaGUucHJvdG90eXBlLnNldCA9IGxpc3RDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBMaXN0Q2FjaGU7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIE1hcCA9IGdldE5hdGl2ZShyb290LCAnTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTWFwO1xuIiwidmFyIG1hcENhY2hlQ2xlYXIgPSByZXF1aXJlKCcuL19tYXBDYWNoZUNsZWFyJyksXG4gICAgbWFwQ2FjaGVEZWxldGUgPSByZXF1aXJlKCcuL19tYXBDYWNoZURlbGV0ZScpLFxuICAgIG1hcENhY2hlR2V0ID0gcmVxdWlyZSgnLi9fbWFwQ2FjaGVHZXQnKSxcbiAgICBtYXBDYWNoZUhhcyA9IHJlcXVpcmUoJy4vX21hcENhY2hlSGFzJyksXG4gICAgbWFwQ2FjaGVTZXQgPSByZXF1aXJlKCcuL19tYXBDYWNoZVNldCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBtYXAgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0FycmF5fSBbZW50cmllc10gVGhlIGtleS12YWx1ZSBwYWlycyB0byBjYWNoZS5cbiAqL1xuZnVuY3Rpb24gTWFwQ2FjaGUoZW50cmllcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGVudHJpZXMgPT0gbnVsbCA/IDAgOiBlbnRyaWVzLmxlbmd0aDtcblxuICB0aGlzLmNsZWFyKCk7XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGVudHJ5ID0gZW50cmllc1tpbmRleF07XG4gICAgdGhpcy5zZXQoZW50cnlbMF0sIGVudHJ5WzFdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgTWFwQ2FjaGVgLlxuTWFwQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gbWFwQ2FjaGVDbGVhcjtcbk1hcENhY2hlLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBtYXBDYWNoZURlbGV0ZTtcbk1hcENhY2hlLnByb3RvdHlwZS5nZXQgPSBtYXBDYWNoZUdldDtcbk1hcENhY2hlLnByb3RvdHlwZS5oYXMgPSBtYXBDYWNoZUhhcztcbk1hcENhY2hlLnByb3RvdHlwZS5zZXQgPSBtYXBDYWNoZVNldDtcblxubW9kdWxlLmV4cG9ydHMgPSBNYXBDYWNoZTtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB0aGF0IGFyZSB2ZXJpZmllZCB0byBiZSBuYXRpdmUuICovXG52YXIgUHJvbWlzZSA9IGdldE5hdGl2ZShyb290LCAnUHJvbWlzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb21pc2U7XG4iLCJ2YXIgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9fZ2V0TmF0aXZlJyksXG4gICAgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShyb290LCAnU2V0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0O1xuIiwidmFyIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKSxcbiAgICBzZXRDYWNoZUFkZCA9IHJlcXVpcmUoJy4vX3NldENhY2hlQWRkJyksXG4gICAgc2V0Q2FjaGVIYXMgPSByZXF1aXJlKCcuL19zZXRDYWNoZUhhcycpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGFuIGFycmF5IGNhY2hlIG9iamVjdCB0byBzdG9yZSB1bmlxdWUgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGg7XG5cbiAgdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZTtcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB0aGlzLmFkZCh2YWx1ZXNbaW5kZXhdKTtcbiAgfVxufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU2V0Q2FjaGVgLlxuU2V0Q2FjaGUucHJvdG90eXBlLmFkZCA9IFNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gc2V0Q2FjaGVBZGQ7XG5TZXRDYWNoZS5wcm90b3R5cGUuaGFzID0gc2V0Q2FjaGVIYXM7XG5cbm1vZHVsZS5leHBvcnRzID0gU2V0Q2FjaGU7XG4iLCJ2YXIgTGlzdENhY2hlID0gcmVxdWlyZSgnLi9fTGlzdENhY2hlJyksXG4gICAgc3RhY2tDbGVhciA9IHJlcXVpcmUoJy4vX3N0YWNrQ2xlYXInKSxcbiAgICBzdGFja0RlbGV0ZSA9IHJlcXVpcmUoJy4vX3N0YWNrRGVsZXRlJyksXG4gICAgc3RhY2tHZXQgPSByZXF1aXJlKCcuL19zdGFja0dldCcpLFxuICAgIHN0YWNrSGFzID0gcmVxdWlyZSgnLi9fc3RhY2tIYXMnKSxcbiAgICBzdGFja1NldCA9IHJlcXVpcmUoJy4vX3N0YWNrU2V0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHN0YWNrIGNhY2hlIG9iamVjdCB0byBzdG9yZSBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBjb25zdHJ1Y3RvclxuICogQHBhcmFtIHtBcnJheX0gW2VudHJpZXNdIFRoZSBrZXktdmFsdWUgcGFpcnMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFN0YWNrKGVudHJpZXMpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKTtcbiAgdGhpcy5zaXplID0gZGF0YS5zaXplO1xufVxuXG4vLyBBZGQgbWV0aG9kcyB0byBgU3RhY2tgLlxuU3RhY2sucHJvdG90eXBlLmNsZWFyID0gc3RhY2tDbGVhcjtcblN0YWNrLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBzdGFja0RlbGV0ZTtcblN0YWNrLnByb3RvdHlwZS5nZXQgPSBzdGFja0dldDtcblN0YWNrLnByb3RvdHlwZS5oYXMgPSBzdGFja0hhcztcblN0YWNrLnByb3RvdHlwZS5zZXQgPSBzdGFja1NldDtcblxubW9kdWxlLmV4cG9ydHMgPSBTdGFjaztcbiIsInZhciByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxubW9kdWxlLmV4cG9ydHMgPSBTeW1ib2w7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgVWludDhBcnJheSA9IHJvb3QuVWludDhBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBVaW50OEFycmF5O1xuIiwidmFyIGdldE5hdGl2ZSA9IHJlcXVpcmUoJy4vX2dldE5hdGl2ZScpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIHRoYXQgYXJlIHZlcmlmaWVkIHRvIGJlIG5hdGl2ZS4gKi9cbnZhciBXZWFrTWFwID0gZ2V0TmF0aXZlKHJvb3QsICdXZWFrTWFwJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gV2Vha01hcDtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZpbHRlcmAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXNJbmRleCA9IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbcmVzSW5kZXgrK10gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsInZhciBiYXNlVGltZXMgPSByZXF1aXJlKCcuL19iYXNlVGltZXMnKSxcbiAgICBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNCdWZmZXIgPSByZXF1aXJlKCcuL2lzQnVmZmVyJyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vX2lzSW5kZXgnKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheSh2YWx1ZSksXG4gICAgICBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSksXG4gICAgICBpc0J1ZmYgPSAhaXNBcnIgJiYgIWlzQXJnICYmIGlzQnVmZmVyKHZhbHVlKSxcbiAgICAgIGlzVHlwZSA9ICFpc0FyciAmJiAhaXNBcmcgJiYgIWlzQnVmZiAmJiBpc1R5cGVkQXJyYXkodmFsdWUpLFxuICAgICAgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlLFxuICAgICAgcmVzdWx0ID0gc2tpcEluZGV4ZXMgPyBiYXNlVGltZXModmFsdWUubGVuZ3RoLCBTdHJpbmcpIDogW10sXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIGZvciAodmFyIGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgIGtleSA9PSAnbGVuZ3RoJyB8fFxuICAgICAgICAgICAvLyBOb2RlLmpzIDAuMTAgaGFzIGVudW1lcmFibGUgbm9uLWluZGV4IHByb3BlcnRpZXMgb24gYnVmZmVycy5cbiAgICAgICAgICAgKGlzQnVmZiAmJiAoa2V5ID09ICdvZmZzZXQnIHx8IGtleSA9PSAncGFyZW50JykpIHx8XG4gICAgICAgICAgIC8vIFBoYW50b21KUyAyIGhhcyBlbnVtZXJhYmxlIG5vbi1pbmRleCBwcm9wZXJ0aWVzIG9uIHR5cGVkIGFycmF5cy5cbiAgICAgICAgICAgKGlzVHlwZSAmJiAoa2V5ID09ICdidWZmZXInIHx8IGtleSA9PSAnYnl0ZUxlbmd0aCcgfHwga2V5ID09ICdieXRlT2Zmc2V0JykpIHx8XG4gICAgICAgICAgIC8vIFNraXAgaW5kZXggcHJvcGVydGllcy5cbiAgICAgICAgICAgaXNJbmRleChrZXksIGxlbmd0aClcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlMaWtlS2V5cztcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLm1hcGAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbaW5kZXhdID0gaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlNYXA7XG4iLCIvKipcbiAqIEFwcGVuZHMgdGhlIGVsZW1lbnRzIG9mIGB2YWx1ZXNgIHRvIGBhcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBhcHBlbmQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgYGFycmF5YC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlQdXNoKGFycmF5LCB2YWx1ZXMpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoLFxuICAgICAgb2Zmc2V0ID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgYXJyYXlbb2Zmc2V0ICsgaW5kZXhdID0gdmFsdWVzW2luZGV4XTtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlQdXNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlXG4gKiBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBhbnkgZWxlbWVudCBwYXNzZXMgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5U29tZShhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG4iLCJ2YXIgZXEgPSByZXF1aXJlKCcuL2VxJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgaW5kZXggYXQgd2hpY2ggdGhlIGBrZXlgIGlzIGZvdW5kIGluIGBhcnJheWAgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0ga2V5IFRoZSBrZXkgdG8gc2VhcmNoIGZvci5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGFzc29jSW5kZXhPZihhcnJheSwga2V5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIGlmIChlcShhcnJheVtsZW5ndGhdWzBdLCBrZXkpKSB7XG4gICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzb2NJbmRleE9mO1xuIiwidmFyIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL19iYXNlRm9yT3duJyksXG4gICAgY3JlYXRlQmFzZUVhY2ggPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R9IFJldHVybnMgYGNvbGxlY3Rpb25gLlxuICovXG52YXIgYmFzZUVhY2ggPSBjcmVhdGVCYXNlRWFjaChiYXNlRm9yT3duKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRWFjaDtcbiIsInZhciBiYXNlRWFjaCA9IHJlcXVpcmUoJy4vX2Jhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmlsdGVyYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmlsdGVyO1xuIiwidmFyIGNyZWF0ZUJhc2VGb3IgPSByZXF1aXJlKCcuL19jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JPd25gIHdoaWNoIGl0ZXJhdGVzIG92ZXIgYG9iamVjdGBcbiAqIHByb3BlcnRpZXMgcmV0dXJuZWQgYnkgYGtleXNGdW5jYCBhbmQgaW52b2tlcyBgaXRlcmF0ZWVgIGZvciBlYWNoIHByb3BlcnR5LlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGtleXNGdW5jIFRoZSBmdW5jdGlvbiB0byBnZXQgdGhlIGtleXMgb2YgYG9iamVjdGAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG52YXIgYmFzZUZvciA9IGNyZWF0ZUJhc2VGb3IoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRm9yO1xuIiwidmFyIGJhc2VGb3IgPSByZXF1aXJlKCcuL19iYXNlRm9yJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGb3JPd24ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gb2JqZWN0ICYmIGJhc2VGb3Iob2JqZWN0LCBpdGVyYXRlZSwga2V5cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvck93bjtcbiIsInZhciBjYXN0UGF0aCA9IHJlcXVpcmUoJy4vX2Nhc3RQYXRoJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmdldGAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWZhdWx0IHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gYmFzZUdldChvYmplY3QsIHBhdGgpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gMCxcbiAgICAgIGxlbmd0aCA9IHBhdGgubGVuZ3RoO1xuXG4gIHdoaWxlIChvYmplY3QgIT0gbnVsbCAmJiBpbmRleCA8IGxlbmd0aCkge1xuICAgIG9iamVjdCA9IG9iamVjdFt0b0tleShwYXRoW2luZGV4KytdKV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG4iLCJ2YXIgYXJyYXlQdXNoID0gcmVxdWlyZSgnLi9fYXJyYXlQdXNoJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRBbGxLZXlzYCBhbmQgYGdldEFsbEtleXNJbmAgd2hpY2ggdXNlc1xuICogYGtleXNGdW5jYCBhbmQgYHN5bWJvbHNGdW5jYCB0byBnZXQgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kXG4gKiBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc3ltYm9sc0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUgc3ltYm9scyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VHZXRBbGxLZXlzKG9iamVjdCwga2V5c0Z1bmMsIHN5bWJvbHNGdW5jKSB7XG4gIHZhciByZXN1bHQgPSBrZXlzRnVuYyhvYmplY3QpO1xuICByZXR1cm4gaXNBcnJheShvYmplY3QpID8gcmVzdWx0IDogYXJyYXlQdXNoKHJlc3VsdCwgc3ltYm9sc0Z1bmMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUdldEFsbEtleXM7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5oYXNJbmAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29iamVjdF0gVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBrZXkgVGhlIGtleSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUhhc0luKG9iamVjdCwga2V5KSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBrZXkgaW4gT2JqZWN0KG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUhhc0luO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0FyZ3VtZW50c2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LFxuICovXG5mdW5jdGlvbiBiYXNlSXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gYXJnc1RhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNBcmd1bWVudHM7XG4iLCJ2YXIgYmFzZUlzRXF1YWxEZWVwID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aGljaCBzdXBwb3J0cyBwYXJ0aWFsIGNvbXBhcmlzb25zXG4gKiBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy5cbiAqICAxIC0gVW5vcmRlcmVkIGNvbXBhcmlzb25cbiAqICAyIC0gUGFydGlhbCBjb21wYXJpc29uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbc3RhY2tdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWwodmFsdWUsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykge1xuICBpZiAodmFsdWUgPT09IG90aGVyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXI7XG4gIH1cbiAgcmV0dXJuIGJhc2VJc0VxdWFsRGVlcCh2YWx1ZSwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGJhc2VJc0VxdWFsLCBzdGFjayk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzRXF1YWw7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBlcXVhbEJ5VGFnID0gcmVxdWlyZSgnLi9fZXF1YWxCeVRhZycpLFxuICAgIGVxdWFsT2JqZWN0cyA9IHJlcXVpcmUoJy4vX2VxdWFsT2JqZWN0cycpLFxuICAgIGdldFRhZyA9IHJlcXVpcmUoJy4vX2dldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuL2lzVHlwZWRBcnJheScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcmdzVGFnID0gJ1tvYmplY3QgQXJndW1lbnRzXScsXG4gICAgYXJyYXlUYWcgPSAnW29iamVjdCBBcnJheV0nLFxuICAgIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxgIGZvciBhcnJheXMgYW5kIG9iamVjdHMgd2hpY2ggcGVyZm9ybXNcbiAqIGRlZXAgY29tcGFyaXNvbnMgYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cyBlbmFibGluZyBvYmplY3RzIHdpdGggY2lyY3VsYXJcbiAqIHJlZmVyZW5jZXMgdG8gYmUgY29tcGFyZWQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IFtzdGFja10gVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsRGVlcChvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBvYmpJc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIG90aElzQXJyID0gaXNBcnJheShvdGhlciksXG4gICAgICBvYmpUYWcgPSBvYmpJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG9iamVjdCksXG4gICAgICBvdGhUYWcgPSBvdGhJc0FyciA/IGFycmF5VGFnIDogZ2V0VGFnKG90aGVyKTtcblxuICBvYmpUYWcgPSBvYmpUYWcgPT0gYXJnc1RhZyA/IG9iamVjdFRhZyA6IG9ialRhZztcbiAgb3RoVGFnID0gb3RoVGFnID09IGFyZ3NUYWcgPyBvYmplY3RUYWcgOiBvdGhUYWc7XG5cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiBpc0J1ZmZlcihvYmplY3QpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihvdGhlcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb2JqSXNBcnIgPSB0cnVlO1xuICAgIG9iaklzT2JqID0gZmFsc2U7XG4gIH1cbiAgaWYgKGlzU2FtZVRhZyAmJiAhb2JqSXNPYmopIHtcbiAgICBzdGFjayB8fCAoc3RhY2sgPSBuZXcgU3RhY2spO1xuICAgIHJldHVybiAob2JqSXNBcnIgfHwgaXNUeXBlZEFycmF5KG9iamVjdCkpXG4gICAgICA/IGVxdWFsQXJyYXlzKG9iamVjdCwgb3RoZXIsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spXG4gICAgICA6IGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgb2JqVGFnLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbiAgfVxuICBpZiAoIShiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcpKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgdmFyIG9ialVud3JhcHBlZCA9IG9iaklzV3JhcHBlZCA/IG9iamVjdC52YWx1ZSgpIDogb2JqZWN0LFxuICAgICAgICAgIG90aFVud3JhcHBlZCA9IG90aElzV3JhcHBlZCA/IG90aGVyLnZhbHVlKCkgOiBvdGhlcjtcblxuICAgICAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgICAgIHJldHVybiBlcXVhbEZ1bmMob2JqVW53cmFwcGVkLCBvdGhVbndyYXBwZWQsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIHN0YWNrKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFpc1NhbWVUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3RhY2sgfHwgKHN0YWNrID0gbmV3IFN0YWNrKTtcbiAgcmV0dXJuIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlSXNFcXVhbERlZXA7XG4iLCJ2YXIgU3RhY2sgPSByZXF1aXJlKCcuL19TdGFjaycpLFxuICAgIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmlzTWF0Y2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge09iamVjdH0gc291cmNlIFRoZSBvYmplY3Qgb2YgcHJvcGVydHkgdmFsdWVzIHRvIG1hdGNoLlxuICogQHBhcmFtIHtBcnJheX0gbWF0Y2hEYXRhIFRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBvYmplY3RgIGlzIGEgbWF0Y2gsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzTWF0Y2gob2JqZWN0LCBzb3VyY2UsIG1hdGNoRGF0YSwgY3VzdG9taXplcikge1xuICB2YXIgaW5kZXggPSBtYXRjaERhdGEubGVuZ3RoLFxuICAgICAgbGVuZ3RoID0gaW5kZXgsXG4gICAgICBub0N1c3RvbWl6ZXIgPSAhY3VzdG9taXplcjtcblxuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm4gIWxlbmd0aDtcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgd2hpbGUgKGluZGV4LS0pIHtcbiAgICB2YXIgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgaWYgKChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSlcbiAgICAgICAgICA/IGRhdGFbMV0gIT09IG9iamVjdFtkYXRhWzBdXVxuICAgICAgICAgIDogIShkYXRhWzBdIGluIG9iamVjdClcbiAgICAgICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgZGF0YSA9IG1hdGNoRGF0YVtpbmRleF07XG4gICAgdmFyIGtleSA9IGRhdGFbMF0sXG4gICAgICAgIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIHNyY1ZhbHVlID0gZGF0YVsxXTtcblxuICAgIGlmIChub0N1c3RvbWl6ZXIgJiYgZGF0YVsyXSkge1xuICAgICAgaWYgKG9ialZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzdGFjayA9IG5ldyBTdGFjaztcbiAgICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjdXN0b21pemVyKG9ialZhbHVlLCBzcmNWYWx1ZSwga2V5LCBvYmplY3QsIHNvdXJjZSwgc3RhY2spO1xuICAgICAgfVxuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWRcbiAgICAgICAgICAgID8gYmFzZUlzRXF1YWwoc3JjVmFsdWUsIG9ialZhbHVlLCBDT01QQVJFX1BBUlRJQUxfRkxBRyB8IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcsIGN1c3RvbWl6ZXIsIHN0YWNrKVxuICAgICAgICAgICAgOiByZXN1bHRcbiAgICAgICAgICApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTWF0Y2g7XG4iLCJ2YXIgaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaXNGdW5jdGlvbicpLFxuICAgIGlzTWFza2VkID0gcmVxdWlyZSgnLi9faXNNYXNrZWQnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKlxuICogVXNlZCB0byBtYXRjaCBgUmVnRXhwYFxuICogW3N5bnRheCBjaGFyYWN0ZXJzXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1wYXR0ZXJucykuXG4gKi9cbnZhciByZVJlZ0V4cENoYXIgPSAvW1xcXFxeJC4qKz8oKVtcXF17fXxdL2c7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBob3N0IGNvbnN0cnVjdG9ycyAoU2FmYXJpKS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGlmIGEgbWV0aG9kIGlzIG5hdGl2ZS4gKi9cbnZhciByZUlzTmF0aXZlID0gUmVnRXhwKCdeJyArXG4gIGZ1bmNUb1N0cmluZy5jYWxsKGhhc093blByb3BlcnR5KS5yZXBsYWNlKHJlUmVnRXhwQ2hhciwgJ1xcXFwkJicpXG4gIC5yZXBsYWNlKC9oYXNPd25Qcm9wZXJ0eXwoZnVuY3Rpb24pLio/KD89XFxcXFxcKCl8IGZvciAuKz8oPz1cXFxcXFxdKS9nLCAnJDEuKj8nKSArICckJ1xuKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc05hdGl2ZWAgd2l0aG91dCBiYWQgc2hpbSBjaGVja3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBuYXRpdmUgZnVuY3Rpb24sXG4gKiAgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKCFpc09iamVjdCh2YWx1ZSkgfHwgaXNNYXNrZWQodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwYXR0ZXJuID0gaXNGdW5jdGlvbih2YWx1ZSkgPyByZUlzTmF0aXZlIDogcmVJc0hvc3RDdG9yO1xuICByZXR1cm4gcGF0dGVybi50ZXN0KHRvU291cmNlKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUlzTmF0aXZlO1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNMZW5ndGggPSByZXF1aXJlKCcuL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGRhdGFWaWV3VGFnID0gJ1tvYmplY3QgRGF0YVZpZXddJyxcbiAgICBmbG9hdDMyVGFnID0gJ1tvYmplY3QgRmxvYXQzMkFycmF5XScsXG4gICAgZmxvYXQ2NFRhZyA9ICdbb2JqZWN0IEZsb2F0NjRBcnJheV0nLFxuICAgIGludDhUYWcgPSAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICBpbnQxNlRhZyA9ICdbb2JqZWN0IEludDE2QXJyYXldJyxcbiAgICBpbnQzMlRhZyA9ICdbb2JqZWN0IEludDMyQXJyYXldJyxcbiAgICB1aW50OFRhZyA9ICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICB1aW50OENsYW1wZWRUYWcgPSAnW29iamVjdCBVaW50OENsYW1wZWRBcnJheV0nLFxuICAgIHVpbnQxNlRhZyA9ICdbb2JqZWN0IFVpbnQxNkFycmF5XScsXG4gICAgdWludDMyVGFnID0gJ1tvYmplY3QgVWludDMyQXJyYXldJztcblxuLyoqIFVzZWQgdG8gaWRlbnRpZnkgYHRvU3RyaW5nVGFnYCB2YWx1ZXMgb2YgdHlwZWQgYXJyYXlzLiAqL1xudmFyIHR5cGVkQXJyYXlUYWdzID0ge307XG50eXBlZEFycmF5VGFnc1tmbG9hdDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Zsb2F0NjRUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDhUYWddID0gdHlwZWRBcnJheVRhZ3NbaW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW2ludDMyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW3VpbnQ4VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50OENsYW1wZWRUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDE2VGFnXSA9XG50eXBlZEFycmF5VGFnc1t1aW50MzJUYWddID0gdHJ1ZTtcbnR5cGVkQXJyYXlUYWdzW2FyZ3NUYWddID0gdHlwZWRBcnJheVRhZ3NbYXJyYXlUYWddID1cbnR5cGVkQXJyYXlUYWdzW2FycmF5QnVmZmVyVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Jvb2xUYWddID1cbnR5cGVkQXJyYXlUYWdzW2RhdGFWaWV3VGFnXSA9IHR5cGVkQXJyYXlUYWdzW2RhdGVUYWddID1cbnR5cGVkQXJyYXlUYWdzW2Vycm9yVGFnXSA9IHR5cGVkQXJyYXlUYWdzW2Z1bmNUYWddID1cbnR5cGVkQXJyYXlUYWdzW21hcFRhZ10gPSB0eXBlZEFycmF5VGFnc1tudW1iZXJUYWddID1cbnR5cGVkQXJyYXlUYWdzW29iamVjdFRhZ10gPSB0eXBlZEFycmF5VGFnc1tyZWdleHBUYWddID1cbnR5cGVkQXJyYXlUYWdzW3NldFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzdHJpbmdUYWddID1cbnR5cGVkQXJyYXlUYWdzW3dlYWtNYXBUYWddID0gZmFsc2U7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uaXNUeXBlZEFycmF5YCB3aXRob3V0IE5vZGUuanMgb3B0aW1pemF0aW9ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiZcbiAgICBpc0xlbmd0aCh2YWx1ZS5sZW5ndGgpICYmICEhdHlwZWRBcnJheVRhZ3NbYmFzZUdldFRhZyh2YWx1ZSldO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc1R5cGVkQXJyYXk7XG4iLCJ2YXIgYmFzZU1hdGNoZXMgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlTWF0Y2hlc1Byb3BlcnR5JyksXG4gICAgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLml0ZXJhdGVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbdmFsdWU9Xy5pZGVudGl0eV0gVGhlIHZhbHVlIHRvIGNvbnZlcnQgdG8gYW4gaXRlcmF0ZWUuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIGl0ZXJhdGVlLlxuICovXG5mdW5jdGlvbiBiYXNlSXRlcmF0ZWUodmFsdWUpIHtcbiAgLy8gRG9uJ3Qgc3RvcmUgdGhlIGB0eXBlb2ZgIHJlc3VsdCBpbiBhIHZhcmlhYmxlIHRvIGF2b2lkIGEgSklUIGJ1ZyBpbiBTYWZhcmkgOS5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTYwMzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gaXNBcnJheSh2YWx1ZSlcbiAgICAgID8gYmFzZU1hdGNoZXNQcm9wZXJ0eSh2YWx1ZVswXSwgdmFsdWVbMV0pXG4gICAgICA6IGJhc2VNYXRjaGVzKHZhbHVlKTtcbiAgfVxuICByZXR1cm4gcHJvcGVydHkodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJdGVyYXRlZTtcbiIsInZhciBpc1Byb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2lzUHJvdG90eXBlJyksXG4gICAgbmF0aXZlS2V5cyA9IHJlcXVpcmUoJy4vX25hdGl2ZUtleXMnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5rZXlzYCB3aGljaCBkb2Vzbid0IHRyZWF0IHNwYXJzZSBhcnJheXMgYXMgZGVuc2UuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VLZXlzKG9iamVjdCkge1xuICBpZiAoIWlzUHJvdG90eXBlKG9iamVjdCkpIHtcbiAgICByZXR1cm4gbmF0aXZlS2V5cyhvYmplY3QpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIE9iamVjdChvYmplY3QpKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBrZXkpICYmIGtleSAhPSAnY29uc3RydWN0b3InKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VLZXlzO1xuIiwidmFyIGJhc2VJc01hdGNoID0gcmVxdWlyZSgnLi9fYmFzZUlzTWF0Y2gnKSxcbiAgICBnZXRNYXRjaERhdGEgPSByZXF1aXJlKCcuL19nZXRNYXRjaERhdGEnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc2Agd2hpY2ggZG9lc24ndCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzKHNvdXJjZSkge1xuICB2YXIgbWF0Y2hEYXRhID0gZ2V0TWF0Y2hEYXRhKHNvdXJjZSk7XG4gIGlmIChtYXRjaERhdGEubGVuZ3RoID09IDEgJiYgbWF0Y2hEYXRhWzBdWzJdKSB7XG4gICAgcmV0dXJuIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKG1hdGNoRGF0YVswXVswXSwgbWF0Y2hEYXRhWzBdWzFdKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PT0gc291cmNlIHx8IGJhc2VJc01hdGNoKG9iamVjdCwgc291cmNlLCBtYXRjaERhdGEpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXRjaGVzO1xuIiwidmFyIGJhc2VJc0VxdWFsID0gcmVxdWlyZSgnLi9fYmFzZUlzRXF1YWwnKSxcbiAgICBnZXQgPSByZXF1aXJlKCcuL2dldCcpLFxuICAgIGhhc0luID0gcmVxdWlyZSgnLi9oYXNJbicpLFxuICAgIGlzS2V5ID0gcmVxdWlyZSgnLi9faXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL19pc1N0cmljdENvbXBhcmFibGUnKSxcbiAgICBtYXRjaGVzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX21hdGNoZXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgdG9LZXkgPSByZXF1aXJlKCcuL190b0tleScpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDEsXG4gICAgQ09NUEFSRV9VTk9SREVSRURfRkxBRyA9IDI7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ubWF0Y2hlc1Byb3BlcnR5YCB3aGljaCBkb2Vzbid0IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgaWYgKGlzS2V5KHBhdGgpICYmIGlzU3RyaWN0Q29tcGFyYWJsZShzcmNWYWx1ZSkpIHtcbiAgICByZXR1cm4gbWF0Y2hlc1N0cmljdENvbXBhcmFibGUodG9LZXkocGF0aCksIHNyY1ZhbHVlKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIG9ialZhbHVlID0gZ2V0KG9iamVjdCwgcGF0aCk7XG4gICAgcmV0dXJuIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG9ialZhbHVlID09PSBzcmNWYWx1ZSlcbiAgICAgID8gaGFzSW4ob2JqZWN0LCBwYXRoKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIENPTVBBUkVfUEFSVElBTF9GTEFHIHwgQ09NUEFSRV9VTk9SREVSRURfRkxBRyk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8ucHJvcGVydHlgIHdpdGhvdXQgc3VwcG9ydCBmb3IgZGVlcCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5KGtleSkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVByb3BlcnR5O1xuIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL19iYXNlR2V0Jyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUHJvcGVydHlgIHdoaWNoIHN1cHBvcnRzIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVByb3BlcnR5RGVlcChwYXRoKSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eURlZXA7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRpbWVzYCB3aXRob3V0IHN1cHBvcnQgZm9yIGl0ZXJhdGVlIHNob3J0aGFuZHNcbiAqIG9yIG1heCBhcnJheSBsZW5ndGggY2hlY2tzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGludm9rZSBgaXRlcmF0ZWVgLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRpbWVzKG4sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobik7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBuKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGluZGV4KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUaW1lcztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBhcnJheU1hcCA9IHJlcXVpcmUoJy4vX2FycmF5TWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzU3ltYm9sID0gcmVxdWlyZSgnLi9pc1N5bWJvbCcpO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBJTkZJTklUWSA9IDEgLyAwO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVG9TdHJpbmcgPSBzeW1ib2xQcm90byA/IHN5bWJvbFByb3RvLnRvU3RyaW5nIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnRvU3RyaW5nYCB3aGljaCBkb2Vzbid0IGNvbnZlcnQgbnVsbGlzaFxuICogdmFsdWVzIHRvIGVtcHR5IHN0cmluZ3MuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHByb2Nlc3MuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGJhc2VUb1N0cmluZyh2YWx1ZSkge1xuICAvLyBFeGl0IGVhcmx5IGZvciBzdHJpbmdzIHRvIGF2b2lkIGEgcGVyZm9ybWFuY2UgaGl0IGluIHNvbWUgZW52aXJvbm1lbnRzLlxuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbnZlcnQgdmFsdWVzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgcmV0dXJuIGFycmF5TWFwKHZhbHVlLCBiYXNlVG9TdHJpbmcpICsgJyc7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJyc7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICh2YWx1ZSArICcnKTtcbiAgcmV0dXJuIChyZXN1bHQgPT0gJzAnICYmICgxIC8gdmFsdWUpID09IC1JTkZJTklUWSkgPyAnLTAnIDogcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VUb1N0cmluZztcbiIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8udW5hcnlgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RvcmluZyBtZXRhZGF0YS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2FwIGFyZ3VtZW50cyBmb3IuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBjYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VVbmFyeShmdW5jKSB7XG4gIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jKHZhbHVlKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlVW5hcnk7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIGBjYWNoZWAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBjYWNoZUhhcyhjYWNoZSwga2V5KSB7XG4gIHJldHVybiBjYWNoZS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUhhcztcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHN0cmluZ1RvUGF0aCA9IHJlcXVpcmUoJy4vX3N0cmluZ1RvUGF0aCcpLFxuICAgIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG4vKipcbiAqIENhc3RzIGB2YWx1ZWAgdG8gYSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGNhc3QgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gY2FzdFBhdGgodmFsdWUsIG9iamVjdCkge1xuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIGlzS2V5KHZhbHVlLCBvYmplY3QpID8gW3ZhbHVlXSA6IHN0cmluZ1RvUGF0aCh0b1N0cmluZyh2YWx1ZSkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhc3RQYXRoO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvdmVycmVhY2hpbmcgY29yZS1qcyBzaGltcy4gKi9cbnZhciBjb3JlSnNEYXRhID0gcm9vdFsnX19jb3JlLWpzX3NoYXJlZF9fJ107XG5cbm1vZHVsZS5leHBvcnRzID0gY29yZUpzRGF0YTtcbiIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYGJhc2VFYWNoYCBvciBgYmFzZUVhY2hSaWdodGAgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVhY2hGdW5jIFRoZSBmdW5jdGlvbiB0byBpdGVyYXRlIG92ZXIgYSBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRWFjaChlYWNoRnVuYywgZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihjb2xsZWN0aW9uLCBpdGVyYXRlZSkge1xuICAgIGlmIChjb2xsZWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbiAgICBpZiAoIWlzQXJyYXlMaWtlKGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXR1cm4gZWFjaEZ1bmMoY29sbGVjdGlvbiwgaXRlcmF0ZWUpO1xuICAgIH1cbiAgICB2YXIgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtpbmRleF0sIGluZGV4LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVCYXNlRWFjaDtcbiIsIi8qKlxuICogQ3JlYXRlcyBhIGJhc2UgZnVuY3Rpb24gZm9yIG1ldGhvZHMgbGlrZSBgXy5mb3JJbmAgYW5kIGBfLmZvck93bmAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2Zyb21SaWdodF0gU3BlY2lmeSBpdGVyYXRpbmcgZnJvbSByaWdodCB0byBsZWZ0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYmFzZSBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQmFzZUZvcihmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIGtleXNGdW5jKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICB2YXIga2V5ID0gcHJvcHNbZnJvbVJpZ2h0ID8gbGVuZ3RoIDogKytpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG4iLCJ2YXIgU2V0Q2FjaGUgPSByZXF1aXJlKCcuL19TZXRDYWNoZScpLFxuICAgIGFycmF5U29tZSA9IHJlcXVpcmUoJy4vX2FycmF5U29tZScpLFxuICAgIGNhY2hlSGFzID0gcmVxdWlyZSgnLi9fY2FjaGVIYXMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgdmFsdWUgY29tcGFyaXNvbnMuICovXG52YXIgQ09NUEFSRV9QQVJUSUFMX0ZMQUcgPSAxLFxuICAgIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcgPSAyO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3IgYXJyYXlzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0FycmF5fSBvdGhlciBUaGUgb3RoZXIgYXJyYXkgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBiaXRtYXNrIFRoZSBiaXRtYXNrIGZsYWdzLiBTZWUgYGJhc2VJc0VxdWFsYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3VzdG9taXplciBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmlzb25zLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtPYmplY3R9IHN0YWNrIFRyYWNrcyB0cmF2ZXJzZWQgYGFycmF5YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBhcnJMZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBvdGhMZW5ndGggPSBvdGhlci5sZW5ndGg7XG5cbiAgaWYgKGFyckxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIShpc1BhcnRpYWwgJiYgb3RoTGVuZ3RoID4gYXJyTGVuZ3RoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KGFycmF5KTtcbiAgaWYgKHN0YWNrZWQgJiYgc3RhY2suZ2V0KG90aGVyKSkge1xuICAgIHJldHVybiBzdGFja2VkID09IG90aGVyO1xuICB9XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gdHJ1ZSxcbiAgICAgIHNlZW4gPSAoYml0bWFzayAmIENPTVBBUkVfVU5PUkRFUkVEX0ZMQUcpID8gbmV3IFNldENhY2hlIDogdW5kZWZpbmVkO1xuXG4gIHN0YWNrLnNldChhcnJheSwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIGFycmF5KTtcblxuICAvLyBJZ25vcmUgbm9uLWluZGV4IHByb3BlcnRpZXMuXG4gIHdoaWxlICgrK2luZGV4IDwgYXJyTGVuZ3RoKSB7XG4gICAgdmFyIGFyclZhbHVlID0gYXJyYXlbaW5kZXhdLFxuICAgICAgICBvdGhWYWx1ZSA9IG90aGVyW2luZGV4XTtcblxuICAgIGlmIChjdXN0b21pemVyKSB7XG4gICAgICB2YXIgY29tcGFyZWQgPSBpc1BhcnRpYWxcbiAgICAgICAgPyBjdXN0b21pemVyKG90aFZhbHVlLCBhcnJWYWx1ZSwgaW5kZXgsIG90aGVyLCBhcnJheSwgc3RhY2spXG4gICAgICAgIDogY3VzdG9taXplcihhcnJWYWx1ZSwgb3RoVmFsdWUsIGluZGV4LCBhcnJheSwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgaWYgKGNvbXBhcmVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChjb21wYXJlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKHNlZW4pIHtcbiAgICAgIGlmICghYXJyYXlTb21lKG90aGVyLCBmdW5jdGlvbihvdGhWYWx1ZSwgb3RoSW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghY2FjaGVIYXMoc2Vlbiwgb3RoSW5kZXgpICYmXG4gICAgICAgICAgICAgICAgKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBzZWVuLnB1c2gob3RoSW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKCEoXG4gICAgICAgICAgYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8XG4gICAgICAgICAgICBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaylcbiAgICAgICAgKSkge1xuICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgc3RhY2tbJ2RlbGV0ZSddKGFycmF5KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEFycmF5cztcbiIsInZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19TeW1ib2wnKSxcbiAgICBVaW50OEFycmF5ID0gcmVxdWlyZSgnLi9fVWludDhBcnJheScpLFxuICAgIGVxID0gcmVxdWlyZSgnLi9lcScpLFxuICAgIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9fZXF1YWxBcnJheXMnKSxcbiAgICBtYXBUb0FycmF5ID0gcmVxdWlyZSgnLi9fbWFwVG9BcnJheScpLFxuICAgIHNldFRvQXJyYXkgPSByZXF1aXJlKCcuL19zZXRUb0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIHZhbHVlIGNvbXBhcmlzb25zLiAqL1xudmFyIENPTVBBUkVfUEFSVElBTF9GTEFHID0gMSxcbiAgICBDT01QQVJFX1VOT1JERVJFRF9GTEFHID0gMjtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbWFwVGFnID0gJ1tvYmplY3QgTWFwXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc2V0VGFnID0gJ1tvYmplY3QgU2V0XScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXScsXG4gICAgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbnZhciBhcnJheUJ1ZmZlclRhZyA9ICdbb2JqZWN0IEFycmF5QnVmZmVyXScsXG4gICAgZGF0YVZpZXdUYWcgPSAnW29iamVjdCBEYXRhVmlld10nO1xuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbnZhciBzeW1ib2xQcm90byA9IFN5bWJvbCA/IFN5bWJvbC5wcm90b3R5cGUgOiB1bmRlZmluZWQsXG4gICAgc3ltYm9sVmFsdWVPZiA9IHN5bWJvbFByb3RvID8gc3ltYm9sUHJvdG8udmFsdWVPZiA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGNvbXBhcmluZyBvYmplY3RzIG9mXG4gKiB0aGUgc2FtZSBgdG9TdHJpbmdUYWdgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIG9ubHkgc3VwcG9ydHMgY29tcGFyaW5nIHZhbHVlcyB3aXRoIHRhZ3Mgb2ZcbiAqIGBCb29sZWFuYCwgYERhdGVgLCBgRXJyb3JgLCBgTnVtYmVyYCwgYFJlZ0V4cGAsIG9yIGBTdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvdGhlciBUaGUgb3RoZXIgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGFnIFRoZSBgdG9TdHJpbmdUYWdgIG9mIHRoZSBvYmplY3RzIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBiYXNlSXNFcXVhbGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGN1c3RvbWl6ZXIgVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGFjayBUcmFja3MgdHJhdmVyc2VkIGBvYmplY3RgIGFuZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxCeVRhZyhvYmplY3QsIG90aGVyLCB0YWcsIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spIHtcbiAgc3dpdGNoICh0YWcpIHtcbiAgICBjYXNlIGRhdGFWaWV3VGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgIChvYmplY3QuYnl0ZU9mZnNldCAhPSBvdGhlci5ieXRlT2Zmc2V0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBvYmplY3QgPSBvYmplY3QuYnVmZmVyO1xuICAgICAgb3RoZXIgPSBvdGhlci5idWZmZXI7XG5cbiAgICBjYXNlIGFycmF5QnVmZmVyVGFnOlxuICAgICAgaWYgKChvYmplY3QuYnl0ZUxlbmd0aCAhPSBvdGhlci5ieXRlTGVuZ3RoKSB8fFxuICAgICAgICAgICFlcXVhbEZ1bmMobmV3IFVpbnQ4QXJyYXkob2JqZWN0KSwgbmV3IFVpbnQ4QXJyYXkob3RoZXIpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcblxuICAgIGNhc2UgYm9vbFRhZzpcbiAgICBjYXNlIGRhdGVUYWc6XG4gICAgY2FzZSBudW1iZXJUYWc6XG4gICAgICAvLyBDb2VyY2UgYm9vbGVhbnMgdG8gYDFgIG9yIGAwYCBhbmQgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzLlxuICAgICAgLy8gSW52YWxpZCBkYXRlcyBhcmUgY29lcmNlZCB0byBgTmFOYC5cbiAgICAgIHJldHVybiBlcSgrb2JqZWN0LCArb3RoZXIpO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIHJlZ2V4cFRhZzpcbiAgICBjYXNlIHN0cmluZ1RhZzpcbiAgICAgIC8vIENvZXJjZSByZWdleGVzIHRvIHN0cmluZ3MgYW5kIHRyZWF0IHN0cmluZ3MsIHByaW1pdGl2ZXMgYW5kIG9iamVjdHMsXG4gICAgICAvLyBhcyBlcXVhbC4gU2VlIGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1yZWdleHAucHJvdG90eXBlLnRvc3RyaW5nXG4gICAgICAvLyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgICAgcmV0dXJuIG9iamVjdCA9PSAob3RoZXIgKyAnJyk7XG5cbiAgICBjYXNlIG1hcFRhZzpcbiAgICAgIHZhciBjb252ZXJ0ID0gbWFwVG9BcnJheTtcblxuICAgIGNhc2Ugc2V0VGFnOlxuICAgICAgdmFyIGlzUGFydGlhbCA9IGJpdG1hc2sgJiBDT01QQVJFX1BBUlRJQUxfRkxBRztcbiAgICAgIGNvbnZlcnQgfHwgKGNvbnZlcnQgPSBzZXRUb0FycmF5KTtcblxuICAgICAgaWYgKG9iamVjdC5zaXplICE9IG90aGVyLnNpemUgJiYgIWlzUGFydGlhbCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gICAgICB2YXIgc3RhY2tlZCA9IHN0YWNrLmdldChvYmplY3QpO1xuICAgICAgaWYgKHN0YWNrZWQpIHtcbiAgICAgICAgcmV0dXJuIHN0YWNrZWQgPT0gb3RoZXI7XG4gICAgICB9XG4gICAgICBiaXRtYXNrIHw9IENPTVBBUkVfVU5PUkRFUkVEX0ZMQUc7XG5cbiAgICAgIC8vIFJlY3Vyc2l2ZWx5IGNvbXBhcmUgb2JqZWN0cyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgICAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICAgICAgdmFyIHJlc3VsdCA9IGVxdWFsQXJyYXlzKGNvbnZlcnQob2JqZWN0KSwgY29udmVydChvdGhlciksIGJpdG1hc2ssIGN1c3RvbWl6ZXIsIGVxdWFsRnVuYywgc3RhY2spO1xuICAgICAgc3RhY2tbJ2RlbGV0ZSddKG9iamVjdCk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuXG4gICAgY2FzZSBzeW1ib2xUYWc6XG4gICAgICBpZiAoc3ltYm9sVmFsdWVPZikge1xuICAgICAgICByZXR1cm4gc3ltYm9sVmFsdWVPZi5jYWxsKG9iamVjdCkgPT0gc3ltYm9sVmFsdWVPZi5jYWxsKG90aGVyKTtcbiAgICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxCeVRhZztcbiIsInZhciBnZXRBbGxLZXlzID0gcmVxdWlyZSgnLi9fZ2V0QWxsS2V5cycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciB2YWx1ZSBjb21wYXJpc29ucy4gKi9cbnZhciBDT01QQVJFX1BBUlRJQUxfRkxBRyA9IDE7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBvYmplY3RzIHdpdGggc3VwcG9ydCBmb3JcbiAqIHBhcnRpYWwgZGVlcCBjb21wYXJpc29ucy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgYmFzZUlzRXF1YWxgIGZvciBtb3JlIGRldGFpbHMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjdXN0b21pemVyIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge09iamVjdH0gc3RhY2sgVHJhY2tzIHRyYXZlcnNlZCBgb2JqZWN0YCBhbmQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsT2JqZWN0cyhvYmplY3QsIG90aGVyLCBiaXRtYXNrLCBjdXN0b21pemVyLCBlcXVhbEZ1bmMsIHN0YWNrKSB7XG4gIHZhciBpc1BhcnRpYWwgPSBiaXRtYXNrICYgQ09NUEFSRV9QQVJUSUFMX0ZMQUcsXG4gICAgICBvYmpQcm9wcyA9IGdldEFsbEtleXMob2JqZWN0KSxcbiAgICAgIG9iakxlbmd0aCA9IG9ialByb3BzLmxlbmd0aCxcbiAgICAgIG90aFByb3BzID0gZ2V0QWxsS2V5cyhvdGhlciksXG4gICAgICBvdGhMZW5ndGggPSBvdGhQcm9wcy5sZW5ndGg7XG5cbiAgaWYgKG9iakxlbmd0aCAhPSBvdGhMZW5ndGggJiYgIWlzUGFydGlhbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc1BhcnRpYWwgPyBrZXkgaW4gb3RoZXIgOiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG90aGVyLCBrZXkpKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICAvLyBBc3N1bWUgY3ljbGljIHZhbHVlcyBhcmUgZXF1YWwuXG4gIHZhciBzdGFja2VkID0gc3RhY2suZ2V0KG9iamVjdCk7XG4gIGlmIChzdGFja2VkICYmIHN0YWNrLmdldChvdGhlcikpIHtcbiAgICByZXR1cm4gc3RhY2tlZCA9PSBvdGhlcjtcbiAgfVxuICB2YXIgcmVzdWx0ID0gdHJ1ZTtcbiAgc3RhY2suc2V0KG9iamVjdCwgb3RoZXIpO1xuICBzdGFjay5zZXQob3RoZXIsIG9iamVjdCk7XG5cbiAgdmFyIHNraXBDdG9yID0gaXNQYXJ0aWFsO1xuICB3aGlsZSAoKytpbmRleCA8IG9iakxlbmd0aCkge1xuICAgIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICB2YXIgb2JqVmFsdWUgPSBvYmplY3Rba2V5XSxcbiAgICAgICAgb3RoVmFsdWUgPSBvdGhlcltrZXldO1xuXG4gICAgaWYgKGN1c3RvbWl6ZXIpIHtcbiAgICAgIHZhciBjb21wYXJlZCA9IGlzUGFydGlhbFxuICAgICAgICA/IGN1c3RvbWl6ZXIob3RoVmFsdWUsIG9ialZhbHVlLCBrZXksIG90aGVyLCBvYmplY3QsIHN0YWNrKVxuICAgICAgICA6IGN1c3RvbWl6ZXIob2JqVmFsdWUsIG90aFZhbHVlLCBrZXksIG9iamVjdCwgb3RoZXIsIHN0YWNrKTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBvYmplY3RzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgaWYgKCEoY29tcGFyZWQgPT09IHVuZGVmaW5lZFxuICAgICAgICAgID8gKG9ialZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMob2JqVmFsdWUsIG90aFZhbHVlLCBiaXRtYXNrLCBjdXN0b21pemVyLCBzdGFjaykpXG4gICAgICAgICAgOiBjb21wYXJlZFxuICAgICAgICApKSB7XG4gICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBza2lwQ3RvciB8fCAoc2tpcEN0b3IgPSBrZXkgPT0gJ2NvbnN0cnVjdG9yJyk7XG4gIH1cbiAgaWYgKHJlc3VsdCAmJiAhc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBzdGFja1snZGVsZXRlJ10ob2JqZWN0KTtcbiAgc3RhY2tbJ2RlbGV0ZSddKG90aGVyKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbE9iamVjdHM7XG4iLCIvKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZyZWVHbG9iYWw7XG4iLCJ2YXIgYmFzZUdldEFsbEtleXMgPSByZXF1aXJlKCcuL19iYXNlR2V0QWxsS2V5cycpLFxuICAgIGdldFN5bWJvbHMgPSByZXF1aXJlKCcuL19nZXRTeW1ib2xzJyksXG4gICAga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2Ygb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHN5bWJvbHMuXG4gKi9cbmZ1bmN0aW9uIGdldEFsbEtleXMob2JqZWN0KSB7XG4gIHJldHVybiBiYXNlR2V0QWxsS2V5cyhvYmplY3QsIGtleXMsIGdldFN5bWJvbHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldEFsbEtleXM7XG4iLCJ2YXIgaXNLZXlhYmxlID0gcmVxdWlyZSgnLi9faXNLZXlhYmxlJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgZGF0YSBmb3IgYG1hcGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIHJlZmVyZW5jZSBrZXkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbWFwIGRhdGEuXG4gKi9cbmZ1bmN0aW9uIGdldE1hcERhdGEobWFwLCBrZXkpIHtcbiAgdmFyIGRhdGEgPSBtYXAuX19kYXRhX187XG4gIHJldHVybiBpc0tleWFibGUoa2V5KVxuICAgID8gZGF0YVt0eXBlb2Yga2V5ID09ICdzdHJpbmcnID8gJ3N0cmluZycgOiAnaGFzaCddXG4gICAgOiBkYXRhLm1hcDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNYXBEYXRhO1xuIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vX2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ0eSBuYW1lcywgdmFsdWVzLCBhbmQgY29tcGFyZSBmbGFncyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBtYXRjaCBkYXRhIG9mIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBnZXRNYXRjaERhdGEob2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHZhciBrZXkgPSByZXN1bHRbbGVuZ3RoXSxcbiAgICAgICAgdmFsdWUgPSBvYmplY3Rba2V5XTtcblxuICAgIHJlc3VsdFtsZW5ndGhdID0gW2tleSwgdmFsdWUsIGlzU3RyaWN0Q29tcGFyYWJsZSh2YWx1ZSldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0TWF0Y2hEYXRhO1xuIiwidmFyIGJhc2VJc05hdGl2ZSA9IHJlcXVpcmUoJy4vX2Jhc2VJc05hdGl2ZScpLFxuICAgIGdldFZhbHVlID0gcmVxdWlyZSgnLi9fZ2V0VmFsdWUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IGdldFZhbHVlKG9iamVjdCwga2V5KTtcbiAgcmV0dXJuIGJhc2VJc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiogQnVpbHQtaW4gdmFsdWUgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1Ub1N0cmluZ1RhZyA9IFN5bWJvbCA/IFN5bWJvbC50b1N0cmluZ1RhZyA6IHVuZGVmaW5lZDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VHZXRUYWdgIHdoaWNoIGlnbm9yZXMgYFN5bWJvbC50b1N0cmluZ1RhZ2AgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHJhdyBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBnZXRSYXdUYWcodmFsdWUpIHtcbiAgdmFyIGlzT3duID0gaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgc3ltVG9TdHJpbmdUYWcpLFxuICAgICAgdGFnID0gdmFsdWVbc3ltVG9TdHJpbmdUYWddO1xuXG4gIHRyeSB7XG4gICAgdmFsdWVbc3ltVG9TdHJpbmdUYWddID0gdW5kZWZpbmVkO1xuICAgIHZhciB1bm1hc2tlZCA9IHRydWU7XG4gIH0gY2F0Y2ggKGUpIHt9XG5cbiAgdmFyIHJlc3VsdCA9IG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xuICBpZiAodW5tYXNrZWQpIHtcbiAgICBpZiAoaXNPd24pIHtcbiAgICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHRhZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlIHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRSYXdUYWc7XG4iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuL19hcnJheUZpbHRlcicpLFxuICAgIHN0dWJBcnJheSA9IHJlcXVpcmUoJy4vc3R1YkFycmF5Jyk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVHZXRTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHN5bWJvbHMuXG4gKi9cbnZhciBnZXRTeW1ib2xzID0gIW5hdGl2ZUdldFN5bWJvbHMgPyBzdHViQXJyYXkgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICByZXR1cm4gYXJyYXlGaWx0ZXIobmF0aXZlR2V0U3ltYm9scyhvYmplY3QpLCBmdW5jdGlvbihzeW1ib2wpIHtcbiAgICByZXR1cm4gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsIHN5bWJvbCk7XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTeW1ib2xzO1xuIiwidmFyIERhdGFWaWV3ID0gcmVxdWlyZSgnLi9fRGF0YVZpZXcnKSxcbiAgICBNYXAgPSByZXF1aXJlKCcuL19NYXAnKSxcbiAgICBQcm9taXNlID0gcmVxdWlyZSgnLi9fUHJvbWlzZScpLFxuICAgIFNldCA9IHJlcXVpcmUoJy4vX1NldCcpLFxuICAgIFdlYWtNYXAgPSByZXF1aXJlKCcuL19XZWFrTWFwJyksXG4gICAgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICB0b1NvdXJjZSA9IHJlcXVpcmUoJy4vX3RvU291cmNlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICBwcm9taXNlVGFnID0gJ1tvYmplY3QgUHJvbWlzZV0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nLFxuICAgIHdlYWtNYXBUYWcgPSAnW29iamVjdCBXZWFrTWFwXSc7XG5cbnZhciBkYXRhVmlld1RhZyA9ICdbb2JqZWN0IERhdGFWaWV3XSc7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBtYXBzLCBzZXRzLCBhbmQgd2Vha21hcHMuICovXG52YXIgZGF0YVZpZXdDdG9yU3RyaW5nID0gdG9Tb3VyY2UoRGF0YVZpZXcpLFxuICAgIG1hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShNYXApLFxuICAgIHByb21pc2VDdG9yU3RyaW5nID0gdG9Tb3VyY2UoUHJvbWlzZSksXG4gICAgc2V0Q3RvclN0cmluZyA9IHRvU291cmNlKFNldCksXG4gICAgd2Vha01hcEN0b3JTdHJpbmcgPSB0b1NvdXJjZShXZWFrTWFwKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBgdG9TdHJpbmdUYWdgIG9mIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHF1ZXJ5LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgYHRvU3RyaW5nVGFnYC5cbiAqL1xudmFyIGdldFRhZyA9IGJhc2VHZXRUYWc7XG5cbi8vIEZhbGxiYWNrIGZvciBkYXRhIHZpZXdzLCBtYXBzLCBzZXRzLCBhbmQgd2VhayBtYXBzIGluIElFIDExIGFuZCBwcm9taXNlcyBpbiBOb2RlLmpzIDwgNi5cbmlmICgoRGF0YVZpZXcgJiYgZ2V0VGFnKG5ldyBEYXRhVmlldyhuZXcgQXJyYXlCdWZmZXIoMSkpKSAhPSBkYXRhVmlld1RhZykgfHxcbiAgICAoTWFwICYmIGdldFRhZyhuZXcgTWFwKSAhPSBtYXBUYWcpIHx8XG4gICAgKFByb21pc2UgJiYgZ2V0VGFnKFByb21pc2UucmVzb2x2ZSgpKSAhPSBwcm9taXNlVGFnKSB8fFxuICAgIChTZXQgJiYgZ2V0VGFnKG5ldyBTZXQpICE9IHNldFRhZykgfHxcbiAgICAoV2Vha01hcCAmJiBnZXRUYWcobmV3IFdlYWtNYXApICE9IHdlYWtNYXBUYWcpKSB7XG4gIGdldFRhZyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIHJlc3VsdCA9IGJhc2VHZXRUYWcodmFsdWUpLFxuICAgICAgICBDdG9yID0gcmVzdWx0ID09IG9iamVjdFRhZyA/IHZhbHVlLmNvbnN0cnVjdG9yIDogdW5kZWZpbmVkLFxuICAgICAgICBjdG9yU3RyaW5nID0gQ3RvciA/IHRvU291cmNlKEN0b3IpIDogJyc7XG5cbiAgICBpZiAoY3RvclN0cmluZykge1xuICAgICAgc3dpdGNoIChjdG9yU3RyaW5nKSB7XG4gICAgICAgIGNhc2UgZGF0YVZpZXdDdG9yU3RyaW5nOiByZXR1cm4gZGF0YVZpZXdUYWc7XG4gICAgICAgIGNhc2UgbWFwQ3RvclN0cmluZzogcmV0dXJuIG1hcFRhZztcbiAgICAgICAgY2FzZSBwcm9taXNlQ3RvclN0cmluZzogcmV0dXJuIHByb21pc2VUYWc7XG4gICAgICAgIGNhc2Ugc2V0Q3RvclN0cmluZzogcmV0dXJuIHNldFRhZztcbiAgICAgICAgY2FzZSB3ZWFrTWFwQ3RvclN0cmluZzogcmV0dXJuIHdlYWtNYXBUYWc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGFnO1xuIiwiLyoqXG4gKiBHZXRzIHRoZSB2YWx1ZSBhdCBga2V5YCBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBwcm9wZXJ0eSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VmFsdWUob2JqZWN0LCBrZXkpIHtcbiAgcmV0dXJuIG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VmFsdWU7XG4iLCJ2YXIgY2FzdFBhdGggPSByZXF1aXJlKCcuL19jYXN0UGF0aCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0luZGV4ID0gcmVxdWlyZSgnLi9faXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHBhdGhgIGV4aXN0cyBvbiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYXNGdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjayBwcm9wZXJ0aWVzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGBwYXRoYCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaGFzUGF0aChvYmplY3QsIHBhdGgsIGhhc0Z1bmMpIHtcbiAgcGF0aCA9IGNhc3RQYXRoKHBhdGgsIG9iamVjdCk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aCxcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHRvS2V5KHBhdGhbaW5kZXhdKTtcbiAgICBpZiAoIShyZXN1bHQgPSBvYmplY3QgIT0gbnVsbCAmJiBoYXNGdW5jKG9iamVjdCwga2V5KSkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBvYmplY3QgPSBvYmplY3Rba2V5XTtcbiAgfVxuICBpZiAocmVzdWx0IHx8ICsraW5kZXggIT0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBsZW5ndGggPSBvYmplY3QgPT0gbnVsbCA/IDAgOiBvYmplY3QubGVuZ3RoO1xuICByZXR1cm4gISFsZW5ndGggJiYgaXNMZW5ndGgobGVuZ3RoKSAmJiBpc0luZGV4KGtleSwgbGVuZ3RoKSAmJlxuICAgIChpc0FycmF5KG9iamVjdCkgfHwgaXNBcmd1bWVudHMob2JqZWN0KSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzUGF0aDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBrZXktdmFsdWUgZW50cmllcyBmcm9tIHRoZSBoYXNoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIEhhc2hcbiAqL1xuZnVuY3Rpb24gaGFzaENsZWFyKCkge1xuICB0aGlzLl9fZGF0YV9fID0gbmF0aXZlQ3JlYXRlID8gbmF0aXZlQ3JlYXRlKG51bGwpIDoge307XG4gIHRoaXMuc2l6ZSA9IDA7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaENsZWFyO1xuIiwiLyoqXG4gKiBSZW1vdmVzIGBrZXlgIGFuZCBpdHMgdmFsdWUgZnJvbSB0aGUgaGFzaC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgSGFzaFxuICogQHBhcmFtIHtPYmplY3R9IGhhc2ggVGhlIGhhc2ggdG8gbW9kaWZ5LlxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byByZW1vdmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc2hEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSB0aGlzLmhhcyhrZXkpICYmIGRlbGV0ZSB0aGlzLl9fZGF0YV9fW2tleV07XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNoRGVsZXRlO1xuIiwidmFyIG5hdGl2ZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX25hdGl2ZUNyZWF0ZScpO1xuXG4vKiogVXNlZCB0byBzdGFuZC1pbiBmb3IgYHVuZGVmaW5lZGAgaGFzaCB2YWx1ZXMuICovXG52YXIgSEFTSF9VTkRFRklORUQgPSAnX19sb2Rhc2hfaGFzaF91bmRlZmluZWRfXyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogR2V0cyB0aGUgaGFzaCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBoYXNoR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChuYXRpdmVDcmVhdGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gZGF0YVtrZXldO1xuICAgIHJldHVybiByZXN1bHQgPT09IEhBU0hfVU5ERUZJTkVEID8gdW5kZWZpbmVkIDogcmVzdWx0O1xuICB9XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGRhdGEsIGtleSkgPyBkYXRhW2tleV0gOiB1bmRlZmluZWQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaGFzaEdldDtcbiIsInZhciBuYXRpdmVDcmVhdGUgPSByZXF1aXJlKCcuL19uYXRpdmVDcmVhdGUnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBoYXNoIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBoYXNoSGFzKGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIHJldHVybiBuYXRpdmVDcmVhdGUgPyAoZGF0YVtrZXldICE9PSB1bmRlZmluZWQpIDogaGFzT3duUHJvcGVydHkuY2FsbChkYXRhLCBrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hIYXM7XG4iLCJ2YXIgbmF0aXZlQ3JlYXRlID0gcmVxdWlyZSgnLi9fbmF0aXZlQ3JlYXRlJyk7XG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBTZXRzIHRoZSBoYXNoIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIEhhc2hcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgaGFzaCBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gaGFzaFNldChrZXksIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXztcbiAgdGhpcy5zaXplICs9IHRoaXMuaGFzKGtleSkgPyAwIDogMTtcbiAgZGF0YVtrZXldID0gKG5hdGl2ZUNyZWF0ZSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSA/IEhBU0hfVU5ERUZJTkVEIDogdmFsdWU7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc2hTZXQ7XG4iLCIvKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL14oPzowfFsxLTldXFxkKikkLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIGxlbmd0aCA9IGxlbmd0aCA9PSBudWxsID8gTUFYX1NBRkVfSU5URUdFUiA6IGxlbmd0aDtcblxuICByZXR1cm4gISFsZW5ndGggJiZcbiAgICAodHlwZSA9PSAnbnVtYmVyJyB8fFxuICAgICAgKHR5cGUgIT0gJ3N5bWJvbCcgJiYgcmVJc1VpbnQudGVzdCh2YWx1ZSkpKSAmJlxuICAgICAgICAodmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8IGxlbmd0aCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNJbmRleDtcbiIsInZhciBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5JyksXG4gICAgaXNTeW1ib2wgPSByZXF1aXJlKCcuL2lzU3ltYm9sJyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZUlzRGVlcFByb3AgPSAvXFwufFxcWyg/OlteW1xcXV0qfChbXCInXSkoPzooPyFcXDEpW15cXFxcXXxcXFxcLikqP1xcMSlcXF0vLFxuICAgIHJlSXNQbGFpblByb3AgPSAvXlxcdyokLztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUgYW5kIG5vdCBhIHByb3BlcnR5IHBhdGguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtPYmplY3R9IFtvYmplY3RdIFRoZSBvYmplY3QgdG8gcXVlcnkga2V5cyBvbi5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgcHJvcGVydHkgbmFtZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleSh2YWx1ZSwgb2JqZWN0KSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnc3ltYm9sJyB8fCB0eXBlID09ICdib29sZWFuJyB8fFxuICAgICAgdmFsdWUgPT0gbnVsbCB8fCBpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gcmVJc1BsYWluUHJvcC50ZXN0KHZhbHVlKSB8fCAhcmVJc0RlZXBQcm9wLnRlc3QodmFsdWUpIHx8XG4gICAgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIE9iamVjdChvYmplY3QpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleTtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHVzZSBhcyB1bmlxdWUgb2JqZWN0IGtleS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0tleWFibGUodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiAodHlwZSA9PSAnc3RyaW5nJyB8fCB0eXBlID09ICdudW1iZXInIHx8IHR5cGUgPT0gJ3N5bWJvbCcgfHwgdHlwZSA9PSAnYm9vbGVhbicpXG4gICAgPyAodmFsdWUgIT09ICdfX3Byb3RvX18nKVxuICAgIDogKHZhbHVlID09PSBudWxsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0tleWFibGU7XG4iLCJ2YXIgY29yZUpzRGF0YSA9IHJlcXVpcmUoJy4vX2NvcmVKc0RhdGEnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IG1ldGhvZHMgbWFzcXVlcmFkaW5nIGFzIG5hdGl2ZS4gKi9cbnZhciBtYXNrU3JjS2V5ID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdWlkID0gL1teLl0rJC8uZXhlYyhjb3JlSnNEYXRhICYmIGNvcmVKc0RhdGEua2V5cyAmJiBjb3JlSnNEYXRhLmtleXMuSUVfUFJPVE8gfHwgJycpO1xuICByZXR1cm4gdWlkID8gKCdTeW1ib2woc3JjKV8xLicgKyB1aWQpIDogJyc7XG59KCkpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgZnVuY2AgaGFzIGl0cyBzb3VyY2UgbWFza2VkLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgZnVuY2AgaXMgbWFza2VkLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGlzTWFza2VkKGZ1bmMpIHtcbiAgcmV0dXJuICEhbWFza1NyY0tleSAmJiAobWFza1NyY0tleSBpbiBmdW5jKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01hc2tlZDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgbGlrZWx5IGEgcHJvdG90eXBlIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3RvdHlwZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1Byb3RvdHlwZSh2YWx1ZSkge1xuICB2YXIgQ3RvciA9IHZhbHVlICYmIHZhbHVlLmNvbnN0cnVjdG9yLFxuICAgICAgcHJvdG8gPSAodHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSkgfHwgb2JqZWN0UHJvdG87XG5cbiAgcmV0dXJuIHZhbHVlID09PSBwcm90bztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1Byb3RvdHlwZTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBzdWl0YWJsZSBmb3Igc3RyaWN0IGVxdWFsaXR5IGNvbXBhcmlzb25zLCBpLmUuIGA9PT1gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlmIHN1aXRhYmxlIGZvciBzdHJpY3RcbiAqICBlcXVhbGl0eSBjb21wYXJpc29ucywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc1N0cmljdENvbXBhcmFibGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSAmJiAhaXNPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaWN0Q29tcGFyYWJsZTtcbiIsIi8qKlxuICogUmVtb3ZlcyBhbGwga2V5LXZhbHVlIGVudHJpZXMgZnJvbSB0aGUgbGlzdCBjYWNoZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBbXTtcbiAgdGhpcy5zaXplID0gMDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVDbGVhcjtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIGFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIHNwbGljZSA9IGFycmF5UHJvdG8uc3BsaWNlO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBsaXN0IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBkZWxldGVcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciBkYXRhID0gdGhpcy5fX2RhdGFfXyxcbiAgICAgIGluZGV4ID0gYXNzb2NJbmRleE9mKGRhdGEsIGtleSk7XG5cbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gZGF0YS5sZW5ndGggLSAxO1xuICBpZiAoaW5kZXggPT0gbGFzdEluZGV4KSB7XG4gICAgZGF0YS5wb3AoKTtcbiAgfSBlbHNlIHtcbiAgICBzcGxpY2UuY2FsbChkYXRhLCBpbmRleCwgMSk7XG4gIH1cbiAgLS10aGlzLnNpemU7XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZURlbGV0ZTtcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBsaXN0IGNhY2hlIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgTGlzdENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbGlzdENhY2hlR2V0KGtleSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIHJldHVybiBpbmRleCA8IDAgPyB1bmRlZmluZWQgOiBkYXRhW2luZGV4XVsxXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsaXN0Q2FjaGVHZXQ7XG4iLCJ2YXIgYXNzb2NJbmRleE9mID0gcmVxdWlyZSgnLi9fYXNzb2NJbmRleE9mJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGEgbGlzdCBjYWNoZSB2YWx1ZSBmb3IgYGtleWAgZXhpc3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBoYXNcbiAqIEBtZW1iZXJPZiBMaXN0Q2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVIYXMoa2V5KSB7XG4gIHJldHVybiBhc3NvY0luZGV4T2YodGhpcy5fX2RhdGFfXywga2V5KSA+IC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZUhhcztcbiIsInZhciBhc3NvY0luZGV4T2YgPSByZXF1aXJlKCcuL19hc3NvY0luZGV4T2YnKTtcblxuLyoqXG4gKiBTZXRzIHRoZSBsaXN0IGNhY2hlIGBrZXlgIHRvIGB2YWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHNldFxuICogQG1lbWJlck9mIExpc3RDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBsaXN0IGNhY2hlIGluc3RhbmNlLlxuICovXG5mdW5jdGlvbiBsaXN0Q2FjaGVTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX18sXG4gICAgICBpbmRleCA9IGFzc29jSW5kZXhPZihkYXRhLCBrZXkpO1xuXG4gIGlmIChpbmRleCA8IDApIHtcbiAgICArK3RoaXMuc2l6ZTtcbiAgICBkYXRhLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRhW2luZGV4XVsxXSA9IHZhbHVlO1xuICB9XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxpc3RDYWNoZVNldDtcbiIsInZhciBIYXNoID0gcmVxdWlyZSgnLi9fSGFzaCcpLFxuICAgIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIG1hcC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgY2xlYXJcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUNsZWFyKCkge1xuICB0aGlzLnNpemUgPSAwO1xuICB0aGlzLl9fZGF0YV9fID0ge1xuICAgICdoYXNoJzogbmV3IEhhc2gsXG4gICAgJ21hcCc6IG5ldyAoTWFwIHx8IExpc3RDYWNoZSksXG4gICAgJ3N0cmluZyc6IG5ldyBIYXNoXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVDbGVhcjtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBtYXAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGRlbGV0ZVxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIHJlbW92ZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZW50cnkgd2FzIHJlbW92ZWQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVEZWxldGUoa2V5KSB7XG4gIHZhciByZXN1bHQgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSlbJ2RlbGV0ZSddKGtleSk7XG4gIHRoaXMuc2l6ZSAtPSByZXN1bHQgPyAxIDogMDtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZURlbGV0ZTtcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIEdldHMgdGhlIG1hcCB2YWx1ZSBmb3IgYGtleWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGdldFxuICogQG1lbWJlck9mIE1hcENhY2hlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHZhbHVlIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAqL1xuZnVuY3Rpb24gbWFwQ2FjaGVHZXQoa2V5KSB7XG4gIHJldHVybiBnZXRNYXBEYXRhKHRoaXMsIGtleSkuZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVHZXQ7XG4iLCJ2YXIgZ2V0TWFwRGF0YSA9IHJlcXVpcmUoJy4vX2dldE1hcERhdGEnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYSBtYXAgdmFsdWUgZm9yIGBrZXlgIGV4aXN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgaGFzXG4gKiBAbWVtYmVyT2YgTWFwQ2FjaGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgZW50cnkgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBtYXBDYWNoZUhhcyhrZXkpIHtcbiAgcmV0dXJuIGdldE1hcERhdGEodGhpcywga2V5KS5oYXMoa2V5KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXBDYWNoZUhhcztcbiIsInZhciBnZXRNYXBEYXRhID0gcmVxdWlyZSgnLi9fZ2V0TWFwRGF0YScpO1xuXG4vKipcbiAqIFNldHMgdGhlIG1hcCBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBNYXBDYWNoZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBtYXAgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIG1hcENhY2hlU2V0KGtleSwgdmFsdWUpIHtcbiAgdmFyIGRhdGEgPSBnZXRNYXBEYXRhKHRoaXMsIGtleSksXG4gICAgICBzaXplID0gZGF0YS5zaXplO1xuXG4gIGRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICB0aGlzLnNpemUgKz0gZGF0YS5zaXplID09IHNpemUgPyAwIDogMTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFwQ2FjaGVTZXQ7XG4iLCIvKipcbiAqIENvbnZlcnRzIGBtYXBgIHRvIGl0cyBrZXktdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBtYXAgVGhlIG1hcCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBrZXktdmFsdWUgcGFpcnMuXG4gKi9cbmZ1bmN0aW9uIG1hcFRvQXJyYXkobWFwKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gQXJyYXkobWFwLnNpemUpO1xuXG4gIG1hcC5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHRbKytpbmRleF0gPSBba2V5LCB2YWx1ZV07XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcFRvQXJyYXk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgbWF0Y2hlc1Byb3BlcnR5YCBmb3Igc291cmNlIHZhbHVlcyBzdWl0YWJsZVxuICogZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHNwZWMgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG1hdGNoZXNTdHJpY3RDb21wYXJhYmxlKGtleSwgc3JjVmFsdWUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0W2tleV0gPT09IHNyY1ZhbHVlICYmXG4gICAgICAoc3JjVmFsdWUgIT09IHVuZGVmaW5lZCB8fCAoa2V5IGluIE9iamVjdChvYmplY3QpKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWF0Y2hlc1N0cmljdENvbXBhcmFibGU7XG4iLCJ2YXIgbWVtb2l6ZSA9IHJlcXVpcmUoJy4vbWVtb2l6ZScpO1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG52YXIgTUFYX01FTU9JWkVfU0laRSA9IDUwMDtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8ubWVtb2l6ZWAgd2hpY2ggY2xlYXJzIHRoZSBtZW1vaXplZCBmdW5jdGlvbidzXG4gKiBjYWNoZSB3aGVuIGl0IGV4Y2VlZHMgYE1BWF9NRU1PSVpFX1NJWkVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBoYXZlIGl0cyBvdXRwdXQgbWVtb2l6ZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtZW1vaXplZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gbWVtb2l6ZUNhcHBlZChmdW5jKSB7XG4gIHZhciByZXN1bHQgPSBtZW1vaXplKGZ1bmMsIGZ1bmN0aW9uKGtleSkge1xuICAgIGlmIChjYWNoZS5zaXplID09PSBNQVhfTUVNT0laRV9TSVpFKSB7XG4gICAgICBjYWNoZS5jbGVhcigpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9KTtcblxuICB2YXIgY2FjaGUgPSByZXN1bHQuY2FjaGU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWVtb2l6ZUNhcHBlZDtcbiIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuL19nZXROYXRpdmUnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgdGhhdCBhcmUgdmVyaWZpZWQgdG8gYmUgbmF0aXZlLiAqL1xudmFyIG5hdGl2ZUNyZWF0ZSA9IGdldE5hdGl2ZShPYmplY3QsICdjcmVhdGUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBuYXRpdmVDcmVhdGU7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBvdmVyQXJnKE9iamVjdC5rZXlzLCBPYmplY3QpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5hdGl2ZUtleXM7XG4iLCJ2YXIgZnJlZUdsb2JhbCA9IHJlcXVpcmUoJy4vX2ZyZWVHbG9iYWwnKTtcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBleHBvcnRzYC4gKi9cbnZhciBmcmVlRXhwb3J0cyA9IHR5cGVvZiBleHBvcnRzID09ICdvYmplY3QnICYmIGV4cG9ydHMgJiYgIWV4cG9ydHMubm9kZVR5cGUgJiYgZXhwb3J0cztcblxuLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBtb2R1bGVgLiAqL1xudmFyIGZyZWVNb2R1bGUgPSBmcmVlRXhwb3J0cyAmJiB0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZSAmJiAhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblxuLyoqIERldGVjdCB0aGUgcG9wdWxhciBDb21tb25KUyBleHRlbnNpb24gYG1vZHVsZS5leHBvcnRzYC4gKi9cbnZhciBtb2R1bGVFeHBvcnRzID0gZnJlZU1vZHVsZSAmJiBmcmVlTW9kdWxlLmV4cG9ydHMgPT09IGZyZWVFeHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHByb2Nlc3NgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlUHJvY2VzcyA9IG1vZHVsZUV4cG9ydHMgJiYgZnJlZUdsb2JhbC5wcm9jZXNzO1xuXG4vKiogVXNlZCB0byBhY2Nlc3MgZmFzdGVyIE5vZGUuanMgaGVscGVycy4gKi9cbnZhciBub2RlVXRpbCA9IChmdW5jdGlvbigpIHtcbiAgdHJ5IHtcbiAgICAvLyBVc2UgYHV0aWwudHlwZXNgIGZvciBOb2RlLmpzIDEwKy5cbiAgICB2YXIgdHlwZXMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUucmVxdWlyZSAmJiBmcmVlTW9kdWxlLnJlcXVpcmUoJ3V0aWwnKS50eXBlcztcblxuICAgIGlmICh0eXBlcykge1xuICAgICAgcmV0dXJuIHR5cGVzO1xuICAgIH1cblxuICAgIC8vIExlZ2FjeSBgcHJvY2Vzcy5iaW5kaW5nKCd1dGlsJylgIGZvciBOb2RlLmpzIDwgMTAuXG4gICAgcmV0dXJuIGZyZWVQcm9jZXNzICYmIGZyZWVQcm9jZXNzLmJpbmRpbmcgJiYgZnJlZVByb2Nlc3MuYmluZGluZygndXRpbCcpO1xuICB9IGNhdGNoIChlKSB7fVxufSgpKTtcblxubW9kdWxlLmV4cG9ydHMgPSBub2RlVXRpbDtcbiIsIi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBuYXRpdmVPYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcgdXNpbmcgYE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgY29udmVydGVkIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gb2JqZWN0VG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIG5hdGl2ZU9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdFRvU3RyaW5nO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsInZhciBmcmVlR2xvYmFsID0gcmVxdWlyZSgnLi9fZnJlZUdsb2JhbCcpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gcm9vdDtcbiIsIi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbnZhciBIQVNIX1VOREVGSU5FRCA9ICdfX2xvZGFzaF9oYXNoX3VuZGVmaW5lZF9fJztcblxuLyoqXG4gKiBBZGRzIGB2YWx1ZWAgdG8gdGhlIGFycmF5IGNhY2hlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBhZGRcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQGFsaWFzIHB1c2hcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgY2FjaGUgaW5zdGFuY2UuXG4gKi9cbmZ1bmN0aW9uIHNldENhY2hlQWRkKHZhbHVlKSB7XG4gIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRCk7XG4gIHJldHVybiB0aGlzO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlQWRkO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiB0aGUgYXJyYXkgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFNldENhY2hlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzZXRDYWNoZUhhcyh2YWx1ZSkge1xuICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldENhY2hlSGFzO1xuIiwiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBhbiBhcnJheSBvZiBpdHMgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gc2V0IFRoZSBzZXQgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBzZXRUb0FycmF5KHNldCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IEFycmF5KHNldC5zaXplKTtcblxuICBzZXQuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IHZhbHVlO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRUb0FycmF5O1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpO1xuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBjbGVhclxuICogQG1lbWJlck9mIFN0YWNrXG4gKi9cbmZ1bmN0aW9uIHN0YWNrQ2xlYXIoKSB7XG4gIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlO1xuICB0aGlzLnNpemUgPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrQ2xlYXI7XG4iLCIvKipcbiAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZGVsZXRlXG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBlbnRyeSB3YXMgcmVtb3ZlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBzdGFja0RlbGV0ZShrZXkpIHtcbiAgdmFyIGRhdGEgPSB0aGlzLl9fZGF0YV9fLFxuICAgICAgcmVzdWx0ID0gZGF0YVsnZGVsZXRlJ10oa2V5KTtcblxuICB0aGlzLnNpemUgPSBkYXRhLnNpemU7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tEZWxldGU7XG4iLCIvKipcbiAqIEdldHMgdGhlIHN0YWNrIHZhbHVlIGZvciBga2V5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQG5hbWUgZ2V0XG4gKiBAbWVtYmVyT2YgU3RhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGVudHJ5IHZhbHVlLlxuICovXG5mdW5jdGlvbiBzdGFja0dldChrZXkpIHtcbiAgcmV0dXJuIHRoaXMuX19kYXRhX18uZ2V0KGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tHZXQ7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIGhhc1xuICogQG1lbWJlck9mIFN0YWNrXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFuIGVudHJ5IGZvciBga2V5YCBleGlzdHMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gc3RhY2tIYXMoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YWNrSGFzO1xuIiwidmFyIExpc3RDYWNoZSA9IHJlcXVpcmUoJy4vX0xpc3RDYWNoZScpLFxuICAgIE1hcCA9IHJlcXVpcmUoJy4vX01hcCcpLFxuICAgIE1hcENhY2hlID0gcmVxdWlyZSgnLi9fTWFwQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBTZXRzIHRoZSBzdGFjayBga2V5YCB0byBgdmFsdWVgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAbmFtZSBzZXRcbiAqIEBtZW1iZXJPZiBTdGFja1xuICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBzdGFjayBjYWNoZSBpbnN0YW5jZS5cbiAqL1xuZnVuY3Rpb24gc3RhY2tTZXQoa2V5LCB2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuX19kYXRhX187XG4gIGlmIChkYXRhIGluc3RhbmNlb2YgTGlzdENhY2hlKSB7XG4gICAgdmFyIHBhaXJzID0gZGF0YS5fX2RhdGFfXztcbiAgICBpZiAoIU1hcCB8fCAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpKSB7XG4gICAgICBwYWlycy5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgICB0aGlzLnNpemUgPSArK2RhdGEuc2l6ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycyk7XG4gIH1cbiAgZGF0YS5zZXQoa2V5LCB2YWx1ZSk7XG4gIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZTtcbiAgcmV0dXJuIHRoaXM7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhY2tTZXQ7XG4iLCJ2YXIgbWVtb2l6ZUNhcHBlZCA9IHJlcXVpcmUoJy4vX21lbW9pemVDYXBwZWQnKTtcblxuLyoqIFVzZWQgdG8gbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlUHJvcE5hbWUgPSAvW14uW1xcXV0rfFxcWyg/OigtP1xcZCsoPzpcXC5cXGQrKT8pfChbXCInXSkoKD86KD8hXFwyKVteXFxcXF18XFxcXC4pKj8pXFwyKVxcXXwoPz0oPzpcXC58XFxbXFxdKSg/OlxcLnxcXFtcXF18JCkpL2c7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHJlRXNjYXBlQ2hhciA9IC9cXFxcKFxcXFwpPy9nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbnZhciBzdHJpbmdUb1BhdGggPSBtZW1vaXplQ2FwcGVkKGZ1bmN0aW9uKHN0cmluZykge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDYgLyogLiAqLykge1xuICAgIHJlc3VsdC5wdXNoKCcnKTtcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdWJTdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1RvUGF0aDtcbiIsInZhciBpc1N5bWJvbCA9IHJlcXVpcmUoJy4vaXNTeW1ib2wnKTtcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgSU5GSU5JVFkgPSAxIC8gMDtcblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGtleSBpZiBpdCdzIG5vdCBhIHN0cmluZyBvciBzeW1ib2wuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7c3RyaW5nfHN5bWJvbH0gUmV0dXJucyB0aGUga2V5LlxuICovXG5mdW5jdGlvbiB0b0tleSh2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdzdHJpbmcnIHx8IGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gKHZhbHVlICsgJycpO1xuICByZXR1cm4gKHJlc3VsdCA9PSAnMCcgJiYgKDEgLyB2YWx1ZSkgPT0gLUlORklOSVRZKSA/ICctMCcgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9LZXk7XG4iLCIvKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byByZXNvbHZlIHRoZSBkZWNvbXBpbGVkIHNvdXJjZSBvZiBmdW5jdGlvbnMuICovXG52YXIgZnVuY1RvU3RyaW5nID0gZnVuY1Byb3RvLnRvU3RyaW5nO1xuXG4vKipcbiAqIENvbnZlcnRzIGBmdW5jYCB0byBpdHMgc291cmNlIGNvZGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBzb3VyY2UgY29kZS5cbiAqL1xuZnVuY3Rpb24gdG9Tb3VyY2UoZnVuYykge1xuICBpZiAoZnVuYyAhPSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmdW5jVG9TdHJpbmcuY2FsbChmdW5jKTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHRyeSB7XG4gICAgICByZXR1cm4gKGZ1bmMgKyAnJyk7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgfVxuICByZXR1cm4gJyc7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9Tb3VyY2U7XG4iLCIvKipcbiAqIFBlcmZvcm1zIGFcbiAqIFtgU2FtZVZhbHVlWmVyb2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXNhbWV2YWx1ZXplcm8pXG4gKiBjb21wYXJpc29uIGJldHdlZW4gdHdvIHZhbHVlcyB0byBkZXRlcm1pbmUgaWYgdGhleSBhcmUgZXF1aXZhbGVudC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqIHZhciBvdGhlciA9IHsgJ2EnOiAxIH07XG4gKlxuICogXy5lcShvYmplY3QsIG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcShvYmplY3QsIG90aGVyKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcSgnYScsICdhJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5lcSgnYScsIE9iamVjdCgnYScpKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5lcShOYU4sIE5hTik7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGVxKHZhbHVlLCBvdGhlcikge1xuICByZXR1cm4gdmFsdWUgPT09IG90aGVyIHx8ICh2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcTtcbiIsInZhciBhcnJheUZpbHRlciA9IHJlcXVpcmUoJy4vX2FycmF5RmlsdGVyJyksXG4gICAgYmFzZUZpbHRlciA9IHJlcXVpcmUoJy4vX2Jhc2VGaWx0ZXInKSxcbiAgICBiYXNlSXRlcmF0ZWUgPSByZXF1aXJlKCcuL19iYXNlSXRlcmF0ZWUnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi9pc0FycmF5Jyk7XG5cbi8qKlxuICogSXRlcmF0ZXMgb3ZlciBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmAsIHJldHVybmluZyBhbiBhcnJheSBvZiBhbGwgZWxlbWVudHNcbiAqIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvci4gVGhlIHByZWRpY2F0ZSBpcyBpbnZva2VkIHdpdGggdGhyZWVcbiAqIGFyZ3VtZW50czogKHZhbHVlLCBpbmRleHxrZXksIGNvbGxlY3Rpb24pLlxuICpcbiAqICoqTm90ZToqKiBVbmxpa2UgYF8ucmVtb3ZlYCwgdGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKiBAc2VlIF8ucmVqZWN0XG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciB1c2VycyA9IFtcbiAqICAgeyAndXNlcic6ICdiYXJuZXknLCAnYWdlJzogMzYsICdhY3RpdmUnOiB0cnVlIH0sXG4gKiAgIHsgJ3VzZXInOiAnZnJlZCcsICAgJ2FnZSc6IDQwLCAnYWN0aXZlJzogZmFsc2UgfVxuICogXTtcbiAqXG4gKiBfLmZpbHRlcih1c2VycywgZnVuY3Rpb24obykgeyByZXR1cm4gIW8uYWN0aXZlOyB9KTtcbiAqIC8vID0+IG9iamVjdHMgZm9yIFsnZnJlZCddXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNgIGl0ZXJhdGVlIHNob3J0aGFuZC5cbiAqIF8uZmlsdGVyKHVzZXJzLCB7ICdhZ2UnOiAzNiwgJ2FjdGl2ZSc6IHRydWUgfSk7XG4gKiAvLyA9PiBvYmplY3RzIGZvciBbJ2Jhcm5leSddXG4gKlxuICogLy8gVGhlIGBfLm1hdGNoZXNQcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5maWx0ZXIodXNlcnMsIFsnYWN0aXZlJywgZmFsc2VdKTtcbiAqIC8vID0+IG9iamVjdHMgZm9yIFsnZnJlZCddXG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLmZpbHRlcih1c2VycywgJ2FjdGl2ZScpO1xuICogLy8gPT4gb2JqZWN0cyBmb3IgWydiYXJuZXknXVxuICovXG5mdW5jdGlvbiBmaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciBmdW5jID0gaXNBcnJheShjb2xsZWN0aW9uKSA/IGFycmF5RmlsdGVyIDogYmFzZUZpbHRlcjtcbiAgcmV0dXJuIGZ1bmMoY29sbGVjdGlvbiwgYmFzZUl0ZXJhdGVlKHByZWRpY2F0ZSwgMykpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHRlcjtcbiIsInZhciBiYXNlR2V0ID0gcmVxdWlyZSgnLi9fYmFzZUdldCcpO1xuXG4vKipcbiAqIEdldHMgdGhlIHZhbHVlIGF0IGBwYXRoYCBvZiBgb2JqZWN0YC4gSWYgdGhlIHJlc29sdmVkIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYCwgdGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGluIGl0cyBwbGFjZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDMuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHBhcmFtIHsqfSBbZGVmYXVsdFZhbHVlXSBUaGUgdmFsdWUgcmV0dXJuZWQgZm9yIGB1bmRlZmluZWRgIHJlc29sdmVkIHZhbHVlcy5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXNvbHZlZCB2YWx1ZS5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiBbeyAnYic6IHsgJ2MnOiAzIH0gfV0gfTtcbiAqXG4gKiBfLmdldChvYmplY3QsICdhWzBdLmIuYycpO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgWydhJywgJzAnLCAnYicsICdjJ10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uZ2V0KG9iamVjdCwgJ2EuYi5jJywgJ2RlZmF1bHQnKTtcbiAqIC8vID0+ICdkZWZhdWx0J1xuICovXG5mdW5jdGlvbiBnZXQob2JqZWN0LCBwYXRoLCBkZWZhdWx0VmFsdWUpIHtcbiAgdmFyIHJlc3VsdCA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogYmFzZUdldChvYmplY3QsIHBhdGgpO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBkZWZhdWx0VmFsdWUgOiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0O1xuIiwidmFyIGJhc2VIYXNJbiA9IHJlcXVpcmUoJy4vX2Jhc2VIYXNJbicpLFxuICAgIGhhc1BhdGggPSByZXF1aXJlKCcuL19oYXNQYXRoJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGBwYXRoYCBpcyBhIGRpcmVjdCBvciBpbmhlcml0ZWQgcHJvcGVydHkgb2YgYG9iamVjdGAuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheXxzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHBhdGhgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0gXy5jcmVhdGUoeyAnYSc6IF8uY3JlYXRlKHsgJ2InOiAyIH0pIH0pO1xuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYScpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYS5iJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5oYXNJbihvYmplY3QsIFsnYScsICdiJ10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaGFzSW4ob2JqZWN0LCAnYicpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaGFzSW4ob2JqZWN0LCBwYXRoKSB7XG4gIHJldHVybiBvYmplY3QgIT0gbnVsbCAmJiBoYXNQYXRoKG9iamVjdCwgcGF0aCwgYmFzZUhhc0luKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBoYXNJbjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iLCJ2YXIgYmFzZUlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9fYmFzZUlzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgcHJvcGVydHlJc0VudW1lcmFibGUgPSBvYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBsaWtlbHkgYW4gYGFyZ3VtZW50c2Agb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGBhcmd1bWVudHNgIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJndW1lbnRzID0gYmFzZUlzQXJndW1lbnRzKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID8gYmFzZUlzQXJndW1lbnRzIDogZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmXG4gICAgIXByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwodmFsdWUsICdjYWxsZWUnKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLiBBIHZhbHVlIGlzIGNvbnNpZGVyZWQgYXJyYXktbGlrZSBpZiBpdCdzXG4gKiBub3QgYSBmdW5jdGlvbiBhbmQgaGFzIGEgYHZhbHVlLmxlbmd0aGAgdGhhdCdzIGFuIGludGVnZXIgZ3JlYXRlciB0aGFuIG9yXG4gKiBlcXVhbCB0byBgMGAgYW5kIGxlc3MgdGhhbiBvciBlcXVhbCB0byBgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheUxpa2UoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZSgnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhaXNGdW5jdGlvbih2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG4iLCJ2YXIgcm9vdCA9IHJlcXVpcmUoJy4vX3Jvb3QnKSxcbiAgICBzdHViRmFsc2UgPSByZXF1aXJlKCcuL3N0dWJGYWxzZScpO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGV4cG9ydHNgLiAqL1xudmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJiAhZXhwb3J0cy5ub2RlVHlwZSAmJiBleHBvcnRzO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYG1vZHVsZWAuICovXG52YXIgZnJlZU1vZHVsZSA9IGZyZWVFeHBvcnRzICYmIHR5cGVvZiBtb2R1bGUgPT0gJ29iamVjdCcgJiYgbW9kdWxlICYmICFtb2R1bGUubm9kZVR5cGUgJiYgbW9kdWxlO1xuXG4vKiogRGV0ZWN0IHRoZSBwb3B1bGFyIENvbW1vbkpTIGV4dGVuc2lvbiBgbW9kdWxlLmV4cG9ydHNgLiAqL1xudmFyIG1vZHVsZUV4cG9ydHMgPSBmcmVlTW9kdWxlICYmIGZyZWVNb2R1bGUuZXhwb3J0cyA9PT0gZnJlZUV4cG9ydHM7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIEJ1ZmZlciA9IG1vZHVsZUV4cG9ydHMgPyByb290LkJ1ZmZlciA6IHVuZGVmaW5lZDtcblxuLyogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQnVmZmVyID0gQnVmZmVyID8gQnVmZmVyLmlzQnVmZmVyIDogdW5kZWZpbmVkO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4zLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGEgYnVmZmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNCdWZmZXIobmV3IEJ1ZmZlcigyKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0J1ZmZlcihuZXcgVWludDhBcnJheSgyKSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNCdWZmZXIgPSBuYXRpdmVJc0J1ZmZlciB8fCBzdHViRmFsc2U7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNCdWZmZXI7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFzeW5jVGFnID0gJ1tvYmplY3QgQXN5bmNGdW5jdGlvbl0nLFxuICAgIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nLFxuICAgIGdlblRhZyA9ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScsXG4gICAgcHJveHlUYWcgPSAnW29iamVjdCBQcm94eV0nO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYSBgRnVuY3Rpb25gIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIGZ1bmN0aW9uLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIWlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gU2FmYXJpIDkgd2hpY2ggcmV0dXJucyAnb2JqZWN0JyBmb3IgdHlwZWQgYXJyYXlzIGFuZCBvdGhlciBjb25zdHJ1Y3RvcnMuXG4gIHZhciB0YWcgPSBiYXNlR2V0VGFnKHZhbHVlKTtcbiAgcmV0dXJuIHRhZyA9PSBmdW5jVGFnIHx8IHRhZyA9PSBnZW5UYWcgfHwgdGFnID09IGFzeW5jVGFnIHx8IHRhZyA9PSBwcm94eVRhZztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1bmN0aW9uO1xuIiwiLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDkwMDcxOTkyNTQ3NDA5OTE7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBhcnJheS1saWtlIGxlbmd0aC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgaXMgbG9vc2VseSBiYXNlZCBvblxuICogW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTGVuZ3RoKDMpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNMZW5ndGgoTnVtYmVyLk1JTl9WQUxVRSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNMZW5ndGgoSW5maW5pdHkpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzTGVuZ3RoKCczJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmXG4gICAgdmFsdWUgPiAtMSAmJiB2YWx1ZSAlIDEgPT0gMCAmJiB2YWx1ZSA8PSBNQVhfU0FGRV9JTlRFR0VSO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVuZ3RoO1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGVcbiAqIFtsYW5ndWFnZSB0eXBlXShodHRwOi8vd3d3LmVjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcylcbiAqIG9mIGBPYmplY3RgLiAoZS5nLiBhcnJheXMsIGZ1bmN0aW9ucywgb2JqZWN0cywgcmVnZXhlcywgYG5ldyBOdW1iZXIoMClgLCBhbmQgYG5ldyBTdHJpbmcoJycpYClcbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdCh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoXy5ub29wKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmICh0eXBlID09ICdvYmplY3QnIHx8IHR5cGUgPT0gJ2Z1bmN0aW9uJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNPYmplY3Q7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAhPSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdExpa2U7XG4iLCJ2YXIgYmFzZUdldFRhZyA9IHJlcXVpcmUoJy4vX2Jhc2VHZXRUYWcnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3ltYm9sVGFnID0gJ1tvYmplY3QgU3ltYm9sXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIGJhc2VHZXRUYWcodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTeW1ib2w7XG4iLCJ2YXIgYmFzZUlzVHlwZWRBcnJheSA9IHJlcXVpcmUoJy4vX2Jhc2VJc1R5cGVkQXJyYXknKSxcbiAgICBiYXNlVW5hcnkgPSByZXF1aXJlKCcuL19iYXNlVW5hcnknKSxcbiAgICBub2RlVXRpbCA9IHJlcXVpcmUoJy4vX25vZGVVdGlsJyk7XG5cbi8qIE5vZGUuanMgaGVscGVyIHJlZmVyZW5jZXMuICovXG52YXIgbm9kZUlzVHlwZWRBcnJheSA9IG5vZGVVdGlsICYmIG5vZGVVdGlsLmlzVHlwZWRBcnJheTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAzLjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShuZXcgVWludDhBcnJheSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1R5cGVkQXJyYXkoW10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzVHlwZWRBcnJheSA9IG5vZGVJc1R5cGVkQXJyYXkgPyBiYXNlVW5hcnkobm9kZUlzVHlwZWRBcnJheSkgOiBiYXNlSXNUeXBlZEFycmF5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHlwZWRBcnJheTtcbiIsInZhciBhcnJheUxpa2VLZXlzID0gcmVxdWlyZSgnLi9fYXJyYXlMaWtlS2V5cycpLFxuICAgIGJhc2VLZXlzID0gcmVxdWlyZSgnLi9fYmFzZUtleXMnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHRoZSBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiAqKk5vdGU6KiogTm9uLW9iamVjdCB2YWx1ZXMgYXJlIGNvZXJjZWQgdG8gb2JqZWN0cy4gU2VlIHRoZVxuICogW0VTIHNwZWNdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5rZXlzKVxuICogZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG5mdW5jdGlvbiBrZXlzKG9iamVjdCkge1xuICByZXR1cm4gaXNBcnJheUxpa2Uob2JqZWN0KSA/IGFycmF5TGlrZUtleXMob2JqZWN0KSA6IGJhc2VLZXlzKG9iamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcbiIsInZhciBNYXBDYWNoZSA9IHJlcXVpcmUoJy4vX01hcENhY2hlJyk7XG5cbi8qKiBFcnJvciBtZXNzYWdlIGNvbnN0YW50cy4gKi9cbnZhciBGVU5DX0VSUk9SX1RFWFQgPSAnRXhwZWN0ZWQgYSBmdW5jdGlvbic7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgbWVtb2l6ZXMgdGhlIHJlc3VsdCBvZiBgZnVuY2AuIElmIGByZXNvbHZlcmAgaXNcbiAqIHByb3ZpZGVkLCBpdCBkZXRlcm1pbmVzIHRoZSBjYWNoZSBrZXkgZm9yIHN0b3JpbmcgdGhlIHJlc3VsdCBiYXNlZCBvbiB0aGVcbiAqIGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uIEJ5IGRlZmF1bHQsIHRoZSBmaXJzdCBhcmd1bWVudFxuICogcHJvdmlkZWQgdG8gdGhlIG1lbW9pemVkIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlIG1hcCBjYWNoZSBrZXkuIFRoZSBgZnVuY2BcbiAqIGlzIGludm9rZWQgd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgdGhlIG1lbW9pemVkIGZ1bmN0aW9uLlxuICpcbiAqICoqTm90ZToqKiBUaGUgY2FjaGUgaXMgZXhwb3NlZCBhcyB0aGUgYGNhY2hlYCBwcm9wZXJ0eSBvbiB0aGUgbWVtb2l6ZWRcbiAqIGZ1bmN0aW9uLiBJdHMgY3JlYXRpb24gbWF5IGJlIGN1c3RvbWl6ZWQgYnkgcmVwbGFjaW5nIHRoZSBgXy5tZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtyZXNvbHZlcl0gVGhlIGZ1bmN0aW9uIHRvIHJlc29sdmUgdGhlIGNhY2hlIGtleS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEsICdiJzogMiB9O1xuICogdmFyIG90aGVyID0geyAnYyc6IDMsICdkJzogNCB9O1xuICpcbiAqIHZhciB2YWx1ZXMgPSBfLm1lbW9pemUoXy52YWx1ZXMpO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpO1xuICogLy8gPT4gWzMsIDRdXG4gKlxuICogb2JqZWN0LmEgPSAyO1xuICogdmFsdWVzKG9iamVjdCk7XG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKTtcbiAqIHZhbHVlcyhvYmplY3QpO1xuICogLy8gPT4gWydhJywgJ2InXVxuICpcbiAqIC8vIFJlcGxhY2UgYF8ubWVtb2l6ZS5DYWNoZWAuXG4gKiBfLm1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwO1xuICovXG5mdW5jdGlvbiBtZW1vaXplKGZ1bmMsIHJlc29sdmVyKSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPSAnZnVuY3Rpb24nKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB2YXIgbWVtb2l6ZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAga2V5ID0gcmVzb2x2ZXIgPyByZXNvbHZlci5hcHBseSh0aGlzLCBhcmdzKSA6IGFyZ3NbMF0sXG4gICAgICAgIGNhY2hlID0gbWVtb2l6ZWQuY2FjaGU7XG5cbiAgICBpZiAoY2FjaGUuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgbWVtb2l6ZWQuY2FjaGUgPSBjYWNoZS5zZXQoa2V5LCByZXN1bHQpIHx8IGNhY2hlO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG4gIG1lbW9pemVkLmNhY2hlID0gbmV3IChtZW1vaXplLkNhY2hlIHx8IE1hcENhY2hlKTtcbiAgcmV0dXJuIG1lbW9pemVkO1xufVxuXG4vLyBFeHBvc2UgYE1hcENhY2hlYC5cbm1lbW9pemUuQ2FjaGUgPSBNYXBDYWNoZTtcblxubW9kdWxlLmV4cG9ydHMgPSBtZW1vaXplO1xuIiwidmFyIGJhc2VQcm9wZXJ0eSA9IHJlcXVpcmUoJy4vX2Jhc2VQcm9wZXJ0eScpLFxuICAgIGJhc2VQcm9wZXJ0eURlZXAgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHlEZWVwJyksXG4gICAgaXNLZXkgPSByZXF1aXJlKCcuL19pc0tleScpLFxuICAgIHRvS2V5ID0gcmVxdWlyZSgnLi9fdG9LZXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB2YWx1ZSBhdCBgcGF0aGAgb2YgYSBnaXZlbiBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAyLjQuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhY2Nlc3NvciBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogMiB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogMSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iJykpO1xuICogLy8gPT4gWzIsIDFdXG4gKlxuICogXy5tYXAoXy5zb3J0Qnkob2JqZWN0cywgXy5wcm9wZXJ0eShbJ2EnLCAnYiddKSksICdhLmInKTtcbiAqIC8vID0+IFsxLCAyXVxuICovXG5mdW5jdGlvbiBwcm9wZXJ0eShwYXRoKSB7XG4gIHJldHVybiBpc0tleShwYXRoKSA/IGJhc2VQcm9wZXJ0eSh0b0tleShwYXRoKSkgOiBiYXNlUHJvcGVydHlEZWVwKHBhdGgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb3BlcnR5O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgYGZhbHNlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5zdHViRmFsc2UpO1xuICogLy8gPT4gW2ZhbHNlLCBmYWxzZV1cbiAqL1xuZnVuY3Rpb24gc3R1YkZhbHNlKCkge1xuICByZXR1cm4gZmFsc2U7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkZhbHNlO1xuIiwidmFyIGJhc2VUb1N0cmluZyA9IHJlcXVpcmUoJy4vX2Jhc2VUb1N0cmluZycpO1xuXG4vKipcbiAqIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBzdHJpbmcuIEFuIGVtcHR5IHN0cmluZyBpcyByZXR1cm5lZCBmb3IgYG51bGxgXG4gKiBhbmQgYHVuZGVmaW5lZGAgdmFsdWVzLiBUaGUgc2lnbiBvZiBgLTBgIGlzIHByZXNlcnZlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIGNvbnZlcnRlZCBzdHJpbmcuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udG9TdHJpbmcobnVsbCk7XG4gKiAvLyA9PiAnJ1xuICpcbiAqIF8udG9TdHJpbmcoLTApO1xuICogLy8gPT4gJy0wJ1xuICpcbiAqIF8udG9TdHJpbmcoWzEsIDIsIDNdKTtcbiAqIC8vID0+ICcxLDIsMydcbiAqL1xuZnVuY3Rpb24gdG9TdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09IG51bGwgPyAnJyA6IGJhc2VUb1N0cmluZyh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdG9TdHJpbmc7XG4iLCIvKiFcbiAqIHVpLXNlbGVjdFxuICogaHR0cDovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1zZWxlY3RcbiAqIFZlcnNpb246IDAuMTkuOCAtIDIwMTctMDQtMThUMDU6NDM6NDMuNjczWlxuICogTGljZW5zZTogTUlUXG4gKi9cblxuXG4oZnVuY3Rpb24gKCkgeyBcblwidXNlIHN0cmljdFwiO1xudmFyIEtFWSA9IHtcbiAgICBUQUI6IDksXG4gICAgRU5URVI6IDEzLFxuICAgIEVTQzogMjcsXG4gICAgU1BBQ0U6IDMyLFxuICAgIExFRlQ6IDM3LFxuICAgIFVQOiAzOCxcbiAgICBSSUdIVDogMzksXG4gICAgRE9XTjogNDAsXG4gICAgU0hJRlQ6IDE2LFxuICAgIENUUkw6IDE3LFxuICAgIEFMVDogMTgsXG4gICAgUEFHRV9VUDogMzMsXG4gICAgUEFHRV9ET1dOOiAzNCxcbiAgICBIT01FOiAzNixcbiAgICBFTkQ6IDM1LFxuICAgIEJBQ0tTUEFDRTogOCxcbiAgICBERUxFVEU6IDQ2LFxuICAgIENPTU1BTkQ6IDkxLFxuXG4gICAgTUFQOiB7IDkxIDogXCJDT01NQU5EXCIsIDggOiBcIkJBQ0tTUEFDRVwiICwgOSA6IFwiVEFCXCIgLCAxMyA6IFwiRU5URVJcIiAsIDE2IDogXCJTSElGVFwiICwgMTcgOiBcIkNUUkxcIiAsIDE4IDogXCJBTFRcIiAsIDE5IDogXCJQQVVTRUJSRUFLXCIgLCAyMCA6IFwiQ0FQU0xPQ0tcIiAsIDI3IDogXCJFU0NcIiAsIDMyIDogXCJTUEFDRVwiICwgMzMgOiBcIlBBR0VfVVBcIiwgMzQgOiBcIlBBR0VfRE9XTlwiICwgMzUgOiBcIkVORFwiICwgMzYgOiBcIkhPTUVcIiAsIDM3IDogXCJMRUZUXCIgLCAzOCA6IFwiVVBcIiAsIDM5IDogXCJSSUdIVFwiICwgNDAgOiBcIkRPV05cIiAsIDQzIDogXCIrXCIgLCA0NCA6IFwiUFJJTlRTQ1JFRU5cIiAsIDQ1IDogXCJJTlNFUlRcIiAsIDQ2IDogXCJERUxFVEVcIiwgNDggOiBcIjBcIiAsIDQ5IDogXCIxXCIgLCA1MCA6IFwiMlwiICwgNTEgOiBcIjNcIiAsIDUyIDogXCI0XCIgLCA1MyA6IFwiNVwiICwgNTQgOiBcIjZcIiAsIDU1IDogXCI3XCIgLCA1NiA6IFwiOFwiICwgNTcgOiBcIjlcIiAsIDU5IDogXCI7XCIsIDYxIDogXCI9XCIgLCA2NSA6IFwiQVwiICwgNjYgOiBcIkJcIiAsIDY3IDogXCJDXCIgLCA2OCA6IFwiRFwiICwgNjkgOiBcIkVcIiAsIDcwIDogXCJGXCIgLCA3MSA6IFwiR1wiICwgNzIgOiBcIkhcIiAsIDczIDogXCJJXCIgLCA3NCA6IFwiSlwiICwgNzUgOiBcIktcIiAsIDc2IDogXCJMXCIsIDc3IDogXCJNXCIgLCA3OCA6IFwiTlwiICwgNzkgOiBcIk9cIiAsIDgwIDogXCJQXCIgLCA4MSA6IFwiUVwiICwgODIgOiBcIlJcIiAsIDgzIDogXCJTXCIgLCA4NCA6IFwiVFwiICwgODUgOiBcIlVcIiAsIDg2IDogXCJWXCIgLCA4NyA6IFwiV1wiICwgODggOiBcIlhcIiAsIDg5IDogXCJZXCIgLCA5MCA6IFwiWlwiLCA5NiA6IFwiMFwiICwgOTcgOiBcIjFcIiAsIDk4IDogXCIyXCIgLCA5OSA6IFwiM1wiICwgMTAwIDogXCI0XCIgLCAxMDEgOiBcIjVcIiAsIDEwMiA6IFwiNlwiICwgMTAzIDogXCI3XCIgLCAxMDQgOiBcIjhcIiAsIDEwNSA6IFwiOVwiLCAxMDYgOiBcIipcIiAsIDEwNyA6IFwiK1wiICwgMTA5IDogXCItXCIgLCAxMTAgOiBcIi5cIiAsIDExMSA6IFwiL1wiLCAxMTIgOiBcIkYxXCIgLCAxMTMgOiBcIkYyXCIgLCAxMTQgOiBcIkYzXCIgLCAxMTUgOiBcIkY0XCIgLCAxMTYgOiBcIkY1XCIgLCAxMTcgOiBcIkY2XCIgLCAxMTggOiBcIkY3XCIgLCAxMTkgOiBcIkY4XCIgLCAxMjAgOiBcIkY5XCIgLCAxMjEgOiBcIkYxMFwiICwgMTIyIDogXCJGMTFcIiAsIDEyMyA6IFwiRjEyXCIsIDE0NCA6IFwiTlVNTE9DS1wiICwgMTQ1IDogXCJTQ1JPTExMT0NLXCIgLCAxODYgOiBcIjtcIiAsIDE4NyA6IFwiPVwiICwgMTg4IDogXCIsXCIgLCAxODkgOiBcIi1cIiAsIDE5MCA6IFwiLlwiICwgMTkxIDogXCIvXCIgLCAxOTIgOiBcImBcIiAsIDIxOSA6IFwiW1wiICwgMjIwIDogXCJcXFxcXCIgLCAyMjEgOiBcIl1cIiAsIDIyMiA6IFwiJ1wiXG4gICAgfSxcblxuICAgIGlzQ29udHJvbDogZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIGsgPSBlLndoaWNoO1xuICAgICAgICBzd2l0Y2ggKGspIHtcbiAgICAgICAgY2FzZSBLRVkuQ09NTUFORDpcbiAgICAgICAgY2FzZSBLRVkuU0hJRlQ6XG4gICAgICAgIGNhc2UgS0VZLkNUUkw6XG4gICAgICAgIGNhc2UgS0VZLkFMVDpcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUubWV0YUtleSB8fCBlLmN0cmxLZXkgfHwgZS5hbHRLZXkpIHJldHVybiB0cnVlO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuICAgIGlzRnVuY3Rpb25LZXk6IGZ1bmN0aW9uIChrKSB7XG4gICAgICAgIGsgPSBrLndoaWNoID8gay53aGljaCA6IGs7XG4gICAgICAgIHJldHVybiBrID49IDExMiAmJiBrIDw9IDEyMztcbiAgICB9LFxuICAgIGlzVmVydGljYWxNb3ZlbWVudDogZnVuY3Rpb24gKGspe1xuICAgICAgcmV0dXJuIH5bS0VZLlVQLCBLRVkuRE9XTl0uaW5kZXhPZihrKTtcbiAgICB9LFxuICAgIGlzSG9yaXpvbnRhbE1vdmVtZW50OiBmdW5jdGlvbiAoayl7XG4gICAgICByZXR1cm4gfltLRVkuTEVGVCxLRVkuUklHSFQsS0VZLkJBQ0tTUEFDRSxLRVkuREVMRVRFXS5pbmRleE9mKGspO1xuICAgIH0sXG4gICAgdG9TZXBhcmF0b3I6IGZ1bmN0aW9uIChrKSB7XG4gICAgICB2YXIgc2VwID0ge0VOVEVSOlwiXFxuXCIsVEFCOlwiXFx0XCIsU1BBQ0U6XCIgXCJ9W2tdO1xuICAgICAgaWYgKHNlcCkgcmV0dXJuIHNlcDtcbiAgICAgIC8vIHJldHVybiB1bmRlZmluZWQgZm9yIHNwZWNpYWwga2V5cyBvdGhlciB0aGFuIGVudGVyLCB0YWIgb3Igc3BhY2UuXG4gICAgICAvLyBubyB3YXkgdG8gdXNlIHRoZW0gdG8gY3V0IHN0cmluZ3MuXG4gICAgICByZXR1cm4gS0VZW2tdID8gdW5kZWZpbmVkIDogaztcbiAgICB9XG4gIH07XG5cbmZ1bmN0aW9uIGlzTmlsKHZhbHVlKSB7XG4gIHJldHVybiBhbmd1bGFyLmlzVW5kZWZpbmVkKHZhbHVlKSB8fCB2YWx1ZSA9PT0gbnVsbDtcbn1cblxuLyoqXG4gKiBBZGQgcXVlcnlTZWxlY3RvckFsbCgpIHRvIGpxTGl0ZS5cbiAqXG4gKiBqcUxpdGUgZmluZCgpIGlzIGxpbWl0ZWQgdG8gbG9va3VwcyBieSB0YWcgbmFtZS5cbiAqIFRPRE8gVGhpcyB3aWxsIGNoYW5nZSB3aXRoIGZ1dHVyZSB2ZXJzaW9ucyBvZiBBbmd1bGFySlMsIHRvIGJlIHJlbW92ZWQgd2hlbiB0aGlzIGhhcHBlbnNcbiAqXG4gKiBTZWUganFMaXRlLmZpbmQgLSB3aHkgbm90IHVzZSBxdWVyeVNlbGVjdG9yQWxsPyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2lzc3Vlcy8zNTg2XG4gKiBTZWUgZmVhdChqcUxpdGUpOiB1c2UgcXVlcnlTZWxlY3RvckFsbCBpbnN0ZWFkIG9mIGdldEVsZW1lbnRzQnlUYWdOYW1lIGluIGpxTGl0ZS5maW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvcHVsbC8zNTk4XG4gKi9cbmlmIChhbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwgPT09IHVuZGVmaW5lZCkge1xuICBhbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwgPSBmdW5jdGlvbihzZWxlY3Rvcikge1xuICAgIHJldHVybiBhbmd1bGFyLmVsZW1lbnQodGhpc1swXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG4gIH07XG59XG5cbi8qKlxuICogQWRkIGNsb3Nlc3QoKSB0byBqcUxpdGUuXG4gKi9cbmlmIChhbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPT09IHVuZGVmaW5lZCkge1xuICBhbmd1bGFyLmVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbiggc2VsZWN0b3IpIHtcbiAgICB2YXIgZWxlbSA9IHRoaXNbMF07XG4gICAgdmFyIG1hdGNoZXNTZWxlY3RvciA9IGVsZW0ubWF0Y2hlcyB8fCBlbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fCBlbGVtLm1zTWF0Y2hlc1NlbGVjdG9yO1xuXG4gICAgd2hpbGUgKGVsZW0pIHtcbiAgICAgIGlmIChtYXRjaGVzU2VsZWN0b3IuYmluZChlbGVtKShzZWxlY3RvcikpIHtcbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGVtID0gZWxlbS5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG59XG5cbnZhciBsYXRlc3RJZCA9IDA7XG5cbnZhciB1aXMgPSBhbmd1bGFyLm1vZHVsZSgndWkuc2VsZWN0JywgW10pXG5cbi5jb25zdGFudCgndWlTZWxlY3RDb25maWcnLCB7XG4gIHRoZW1lOiAnYm9vdHN0cmFwJyxcbiAgc2VhcmNoRW5hYmxlZDogdHJ1ZSxcbiAgc29ydGFibGU6IGZhbHNlLFxuICBwbGFjZWhvbGRlcjogJycsIC8vIEVtcHR5IGJ5IGRlZmF1bHQsIGxpa2UgSFRNTCB0YWcgPHNlbGVjdD5cbiAgcmVmcmVzaERlbGF5OiAxMDAwLCAvLyBJbiBtaWxsaXNlY29uZHNcbiAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcbiAgc2tpcEZvY3Vzc2VyOiBmYWxzZSxcbiAgZHJvcGRvd25Qb3NpdGlvbjogJ2F1dG8nLFxuICByZW1vdmVTZWxlY3RlZDogdHJ1ZSxcbiAgcmVzZXRTZWFyY2hJbnB1dDogdHJ1ZSxcbiAgZ2VuZXJhdGVJZDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxhdGVzdElkKys7XG4gIH0sXG4gIGFwcGVuZFRvQm9keTogZmFsc2UsXG4gIHNwaW5uZXJFbmFibGVkOiBmYWxzZSxcbiAgc3Bpbm5lckNsYXNzOiAnZ2x5cGhpY29uIGdseXBoaWNvbi1yZWZyZXNoIHVpLXNlbGVjdC1zcGluJyxcbiAgYmFja3NwYWNlUmVzZXQ6IHRydWVcbn0pXG5cbi8vIFNlZSBSZW5hbWUgbWluRXJyIGFuZCBtYWtlIGl0IGFjY2Vzc2libGUgZnJvbSBvdXRzaWRlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIuanMvaXNzdWVzLzY5MTNcbi5zZXJ2aWNlKCd1aVNlbGVjdE1pbkVycicsIGZ1bmN0aW9uKCkge1xuICB2YXIgbWluRXJyID0gYW5ndWxhci4kJG1pbkVycigndWkuc2VsZWN0Jyk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXJyb3IgPSBtaW5FcnIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB2YXIgbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2UucmVwbGFjZShuZXcgUmVnRXhwKCdcXG5odHRwOi8vZXJyb3JzLmFuZ3VsYXJqcy5vcmcvLionKSwgJycpO1xuICAgIHJldHVybiBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH07XG59KVxuXG4vLyBSZWNyZWF0ZXMgb2xkIGJlaGF2aW9yIG9mIG5nLXRyYW5zY2x1ZGUuIFVzZWQgaW50ZXJuYWxseS5cbi5kaXJlY3RpdmUoJ3Vpc1RyYW5zY2x1ZGVBcHBlbmQnLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB7XG4gICAgbGluazogZnVuY3Rpb24gKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybCwgdHJhbnNjbHVkZSkge1xuICAgICAgICB0cmFuc2NsdWRlKHNjb3BlLCBmdW5jdGlvbiAoY2xvbmUpIHtcbiAgICAgICAgICBlbGVtZW50LmFwcGVuZChjbG9uZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG59KVxuXG4vKipcbiAqIEhpZ2hsaWdodHMgdGV4dCB0aGF0IG1hdGNoZXMgJHNlbGVjdC5zZWFyY2guXG4gKlxuICogVGFrZW4gZnJvbSBBbmd1bGFyVUkgQm9vdHN0cmFwIFR5cGVhaGVhZFxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL2Jvb3RzdHJhcC9ibG9iLzAuMTAuMC9zcmMvdHlwZWFoZWFkL3R5cGVhaGVhZC5qcyNMMzQwXG4gKi9cbi5maWx0ZXIoJ2hpZ2hsaWdodCcsIGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBlc2NhcGVSZWdleHAocXVlcnlUb0VzY2FwZSkge1xuICAgIHJldHVybiAoJycgKyBxdWVyeVRvRXNjYXBlKS5yZXBsYWNlKC8oWy4/KiteJFtcXF1cXFxcKCl7fXwtXSkvZywgJ1xcXFwkMScpO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKG1hdGNoSXRlbSwgcXVlcnkpIHtcbiAgICByZXR1cm4gcXVlcnkgJiYgbWF0Y2hJdGVtID8gKCcnICsgbWF0Y2hJdGVtKS5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnZXhwKHF1ZXJ5KSwgJ2dpJyksICc8c3BhbiBjbGFzcz1cInVpLXNlbGVjdC1oaWdobGlnaHRcIj4kJjwvc3Bhbj4nKSA6IG1hdGNoSXRlbTtcbiAgfTtcbn0pXG5cbi8qKlxuICogQSByZWFkLW9ubHkgZXF1aXZhbGVudCBvZiBqUXVlcnkncyBvZmZzZXQgZnVuY3Rpb246IGh0dHA6Ly9hcGkuanF1ZXJ5LmNvbS9vZmZzZXQvXG4gKlxuICogVGFrZW4gZnJvbSBBbmd1bGFyVUkgQm9vdHN0cmFwIFBvc2l0aW9uOlxuICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyLXVpL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9zcmMvcG9zaXRpb24vcG9zaXRpb24uanMjTDcwXG4gKi9cbi5mYWN0b3J5KCd1aXNPZmZzZXQnLFxuICBbJyRkb2N1bWVudCcsICckd2luZG93JyxcbiAgZnVuY3Rpb24gKCRkb2N1bWVudCwgJHdpbmRvdykge1xuXG4gIHJldHVybiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgdmFyIGJvdW5kaW5nQ2xpZW50UmVjdCA9IGVsZW1lbnRbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBib3VuZGluZ0NsaWVudFJlY3Qud2lkdGggfHwgZWxlbWVudC5wcm9wKCdvZmZzZXRXaWR0aCcpLFxuICAgICAgaGVpZ2h0OiBib3VuZGluZ0NsaWVudFJlY3QuaGVpZ2h0IHx8IGVsZW1lbnQucHJvcCgnb2Zmc2V0SGVpZ2h0JyksXG4gICAgICB0b3A6IGJvdW5kaW5nQ2xpZW50UmVjdC50b3AgKyAoJHdpbmRvdy5wYWdlWU9mZnNldCB8fCAkZG9jdW1lbnRbMF0uZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCksXG4gICAgICBsZWZ0OiBib3VuZGluZ0NsaWVudFJlY3QubGVmdCArICgkd2luZG93LnBhZ2VYT2Zmc2V0IHx8ICRkb2N1bWVudFswXS5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdClcbiAgICB9O1xuICB9O1xufV0pO1xuXG51aXMuZGlyZWN0aXZlKCd1aVNlbGVjdENob2ljZXMnLFxuICBbJ3VpU2VsZWN0Q29uZmlnJywgJ3Vpc1JlcGVhdFBhcnNlcicsICd1aVNlbGVjdE1pbkVycicsICckY29tcGlsZScsICckd2luZG93JyxcbiAgZnVuY3Rpb24odWlTZWxlY3RDb25maWcsIFJlcGVhdFBhcnNlciwgdWlTZWxlY3RNaW5FcnIsICRjb21waWxlLCAkd2luZG93KSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXF1aXJlOiAnXnVpU2VsZWN0JyxcbiAgICByZXBsYWNlOiB0cnVlLFxuICAgIHRyYW5zY2x1ZGU6IHRydWUsXG4gICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uKHRFbGVtZW50KSB7XG4gICAgICAvLyBOZWVkZWQgc28gdGhlIHVpU2VsZWN0IGNhbiBkZXRlY3QgdGhlIHRyYW5zY2x1ZGVkIGNvbnRlbnRcbiAgICAgIHRFbGVtZW50LmFkZENsYXNzKCd1aS1zZWxlY3QtY2hvaWNlcycpO1xuXG4gICAgICAvLyBHZXRzIHRoZW1lIGF0dHJpYnV0ZSBmcm9tIHBhcmVudCAodWktc2VsZWN0KVxuICAgICAgdmFyIHRoZW1lID0gdEVsZW1lbnQucGFyZW50KCkuYXR0cigndGhlbWUnKSB8fCB1aVNlbGVjdENvbmZpZy50aGVtZTtcbiAgICAgIHJldHVybiB0aGVtZSArICcvY2hvaWNlcy50cGwuaHRtbCc7XG4gICAgfSxcblxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRFbGVtZW50LCB0QXR0cnMpIHtcblxuICAgICAgaWYgKCF0QXR0cnMucmVwZWF0KSB0aHJvdyB1aVNlbGVjdE1pbkVycigncmVwZWF0JywgXCJFeHBlY3RlZCAncmVwZWF0JyBleHByZXNzaW9uLlwiKTtcblxuICAgICAgLy8gdmFyIHJlcGVhdCA9IFJlcGVhdFBhcnNlci5wYXJzZShhdHRycy5yZXBlYXQpO1xuICAgICAgdmFyIGdyb3VwQnlFeHAgPSB0QXR0cnMuZ3JvdXBCeTtcbiAgICAgIHZhciBncm91cEZpbHRlckV4cCA9IHRBdHRycy5ncm91cEZpbHRlcjtcblxuICAgICAgaWYgKGdyb3VwQnlFeHApIHtcbiAgICAgICAgdmFyIGdyb3VwcyA9IHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3QtY2hvaWNlcy1ncm91cCcpO1xuICAgICAgICBpZiAoZ3JvdXBzLmxlbmd0aCAhPT0gMSkgdGhyb3cgdWlTZWxlY3RNaW5FcnIoJ3Jvd3MnLCBcIkV4cGVjdGVkIDEgLnVpLXNlbGVjdC1jaG9pY2VzLWdyb3VwIGJ1dCBnb3QgJ3swfScuXCIsIGdyb3Vwcy5sZW5ndGgpO1xuICAgICAgICBncm91cHMuYXR0cignbmctcmVwZWF0JywgUmVwZWF0UGFyc2VyLmdldEdyb3VwTmdSZXBlYXRFeHByZXNzaW9uKCkpO1xuICAgICAgfVxuXG4gICAgICB2YXIgcGFyc2VyUmVzdWx0ID0gUmVwZWF0UGFyc2VyLnBhcnNlKHRBdHRycy5yZXBlYXQpO1xuXG4gICAgICB2YXIgY2hvaWNlcyA9IHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3QtY2hvaWNlcy1yb3cnKTtcbiAgICAgIGlmIChjaG9pY2VzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICB0aHJvdyB1aVNlbGVjdE1pbkVycigncm93cycsIFwiRXhwZWN0ZWQgMSAudWktc2VsZWN0LWNob2ljZXMtcm93IGJ1dCBnb3QgJ3swfScuXCIsIGNob2ljZXMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgY2hvaWNlcy5hdHRyKCduZy1yZXBlYXQnLCBwYXJzZXJSZXN1bHQucmVwZWF0RXhwcmVzc2lvbihncm91cEJ5RXhwKSlcbiAgICAgICAgICAgICAuYXR0cignbmctaWYnLCAnJHNlbGVjdC5vcGVuJyk7IC8vUHJldmVudCB1bm5lY2Vzc2FyeSB3YXRjaGVzIHdoZW4gZHJvcGRvd24gaXMgY2xvc2VkXG5cblxuICAgICAgdmFyIHJvd3NJbm5lciA9IHRFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3QtY2hvaWNlcy1yb3ctaW5uZXInKTtcbiAgICAgIGlmIChyb3dzSW5uZXIubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIHRocm93IHVpU2VsZWN0TWluRXJyKCdyb3dzJywgXCJFeHBlY3RlZCAxIC51aS1zZWxlY3QtY2hvaWNlcy1yb3ctaW5uZXIgYnV0IGdvdCAnezB9Jy5cIiwgcm93c0lubmVyLmxlbmd0aCk7XG4gICAgICB9XG4gICAgICByb3dzSW5uZXIuYXR0cigndWlzLXRyYW5zY2x1ZGUtYXBwZW5kJywgJycpOyAvL0FkZGluZyB1aXNUcmFuc2NsdWRlQXBwZW5kIGRpcmVjdGl2ZSB0byByb3cgZWxlbWVudCBhZnRlciBjaG9pY2VzIGVsZW1lbnQgaGFzIG5nUmVwZWF0XG5cbiAgICAgIC8vIElmIElFOCB0aGVuIG5lZWQgdG8gdGFyZ2V0IHJvd3NJbm5lciB0byBhcHBseSB0aGUgbmctY2xpY2sgYXR0ciBhcyBjaG9pY2VzIHdpbGwgbm90IGNhcHR1cmUgdGhlIGV2ZW50LlxuICAgICAgdmFyIGNsaWNrVGFyZ2V0ID0gJHdpbmRvdy5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyID8gY2hvaWNlcyA6IHJvd3NJbm5lcjtcbiAgICAgIGNsaWNrVGFyZ2V0LmF0dHIoJ25nLWNsaWNrJywgJyRzZWxlY3Quc2VsZWN0KCcgKyBwYXJzZXJSZXN1bHQuaXRlbU5hbWUgKyAnLCRzZWxlY3Quc2tpcEZvY3Vzc2VyLCRldmVudCknKTtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCAkc2VsZWN0KSB7XG5cblxuICAgICAgICAkc2VsZWN0LnBhcnNlUmVwZWF0QXR0cihhdHRycy5yZXBlYXQsIGdyb3VwQnlFeHAsIGdyb3VwRmlsdGVyRXhwKTsgLy9SZXN1bHQgcmVhZHkgYXQgJHNlbGVjdC5wYXJzZXJSZXN1bHRcbiAgICAgICAgJHNlbGVjdC5kaXNhYmxlQ2hvaWNlRXhwcmVzc2lvbiA9IGF0dHJzLnVpRGlzYWJsZUNob2ljZTtcbiAgICAgICAgJHNlbGVjdC5vbkhpZ2hsaWdodENhbGxiYWNrID0gYXR0cnMub25IaWdobGlnaHQ7XG4gICAgICAgICRzZWxlY3QubWluaW11bUlucHV0TGVuZ3RoID0gcGFyc2VJbnQoYXR0cnMubWluaW11bUlucHV0TGVuZ3RoKSB8fCAwO1xuICAgICAgICAkc2VsZWN0LmRyb3Bkb3duUG9zaXRpb24gPSBhdHRycy5wb3NpdGlvbiA/IGF0dHJzLnBvc2l0aW9uLnRvTG93ZXJDYXNlKCkgOiB1aVNlbGVjdENvbmZpZy5kcm9wZG93blBvc2l0aW9uO1xuXG4gICAgICAgIHNjb3BlLiR3YXRjaCgnJHNlbGVjdC5zZWFyY2gnLCBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgICAgICAgIGlmKG5ld1ZhbHVlICYmICEkc2VsZWN0Lm9wZW4gJiYgJHNlbGVjdC5tdWx0aXBsZSkgJHNlbGVjdC5hY3RpdmF0ZShmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgJHNlbGVjdC5hY3RpdmVJbmRleCA9ICRzZWxlY3QudGFnZ2luZy5pc0FjdGl2YXRlZCA/IC0xIDogMDtcbiAgICAgICAgICBpZiAoIWF0dHJzLm1pbmltdW1JbnB1dExlbmd0aCB8fCAkc2VsZWN0LnNlYXJjaC5sZW5ndGggPj0gYXR0cnMubWluaW11bUlucHV0TGVuZ3RoKSB7XG4gICAgICAgICAgICAkc2VsZWN0LnJlZnJlc2goYXR0cnMucmVmcmVzaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRzZWxlY3QuaXRlbXMgPSBbXTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF0dHJzLiRvYnNlcnZlKCdyZWZyZXNoRGVsYXknLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyAkZXZhbCgpIGlzIG5lZWRlZCBvdGhlcndpc2Ugd2UgZ2V0IGEgc3RyaW5nIGluc3RlYWQgb2YgYSBudW1iZXJcbiAgICAgICAgICB2YXIgcmVmcmVzaERlbGF5ID0gc2NvcGUuJGV2YWwoYXR0cnMucmVmcmVzaERlbGF5KTtcbiAgICAgICAgICAkc2VsZWN0LnJlZnJlc2hEZWxheSA9IHJlZnJlc2hEZWxheSAhPT0gdW5kZWZpbmVkID8gcmVmcmVzaERlbGF5IDogdWlTZWxlY3RDb25maWcucmVmcmVzaERlbGF5O1xuICAgICAgICB9KTtcblxuICAgICAgICBzY29wZS4kd2F0Y2goJyRzZWxlY3Qub3BlbicsIGZ1bmN0aW9uKG9wZW4pIHtcbiAgICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdEVsZW1lbnQuYXR0cigncm9sZScsICdsaXN0Ym94Jyk7XG4gICAgICAgICAgICAkc2VsZWN0LnJlZnJlc2goYXR0cnMucmVmcmVzaCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cigncm9sZScpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1dKTtcblxuLyoqXG4gKiBDb250YWlucyB1aS1zZWxlY3QgXCJpbnRlbGxpZ2VuY2VcIi5cbiAqXG4gKiBUaGUgZ29hbCBpcyB0byBsaW1pdCBkZXBlbmRlbmN5IG9uIHRoZSBET00gd2hlbmV2ZXIgcG9zc2libGUgYW5kXG4gKiBwdXQgYXMgbXVjaCBsb2dpYyBpbiB0aGUgY29udHJvbGxlciAoaW5zdGVhZCBvZiB0aGUgbGluayBmdW5jdGlvbnMpIGFzIHBvc3NpYmxlIHNvIGl0IGNhbiBiZSBlYXNpbHkgdGVzdGVkLlxuICovXG51aXMuY29udHJvbGxlcigndWlTZWxlY3RDdHJsJyxcbiAgWyckc2NvcGUnLCAnJGVsZW1lbnQnLCAnJHRpbWVvdXQnLCAnJGZpbHRlcicsICckJHVpc0RlYm91bmNlJywgJ3Vpc1JlcGVhdFBhcnNlcicsICd1aVNlbGVjdE1pbkVycicsICd1aVNlbGVjdENvbmZpZycsICckcGFyc2UnLCAnJGluamVjdG9yJywgJyR3aW5kb3cnLFxuICBmdW5jdGlvbigkc2NvcGUsICRlbGVtZW50LCAkdGltZW91dCwgJGZpbHRlciwgJCR1aXNEZWJvdW5jZSwgUmVwZWF0UGFyc2VyLCB1aVNlbGVjdE1pbkVyciwgdWlTZWxlY3RDb25maWcsICRwYXJzZSwgJGluamVjdG9yLCAkd2luZG93KSB7XG5cbiAgdmFyIGN0cmwgPSB0aGlzO1xuXG4gIHZhciBFTVBUWV9TRUFSQ0ggPSAnJztcblxuICBjdHJsLnBsYWNlaG9sZGVyID0gdWlTZWxlY3RDb25maWcucGxhY2Vob2xkZXI7XG4gIGN0cmwuc2VhcmNoRW5hYmxlZCA9IHVpU2VsZWN0Q29uZmlnLnNlYXJjaEVuYWJsZWQ7XG4gIGN0cmwuc29ydGFibGUgPSB1aVNlbGVjdENvbmZpZy5zb3J0YWJsZTtcbiAgY3RybC5yZWZyZXNoRGVsYXkgPSB1aVNlbGVjdENvbmZpZy5yZWZyZXNoRGVsYXk7XG4gIGN0cmwucGFzdGUgPSB1aVNlbGVjdENvbmZpZy5wYXN0ZTtcbiAgY3RybC5yZXNldFNlYXJjaElucHV0ID0gdWlTZWxlY3RDb25maWcucmVzZXRTZWFyY2hJbnB1dDtcbiAgY3RybC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gIGN0cmwuc3Bpbm5lckVuYWJsZWQgPSB1aVNlbGVjdENvbmZpZy5zcGlubmVyRW5hYmxlZDtcbiAgY3RybC5zcGlubmVyQ2xhc3MgPSB1aVNlbGVjdENvbmZpZy5zcGlubmVyQ2xhc3M7XG4gIGN0cmwucmVtb3ZlU2VsZWN0ZWQgPSB1aVNlbGVjdENvbmZpZy5yZW1vdmVTZWxlY3RlZDsgLy9JZiBzZWxlY3RlZCBpdGVtKHMpIHNob3VsZCBiZSByZW1vdmVkIGZyb20gZHJvcGRvd24gbGlzdFxuICBjdHJsLmNsb3NlT25TZWxlY3QgPSB0cnVlOyAvL0luaXRpYWxpemVkIGluc2lkZSB1aVNlbGVjdCBkaXJlY3RpdmUgbGluayBmdW5jdGlvblxuICBjdHJsLnNraXBGb2N1c3NlciA9IGZhbHNlOyAvL1NldCB0byB0cnVlIHRvIGF2b2lkIHJldHVybmluZyBmb2N1cyB0byBjdHJsIHdoZW4gaXRlbSBpcyBzZWxlY3RlZFxuICBjdHJsLnNlYXJjaCA9IEVNUFRZX1NFQVJDSDtcblxuICBjdHJsLmFjdGl2ZUluZGV4ID0gMDsgLy9Ecm9wZG93biBvZiBjaG9pY2VzXG4gIGN0cmwuaXRlbXMgPSBbXTsgLy9BbGwgYXZhaWxhYmxlIGNob2ljZXNcblxuICBjdHJsLm9wZW4gPSBmYWxzZTtcbiAgY3RybC5mb2N1cyA9IGZhbHNlO1xuICBjdHJsLmRpc2FibGVkID0gZmFsc2U7XG4gIGN0cmwuc2VsZWN0ZWQgPSB1bmRlZmluZWQ7XG5cbiAgY3RybC5kcm9wZG93blBvc2l0aW9uID0gJ2F1dG8nO1xuXG4gIGN0cmwuZm9jdXNzZXIgPSB1bmRlZmluZWQ7IC8vUmVmZXJlbmNlIHRvIGlucHV0IGVsZW1lbnQgdXNlZCB0byBoYW5kbGUgZm9jdXMgZXZlbnRzXG4gIGN0cmwubXVsdGlwbGUgPSB1bmRlZmluZWQ7IC8vIEluaXRpYWxpemVkIGluc2lkZSB1aVNlbGVjdCBkaXJlY3RpdmUgbGluayBmdW5jdGlvblxuICBjdHJsLmRpc2FibGVDaG9pY2VFeHByZXNzaW9uID0gdW5kZWZpbmVkOyAvLyBJbml0aWFsaXplZCBpbnNpZGUgdWlTZWxlY3RDaG9pY2VzIGRpcmVjdGl2ZSBsaW5rIGZ1bmN0aW9uXG4gIGN0cmwudGFnZ2luZyA9IHtpc0FjdGl2YXRlZDogZmFsc2UsIGZjdDogdW5kZWZpbmVkfTtcbiAgY3RybC50YWdnaW5nVG9rZW5zID0ge2lzQWN0aXZhdGVkOiBmYWxzZSwgdG9rZW5zOiB1bmRlZmluZWR9O1xuICBjdHJsLmxvY2tDaG9pY2VFeHByZXNzaW9uID0gdW5kZWZpbmVkOyAvLyBJbml0aWFsaXplZCBpbnNpZGUgdWlTZWxlY3RNYXRjaCBkaXJlY3RpdmUgbGluayBmdW5jdGlvblxuICBjdHJsLmNsaWNrVHJpZ2dlcmVkU2VsZWN0ID0gZmFsc2U7XG4gIGN0cmwuJGZpbHRlciA9ICRmaWx0ZXI7XG4gIGN0cmwuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAvLyBVc2UgJGluamVjdG9yIHRvIGNoZWNrIGZvciAkYW5pbWF0ZSBhbmQgc3RvcmUgYSByZWZlcmVuY2UgdG8gaXRcbiAgY3RybC4kYW5pbWF0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiAkaW5qZWN0b3IuZ2V0KCckYW5pbWF0ZScpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gJGFuaW1hdGUgZG9lcyBub3QgZXhpc3RcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfSkoKTtcblxuICBjdHJsLnNlYXJjaElucHV0ID0gJGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQudWktc2VsZWN0LXNlYXJjaCcpO1xuICBpZiAoY3RybC5zZWFyY2hJbnB1dC5sZW5ndGggIT09IDEpIHtcbiAgICB0aHJvdyB1aVNlbGVjdE1pbkVycignc2VhcmNoSW5wdXQnLCBcIkV4cGVjdGVkIDEgaW5wdXQudWktc2VsZWN0LXNlYXJjaCBidXQgZ290ICd7MH0nLlwiLCBjdHJsLnNlYXJjaElucHV0Lmxlbmd0aCk7XG4gIH1cblxuICBjdHJsLmlzRW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaXNOaWwoY3RybC5zZWxlY3RlZCkgfHwgY3RybC5zZWxlY3RlZCA9PT0gJycgfHwgKGN0cmwubXVsdGlwbGUgJiYgY3RybC5zZWxlY3RlZC5sZW5ndGggPT09IDApO1xuICB9O1xuXG4gIGZ1bmN0aW9uIF9maW5kSW5kZXgoY29sbGVjdGlvbiwgcHJlZGljYXRlLCB0aGlzQXJnKXtcbiAgICBpZiAoY29sbGVjdGlvbi5maW5kSW5kZXgpe1xuICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBsaXN0ID0gT2JqZWN0KGNvbGxlY3Rpb24pO1xuICAgICAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoID4+PiAwO1xuICAgICAgdmFyIHZhbHVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhbHVlID0gbGlzdFtpXTtcbiAgICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpLCBsaXN0KSkge1xuICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9XG5cbiAgLy8gTW9zdCBvZiB0aGUgdGltZSB0aGUgdXNlciBkb2VzIG5vdCB3YW50IHRvIGVtcHR5IHRoZSBzZWFyY2ggaW5wdXQgd2hlbiBpbiB0eXBlYWhlYWQgbW9kZVxuICBmdW5jdGlvbiBfcmVzZXRTZWFyY2hJbnB1dCgpIHtcbiAgICBpZiAoY3RybC5yZXNldFNlYXJjaElucHV0KSB7XG4gICAgICBjdHJsLnNlYXJjaCA9IEVNUFRZX1NFQVJDSDtcbiAgICAgIC8vcmVzZXQgYWN0aXZlSW5kZXhcbiAgICAgIGlmIChjdHJsLnNlbGVjdGVkICYmIGN0cmwuaXRlbXMubGVuZ3RoICYmICFjdHJsLm11bHRpcGxlKSB7XG4gICAgICAgIGN0cmwuYWN0aXZlSW5kZXggPSBfZmluZEluZGV4KGN0cmwuaXRlbXMsIGZ1bmN0aW9uKGl0ZW0pe1xuICAgICAgICAgIHJldHVybiBhbmd1bGFyLmVxdWFscyh0aGlzLCBpdGVtKTtcbiAgICAgICAgfSwgY3RybC5zZWxlY3RlZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgICBmdW5jdGlvbiBfZ3JvdXBzRmlsdGVyKGdyb3VwcywgZ3JvdXBOYW1lcykge1xuICAgICAgdmFyIGksIGosIHJlc3VsdCA9IFtdO1xuICAgICAgZm9yKGkgPSAwOyBpIDwgZ3JvdXBOYW1lcy5sZW5ndGggO2krKyl7XG4gICAgICAgIGZvcihqID0gMDsgaiA8IGdyb3Vwcy5sZW5ndGggO2orKyl7XG4gICAgICAgICAgaWYoZ3JvdXBzW2pdLm5hbWUgPT0gW2dyb3VwTmFtZXNbaV1dKXtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGdyb3Vwc1tqXSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAvLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB1aS1zZWxlY3QsIGRpc3BsYXlzIHRoZSBkcm9wZG93biBsaXN0XG4gIGN0cmwuYWN0aXZhdGUgPSBmdW5jdGlvbihpbml0U2VhcmNoVmFsdWUsIGF2b2lkUmVzZXQpIHtcbiAgICBpZiAoIWN0cmwuZGlzYWJsZWQgICYmICFjdHJsLm9wZW4pIHtcbiAgICAgIGlmKCFhdm9pZFJlc2V0KSBfcmVzZXRTZWFyY2hJbnB1dCgpO1xuXG4gICAgICAkc2NvcGUuJGJyb2FkY2FzdCgndWlzOmFjdGl2YXRlJyk7XG4gICAgICBjdHJsLm9wZW4gPSB0cnVlO1xuICAgICAgY3RybC5hY3RpdmVJbmRleCA9IGN0cmwuYWN0aXZlSW5kZXggPj0gY3RybC5pdGVtcy5sZW5ndGggPyAwIDogY3RybC5hY3RpdmVJbmRleDtcbiAgICAgIC8vIGVuc3VyZSB0aGF0IHRoZSBpbmRleCBpcyBzZXQgdG8gemVybyBmb3IgdGFnZ2luZyB2YXJpYW50c1xuICAgICAgLy8gdGhhdCB3aGVyZSBmaXJzdCBvcHRpb24gaXMgYXV0by1zZWxlY3RlZFxuICAgICAgaWYgKCBjdHJsLmFjdGl2ZUluZGV4ID09PSAtMSAmJiBjdHJsLnRhZ2dpbmdMYWJlbCAhPT0gZmFsc2UgKSB7XG4gICAgICAgIGN0cmwuYWN0aXZlSW5kZXggPSAwO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGFpbmVyID0gJGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVpLXNlbGVjdC1jaG9pY2VzLWNvbnRlbnQnKTtcbiAgICAgIHZhciBzZWFyY2hJbnB1dCA9ICRlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3Qtc2VhcmNoJyk7XG4gICAgICBpZiAoY3RybC4kYW5pbWF0ZSAmJiBjdHJsLiRhbmltYXRlLm9uICYmIGN0cmwuJGFuaW1hdGUuZW5hYmxlZChjb250YWluZXJbMF0pKSB7XG4gICAgICAgIHZhciBhbmltYXRlSGFuZGxlciA9IGZ1bmN0aW9uKGVsZW0sIHBoYXNlKSB7XG4gICAgICAgICAgaWYgKHBoYXNlID09PSAnc3RhcnQnICYmIGN0cmwuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBPbmx5IGZvY3VzIGlucHV0IGFmdGVyIHRoZSBhbmltYXRpb24gaGFzIGZpbmlzaGVkXG4gICAgICAgICAgICBjdHJsLiRhbmltYXRlLm9mZigncmVtb3ZlQ2xhc3MnLCBzZWFyY2hJbnB1dFswXSwgYW5pbWF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjdHJsLmZvY3VzU2VhcmNoSW5wdXQoaW5pdFNlYXJjaFZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAocGhhc2UgPT09ICdjbG9zZScpIHtcbiAgICAgICAgICAgIC8vIE9ubHkgZm9jdXMgaW5wdXQgYWZ0ZXIgdGhlIGFuaW1hdGlvbiBoYXMgZmluaXNoZWRcbiAgICAgICAgICAgIGN0cmwuJGFuaW1hdGUub2ZmKCdlbnRlcicsIGNvbnRhaW5lclswXSwgYW5pbWF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBjdHJsLmZvY3VzU2VhcmNoSW5wdXQoaW5pdFNlYXJjaFZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY3RybC5pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY3RybC4kYW5pbWF0ZS5vbignZW50ZXInLCBjb250YWluZXJbMF0sIGFuaW1hdGVIYW5kbGVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHJsLiRhbmltYXRlLm9uKCdyZW1vdmVDbGFzcycsIHNlYXJjaElucHV0WzBdLCBhbmltYXRlSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjdHJsLmZvY3VzU2VhcmNoSW5wdXQoaW5pdFNlYXJjaFZhbHVlKTtcbiAgICAgICAgICBpZighY3RybC50YWdnaW5nLmlzQWN0aXZhdGVkICYmIGN0cmwuaXRlbXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgX2Vuc3VyZUhpZ2hsaWdodFZpc2libGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChjdHJsLm9wZW4gJiYgIWN0cmwuc2VhcmNoRW5hYmxlZCkge1xuICAgICAgLy8gQ2xvc2UgdGhlIHNlbGVjdGlvbiBpZiB3ZSBkb24ndCBoYXZlIHNlYXJjaCBlbmFibGVkLCBhbmQgd2UgY2xpY2sgb24gdGhlIHNlbGVjdCBhZ2FpblxuICAgICAgY3RybC5jbG9zZSgpO1xuICAgIH1cbiAgfTtcblxuICBjdHJsLmZvY3VzU2VhcmNoSW5wdXQgPSBmdW5jdGlvbiAoaW5pdFNlYXJjaFZhbHVlKSB7XG4gICAgY3RybC5zZWFyY2ggPSBpbml0U2VhcmNoVmFsdWUgfHwgY3RybC5zZWFyY2g7XG4gICAgY3RybC5zZWFyY2hJbnB1dFswXS5mb2N1cygpO1xuICB9O1xuXG4gIGN0cmwuZmluZEdyb3VwQnlOYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiBjdHJsLmdyb3VwcyAmJiBjdHJsLmdyb3Vwcy5maWx0ZXIoZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgIHJldHVybiBncm91cC5uYW1lID09PSBuYW1lO1xuICAgIH0pWzBdO1xuICB9O1xuXG4gIGN0cmwucGFyc2VSZXBlYXRBdHRyID0gZnVuY3Rpb24ocmVwZWF0QXR0ciwgZ3JvdXBCeUV4cCwgZ3JvdXBGaWx0ZXJFeHApIHtcbiAgICBmdW5jdGlvbiB1cGRhdGVHcm91cHMoaXRlbXMpIHtcbiAgICAgIHZhciBncm91cEZuID0gJHNjb3BlLiRldmFsKGdyb3VwQnlFeHApO1xuICAgICAgY3RybC5ncm91cHMgPSBbXTtcbiAgICAgIGFuZ3VsYXIuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICB2YXIgZ3JvdXBOYW1lID0gYW5ndWxhci5pc0Z1bmN0aW9uKGdyb3VwRm4pID8gZ3JvdXBGbihpdGVtKSA6IGl0ZW1bZ3JvdXBGbl07XG4gICAgICAgIHZhciBncm91cCA9IGN0cmwuZmluZEdyb3VwQnlOYW1lKGdyb3VwTmFtZSk7XG4gICAgICAgIGlmKGdyb3VwKSB7XG4gICAgICAgICAgZ3JvdXAuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjdHJsLmdyb3Vwcy5wdXNoKHtuYW1lOiBncm91cE5hbWUsIGl0ZW1zOiBbaXRlbV19KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZihncm91cEZpbHRlckV4cCl7XG4gICAgICAgIHZhciBncm91cEZpbHRlckZuID0gJHNjb3BlLiRldmFsKGdyb3VwRmlsdGVyRXhwKTtcbiAgICAgICAgaWYoIGFuZ3VsYXIuaXNGdW5jdGlvbihncm91cEZpbHRlckZuKSl7XG4gICAgICAgICAgY3RybC5ncm91cHMgPSBncm91cEZpbHRlckZuKGN0cmwuZ3JvdXBzKTtcbiAgICAgICAgfSBlbHNlIGlmKGFuZ3VsYXIuaXNBcnJheShncm91cEZpbHRlckZuKSl7XG4gICAgICAgICAgY3RybC5ncm91cHMgPSBfZ3JvdXBzRmlsdGVyKGN0cmwuZ3JvdXBzLCBncm91cEZpbHRlckZuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY3RybC5pdGVtcyA9IFtdO1xuICAgICAgY3RybC5ncm91cHMuZm9yRWFjaChmdW5jdGlvbihncm91cCkge1xuICAgICAgICBjdHJsLml0ZW1zID0gY3RybC5pdGVtcy5jb25jYXQoZ3JvdXAuaXRlbXMpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UGxhaW5JdGVtcyhpdGVtcykge1xuICAgICAgY3RybC5pdGVtcyA9IGl0ZW1zIHx8IFtdO1xuICAgIH1cblxuICAgIGN0cmwuc2V0SXRlbXNGbiA9IGdyb3VwQnlFeHAgPyB1cGRhdGVHcm91cHMgOiBzZXRQbGFpbkl0ZW1zO1xuXG4gICAgY3RybC5wYXJzZXJSZXN1bHQgPSBSZXBlYXRQYXJzZXIucGFyc2UocmVwZWF0QXR0cik7XG5cbiAgICBjdHJsLmlzR3JvdXBlZCA9ICEhZ3JvdXBCeUV4cDtcbiAgICBjdHJsLml0ZW1Qcm9wZXJ0eSA9IGN0cmwucGFyc2VyUmVzdWx0Lml0ZW1OYW1lO1xuXG4gICAgLy9JZiBjb2xsZWN0aW9uIGlzIGFuIE9iamVjdCwgY29udmVydCBpdCB0byBBcnJheVxuXG4gICAgdmFyIG9yaWdpbmFsU291cmNlID0gY3RybC5wYXJzZXJSZXN1bHQuc291cmNlO1xuXG4gICAgLy9XaGVuIGFuIG9iamVjdCBpcyB1c2VkIGFzIHNvdXJjZSwgd2UgYmV0dGVyIGNyZWF0ZSBhbiBhcnJheSBhbmQgdXNlIGl0IGFzICdzb3VyY2UnXG4gICAgdmFyIGNyZWF0ZUFycmF5RnJvbU9iamVjdCA9IGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgb3JpZ1NyYyA9IG9yaWdpbmFsU291cmNlKCRzY29wZSk7XG4gICAgICAkc2NvcGUuJHVpc1NvdXJjZSA9IE9iamVjdC5rZXlzKG9yaWdTcmMpLm1hcChmdW5jdGlvbih2KXtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuICAgICAgICByZXN1bHRbY3RybC5wYXJzZXJSZXN1bHQua2V5TmFtZV0gPSB2O1xuICAgICAgICByZXN1bHQudmFsdWUgPSBvcmlnU3JjW3ZdO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIGlmIChjdHJsLnBhcnNlclJlc3VsdC5rZXlOYW1lKXsgLy8gQ2hlY2sgZm9yIChrZXksdmFsdWUpIHN5bnRheFxuICAgICAgY3JlYXRlQXJyYXlGcm9tT2JqZWN0KCk7XG4gICAgICBjdHJsLnBhcnNlclJlc3VsdC5zb3VyY2UgPSAkcGFyc2UoJyR1aXNTb3VyY2UnICsgY3RybC5wYXJzZXJSZXN1bHQuZmlsdGVycyk7XG4gICAgICAkc2NvcGUuJHdhdGNoKG9yaWdpbmFsU291cmNlLCBmdW5jdGlvbihuZXdWYWwsIG9sZFZhbCl7XG4gICAgICAgIGlmIChuZXdWYWwgIT09IG9sZFZhbCkgY3JlYXRlQXJyYXlGcm9tT2JqZWN0KCk7XG4gICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICBjdHJsLnJlZnJlc2hJdGVtcyA9IGZ1bmN0aW9uIChkYXRhKXtcbiAgICAgIGRhdGEgPSBkYXRhIHx8IGN0cmwucGFyc2VyUmVzdWx0LnNvdXJjZSgkc2NvcGUpO1xuICAgICAgdmFyIHNlbGVjdGVkSXRlbXMgPSBjdHJsLnNlbGVjdGVkO1xuICAgICAgLy9UT0RPIHNob3VsZCBpbXBsZW1lbnQgZm9yIHNpbmdsZSBtb2RlIHJlbW92ZVNlbGVjdGVkXG4gICAgICBpZiAoY3RybC5pc0VtcHR5KCkgfHwgKGFuZ3VsYXIuaXNBcnJheShzZWxlY3RlZEl0ZW1zKSAmJiAhc2VsZWN0ZWRJdGVtcy5sZW5ndGgpIHx8ICFjdHJsLm11bHRpcGxlIHx8ICFjdHJsLnJlbW92ZVNlbGVjdGVkKSB7XG4gICAgICAgIGN0cmwuc2V0SXRlbXNGbihkYXRhKTtcbiAgICAgIH1lbHNle1xuICAgICAgICBpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCAmJiBkYXRhICE9PSBudWxsICkge1xuICAgICAgICAgIHZhciBmaWx0ZXJlZEl0ZW1zID0gZGF0YS5maWx0ZXIoZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuaXNBcnJheShzZWxlY3RlZEl0ZW1zKSA/IHNlbGVjdGVkSXRlbXMuZXZlcnkoZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhYW5ndWxhci5lcXVhbHMoaSwgc2VsZWN0ZWRJdGVtKTtcbiAgICAgICAgICAgIH0pIDogIWFuZ3VsYXIuZXF1YWxzKGksIHNlbGVjdGVkSXRlbXMpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGN0cmwuc2V0SXRlbXNGbihmaWx0ZXJlZEl0ZW1zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGN0cmwuZHJvcGRvd25Qb3NpdGlvbiA9PT0gJ2F1dG8nIHx8IGN0cmwuZHJvcGRvd25Qb3NpdGlvbiA9PT0gJ3VwJyl7XG4gICAgICAgICRzY29wZS5jYWxjdWxhdGVEcm9wZG93blBvcygpO1xuICAgICAgfVxuICAgICAgJHNjb3BlLiRicm9hZGNhc3QoJ3VpczpyZWZyZXNoJyk7XG4gICAgfTtcblxuICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyLmpzL2Jsb2IvdjEuMi4xNS9zcmMvbmcvZGlyZWN0aXZlL25nUmVwZWF0LmpzI0wyNTlcbiAgICAkc2NvcGUuJHdhdGNoQ29sbGVjdGlvbihjdHJsLnBhcnNlclJlc3VsdC5zb3VyY2UsIGZ1bmN0aW9uKGl0ZW1zKSB7XG4gICAgICBpZiAoaXRlbXMgPT09IHVuZGVmaW5lZCB8fCBpdGVtcyA9PT0gbnVsbCkge1xuICAgICAgICAvLyBJZiB0aGUgdXNlciBzcGVjaWZpZXMgdW5kZWZpbmVkIG9yIG51bGwgPT4gcmVzZXQgdGhlIGNvbGxlY3Rpb25cbiAgICAgICAgLy8gU3BlY2lhbCBjYXNlOiBpdGVtcyBjYW4gYmUgdW5kZWZpbmVkIGlmIHRoZSB1c2VyIGRpZCBub3QgaW5pdGlhbGl6ZWQgdGhlIGNvbGxlY3Rpb24gb24gdGhlIHNjb3BlXG4gICAgICAgIC8vIGkuZSAkc2NvcGUuYWRkcmVzc2VzID0gW10gaXMgbWlzc2luZ1xuICAgICAgICBjdHJsLml0ZW1zID0gW107XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIWFuZ3VsYXIuaXNBcnJheShpdGVtcykpIHtcbiAgICAgICAgICB0aHJvdyB1aVNlbGVjdE1pbkVycignaXRlbXMnLCBcIkV4cGVjdGVkIGFuIGFycmF5IGJ1dCBnb3QgJ3swfScuXCIsIGl0ZW1zKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL1JlbW92ZSBhbHJlYWR5IHNlbGVjdGVkIGl0ZW1zIChleDogd2hpbGUgc2VhcmNoaW5nKVxuICAgICAgICAgIC8vVE9ETyBTaG91bGQgYWRkIGEgdGVzdFxuICAgICAgICAgIGN0cmwucmVmcmVzaEl0ZW1zKGl0ZW1zKTtcblxuICAgICAgICAgIC8vdXBkYXRlIHRoZSB2aWV3IHZhbHVlIHdpdGggZnJlc2ggZGF0YSBmcm9tIGl0ZW1zLCBpZiB0aGVyZSBpcyBhIHZhbGlkIG1vZGVsIHZhbHVlXG4gICAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoY3RybC5uZ01vZGVsLiRtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgY3RybC5uZ01vZGVsLiRtb2RlbFZhbHVlID0gbnVsbDsgLy9Gb3JjZSBzY29wZSBtb2RlbCB2YWx1ZSBhbmQgbmdNb2RlbCB2YWx1ZSB0byBiZSBvdXQgb2Ygc3luYyB0byByZS1ydW4gZm9ybWF0dGVyc1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gIH07XG5cbiAgdmFyIF9yZWZyZXNoRGVsYXlQcm9taXNlO1xuXG4gIC8qKlxuICAgKiBUeXBlYWhlYWQgbW9kZTogbGV0cyB0aGUgdXNlciByZWZyZXNoIHRoZSBjb2xsZWN0aW9uIHVzaW5nIGhpcyBvd24gZnVuY3Rpb24uXG4gICAqXG4gICAqIFNlZSBFeHBvc2UgJHNlbGVjdC5zZWFyY2ggZm9yIGV4dGVybmFsIC8gcmVtb3RlIGZpbHRlcmluZyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1zZWxlY3QvcHVsbC8zMVxuICAgKi9cbiAgY3RybC5yZWZyZXNoID0gZnVuY3Rpb24ocmVmcmVzaEF0dHIpIHtcbiAgICBpZiAocmVmcmVzaEF0dHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRGVib3VuY2VcbiAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS9ib290c3RyYXAvYmxvYi8wLjEwLjAvc3JjL3R5cGVhaGVhZC90eXBlYWhlYWQuanMjTDE1NVxuICAgICAgLy8gRllJIEFuZ3VsYXJTdHJhcCB0eXBlYWhlYWQgZG9lcyBub3QgaGF2ZSBkZWJvdW5jaW5nOiBodHRwczovL2dpdGh1Yi5jb20vbWdjcmVhL2FuZ3VsYXItc3RyYXAvYmxvYi92Mi4wLjAtcmMuNC9zcmMvdHlwZWFoZWFkL3R5cGVhaGVhZC5qcyNMMTc3XG4gICAgICBpZiAoX3JlZnJlc2hEZWxheVByb21pc2UpIHtcbiAgICAgICAgJHRpbWVvdXQuY2FuY2VsKF9yZWZyZXNoRGVsYXlQcm9taXNlKTtcbiAgICAgIH1cbiAgICAgIF9yZWZyZXNoRGVsYXlQcm9taXNlID0gJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkc2NvcGUuJHNlbGVjdC5zZWFyY2gubGVuZ3RoID49ICRzY29wZS4kc2VsZWN0Lm1pbmltdW1JbnB1dExlbmd0aCkge1xuICAgICAgICAgIHZhciByZWZyZXNoUHJvbWlzZSA9ICRzY29wZS4kZXZhbChyZWZyZXNoQXR0cik7XG4gICAgICAgICAgaWYgKHJlZnJlc2hQcm9taXNlICYmIGFuZ3VsYXIuaXNGdW5jdGlvbihyZWZyZXNoUHJvbWlzZS50aGVuKSAmJiAhY3RybC5yZWZyZXNoaW5nKSB7XG4gICAgICAgICAgICBjdHJsLnJlZnJlc2hpbmcgPSB0cnVlO1xuICAgICAgICAgICAgcmVmcmVzaFByb21pc2UuZmluYWxseShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgY3RybC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sIGN0cmwucmVmcmVzaERlbGF5KTtcbiAgICB9XG4gIH07XG5cbiAgY3RybC5pc0FjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW1TY29wZSkge1xuICAgIGlmICggIWN0cmwub3BlbiApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGl0ZW1JbmRleCA9IGN0cmwuaXRlbXMuaW5kZXhPZihpdGVtU2NvcGVbY3RybC5pdGVtUHJvcGVydHldKTtcbiAgICB2YXIgaXNBY3RpdmUgPSAgaXRlbUluZGV4ID09IGN0cmwuYWN0aXZlSW5kZXg7XG5cbiAgICBpZiAoICFpc0FjdGl2ZSB8fCBpdGVtSW5kZXggPCAwICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChpc0FjdGl2ZSAmJiAhYW5ndWxhci5pc1VuZGVmaW5lZChjdHJsLm9uSGlnaGxpZ2h0Q2FsbGJhY2spKSB7XG4gICAgICBpdGVtU2NvcGUuJGV2YWwoY3RybC5vbkhpZ2hsaWdodENhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNBY3RpdmU7XG4gIH07XG5cbiAgdmFyIF9pc0l0ZW1TZWxlY3RlZCA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgcmV0dXJuIChjdHJsLnNlbGVjdGVkICYmIGFuZ3VsYXIuaXNBcnJheShjdHJsLnNlbGVjdGVkKSAmJlxuICAgICAgICBjdHJsLnNlbGVjdGVkLmZpbHRlcihmdW5jdGlvbiAoc2VsZWN0aW9uKSB7IHJldHVybiBhbmd1bGFyLmVxdWFscyhzZWxlY3Rpb24sIGl0ZW0pOyB9KS5sZW5ndGggPiAwKTtcbiAgfTtcblxuICB2YXIgZGlzYWJsZWRJdGVtcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIF91cGRhdGVJdGVtRGlzYWJsZWQoaXRlbSwgaXNEaXNhYmxlZCkge1xuICAgIHZhciBkaXNhYmxlZEl0ZW1JbmRleCA9IGRpc2FibGVkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICBpZiAoaXNEaXNhYmxlZCAmJiBkaXNhYmxlZEl0ZW1JbmRleCA9PT0gLTEpIHtcbiAgICAgIGRpc2FibGVkSXRlbXMucHVzaChpdGVtKTtcbiAgICB9XG5cbiAgICBpZiAoIWlzRGlzYWJsZWQgJiYgZGlzYWJsZWRJdGVtSW5kZXggPiAtMSkge1xuICAgICAgZGlzYWJsZWRJdGVtcy5zcGxpY2UoZGlzYWJsZWRJdGVtSW5kZXgsIDEpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIF9pc0l0ZW1EaXNhYmxlZChpdGVtKSB7XG4gICAgcmV0dXJuIGRpc2FibGVkSXRlbXMuaW5kZXhPZihpdGVtKSA+IC0xO1xuICB9XG5cbiAgY3RybC5pc0Rpc2FibGVkID0gZnVuY3Rpb24oaXRlbVNjb3BlKSB7XG5cbiAgICBpZiAoIWN0cmwub3BlbikgcmV0dXJuO1xuXG4gICAgdmFyIGl0ZW0gPSBpdGVtU2NvcGVbY3RybC5pdGVtUHJvcGVydHldO1xuICAgIHZhciBpdGVtSW5kZXggPSBjdHJsLml0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgdmFyIGlzRGlzYWJsZWQgPSBmYWxzZTtcblxuICAgIGlmIChpdGVtSW5kZXggPj0gMCAmJiAoYW5ndWxhci5pc0RlZmluZWQoY3RybC5kaXNhYmxlQ2hvaWNlRXhwcmVzc2lvbikgfHwgY3RybC5tdWx0aXBsZSkpIHtcblxuICAgICAgaWYgKGl0ZW0uaXNUYWcpIHJldHVybiBmYWxzZTtcblxuICAgICAgaWYgKGN0cmwubXVsdGlwbGUpIHtcbiAgICAgICAgaXNEaXNhYmxlZCA9IF9pc0l0ZW1TZWxlY3RlZChpdGVtKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc0Rpc2FibGVkICYmIGFuZ3VsYXIuaXNEZWZpbmVkKGN0cmwuZGlzYWJsZUNob2ljZUV4cHJlc3Npb24pKSB7XG4gICAgICAgIGlzRGlzYWJsZWQgPSAhIShpdGVtU2NvcGUuJGV2YWwoY3RybC5kaXNhYmxlQ2hvaWNlRXhwcmVzc2lvbikpO1xuICAgICAgfVxuXG4gICAgICBfdXBkYXRlSXRlbURpc2FibGVkKGl0ZW0sIGlzRGlzYWJsZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBpc0Rpc2FibGVkO1xuICB9O1xuXG5cbiAgLy8gV2hlbiB0aGUgdXNlciBzZWxlY3RzIGFuIGl0ZW0gd2l0aCBFTlRFUiBvciBjbGlja3MgdGhlIGRyb3Bkb3duXG4gIGN0cmwuc2VsZWN0ID0gZnVuY3Rpb24oaXRlbSwgc2tpcEZvY3Vzc2VyLCAkZXZlbnQpIHtcbiAgICBpZiAoaXNOaWwoaXRlbSkgfHwgIV9pc0l0ZW1EaXNhYmxlZChpdGVtKSkge1xuXG4gICAgICBpZiAoICEgY3RybC5pdGVtcyAmJiAhIGN0cmwuc2VhcmNoICYmICEgY3RybC50YWdnaW5nLmlzQWN0aXZhdGVkKSByZXR1cm47XG5cbiAgICAgIGlmICghaXRlbSB8fCAhX2lzSXRlbURpc2FibGVkKGl0ZW0pKSB7XG4gICAgICAgIC8vIGlmIGNsaWNrIGlzIG1hZGUgb24gZXhpc3RpbmcgaXRlbSwgcHJldmVudCBmcm9tIHRhZ2dpbmcsIGN0cmwuc2VhcmNoIGRvZXMgbm90IG1hdHRlclxuICAgICAgICBjdHJsLmNsaWNrVHJpZ2dlcmVkU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgIGlmKCRldmVudCAmJiAoJGV2ZW50LnR5cGUgPT09ICdjbGljaycgfHwgJGV2ZW50LnR5cGUgPT09ICd0b3VjaGVuZCcpICYmIGl0ZW0pXG4gICAgICAgICAgY3RybC5jbGlja1RyaWdnZXJlZFNlbGVjdCA9IHRydWU7XG5cbiAgICAgICAgaWYoY3RybC50YWdnaW5nLmlzQWN0aXZhdGVkICYmIGN0cmwuY2xpY2tUcmlnZ2VyZWRTZWxlY3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy8gaWYgdGFnZ2luZ0xhYmVsIGlzIGRpc2FibGVkIGFuZCBpdGVtIGlzIHVuZGVmaW5lZCB3ZSBwdWxsIGZyb20gY3RybC5zZWFyY2hcbiAgICAgICAgICBpZiAoIGN0cmwudGFnZ2luZ0xhYmVsID09PSBmYWxzZSApIHtcbiAgICAgICAgICAgIGlmICggY3RybC5hY3RpdmVJbmRleCA8IDAgKSB7XG4gICAgICAgICAgICAgIGlmIChpdGVtID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gY3RybC50YWdnaW5nLmZjdCAhPT0gdW5kZWZpbmVkID8gY3RybC50YWdnaW5nLmZjdChjdHJsLnNlYXJjaCkgOiBjdHJsLnNlYXJjaDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoIWl0ZW0gfHwgYW5ndWxhci5lcXVhbHMoIGN0cmwuaXRlbXNbMF0sIGl0ZW0gKSApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIGtleWJvYXJkIG5hdiBoYXBwZW5lZCBmaXJzdCwgdXNlciBzZWxlY3RlZCBmcm9tIGRyb3Bkb3duXG4gICAgICAgICAgICAgIGl0ZW0gPSBjdHJsLml0ZW1zW2N0cmwuYWN0aXZlSW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB0YWdnaW5nIGFsd2F5cyBvcGVyYXRlcyBhdCBpbmRleCB6ZXJvLCB0YWdnaW5nTGFiZWwgPT09IGZhbHNlIHB1c2hlc1xuICAgICAgICAgICAgLy8gdGhlIGN0cmwuc2VhcmNoIHZhbHVlIHdpdGhvdXQgaGF2aW5nIGl0IGluamVjdGVkXG4gICAgICAgICAgICBpZiAoIGN0cmwuYWN0aXZlSW5kZXggPT09IDAgKSB7XG4gICAgICAgICAgICAgIC8vIGN0cmwudGFnZ2luZyBwdXNoZXMgaXRlbXMgdG8gY3RybC5pdGVtcywgc28gd2Ugb25seSBoYXZlIGVtcHR5IHZhbFxuICAgICAgICAgICAgICAvLyBmb3IgYGl0ZW1gIGlmIGl0IGlzIGEgZGV0ZWN0ZWQgZHVwbGljYXRlXG4gICAgICAgICAgICAgIGlmICggaXRlbSA9PT0gdW5kZWZpbmVkICkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgIC8vIGNyZWF0ZSBuZXcgaXRlbSBvbiB0aGUgZmx5IGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBvbmU7XG4gICAgICAgICAgICAgIC8vIHVzZSB0YWdnaW5nIGZ1bmN0aW9uIGlmIHdlIGhhdmUgb25lXG4gICAgICAgICAgICAgIGlmICggY3RybC50YWdnaW5nLmZjdCAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiBpdGVtID09PSAnc3RyaW5nJyApIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gY3RybC50YWdnaW5nLmZjdChpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoIWl0ZW0pIHJldHVybjtcbiAgICAgICAgICAgICAgLy8gaWYgaXRlbSB0eXBlIGlzICdzdHJpbmcnLCBhcHBseSB0aGUgdGFnZ2luZyBsYWJlbFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKCB0eXBlb2YgaXRlbSA9PT0gJ3N0cmluZycgKSB7XG4gICAgICAgICAgICAgICAgLy8gdHJpbSB0aGUgdHJhaWxpbmcgc3BhY2VcbiAgICAgICAgICAgICAgICBpdGVtID0gaXRlbS5yZXBsYWNlKGN0cmwudGFnZ2luZ0xhYmVsLCcnKS50cmltKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gc2VhcmNoIGN0cmwuc2VsZWN0ZWQgZm9yIGR1cGVzIHBvdGVudGlhbGx5IGNhdXNlZCBieSB0YWdnaW5nIGFuZCByZXR1cm4gZWFybHkgaWYgZm91bmRcbiAgICAgICAgICBpZiAoX2lzSXRlbVNlbGVjdGVkKGl0ZW0pKSB7XG4gICAgICAgICAgICBjdHJsLmNsb3NlKHNraXBGb2N1c3Nlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9yZXNldFNlYXJjaElucHV0KCk7XG4gICAgICAgICRzY29wZS4kYnJvYWRjYXN0KCd1aXM6c2VsZWN0JywgaXRlbSk7XG5cbiAgICAgICAgaWYgKGN0cmwuY2xvc2VPblNlbGVjdCkge1xuICAgICAgICAgIGN0cmwuY2xvc2Uoc2tpcEZvY3Vzc2VyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyBDbG9zZXMgdGhlIGRyb3Bkb3duXG4gIGN0cmwuY2xvc2UgPSBmdW5jdGlvbihza2lwRm9jdXNzZXIpIHtcbiAgICBpZiAoIWN0cmwub3BlbikgcmV0dXJuO1xuICAgIGlmIChjdHJsLm5nTW9kZWwgJiYgY3RybC5uZ01vZGVsLiRzZXRUb3VjaGVkKSBjdHJsLm5nTW9kZWwuJHNldFRvdWNoZWQoKTtcbiAgICBjdHJsLm9wZW4gPSBmYWxzZTtcbiAgICBfcmVzZXRTZWFyY2hJbnB1dCgpO1xuICAgICRzY29wZS4kYnJvYWRjYXN0KCd1aXM6Y2xvc2UnLCBza2lwRm9jdXNzZXIpO1xuXG4gIH07XG5cbiAgY3RybC5zZXRGb2N1cyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKCFjdHJsLmZvY3VzKSBjdHJsLmZvY3VzSW5wdXRbMF0uZm9jdXMoKTtcbiAgfTtcblxuICBjdHJsLmNsZWFyID0gZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgY3RybC5zZWxlY3QobnVsbCk7XG4gICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgY3RybC5mb2N1c3NlclswXS5mb2N1cygpO1xuICAgIH0sIDAsIGZhbHNlKTtcbiAgfTtcblxuICAvLyBUb2dnbGUgZHJvcGRvd25cbiAgY3RybC50b2dnbGUgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGN0cmwub3Blbikge1xuICAgICAgY3RybC5jbG9zZSgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3RybC5hY3RpdmF0ZSgpO1xuICAgIH1cbiAgfTtcblxuICAvLyBTZXQgZGVmYXVsdCBmdW5jdGlvbiBmb3IgbG9ja2VkIGNob2ljZXMgLSBhdm9pZHMgdW5uZWNlc3NhcnlcbiAgLy8gbG9naWMgaWYgZnVuY3Rpb25hbGl0eSBpcyBub3QgYmVpbmcgdXNlZFxuICBjdHJsLmlzTG9ja2VkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYW5ndWxhci5pc0RlZmluZWQoY3RybC5sb2NrQ2hvaWNlRXhwcmVzc2lvbikgJiYgY3RybC5sb2NrQ2hvaWNlRXhwcmVzc2lvbiAhPT0gXCJcIjtcbiAgfSwgX2luaXRhbGlzZUxvY2tlZENob2ljZXMpO1xuXG4gIGZ1bmN0aW9uIF9pbml0YWxpc2VMb2NrZWRDaG9pY2VzKGRvSW5pdGFsaXNlKSB7XG4gICAgaWYoIWRvSW5pdGFsaXNlKSByZXR1cm47XG5cbiAgICB2YXIgbG9ja2VkSXRlbXMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIF91cGRhdGVJdGVtTG9ja2VkKGl0ZW0sIGlzTG9ja2VkKSB7XG4gICAgICB2YXIgbG9ja2VkSXRlbUluZGV4ID0gbG9ja2VkSXRlbXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIGlmIChpc0xvY2tlZCAmJiBsb2NrZWRJdGVtSW5kZXggPT09IC0xKSB7XG4gICAgICAgIGxvY2tlZEl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgaWYgKCFpc0xvY2tlZCAmJiBsb2NrZWRJdGVtSW5kZXggPiAtMSkge1xuICAgICAgICBsb2NrZWRJdGVtcy5zcGxpY2UobG9ja2VkSXRlbUluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfaXNJdGVtbG9ja2VkKGl0ZW0pIHtcbiAgICAgIHJldHVybiBsb2NrZWRJdGVtcy5pbmRleE9mKGl0ZW0pID4gLTE7XG4gICAgfVxuXG4gICAgY3RybC5pc0xvY2tlZCA9IGZ1bmN0aW9uIChpdGVtU2NvcGUsIGl0ZW1JbmRleCkge1xuICAgICAgdmFyIGlzTG9ja2VkID0gZmFsc2UsXG4gICAgICAgICAgaXRlbSA9IGN0cmwuc2VsZWN0ZWRbaXRlbUluZGV4XTtcblxuICAgICAgaWYoaXRlbSkge1xuICAgICAgICBpZiAoaXRlbVNjb3BlKSB7XG4gICAgICAgICAgaXNMb2NrZWQgPSAhIShpdGVtU2NvcGUuJGV2YWwoY3RybC5sb2NrQ2hvaWNlRXhwcmVzc2lvbikpO1xuICAgICAgICAgIF91cGRhdGVJdGVtTG9ja2VkKGl0ZW0sIGlzTG9ja2VkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpc0xvY2tlZCA9IF9pc0l0ZW1sb2NrZWQoaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGlzTG9ja2VkO1xuICAgIH07XG4gIH1cblxuXG4gIHZhciBzaXplV2F0Y2ggPSBudWxsO1xuICB2YXIgdXBkYXRlclNjaGVkdWxlZCA9IGZhbHNlO1xuICBjdHJsLnNpemVTZWFyY2hJbnB1dCA9IGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIGlucHV0ID0gY3RybC5zZWFyY2hJbnB1dFswXSxcbiAgICAgICAgY29udGFpbmVyID0gY3RybC4kZWxlbWVudFswXSxcbiAgICAgICAgY2FsY3VsYXRlQ29udGFpbmVyV2lkdGggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNvbnRhaW5lciB3aWR0aCBvbmx5IGlmIHRoZSBzZWFyY2ggaW5wdXQgaXMgdmlzaWJsZVxuICAgICAgICAgIHJldHVybiBjb250YWluZXIuY2xpZW50V2lkdGggKiAhIWlucHV0Lm9mZnNldFBhcmVudDtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlSWZWaXNpYmxlID0gZnVuY3Rpb24oY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICBpZiAoY29udGFpbmVyV2lkdGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIGlucHV0V2lkdGggPSBjb250YWluZXJXaWR0aCAtIGlucHV0Lm9mZnNldExlZnQ7XG4gICAgICAgICAgaWYgKGlucHV0V2lkdGggPCA1MCkgaW5wdXRXaWR0aCA9IGNvbnRhaW5lcldpZHRoO1xuICAgICAgICAgIGN0cmwuc2VhcmNoSW5wdXQuY3NzKCd3aWR0aCcsIGlucHV0V2lkdGgrJ3B4Jyk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG5cbiAgICBjdHJsLnNlYXJjaElucHV0LmNzcygnd2lkdGgnLCAnMTBweCcpO1xuICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkgeyAvL0dpdmUgdGFncyB0aW1lIHRvIHJlbmRlciBjb3JyZWN0bHlcbiAgICAgIGlmIChzaXplV2F0Y2ggPT09IG51bGwgJiYgIXVwZGF0ZUlmVmlzaWJsZShjYWxjdWxhdGVDb250YWluZXJXaWR0aCgpKSkge1xuICAgICAgICBzaXplV2F0Y2ggPSAkc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghdXBkYXRlclNjaGVkdWxlZCkge1xuICAgICAgICAgICAgdXBkYXRlclNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICAkc2NvcGUuJCRwb3N0RGlnZXN0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB1cGRhdGVyU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgIGlmICh1cGRhdGVJZlZpc2libGUoY2FsY3VsYXRlQ29udGFpbmVyV2lkdGgoKSkpIHtcbiAgICAgICAgICAgICAgICBzaXplV2F0Y2goKTtcbiAgICAgICAgICAgICAgICBzaXplV2F0Y2ggPSBudWxsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGFuZ3VsYXIubm9vcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gX2hhbmRsZURyb3BEb3duU2VsZWN0aW9uKGtleSkge1xuICAgIHZhciBwcm9jZXNzZWQgPSB0cnVlO1xuICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICBjYXNlIEtFWS5ET1dOOlxuICAgICAgICBpZiAoIWN0cmwub3BlbiAmJiBjdHJsLm11bHRpcGxlKSBjdHJsLmFjdGl2YXRlKGZhbHNlLCB0cnVlKTsgLy9JbiBjYXNlIGl0cyB0aGUgc2VhcmNoIGlucHV0IGluICdtdWx0aXBsZScgbW9kZVxuICAgICAgICBlbHNlIGlmIChjdHJsLmFjdGl2ZUluZGV4IDwgY3RybC5pdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgdmFyIGlkeCA9ICsrY3RybC5hY3RpdmVJbmRleDtcbiAgICAgICAgICB3aGlsZShfaXNJdGVtRGlzYWJsZWQoY3RybC5pdGVtc1tpZHhdKSAmJiBpZHggPCBjdHJsLml0ZW1zLmxlbmd0aCkge1xuICAgICAgICAgICAgY3RybC5hY3RpdmVJbmRleCA9ICsraWR4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZLlVQOlxuICAgICAgICB2YXIgbWluQWN0aXZlSW5kZXggPSAoY3RybC5zZWFyY2gubGVuZ3RoID09PSAwICYmIGN0cmwudGFnZ2luZy5pc0FjdGl2YXRlZCkgPyAtMSA6IDA7XG4gICAgICAgIGlmICghY3RybC5vcGVuICYmIGN0cmwubXVsdGlwbGUpIGN0cmwuYWN0aXZhdGUoZmFsc2UsIHRydWUpOyAvL0luIGNhc2UgaXRzIHRoZSBzZWFyY2ggaW5wdXQgaW4gJ211bHRpcGxlJyBtb2RlXG4gICAgICAgIGVsc2UgaWYgKGN0cmwuYWN0aXZlSW5kZXggPiBtaW5BY3RpdmVJbmRleCkge1xuICAgICAgICAgIHZhciBpZHhtaW4gPSAtLWN0cmwuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgd2hpbGUoX2lzSXRlbURpc2FibGVkKGN0cmwuaXRlbXNbaWR4bWluXSkgJiYgaWR4bWluID4gbWluQWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIGN0cmwuYWN0aXZlSW5kZXggPSAtLWlkeG1pbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEtFWS5UQUI6XG4gICAgICAgIGlmICghY3RybC5tdWx0aXBsZSB8fCBjdHJsLm9wZW4pIGN0cmwuc2VsZWN0KGN0cmwuaXRlbXNbY3RybC5hY3RpdmVJbmRleF0sIHRydWUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgS0VZLkVOVEVSOlxuICAgICAgICBpZihjdHJsLm9wZW4gJiYgKGN0cmwudGFnZ2luZy5pc0FjdGl2YXRlZCB8fCBjdHJsLmFjdGl2ZUluZGV4ID49IDApKXtcbiAgICAgICAgICBjdHJsLnNlbGVjdChjdHJsLml0ZW1zW2N0cmwuYWN0aXZlSW5kZXhdLCBjdHJsLnNraXBGb2N1c3Nlcik7IC8vIE1ha2Ugc3VyZSBhdCBsZWFzdCBvbmUgZHJvcGRvd24gaXRlbSBpcyBoaWdobGlnaHRlZCBiZWZvcmUgYWRkaW5nIGlmIG5vdCBpbiB0YWdnaW5nIG1vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjdHJsLmFjdGl2YXRlKGZhbHNlLCB0cnVlKTsgLy9JbiBjYXNlIGl0cyB0aGUgc2VhcmNoIGlucHV0IGluICdtdWx0aXBsZScgbW9kZVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVkuRVNDOlxuICAgICAgICBjdHJsLmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBwcm9jZXNzZWQ7XG4gIH1cblxuICAvLyBCaW5kIHRvIGtleWJvYXJkIHNob3J0Y3V0c1xuICBjdHJsLnNlYXJjaElucHV0Lm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuXG4gICAgdmFyIGtleSA9IGUud2hpY2g7XG5cbiAgICBpZiAofltLRVkuRU5URVIsS0VZLkVTQ10uaW5kZXhPZihrZXkpKXtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgJHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcblxuICAgICAgdmFyIHRhZ2dlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAoY3RybC5pdGVtcy5sZW5ndGggPiAwIHx8IGN0cmwudGFnZ2luZy5pc0FjdGl2YXRlZCkge1xuICAgICAgICBpZighX2hhbmRsZURyb3BEb3duU2VsZWN0aW9uKGtleSkgJiYgIWN0cmwuc2VhcmNoRW5hYmxlZCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICggY3RybC50YWdnaW5nVG9rZW5zLmlzQWN0aXZhdGVkICkge1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY3RybC50YWdnaW5nVG9rZW5zLnRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCBjdHJsLnRhZ2dpbmdUb2tlbnMudG9rZW5zW2ldID09PSBLRVkuTUFQW2Uua2V5Q29kZV0gKSB7XG4gICAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB0aGVyZSBpcyBhIG5ldyB2YWx1ZSB0byBwdXNoIHZpYSB0YWdnaW5nXG4gICAgICAgICAgICAgIGlmICggY3RybC5zZWFyY2gubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgICB0YWdnZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICggdGFnZ2VkICkge1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIGN0cmwuc2VhcmNoSW5wdXQudHJpZ2dlckhhbmRsZXIoJ3RhZ2dlZCcpO1xuICAgICAgICAgICAgICB2YXIgbmV3SXRlbSA9IGN0cmwuc2VhcmNoLnJlcGxhY2UoS0VZLk1BUFtlLmtleUNvZGVdLCcnKS50cmltKCk7XG4gICAgICAgICAgICAgIGlmICggY3RybC50YWdnaW5nLmZjdCApIHtcbiAgICAgICAgICAgICAgICBuZXdJdGVtID0gY3RybC50YWdnaW5nLmZjdCggbmV3SXRlbSApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChuZXdJdGVtKSBjdHJsLnNlbGVjdChuZXdJdGVtLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG5cbiAgICBpZihLRVkuaXNWZXJ0aWNhbE1vdmVtZW50KGtleSkgJiYgY3RybC5pdGVtcy5sZW5ndGggPiAwKXtcbiAgICAgIF9lbnN1cmVIaWdobGlnaHRWaXNpYmxlKCk7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gS0VZLkVOVEVSIHx8IGtleSA9PT0gS0VZLkVTQykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG5cbiAgfSk7XG5cbiAgY3RybC5zZWFyY2hJbnB1dC5vbigncGFzdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBkYXRhO1xuXG4gICAgaWYgKHdpbmRvdy5jbGlwYm9hcmREYXRhICYmIHdpbmRvdy5jbGlwYm9hcmREYXRhLmdldERhdGEpIHsgLy8gSUVcbiAgICAgIGRhdGEgPSB3aW5kb3cuY2xpcGJvYXJkRGF0YS5nZXREYXRhKCdUZXh0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSAoZS5vcmlnaW5hbEV2ZW50IHx8IGUpLmNsaXBib2FyZERhdGEuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgIH1cblxuICAgIC8vIFByZXBlbmQgdGhlIGN1cnJlbnQgaW5wdXQgZmllbGQgdGV4dCB0byB0aGUgcGFzdGUgYnVmZmVyLlxuICAgIGRhdGEgPSBjdHJsLnNlYXJjaCArIGRhdGE7XG5cbiAgICBpZiAoZGF0YSAmJiBkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgIC8vIElmIHRhZ2dpbmcgdHJ5IHRvIHNwbGl0IGJ5IHRva2VucyBhbmQgYWRkIGl0ZW1zXG4gICAgICBpZiAoY3RybC50YWdnaW5nVG9rZW5zLmlzQWN0aXZhdGVkKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGN0cmwudGFnZ2luZ1Rva2Vucy50b2tlbnMubGVuZ3RoOyBpKyspIHsgIC8vIHNwbGl0IGJ5IGZpcnN0IHRva2VuIHRoYXQgaXMgY29udGFpbmVkIGluIGRhdGFcbiAgICAgICAgICB2YXIgc2VwYXJhdG9yID0gS0VZLnRvU2VwYXJhdG9yKGN0cmwudGFnZ2luZ1Rva2Vucy50b2tlbnNbaV0pIHx8IGN0cmwudGFnZ2luZ1Rva2Vucy50b2tlbnNbaV07XG4gICAgICAgICAgaWYgKGRhdGEuaW5kZXhPZihzZXBhcmF0b3IpID4gLTEpIHtcbiAgICAgICAgICAgIGl0ZW1zID0gZGF0YS5zcGxpdChzZXBhcmF0b3IpO1xuICAgICAgICAgICAgYnJlYWs7ICAvLyBvbmx5IHNwbGl0IGJ5IG9uZSB0b2tlblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgaXRlbXMgPSBbZGF0YV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9sZHNlYXJjaCA9IGN0cmwuc2VhcmNoO1xuICAgICAgICBhbmd1bGFyLmZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgdmFyIG5ld0l0ZW0gPSBjdHJsLnRhZ2dpbmcuZmN0ID8gY3RybC50YWdnaW5nLmZjdChpdGVtKSA6IGl0ZW07XG4gICAgICAgICAgaWYgKG5ld0l0ZW0pIHtcbiAgICAgICAgICAgIGN0cmwuc2VsZWN0KG5ld0l0ZW0sIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGN0cmwuc2VhcmNoID0gb2xkc2VhcmNoIHx8IEVNUFRZX1NFQVJDSDtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSBlbHNlIGlmIChjdHJsLnBhc3RlKSB7XG4gICAgICAgIGN0cmwucGFzdGUoZGF0YSk7XG4gICAgICAgIGN0cmwuc2VhcmNoID0gRU1QVFlfU0VBUkNIO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBjdHJsLnNlYXJjaElucHV0Lm9uKCd0YWdnZWQnLCBmdW5jdGlvbigpIHtcbiAgICAkdGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIF9yZXNldFNlYXJjaElucHV0KCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vaXZheW5iZXJnL3NlbGVjdDIvYmxvYi8zLjQuNi9zZWxlY3QyLmpzI0wxNDMxXG4gIGZ1bmN0aW9uIF9lbnN1cmVIaWdobGlnaHRWaXNpYmxlKCkge1xuICAgIHZhciBjb250YWluZXIgPSAkZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudWktc2VsZWN0LWNob2ljZXMtY29udGVudCcpO1xuICAgIHZhciBjaG9pY2VzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3QtY2hvaWNlcy1yb3cnKTtcbiAgICBpZiAoY2hvaWNlcy5sZW5ndGggPCAxKSB7XG4gICAgICB0aHJvdyB1aVNlbGVjdE1pbkVycignY2hvaWNlcycsIFwiRXhwZWN0ZWQgbXVsdGlwbGUgLnVpLXNlbGVjdC1jaG9pY2VzLXJvdyBidXQgZ290ICd7MH0nLlwiLCBjaG9pY2VzLmxlbmd0aCk7XG4gICAgfVxuXG4gICAgaWYgKGN0cmwuYWN0aXZlSW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGhpZ2hsaWdodGVkID0gY2hvaWNlc1tjdHJsLmFjdGl2ZUluZGV4XTtcbiAgICB2YXIgcG9zWSA9IGhpZ2hsaWdodGVkLm9mZnNldFRvcCArIGhpZ2hsaWdodGVkLmNsaWVudEhlaWdodCAtIGNvbnRhaW5lclswXS5zY3JvbGxUb3A7XG4gICAgdmFyIGhlaWdodCA9IGNvbnRhaW5lclswXS5vZmZzZXRIZWlnaHQ7XG5cbiAgICBpZiAocG9zWSA+IGhlaWdodCkge1xuICAgICAgY29udGFpbmVyWzBdLnNjcm9sbFRvcCArPSBwb3NZIC0gaGVpZ2h0O1xuICAgIH0gZWxzZSBpZiAocG9zWSA8IGhpZ2hsaWdodGVkLmNsaWVudEhlaWdodCkge1xuICAgICAgaWYgKGN0cmwuaXNHcm91cGVkICYmIGN0cmwuYWN0aXZlSW5kZXggPT09IDApXG4gICAgICAgIGNvbnRhaW5lclswXS5zY3JvbGxUb3AgPSAwOyAvL1RvIG1ha2UgZ3JvdXAgaGVhZGVyIHZpc2libGUgd2hlbiBnb2luZyBhbGwgdGhlIHdheSB1cFxuICAgICAgZWxzZVxuICAgICAgICBjb250YWluZXJbMF0uc2Nyb2xsVG9wIC09IGhpZ2hsaWdodGVkLmNsaWVudEhlaWdodCAtIHBvc1k7XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uUmVzaXplID0gJCR1aXNEZWJvdW5jZShmdW5jdGlvbigpIHtcbiAgICBjdHJsLnNpemVTZWFyY2hJbnB1dCgpO1xuICB9LCA1MCk7XG5cbiAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLmJpbmQoJ3Jlc2l6ZScsIG9uUmVzaXplKTtcblxuICAkc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uKCkge1xuICAgIGN0cmwuc2VhcmNoSW5wdXQub2ZmKCdrZXl1cCBrZXlkb3duIHRhZ2dlZCBibHVyIHBhc3RlJyk7XG4gICAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLm9mZigncmVzaXplJywgb25SZXNpemUpO1xuICB9KTtcblxuICAkc2NvcGUuJHdhdGNoKCckc2VsZWN0LmFjdGl2ZUluZGV4JywgZnVuY3Rpb24oYWN0aXZlSW5kZXgpIHtcbiAgICBpZiAoYWN0aXZlSW5kZXgpXG4gICAgICAkZWxlbWVudC5maW5kKCdpbnB1dCcpLmF0dHIoXG4gICAgICAgICdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLFxuICAgICAgICAndWktc2VsZWN0LWNob2ljZXMtcm93LScgKyBjdHJsLmdlbmVyYXRlZElkICsgJy0nICsgYWN0aXZlSW5kZXgpO1xuICB9KTtcblxuICAkc2NvcGUuJHdhdGNoKCckc2VsZWN0Lm9wZW4nLCBmdW5jdGlvbihvcGVuKSB7XG4gICAgaWYgKCFvcGVuKVxuICAgICAgJGVsZW1lbnQuZmluZCgnaW5wdXQnKS5yZW1vdmVBdHRyKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnKTtcbiAgfSk7XG59XSk7XG5cbnVpcy5kaXJlY3RpdmUoJ3VpU2VsZWN0JyxcbiAgWyckZG9jdW1lbnQnLCAndWlTZWxlY3RDb25maWcnLCAndWlTZWxlY3RNaW5FcnInLCAndWlzT2Zmc2V0JywgJyRjb21waWxlJywgJyRwYXJzZScsICckdGltZW91dCcsXG4gIGZ1bmN0aW9uKCRkb2N1bWVudCwgdWlTZWxlY3RDb25maWcsIHVpU2VsZWN0TWluRXJyLCB1aXNPZmZzZXQsICRjb21waWxlLCAkcGFyc2UsICR0aW1lb3V0KSB7XG5cbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24odEVsZW1lbnQsIHRBdHRycykge1xuICAgICAgdmFyIHRoZW1lID0gdEF0dHJzLnRoZW1lIHx8IHVpU2VsZWN0Q29uZmlnLnRoZW1lO1xuICAgICAgcmV0dXJuIHRoZW1lICsgKGFuZ3VsYXIuaXNEZWZpbmVkKHRBdHRycy5tdWx0aXBsZSkgPyAnL3NlbGVjdC1tdWx0aXBsZS50cGwuaHRtbCcgOiAnL3NlbGVjdC50cGwuaHRtbCcpO1xuICAgIH0sXG4gICAgcmVwbGFjZTogdHJ1ZSxcbiAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgIHJlcXVpcmU6IFsndWlTZWxlY3QnLCAnXm5nTW9kZWwnXSxcbiAgICBzY29wZTogdHJ1ZSxcblxuICAgIGNvbnRyb2xsZXI6ICd1aVNlbGVjdEN0cmwnLFxuICAgIGNvbnRyb2xsZXJBczogJyRzZWxlY3QnLFxuICAgIGNvbXBpbGU6IGZ1bmN0aW9uKHRFbGVtZW50LCB0QXR0cnMpIHtcblxuICAgICAgLy8gQWxsb3cgc2V0dGluZyBuZ0NsYXNzIG9uIHVpU2VsZWN0XG4gICAgICB2YXIgbWF0Y2ggPSAveyguKil9XFxzKnsoLiopfS8uZXhlYyh0QXR0cnMubmdDbGFzcyk7XG4gICAgICBpZihtYXRjaCkge1xuICAgICAgICB2YXIgY29tYmluZWQgPSAneycrIG1hdGNoWzFdICsnLCAnKyBtYXRjaFsyXSArJ30nO1xuICAgICAgICB0QXR0cnMubmdDbGFzcyA9IGNvbWJpbmVkO1xuICAgICAgICB0RWxlbWVudC5hdHRyKCduZy1jbGFzcycsIGNvbWJpbmVkKTtcbiAgICAgIH1cblxuICAgICAgLy9NdWx0aXBsZSBvciBTaW5nbGUgZGVwZW5kaW5nIGlmIG11bHRpcGxlIGF0dHJpYnV0ZSBwcmVzZW5jZVxuICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKHRBdHRycy5tdWx0aXBsZSkpXG4gICAgICAgIHRFbGVtZW50LmFwcGVuZCgnPHVpLXNlbGVjdC1tdWx0aXBsZS8+JykucmVtb3ZlQXR0cignbXVsdGlwbGUnKTtcbiAgICAgIGVsc2VcbiAgICAgICAgdEVsZW1lbnQuYXBwZW5kKCc8dWktc2VsZWN0LXNpbmdsZS8+Jyk7XG5cbiAgICAgIGlmICh0QXR0cnMuaW5wdXRJZClcbiAgICAgICAgdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQudWktc2VsZWN0LXNlYXJjaCcpWzBdLmlkID0gdEF0dHJzLmlucHV0SWQ7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzLCB0cmFuc2NsdWRlRm4pIHtcblxuICAgICAgICB2YXIgJHNlbGVjdCA9IGN0cmxzWzBdO1xuICAgICAgICB2YXIgbmdNb2RlbCA9IGN0cmxzWzFdO1xuXG4gICAgICAgICRzZWxlY3QuZ2VuZXJhdGVkSWQgPSB1aVNlbGVjdENvbmZpZy5nZW5lcmF0ZUlkKCk7XG4gICAgICAgICRzZWxlY3QuYmFzZVRpdGxlID0gYXR0cnMudGl0bGUgfHwgJ1NlbGVjdCBib3gnO1xuICAgICAgICAkc2VsZWN0LmZvY3Vzc2VyVGl0bGUgPSAkc2VsZWN0LmJhc2VUaXRsZSArICcgZm9jdXMnO1xuICAgICAgICAkc2VsZWN0LmZvY3Vzc2VySWQgPSAnZm9jdXNzZXItJyArICRzZWxlY3QuZ2VuZXJhdGVkSWQ7XG5cbiAgICAgICAgJHNlbGVjdC5jbG9zZU9uU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmNsb3NlT25TZWxlY3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gJHBhcnNlKGF0dHJzLmNsb3NlT25TZWxlY3QpKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1aVNlbGVjdENvbmZpZy5jbG9zZU9uU2VsZWN0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSgpO1xuXG4gICAgICAgIHNjb3BlLiR3YXRjaCgnc2tpcEZvY3Vzc2VyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc2tpcEZvY3Vzc2VyID0gc2NvcGUuJGV2YWwoYXR0cnMuc2tpcEZvY3Vzc2VyKTtcbiAgICAgICAgICAgICRzZWxlY3Quc2tpcEZvY3Vzc2VyID0gc2tpcEZvY3Vzc2VyICE9PSB1bmRlZmluZWQgPyBza2lwRm9jdXNzZXIgOiB1aVNlbGVjdENvbmZpZy5za2lwRm9jdXNzZXI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRzZWxlY3Qub25TZWxlY3RDYWxsYmFjayA9ICRwYXJzZShhdHRycy5vblNlbGVjdCk7XG4gICAgICAgICRzZWxlY3Qub25SZW1vdmVDYWxsYmFjayA9ICRwYXJzZShhdHRycy5vblJlbW92ZSk7XG5cbiAgICAgICAgLy9TZXQgcmVmZXJlbmNlIHRvIG5nTW9kZWwgZnJvbSB1aVNlbGVjdEN0cmxcbiAgICAgICAgJHNlbGVjdC5uZ01vZGVsID0gbmdNb2RlbDtcblxuICAgICAgICAkc2VsZWN0LmNob2ljZUdyb3VwZWQgPSBmdW5jdGlvbihncm91cCl7XG4gICAgICAgICAgcmV0dXJuICRzZWxlY3QuaXNHcm91cGVkICYmIGdyb3VwICYmIGdyb3VwLm5hbWU7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoYXR0cnMudGFiaW5kZXgpe1xuICAgICAgICAgIGF0dHJzLiRvYnNlcnZlKCd0YWJpbmRleCcsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAkc2VsZWN0LmZvY3VzSW5wdXQuYXR0cigndGFiaW5kZXgnLCB2YWx1ZSk7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHIoJ3RhYmluZGV4Jyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS4kd2F0Y2goZnVuY3Rpb24gKCkgeyByZXR1cm4gc2NvcGUuJGV2YWwoYXR0cnMuc2VhcmNoRW5hYmxlZCk7IH0sIGZ1bmN0aW9uKG5ld1ZhbCkge1xuICAgICAgICAgICRzZWxlY3Quc2VhcmNoRW5hYmxlZCA9IG5ld1ZhbCAhPT0gdW5kZWZpbmVkID8gbmV3VmFsIDogdWlTZWxlY3RDb25maWcuc2VhcmNoRW5hYmxlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJHdhdGNoKCdzb3J0YWJsZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHNvcnRhYmxlID0gc2NvcGUuJGV2YWwoYXR0cnMuc29ydGFibGUpO1xuICAgICAgICAgICAgJHNlbGVjdC5zb3J0YWJsZSA9IHNvcnRhYmxlICE9PSB1bmRlZmluZWQgPyBzb3J0YWJsZSA6IHVpU2VsZWN0Q29uZmlnLnNvcnRhYmxlO1xuICAgICAgICB9KTtcblxuICAgICAgICBhdHRycy4kb2JzZXJ2ZSgnYmFja3NwYWNlUmVzZXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyAkZXZhbCgpIGlzIG5lZWRlZCBvdGhlcndpc2Ugd2UgZ2V0IGEgc3RyaW5nIGluc3RlYWQgb2YgYSBib29sZWFuXG4gICAgICAgICAgdmFyIGJhY2tzcGFjZVJlc2V0ID0gc2NvcGUuJGV2YWwoYXR0cnMuYmFja3NwYWNlUmVzZXQpO1xuICAgICAgICAgICRzZWxlY3QuYmFja3NwYWNlUmVzZXQgPSBiYWNrc3BhY2VSZXNldCAhPT0gdW5kZWZpbmVkID8gYmFja3NwYWNlUmVzZXQgOiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBhdHRycy4kb2JzZXJ2ZSgnbGltaXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvL0xpbWl0IHRoZSBudW1iZXIgb2Ygc2VsZWN0aW9ucyBhbGxvd2VkXG4gICAgICAgICAgJHNlbGVjdC5saW1pdCA9IChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5saW1pdCkpID8gcGFyc2VJbnQoYXR0cnMubGltaXQsIDEwKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJHdhdGNoKCdyZW1vdmVTZWxlY3RlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHJlbW92ZVNlbGVjdGVkID0gc2NvcGUuJGV2YWwoYXR0cnMucmVtb3ZlU2VsZWN0ZWQpO1xuICAgICAgICAgICAgJHNlbGVjdC5yZW1vdmVTZWxlY3RlZCA9IHJlbW92ZVNlbGVjdGVkICE9PSB1bmRlZmluZWQgPyByZW1vdmVTZWxlY3RlZCA6IHVpU2VsZWN0Q29uZmlnLnJlbW92ZVNlbGVjdGVkO1xuICAgICAgICB9KTtcblxuICAgICAgICBhdHRycy4kb2JzZXJ2ZSgnZGlzYWJsZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBObyBuZWVkIHRvIHVzZSAkZXZhbCgpICh0aGFua3MgdG8gbmctZGlzYWJsZWQpIHNpbmNlIHdlIGFscmVhZHkgZ2V0IGEgYm9vbGVhbiBpbnN0ZWFkIG9mIGEgc3RyaW5nXG4gICAgICAgICAgJHNlbGVjdC5kaXNhYmxlZCA9IGF0dHJzLmRpc2FibGVkICE9PSB1bmRlZmluZWQgPyBhdHRycy5kaXNhYmxlZCA6IGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICBhdHRycy4kb2JzZXJ2ZSgncmVzZXRTZWFyY2hJbnB1dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vICRldmFsKCkgaXMgbmVlZGVkIG90aGVyd2lzZSB3ZSBnZXQgYSBzdHJpbmcgaW5zdGVhZCBvZiBhIGJvb2xlYW5cbiAgICAgICAgICB2YXIgcmVzZXRTZWFyY2hJbnB1dCA9IHNjb3BlLiRldmFsKGF0dHJzLnJlc2V0U2VhcmNoSW5wdXQpO1xuICAgICAgICAgICRzZWxlY3QucmVzZXRTZWFyY2hJbnB1dCA9IHJlc2V0U2VhcmNoSW5wdXQgIT09IHVuZGVmaW5lZCA/IHJlc2V0U2VhcmNoSW5wdXQgOiB0cnVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBhdHRycy4kb2JzZXJ2ZSgncGFzdGUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkc2VsZWN0LnBhc3RlID0gc2NvcGUuJGV2YWwoYXR0cnMucGFzdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBhdHRycy4kb2JzZXJ2ZSgndGFnZ2luZycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmKGF0dHJzLnRhZ2dpbmcgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyAkZXZhbCgpIGlzIG5lZWRlZCBvdGhlcndpc2Ugd2UgZ2V0IGEgc3RyaW5nIGluc3RlYWQgb2YgYSBib29sZWFuXG4gICAgICAgICAgICB2YXIgdGFnZ2luZ0V2YWwgPSBzY29wZS4kZXZhbChhdHRycy50YWdnaW5nKTtcbiAgICAgICAgICAgICRzZWxlY3QudGFnZ2luZyA9IHtpc0FjdGl2YXRlZDogdHJ1ZSwgZmN0OiB0YWdnaW5nRXZhbCAhPT0gdHJ1ZSA/IHRhZ2dpbmdFdmFsIDogdW5kZWZpbmVkfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgIHtcbiAgICAgICAgICAgICRzZWxlY3QudGFnZ2luZyA9IHtpc0FjdGl2YXRlZDogZmFsc2UsIGZjdDogdW5kZWZpbmVkfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF0dHJzLiRvYnNlcnZlKCd0YWdnaW5nTGFiZWwnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZihhdHRycy50YWdnaW5nICE9PSB1bmRlZmluZWQgKVxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC8vIGNoZWNrIGV2YWwgZm9yIEZBTFNFLCBpbiB0aGlzIGNhc2UsIHdlIGRpc2FibGUgdGhlIGxhYmVsc1xuICAgICAgICAgICAgLy8gYXNzb2NpYXRlZCB3aXRoIHRhZ2dpbmdcbiAgICAgICAgICAgIGlmICggYXR0cnMudGFnZ2luZ0xhYmVsID09PSAnZmFsc2UnICkge1xuICAgICAgICAgICAgICAkc2VsZWN0LnRhZ2dpbmdMYWJlbCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAkc2VsZWN0LnRhZ2dpbmdMYWJlbCA9IGF0dHJzLnRhZ2dpbmdMYWJlbCAhPT0gdW5kZWZpbmVkID8gYXR0cnMudGFnZ2luZ0xhYmVsIDogJyhuZXcpJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF0dHJzLiRvYnNlcnZlKCd0YWdnaW5nVG9rZW5zJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGF0dHJzLnRhZ2dpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFyIHRva2VucyA9IGF0dHJzLnRhZ2dpbmdUb2tlbnMgIT09IHVuZGVmaW5lZCA/IGF0dHJzLnRhZ2dpbmdUb2tlbnMuc3BsaXQoJ3wnKSA6IFsnLCcsJ0VOVEVSJ107XG4gICAgICAgICAgICAkc2VsZWN0LnRhZ2dpbmdUb2tlbnMgPSB7aXNBY3RpdmF0ZWQ6IHRydWUsIHRva2VuczogdG9rZW5zIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhdHRycy4kb2JzZXJ2ZSgnc3Bpbm5lckVuYWJsZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyAkZXZhbCgpIGlzIG5lZWRlZCBvdGhlcndpc2Ugd2UgZ2V0IGEgc3RyaW5nIGluc3RlYWQgb2YgYSBib29sZWFuXG4gICAgICAgICAgdmFyIHNwaW5uZXJFbmFibGVkID0gc2NvcGUuJGV2YWwoYXR0cnMuc3Bpbm5lckVuYWJsZWQpO1xuICAgICAgICAgICRzZWxlY3Quc3Bpbm5lckVuYWJsZWQgPSBzcGlubmVyRW5hYmxlZCAhPT0gdW5kZWZpbmVkID8gc3Bpbm5lckVuYWJsZWQgOiB1aVNlbGVjdENvbmZpZy5zcGlubmVyRW5hYmxlZDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXR0cnMuJG9ic2VydmUoJ3NwaW5uZXJDbGFzcycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBzcGlubmVyQ2xhc3MgPSBhdHRycy5zcGlubmVyQ2xhc3M7XG4gICAgICAgICAgJHNlbGVjdC5zcGlubmVyQ2xhc3MgPSBzcGlubmVyQ2xhc3MgIT09IHVuZGVmaW5lZCA/IGF0dHJzLnNwaW5uZXJDbGFzcyA6IHVpU2VsZWN0Q29uZmlnLnNwaW5uZXJDbGFzcztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9BdXRvbWF0aWNhbGx5IGdldHMgZm9jdXMgd2hlbiBsb2FkZWRcbiAgICAgICAgaWYgKGFuZ3VsYXIuaXNEZWZpbmVkKGF0dHJzLmF1dG9mb2N1cykpe1xuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkc2VsZWN0LnNldEZvY3VzKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL0dldHMgZm9jdXMgYmFzZWQgb24gc2NvcGUgZXZlbnQgbmFtZSAoZS5nLiBmb2N1cy1vbj0nU29tZUV2ZW50TmFtZScpXG4gICAgICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZChhdHRycy5mb2N1c09uKSl7XG4gICAgICAgICAgc2NvcGUuJG9uKGF0dHJzLmZvY3VzT24sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICRzZWxlY3Quc2V0Rm9jdXMoKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBvbkRvY3VtZW50Q2xpY2soZSkge1xuICAgICAgICAgIGlmICghJHNlbGVjdC5vcGVuKSByZXR1cm47IC8vU2tpcCBpdCBpZiBkcm9wZG93biBpcyBjbG9zZVxuXG4gICAgICAgICAgdmFyIGNvbnRhaW5zID0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAod2luZG93LmpRdWVyeSkge1xuICAgICAgICAgICAgLy8gRmlyZWZveCAzLjYgZG9lcyBub3Qgc3VwcG9ydCBlbGVtZW50LmNvbnRhaW5zKClcbiAgICAgICAgICAgIC8vIFNlZSBOb2RlLmNvbnRhaW5zIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Ob2RlLmNvbnRhaW5zXG4gICAgICAgICAgICBjb250YWlucyA9IHdpbmRvdy5qUXVlcnkuY29udGFpbnMoZWxlbWVudFswXSwgZS50YXJnZXQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250YWlucyA9IGVsZW1lbnRbMF0uY29udGFpbnMoZS50YXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghY29udGFpbnMgJiYgISRzZWxlY3QuY2xpY2tUcmlnZ2VyZWRTZWxlY3QpIHtcbiAgICAgICAgICAgIHZhciBza2lwRm9jdXNzZXI7XG4gICAgICAgICAgICBpZiAoISRzZWxlY3Quc2tpcEZvY3Vzc2VyKSB7XG4gICAgICAgICAgICAgIC8vV2lsbCBsb3NlIGZvY3VzIG9ubHkgd2l0aCBjZXJ0YWluIHRhcmdldHNcbiAgICAgICAgICAgICAgdmFyIGZvY3VzYWJsZUNvbnRyb2xzID0gWydpbnB1dCcsJ2J1dHRvbicsJ3RleHRhcmVhJywnc2VsZWN0J107XG4gICAgICAgICAgICAgIHZhciB0YXJnZXRDb250cm9sbGVyID0gYW5ndWxhci5lbGVtZW50KGUudGFyZ2V0KS5jb250cm9sbGVyKCd1aVNlbGVjdCcpOyAvL1RvIGNoZWNrIGlmIHRhcmdldCBpcyBvdGhlciB1aS1zZWxlY3RcbiAgICAgICAgICAgICAgc2tpcEZvY3Vzc2VyID0gdGFyZ2V0Q29udHJvbGxlciAmJiB0YXJnZXRDb250cm9sbGVyICE9PSAkc2VsZWN0OyAvL1RvIGNoZWNrIGlmIHRhcmdldCBpcyBvdGhlciB1aS1zZWxlY3RcbiAgICAgICAgICAgICAgaWYgKCFza2lwRm9jdXNzZXIpIHNraXBGb2N1c3NlciA9ICB+Zm9jdXNhYmxlQ29udHJvbHMuaW5kZXhPZihlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpOyAvL0NoZWNrIGlmIHRhcmdldCBpcyBpbnB1dCwgYnV0dG9uIG9yIHRleHRhcmVhXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBza2lwRm9jdXNzZXIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJHNlbGVjdC5jbG9zZShza2lwRm9jdXNzZXIpO1xuICAgICAgICAgICAgc2NvcGUuJGRpZ2VzdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAkc2VsZWN0LmNsaWNrVHJpZ2dlcmVkU2VsZWN0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZWUgQ2xpY2sgZXZlcnl3aGVyZSBidXQgaGVyZSBldmVudCBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEyOTMxMzY5XG4gICAgICAgICRkb2N1bWVudC5vbignY2xpY2snLCBvbkRvY3VtZW50Q2xpY2spO1xuXG4gICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkZG9jdW1lbnQub2ZmKCdjbGljaycsIG9uRG9jdW1lbnRDbGljayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1vdmUgdHJhbnNjbHVkZWQgZWxlbWVudHMgdG8gdGhlaXIgY29ycmVjdCBwb3NpdGlvbiBpbiBtYWluIHRlbXBsYXRlXG4gICAgICAgIHRyYW5zY2x1ZGVGbihzY29wZSwgZnVuY3Rpb24oY2xvbmUpIHtcbiAgICAgICAgICAvLyBTZWUgVHJhbnNjbHVkZSBpbiBBbmd1bGFySlMgaHR0cDovL2Jsb2cub21rYXJwYXRpbC5jb20vMjAxMi8xMS90cmFuc2NsdWRlLWluLWFuZ3VsYXJqcy5odG1sXG5cbiAgICAgICAgICAvLyBPbmUgZGF5IGpxTGl0ZSB3aWxsIGJlIHJlcGxhY2VkIGJ5IGpRdWVyeSBhbmQgd2Ugd2lsbCBiZSBhYmxlIHRvIHdyaXRlOlxuICAgICAgICAgIC8vIHZhciB0cmFuc2NsdWRlZEVsZW1lbnQgPSBjbG9uZS5maWx0ZXIoJy5teS1jbGFzcycpXG4gICAgICAgICAgLy8gaW5zdGVhZCBvZiBjcmVhdGluZyBhIGhhY2tpc2ggRE9NIGVsZW1lbnQ6XG4gICAgICAgICAgdmFyIHRyYW5zY2x1ZGVkID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2PicpLmFwcGVuZChjbG9uZSk7XG5cbiAgICAgICAgICB2YXIgdHJhbnNjbHVkZWRNYXRjaCA9IHRyYW5zY2x1ZGVkLnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3QtbWF0Y2gnKTtcbiAgICAgICAgICB0cmFuc2NsdWRlZE1hdGNoLnJlbW92ZUF0dHIoJ3VpLXNlbGVjdC1tYXRjaCcpOyAvL1RvIGF2b2lkIGxvb3AgaW4gY2FzZSBkaXJlY3RpdmUgYXMgYXR0clxuICAgICAgICAgIHRyYW5zY2x1ZGVkTWF0Y2gucmVtb3ZlQXR0cignZGF0YS11aS1zZWxlY3QtbWF0Y2gnKTsgLy8gUHJvcGVybHkgaGFuZGxlIEhUTUw1IGRhdGEtYXR0cmlidXRlc1xuICAgICAgICAgIGlmICh0cmFuc2NsdWRlZE1hdGNoLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgdWlTZWxlY3RNaW5FcnIoJ3RyYW5zY2x1ZGVkJywgXCJFeHBlY3RlZCAxIC51aS1zZWxlY3QtbWF0Y2ggYnV0IGdvdCAnezB9Jy5cIiwgdHJhbnNjbHVkZWRNYXRjaC5sZW5ndGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51aS1zZWxlY3QtbWF0Y2gnKS5yZXBsYWNlV2l0aCh0cmFuc2NsdWRlZE1hdGNoKTtcblxuICAgICAgICAgIHZhciB0cmFuc2NsdWRlZENob2ljZXMgPSB0cmFuc2NsdWRlZC5xdWVyeVNlbGVjdG9yQWxsKCcudWktc2VsZWN0LWNob2ljZXMnKTtcbiAgICAgICAgICB0cmFuc2NsdWRlZENob2ljZXMucmVtb3ZlQXR0cigndWktc2VsZWN0LWNob2ljZXMnKTsgLy9UbyBhdm9pZCBsb29wIGluIGNhc2UgZGlyZWN0aXZlIGFzIGF0dHJcbiAgICAgICAgICB0cmFuc2NsdWRlZENob2ljZXMucmVtb3ZlQXR0cignZGF0YS11aS1zZWxlY3QtY2hvaWNlcycpOyAvLyBQcm9wZXJseSBoYW5kbGUgSFRNTDUgZGF0YS1hdHRyaWJ1dGVzXG4gICAgICAgICAgaWYgKHRyYW5zY2x1ZGVkQ2hvaWNlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IHVpU2VsZWN0TWluRXJyKCd0cmFuc2NsdWRlZCcsIFwiRXhwZWN0ZWQgMSAudWktc2VsZWN0LWNob2ljZXMgYnV0IGdvdCAnezB9Jy5cIiwgdHJhbnNjbHVkZWRDaG9pY2VzLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVpLXNlbGVjdC1jaG9pY2VzJykucmVwbGFjZVdpdGgodHJhbnNjbHVkZWRDaG9pY2VzKTtcblxuICAgICAgICAgIHZhciB0cmFuc2NsdWRlZE5vQ2hvaWNlID0gdHJhbnNjbHVkZWQucXVlcnlTZWxlY3RvckFsbCgnLnVpLXNlbGVjdC1uby1jaG9pY2UnKTtcbiAgICAgICAgICB0cmFuc2NsdWRlZE5vQ2hvaWNlLnJlbW92ZUF0dHIoJ3VpLXNlbGVjdC1uby1jaG9pY2UnKTsgLy9UbyBhdm9pZCBsb29wIGluIGNhc2UgZGlyZWN0aXZlIGFzIGF0dHJcbiAgICAgICAgICB0cmFuc2NsdWRlZE5vQ2hvaWNlLnJlbW92ZUF0dHIoJ2RhdGEtdWktc2VsZWN0LW5vLWNob2ljZScpOyAvLyBQcm9wZXJseSBoYW5kbGUgSFRNTDUgZGF0YS1hdHRyaWJ1dGVzXG4gICAgICAgICAgaWYgKHRyYW5zY2x1ZGVkTm9DaG9pY2UubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnVpLXNlbGVjdC1uby1jaG9pY2UnKS5yZXBsYWNlV2l0aCh0cmFuc2NsdWRlZE5vQ2hvaWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgZm9yIGFwcGVuZGluZyB0aGUgc2VsZWN0IGZpZWxkIHRvIHRoZSBib2R5IHdoZW4gaXRzIG9wZW5cbiAgICAgICAgdmFyIGFwcGVuZFRvQm9keSA9IHNjb3BlLiRldmFsKGF0dHJzLmFwcGVuZFRvQm9keSk7XG4gICAgICAgIGlmIChhcHBlbmRUb0JvZHkgIT09IHVuZGVmaW5lZCA/IGFwcGVuZFRvQm9keSA6IHVpU2VsZWN0Q29uZmlnLmFwcGVuZFRvQm9keSkge1xuICAgICAgICAgIHNjb3BlLiR3YXRjaCgnJHNlbGVjdC5vcGVuJywgZnVuY3Rpb24oaXNPcGVuKSB7XG4gICAgICAgICAgICBpZiAoaXNPcGVuKSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uRHJvcGRvd24oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc2V0RHJvcGRvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIE1vdmUgdGhlIGRyb3Bkb3duIGJhY2sgdG8gaXRzIG9yaWdpbmFsIGxvY2F0aW9uIHdoZW4gdGhlIHNjb3BlIGlzIGRlc3Ryb3llZC4gT3RoZXJ3aXNlXG4gICAgICAgICAgLy8gaXQgbWlnaHQgc3RpY2sgYXJvdW5kIHdoZW4gdGhlIHVzZXIgcm91dGVzIGF3YXkgb3IgdGhlIHNlbGVjdCBmaWVsZCBpcyBvdGhlcndpc2UgcmVtb3ZlZFxuICAgICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJlc2V0RHJvcGRvd24oKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhvbGQgb24gdG8gYSByZWZlcmVuY2UgdG8gdGhlIC51aS1zZWxlY3QtY29udGFpbmVyIGVsZW1lbnQgZm9yIGFwcGVuZFRvQm9keSBzdXBwb3J0XG4gICAgICAgIHZhciBwbGFjZWhvbGRlciA9IG51bGwsXG4gICAgICAgICAgICBvcmlnaW5hbFdpZHRoID0gJyc7XG5cbiAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25Ecm9wZG93bigpIHtcbiAgICAgICAgICAvLyBSZW1lbWJlciB0aGUgYWJzb2x1dGUgcG9zaXRpb24gb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgICB2YXIgb2Zmc2V0ID0gdWlzT2Zmc2V0KGVsZW1lbnQpO1xuXG4gICAgICAgICAgLy8gQ2xvbmUgdGhlIGVsZW1lbnQgaW50byBhIHBsYWNlaG9sZGVyIGVsZW1lbnQgdG8gdGFrZSBpdHMgb3JpZ2luYWwgcGxhY2UgaW4gdGhlIERPTVxuICAgICAgICAgIHBsYWNlaG9sZGVyID0gYW5ndWxhci5lbGVtZW50KCc8ZGl2IGNsYXNzPVwidWktc2VsZWN0LXBsYWNlaG9sZGVyXCI+PC9kaXY+Jyk7XG4gICAgICAgICAgcGxhY2Vob2xkZXJbMF0uc3R5bGUud2lkdGggPSBvZmZzZXQud2lkdGggKyAncHgnO1xuICAgICAgICAgIHBsYWNlaG9sZGVyWzBdLnN0eWxlLmhlaWdodCA9IG9mZnNldC5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgIGVsZW1lbnQuYWZ0ZXIocGxhY2Vob2xkZXIpO1xuXG4gICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSBlbGVtZW50IHdpZHRoIGlubGluZSBzdHlsZSwgc28gaXQgY2FuIGJlIHJlc3RvcmVkXG4gICAgICAgICAgLy8gd2hlbiB0aGUgZHJvcGRvd24gaXMgY2xvc2VkXG4gICAgICAgICAgb3JpZ2luYWxXaWR0aCA9IGVsZW1lbnRbMF0uc3R5bGUud2lkdGg7XG5cbiAgICAgICAgICAvLyBOb3cgbW92ZSB0aGUgYWN0dWFsIGRyb3Bkb3duIGVsZW1lbnQgdG8gdGhlIGVuZCBvZiB0aGUgYm9keVxuICAgICAgICAgICRkb2N1bWVudC5maW5kKCdib2R5JykuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgICAgICAgZWxlbWVudFswXS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgZWxlbWVudFswXS5zdHlsZS5sZWZ0ID0gb2Zmc2V0LmxlZnQgKyAncHgnO1xuICAgICAgICAgIGVsZW1lbnRbMF0uc3R5bGUudG9wID0gb2Zmc2V0LnRvcCArICdweCc7XG4gICAgICAgICAgZWxlbWVudFswXS5zdHlsZS53aWR0aCA9IG9mZnNldC53aWR0aCArICdweCc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZXNldERyb3Bkb3duKCkge1xuICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gVGhlIGRyb3Bkb3duIGhhcyBub3QgYWN0dWFsbHkgYmVlbiBkaXNwbGF5IHlldCwgc28gdGhlcmUncyBub3RoaW5nIHRvIHJlc2V0XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gTW92ZSB0aGUgZHJvcGRvd24gZWxlbWVudCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBsb2NhdGlvbiBpbiB0aGUgRE9NXG4gICAgICAgICAgcGxhY2Vob2xkZXIucmVwbGFjZVdpdGgoZWxlbWVudCk7XG4gICAgICAgICAgcGxhY2Vob2xkZXIgPSBudWxsO1xuXG4gICAgICAgICAgZWxlbWVudFswXS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgICAgICAgIGVsZW1lbnRbMF0uc3R5bGUubGVmdCA9ICcnO1xuICAgICAgICAgIGVsZW1lbnRbMF0uc3R5bGUudG9wID0gJyc7XG4gICAgICAgICAgZWxlbWVudFswXS5zdHlsZS53aWR0aCA9IG9yaWdpbmFsV2lkdGg7XG5cbiAgICAgICAgICAvLyBTZXQgZm9jdXMgYmFjayBvbiB0byB0aGUgbW92ZWQgZWxlbWVudFxuICAgICAgICAgICRzZWxlY3Quc2V0Rm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhvbGQgb24gdG8gYSByZWZlcmVuY2UgdG8gdGhlIC51aS1zZWxlY3QtZHJvcGRvd24gZWxlbWVudCBmb3IgZGlyZWN0aW9uIHN1cHBvcnQuXG4gICAgICAgIHZhciBkcm9wZG93biA9IG51bGwsXG4gICAgICAgICAgICBkaXJlY3Rpb25VcENsYXNzTmFtZSA9ICdkaXJlY3Rpb24tdXAnO1xuXG4gICAgICAgIC8vIFN1cHBvcnQgY2hhbmdpbmcgdGhlIGRpcmVjdGlvbiBvZiB0aGUgZHJvcGRvd24gaWYgdGhlcmUgaXNuJ3QgZW5vdWdoIHNwYWNlIHRvIHJlbmRlciBpdC5cbiAgICAgICAgc2NvcGUuJHdhdGNoKCckc2VsZWN0Lm9wZW4nLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAgIGlmICgkc2VsZWN0LmRyb3Bkb3duUG9zaXRpb24gPT09ICdhdXRvJyB8fCAkc2VsZWN0LmRyb3Bkb3duUG9zaXRpb24gPT09ICd1cCcpe1xuICAgICAgICAgICAgc2NvcGUuY2FsY3VsYXRlRHJvcGRvd25Qb3MoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHNldERyb3Bkb3duUG9zVXAgPSBmdW5jdGlvbihvZmZzZXQsIG9mZnNldERyb3Bkb3duKXtcblxuICAgICAgICAgIG9mZnNldCA9IG9mZnNldCB8fCB1aXNPZmZzZXQoZWxlbWVudCk7XG4gICAgICAgICAgb2Zmc2V0RHJvcGRvd24gPSBvZmZzZXREcm9wZG93biB8fCB1aXNPZmZzZXQoZHJvcGRvd24pO1xuXG4gICAgICAgICAgZHJvcGRvd25bMF0uc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgIGRyb3Bkb3duWzBdLnN0eWxlLnRvcCA9IChvZmZzZXREcm9wZG93bi5oZWlnaHQgKiAtMSkgKyAncHgnO1xuICAgICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoZGlyZWN0aW9uVXBDbGFzc05hbWUpO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNldERyb3Bkb3duUG9zRG93biA9IGZ1bmN0aW9uKG9mZnNldCwgb2Zmc2V0RHJvcGRvd24pe1xuXG4gICAgICAgICAgZWxlbWVudC5yZW1vdmVDbGFzcyhkaXJlY3Rpb25VcENsYXNzTmFtZSk7XG5cbiAgICAgICAgICBvZmZzZXQgPSBvZmZzZXQgfHwgdWlzT2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICAgIG9mZnNldERyb3Bkb3duID0gb2Zmc2V0RHJvcGRvd24gfHwgdWlzT2Zmc2V0KGRyb3Bkb3duKTtcblxuICAgICAgICAgIGRyb3Bkb3duWzBdLnN0eWxlLnBvc2l0aW9uID0gJyc7XG4gICAgICAgICAgZHJvcGRvd25bMF0uc3R5bGUudG9wID0gJyc7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2FsY3VsYXRlRHJvcGRvd25Qb3NBZnRlckFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIERlbGF5IHBvc2l0aW9uaW5nIHRoZSBkcm9wZG93biB1bnRpbCBhbGwgY2hvaWNlcyBoYXZlIGJlZW4gYWRkZWQgc28gaXRzIGhlaWdodCBpcyBjb3JyZWN0LlxuICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCRzZWxlY3QuZHJvcGRvd25Qb3NpdGlvbiA9PT0gJ3VwJykge1xuICAgICAgICAgICAgICAvL0dvIFVQXG4gICAgICAgICAgICAgIHNldERyb3Bkb3duUG9zVXAoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vQVVUT1xuICAgICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKGRpcmVjdGlvblVwQ2xhc3NOYW1lKTtcblxuICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdWlzT2Zmc2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICB2YXIgb2Zmc2V0RHJvcGRvd24gPSB1aXNPZmZzZXQoZHJvcGRvd24pO1xuXG4gICAgICAgICAgICAgIC8vaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM0MjMwNyNjNFxuICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gJGRvY3VtZW50WzBdLmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgfHwgJGRvY3VtZW50WzBdLmJvZHkuc2Nyb2xsVG9wOyAvL1RvIG1ha2UgaXQgY3Jvc3MgYnJvd3NlciAoYmxpbmssIHdlYmtpdCwgSUUsIEZpcmVmb3gpLlxuXG4gICAgICAgICAgICAgIC8vIERldGVybWluZSBpZiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBkcm9wZG93biBuZWVkcyB0byBiZSBjaGFuZ2VkLlxuICAgICAgICAgICAgICBpZiAob2Zmc2V0LnRvcCArIG9mZnNldC5oZWlnaHQgKyBvZmZzZXREcm9wZG93bi5oZWlnaHQgPiBzY3JvbGxUb3AgKyAkZG9jdW1lbnRbMF0uZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgIC8vR28gVVBcbiAgICAgICAgICAgICAgICBzZXREcm9wZG93blBvc1VwKG9mZnNldCwgb2Zmc2V0RHJvcGRvd24pO1xuICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAvL0dvIERPV05cbiAgICAgICAgICAgICAgICBzZXREcm9wZG93blBvc0Rvd24ob2Zmc2V0LCBvZmZzZXREcm9wZG93bik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgZHJvcGRvd24gb25jZSBpdCBoYXMgYmVlbiBwb3NpdGlvbmVkLlxuICAgICAgICAgICAgZHJvcGRvd25bMF0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9wZW5lZCA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgc2NvcGUuY2FsY3VsYXRlRHJvcGRvd25Qb3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAoJHNlbGVjdC5vcGVuKSB7XG4gICAgICAgICAgICBkcm9wZG93biA9IGFuZ3VsYXIuZWxlbWVudChlbGVtZW50KS5xdWVyeVNlbGVjdG9yQWxsKCcudWktc2VsZWN0LWRyb3Bkb3duJyk7XG5cbiAgICAgICAgICAgIGlmIChkcm9wZG93bi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIC8vIEhpZGUgdGhlIGRyb3Bkb3duIHNvIHRoZXJlIGlzIG5vIGZsaWNrZXIgdW50aWwgJHRpbWVvdXQgaXMgZG9uZSBleGVjdXRpbmcuXG4gICAgICAgICAgIGlmICgkc2VsZWN0LnNlYXJjaCA9PT0gJycgJiYgIW9wZW5lZCkge1xuICAgICAgICAgICAgICBkcm9wZG93blswXS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgb3BlbmVkID0gdHJ1ZTtcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXVpc09mZnNldChkcm9wZG93bikuaGVpZ2h0ICYmICRzZWxlY3QuJGFuaW1hdGUgJiYgJHNlbGVjdC4kYW5pbWF0ZS5vbiAmJiAkc2VsZWN0LiRhbmltYXRlLmVuYWJsZWQoZHJvcGRvd24pKSB7XG4gICAgICAgICAgICAgIHZhciBuZWVkc0NhbGN1bGF0ZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICRzZWxlY3QuJGFuaW1hdGUub24oJ2VudGVyJywgZHJvcGRvd24sIGZ1bmN0aW9uIChlbGVtLCBwaGFzZSkge1xuICAgICAgICAgICAgICAgIGlmIChwaGFzZSA9PT0gJ2Nsb3NlJyAmJiBuZWVkc0NhbGN1bGF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZURyb3Bkb3duUG9zQWZ0ZXJBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgIG5lZWRzQ2FsY3VsYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjYWxjdWxhdGVEcm9wZG93blBvc0FmdGVyQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkcm9wZG93biA9PT0gbnVsbCB8fCBkcm9wZG93bi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXNldCB0aGUgcG9zaXRpb24gb2YgdGhlIGRyb3Bkb3duLlxuICAgICAgICAgICAgZHJvcGRvd25bMF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBkcm9wZG93blswXS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICAgICAgICAgICAgZHJvcGRvd25bMF0uc3R5bGUudG9wID0gJyc7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNsYXNzKGRpcmVjdGlvblVwQ2xhc3NOYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9O1xuICAgIH1cbiAgfTtcbn1dKTtcblxudWlzLmRpcmVjdGl2ZSgndWlTZWxlY3RNYXRjaCcsIFsndWlTZWxlY3RDb25maWcnLCBmdW5jdGlvbih1aVNlbGVjdENvbmZpZykge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHJlcXVpcmU6ICdedWlTZWxlY3QnLFxuICAgIHJlcGxhY2U6IHRydWUsXG4gICAgdHJhbnNjbHVkZTogdHJ1ZSxcbiAgICB0ZW1wbGF0ZVVybDogZnVuY3Rpb24odEVsZW1lbnQpIHtcbiAgICAgIC8vIE5lZWRlZCBzbyB0aGUgdWlTZWxlY3QgY2FuIGRldGVjdCB0aGUgdHJhbnNjbHVkZWQgY29udGVudFxuICAgICAgdEVsZW1lbnQuYWRkQ2xhc3MoJ3VpLXNlbGVjdC1tYXRjaCcpO1xuXG4gICAgICB2YXIgcGFyZW50ID0gdEVsZW1lbnQucGFyZW50KCk7XG4gICAgICAvLyBHZXRzIHRoZW1lIGF0dHJpYnV0ZSBmcm9tIHBhcmVudCAodWktc2VsZWN0KVxuICAgICAgdmFyIHRoZW1lID0gZ2V0QXR0cmlidXRlKHBhcmVudCwgJ3RoZW1lJykgfHwgdWlTZWxlY3RDb25maWcudGhlbWU7XG4gICAgICB2YXIgbXVsdGkgPSBhbmd1bGFyLmlzRGVmaW5lZChnZXRBdHRyaWJ1dGUocGFyZW50LCAnbXVsdGlwbGUnKSk7XG5cbiAgICAgIHJldHVybiB0aGVtZSArIChtdWx0aSA/ICcvbWF0Y2gtbXVsdGlwbGUudHBsLmh0bWwnIDogJy9tYXRjaC50cGwuaHRtbCcpOyAgICAgIFxuICAgIH0sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCAkc2VsZWN0KSB7XG4gICAgICAkc2VsZWN0LmxvY2tDaG9pY2VFeHByZXNzaW9uID0gYXR0cnMudWlMb2NrQ2hvaWNlO1xuICAgICAgYXR0cnMuJG9ic2VydmUoJ3BsYWNlaG9sZGVyJywgZnVuY3Rpb24ocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgJHNlbGVjdC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyICE9PSB1bmRlZmluZWQgPyBwbGFjZWhvbGRlciA6IHVpU2VsZWN0Q29uZmlnLnBsYWNlaG9sZGVyO1xuICAgICAgfSk7XG5cbiAgICAgIGZ1bmN0aW9uIHNldEFsbG93Q2xlYXIoYWxsb3cpIHtcbiAgICAgICAgJHNlbGVjdC5hbGxvd0NsZWFyID0gKGFuZ3VsYXIuaXNEZWZpbmVkKGFsbG93KSkgPyAoYWxsb3cgPT09ICcnKSA/IHRydWUgOiAoYWxsb3cudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSA6IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBhdHRycy4kb2JzZXJ2ZSgnYWxsb3dDbGVhcicsIHNldEFsbG93Q2xlYXIpO1xuICAgICAgc2V0QWxsb3dDbGVhcihhdHRycy5hbGxvd0NsZWFyKTtcblxuICAgICAgaWYoJHNlbGVjdC5tdWx0aXBsZSl7XG4gICAgICAgICRzZWxlY3Quc2l6ZVNlYXJjaElucHV0KCk7XG4gICAgICB9XG5cbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gZ2V0QXR0cmlidXRlKGVsZW0sIGF0dHJpYnV0ZSkge1xuICAgIGlmIChlbGVtWzBdLmhhc0F0dHJpYnV0ZShhdHRyaWJ1dGUpKVxuICAgICAgcmV0dXJuIGVsZW0uYXR0cihhdHRyaWJ1dGUpO1xuXG4gICAgaWYgKGVsZW1bMF0uaGFzQXR0cmlidXRlKCdkYXRhLScgKyBhdHRyaWJ1dGUpKVxuICAgICAgcmV0dXJuIGVsZW0uYXR0cignZGF0YS0nICsgYXR0cmlidXRlKTtcblxuICAgIGlmIChlbGVtWzBdLmhhc0F0dHJpYnV0ZSgneC0nICsgYXR0cmlidXRlKSlcbiAgICAgIHJldHVybiBlbGVtLmF0dHIoJ3gtJyArIGF0dHJpYnV0ZSk7XG4gIH1cbn1dKTtcblxudWlzLmRpcmVjdGl2ZSgndWlTZWxlY3RNdWx0aXBsZScsIFsndWlTZWxlY3RNaW5FcnInLCckdGltZW91dCcsIGZ1bmN0aW9uKHVpU2VsZWN0TWluRXJyLCAkdGltZW91dCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgIHJlcXVpcmU6IFsnXnVpU2VsZWN0JywgJ15uZ01vZGVsJ10sXG5cbiAgICBjb250cm9sbGVyOiBbJyRzY29wZScsJyR0aW1lb3V0JywgZnVuY3Rpb24oJHNjb3BlLCAkdGltZW91dCl7XG5cbiAgICAgIHZhciBjdHJsID0gdGhpcyxcbiAgICAgICAgICAkc2VsZWN0ID0gJHNjb3BlLiRzZWxlY3QsXG4gICAgICAgICAgbmdNb2RlbDtcblxuICAgICAgaWYgKGFuZ3VsYXIuaXNVbmRlZmluZWQoJHNlbGVjdC5zZWxlY3RlZCkpXG4gICAgICAgICRzZWxlY3Quc2VsZWN0ZWQgPSBbXTtcblxuICAgICAgLy9XYWl0IGZvciBsaW5rIGZuIHRvIGluamVjdCBpdFxuICAgICAgJHNjb3BlLiRldmFsQXN5bmMoZnVuY3Rpb24oKXsgbmdNb2RlbCA9ICRzY29wZS5uZ01vZGVsOyB9KTtcblxuICAgICAgY3RybC5hY3RpdmVNYXRjaEluZGV4ID0gLTE7XG5cbiAgICAgIGN0cmwudXBkYXRlTW9kZWwgPSBmdW5jdGlvbigpe1xuICAgICAgICBuZ01vZGVsLiRzZXRWaWV3VmFsdWUoRGF0ZS5ub3coKSk7IC8vU2V0IHRpbWVzdGFtcCBhcyBhIHVuaXF1ZSBzdHJpbmcgdG8gZm9yY2UgY2hhbmdlc1xuICAgICAgICBjdHJsLnJlZnJlc2hDb21wb25lbnQoKTtcbiAgICAgIH07XG5cbiAgICAgIGN0cmwucmVmcmVzaENvbXBvbmVudCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vUmVtb3ZlIGFscmVhZHkgc2VsZWN0ZWQgaXRlbXNcbiAgICAgICAgLy9lLmcuIFdoZW4gdXNlciBjbGlja3Mgb24gYSBzZWxlY3Rpb24sIHRoZSBzZWxlY3RlZCBhcnJheSBjaGFuZ2VzIGFuZFxuICAgICAgICAvL3RoZSBkcm9wZG93biBzaG91bGQgcmVtb3ZlIHRoYXQgaXRlbVxuICAgICAgICBpZigkc2VsZWN0LnJlZnJlc2hJdGVtcyl7XG4gICAgICAgICAgJHNlbGVjdC5yZWZyZXNoSXRlbXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZigkc2VsZWN0LnNpemVTZWFyY2hJbnB1dCl7XG4gICAgICAgICAgJHNlbGVjdC5zaXplU2VhcmNoSW5wdXQoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgLy8gUmVtb3ZlIGl0ZW0gZnJvbSBtdWx0aXBsZSBzZWxlY3RcbiAgICAgIGN0cmwucmVtb3ZlQ2hvaWNlID0gZnVuY3Rpb24oaW5kZXgpe1xuXG4gICAgICAgIC8vIGlmIHRoZSBjaG9pY2UgaXMgbG9ja2VkLCBkb24ndCByZW1vdmUgaXRcbiAgICAgICAgaWYoJHNlbGVjdC5pc0xvY2tlZChudWxsLCBpbmRleCkpIHJldHVybiBmYWxzZTtcblxuICAgICAgICB2YXIgcmVtb3ZlZENob2ljZSA9ICRzZWxlY3Quc2VsZWN0ZWRbaW5kZXhdO1xuXG4gICAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgICAgbG9jYWxzWyRzZWxlY3QucGFyc2VyUmVzdWx0Lml0ZW1OYW1lXSA9IHJlbW92ZWRDaG9pY2U7XG5cbiAgICAgICAgJHNlbGVjdC5zZWxlY3RlZC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBjdHJsLmFjdGl2ZU1hdGNoSW5kZXggPSAtMTtcbiAgICAgICAgJHNlbGVjdC5zaXplU2VhcmNoSW5wdXQoKTtcblxuICAgICAgICAvLyBHaXZlIHNvbWUgdGltZSBmb3Igc2NvcGUgcHJvcGFnYXRpb24uXG4gICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJHNlbGVjdC5vblJlbW92ZUNhbGxiYWNrKCRzY29wZSwge1xuICAgICAgICAgICAgJGl0ZW06IHJlbW92ZWRDaG9pY2UsXG4gICAgICAgICAgICAkbW9kZWw6ICRzZWxlY3QucGFyc2VyUmVzdWx0Lm1vZGVsTWFwcGVyKCRzY29wZSwgbG9jYWxzKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjdHJsLnVwZGF0ZU1vZGVsKCk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuXG4gICAgICBjdHJsLmdldFBsYWNlaG9sZGVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgLy9SZWZhY3RvciBzaW5nbGU/XG4gICAgICAgIGlmKCRzZWxlY3Quc2VsZWN0ZWQgJiYgJHNlbGVjdC5zZWxlY3RlZC5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgcmV0dXJuICRzZWxlY3QucGxhY2Vob2xkZXI7XG4gICAgICB9O1xuXG5cbiAgICB9XSxcbiAgICBjb250cm9sbGVyQXM6ICckc2VsZWN0TXVsdGlwbGUnLFxuXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCBjdHJscykge1xuXG4gICAgICB2YXIgJHNlbGVjdCA9IGN0cmxzWzBdO1xuICAgICAgdmFyIG5nTW9kZWwgPSBzY29wZS5uZ01vZGVsID0gY3RybHNbMV07XG4gICAgICB2YXIgJHNlbGVjdE11bHRpcGxlID0gc2NvcGUuJHNlbGVjdE11bHRpcGxlO1xuXG4gICAgICAvLyRzZWxlY3Quc2VsZWN0ZWQgPSByYXcgc2VsZWN0ZWQgb2JqZWN0cyAoaWdub3JpbmcgYW55IHByb3BlcnR5IGJpbmRpbmcpXG5cbiAgICAgICRzZWxlY3QubXVsdGlwbGUgPSB0cnVlO1xuXG4gICAgICAvL0lucHV0IHRoYXQgd2lsbCBoYW5kbGUgZm9jdXNcbiAgICAgICRzZWxlY3QuZm9jdXNJbnB1dCA9ICRzZWxlY3Quc2VhcmNoSW5wdXQ7XG5cbiAgICAgIC8vUHJvcGVybHkgY2hlY2sgZm9yIGVtcHR5IGlmIHNldCB0byBtdWx0aXBsZVxuICAgICAgbmdNb2RlbC4kaXNFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiAhdmFsdWUgfHwgdmFsdWUubGVuZ3RoID09PSAwO1xuICAgICAgfTtcblxuICAgICAgLy9Gcm9tIHZpZXcgLS0+IG1vZGVsXG4gICAgICBuZ01vZGVsLiRwYXJzZXJzLnVuc2hpZnQoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbG9jYWxzID0ge30sXG4gICAgICAgICAgICByZXN1bHQsXG4gICAgICAgICAgICByZXN1bHRNdWx0aXBsZSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBqID0gJHNlbGVjdC5zZWxlY3RlZC5sZW5ndGggLSAxOyBqID49IDA7IGotLSkge1xuICAgICAgICAgIGxvY2FscyA9IHt9O1xuICAgICAgICAgIGxvY2Fsc1skc2VsZWN0LnBhcnNlclJlc3VsdC5pdGVtTmFtZV0gPSAkc2VsZWN0LnNlbGVjdGVkW2pdO1xuICAgICAgICAgIHJlc3VsdCA9ICRzZWxlY3QucGFyc2VyUmVzdWx0Lm1vZGVsTWFwcGVyKHNjb3BlLCBsb2NhbHMpO1xuICAgICAgICAgIHJlc3VsdE11bHRpcGxlLnVuc2hpZnQocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0TXVsdGlwbGU7XG4gICAgICB9KTtcblxuICAgICAgLy8gRnJvbSBtb2RlbCAtLT4gdmlld1xuICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy51bnNoaWZ0KGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIHZhciBkYXRhID0gJHNlbGVjdC5wYXJzZXJSZXN1bHQgJiYgJHNlbGVjdC5wYXJzZXJSZXN1bHQuc291cmNlIChzY29wZSwgeyAkc2VsZWN0IDoge3NlYXJjaDonJ319KSwgLy9PdmVyd3JpdGUgJHNlYXJjaFxuICAgICAgICAgICAgbG9jYWxzID0ge30sXG4gICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuIGlucHV0VmFsdWU7XG4gICAgICAgIHZhciByZXN1bHRNdWx0aXBsZSA9IFtdO1xuICAgICAgICB2YXIgY2hlY2tGbk11bHRpcGxlID0gZnVuY3Rpb24obGlzdCwgdmFsdWUpe1xuICAgICAgICAgIGlmICghbGlzdCB8fCAhbGlzdC5sZW5ndGgpIHJldHVybjtcbiAgICAgICAgICBmb3IgKHZhciBwID0gbGlzdC5sZW5ndGggLSAxOyBwID49IDA7IHAtLSkge1xuICAgICAgICAgICAgbG9jYWxzWyRzZWxlY3QucGFyc2VyUmVzdWx0Lml0ZW1OYW1lXSA9IGxpc3RbcF07XG4gICAgICAgICAgICByZXN1bHQgPSAkc2VsZWN0LnBhcnNlclJlc3VsdC5tb2RlbE1hcHBlcihzY29wZSwgbG9jYWxzKTtcbiAgICAgICAgICAgIGlmKCRzZWxlY3QucGFyc2VyUmVzdWx0LnRyYWNrQnlFeHApe1xuICAgICAgICAgICAgICAgIHZhciBwcm9wc0l0ZW1OYW1lTWF0Y2hlcyA9IC8oXFx3KilcXC4vLmV4ZWMoJHNlbGVjdC5wYXJzZXJSZXN1bHQudHJhY2tCeUV4cCk7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSAvXFwuKFteXFxzXSspLy5leGVjKCRzZWxlY3QucGFyc2VyUmVzdWx0LnRyYWNrQnlFeHApO1xuICAgICAgICAgICAgICAgIGlmKHByb3BzSXRlbU5hbWVNYXRjaGVzICYmIHByb3BzSXRlbU5hbWVNYXRjaGVzLmxlbmd0aCA+IDAgJiYgcHJvcHNJdGVtTmFtZU1hdGNoZXNbMV0gPT0gJHNlbGVjdC5wYXJzZXJSZXN1bHQuaXRlbU5hbWUpe1xuICAgICAgICAgICAgICAgICAgaWYobWF0Y2hlcyAmJiBtYXRjaGVzLmxlbmd0aD4wICYmIHJlc3VsdFttYXRjaGVzWzFdXSA9PSB2YWx1ZVttYXRjaGVzWzFdXSl7XG4gICAgICAgICAgICAgICAgICAgICAgcmVzdWx0TXVsdGlwbGUudW5zaGlmdChsaXN0W3BdKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW5ndWxhci5lcXVhbHMocmVzdWx0LHZhbHVlKSl7XG4gICAgICAgICAgICAgIHJlc3VsdE11bHRpcGxlLnVuc2hpZnQobGlzdFtwXSk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuIHJlc3VsdE11bHRpcGxlOyAvL0lmIG5nTW9kZWwgd2FzIHVuZGVmaW5lZFxuICAgICAgICBmb3IgKHZhciBrID0gaW5wdXRWYWx1ZS5sZW5ndGggLSAxOyBrID49IDA7IGstLSkge1xuICAgICAgICAgIC8vQ2hlY2sgbW9kZWwgYXJyYXkgb2YgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zXG4gICAgICAgICAgaWYgKCFjaGVja0ZuTXVsdGlwbGUoJHNlbGVjdC5zZWxlY3RlZCwgaW5wdXRWYWx1ZVtrXSkpe1xuICAgICAgICAgICAgLy9DaGVjayBtb2RlbCBhcnJheSBvZiBhbGwgaXRlbXMgYXZhaWxhYmxlXG4gICAgICAgICAgICBpZiAoIWNoZWNrRm5NdWx0aXBsZShkYXRhLCBpbnB1dFZhbHVlW2tdKSl7XG4gICAgICAgICAgICAgIC8vSWYgbm90IGZvdW5kIG9uIHByZXZpb3VzIGxpc3RzLCBqdXN0IGFkZCBpdCBkaXJlY3RseSB0byByZXN1bHRNdWx0aXBsZVxuICAgICAgICAgICAgICByZXN1bHRNdWx0aXBsZS51bnNoaWZ0KGlucHV0VmFsdWVba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0TXVsdGlwbGU7XG4gICAgICB9KTtcblxuICAgICAgLy9XYXRjaCBmb3IgZXh0ZXJuYWwgbW9kZWwgY2hhbmdlc1xuICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbihmdW5jdGlvbigpeyByZXR1cm4gbmdNb2RlbC4kbW9kZWxWYWx1ZTsgfSwgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPSBuZXdWYWx1ZSl7XG4gICAgICAgICAgLy91cGRhdGUgdGhlIHZpZXcgdmFsdWUgd2l0aCBmcmVzaCBkYXRhIGZyb20gaXRlbXMsIGlmIHRoZXJlIGlzIGEgdmFsaWQgbW9kZWwgdmFsdWVcbiAgICAgICAgICBpZihhbmd1bGFyLmlzRGVmaW5lZChuZ01vZGVsLiRtb2RlbFZhbHVlKSkge1xuICAgICAgICAgICAgbmdNb2RlbC4kbW9kZWxWYWx1ZSA9IG51bGw7IC8vRm9yY2Ugc2NvcGUgbW9kZWwgdmFsdWUgYW5kIG5nTW9kZWwgdmFsdWUgdG8gYmUgb3V0IG9mIHN5bmMgdG8gcmUtcnVuIGZvcm1hdHRlcnNcbiAgICAgICAgICB9XG4gICAgICAgICAgJHNlbGVjdE11bHRpcGxlLnJlZnJlc2hDb21wb25lbnQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIG5nTW9kZWwuJHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBtb2RlbCB2YWx1ZSBpcyBhcnJheVxuICAgICAgICBpZighYW5ndWxhci5pc0FycmF5KG5nTW9kZWwuJHZpZXdWYWx1ZSkpe1xuICAgICAgICAgIC8vIEhhdmUgdG9sZXJhbmNlIGZvciBudWxsIG9yIHVuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICBpZiAoaXNOaWwobmdNb2RlbC4kdmlld1ZhbHVlKSl7XG4gICAgICAgICAgICBuZ01vZGVsLiR2aWV3VmFsdWUgPSBbXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgdWlTZWxlY3RNaW5FcnIoJ211bHRpYXJyJywgXCJFeHBlY3RlZCBtb2RlbCB2YWx1ZSB0byBiZSBhcnJheSBidXQgZ290ICd7MH0nXCIsIG5nTW9kZWwuJHZpZXdWYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgICRzZWxlY3Quc2VsZWN0ZWQgPSBuZ01vZGVsLiR2aWV3VmFsdWU7XG4gICAgICAgICRzZWxlY3RNdWx0aXBsZS5yZWZyZXNoQ29tcG9uZW50KCk7XG4gICAgICAgIHNjb3BlLiRldmFsQXN5bmMoKTsgLy9UbyBmb3JjZSAkZGlnZXN0XG4gICAgICB9O1xuXG4gICAgICBzY29wZS4kb24oJ3VpczpzZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgaWYoJHNlbGVjdC5zZWxlY3RlZC5sZW5ndGggPj0gJHNlbGVjdC5saW1pdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAkc2VsZWN0LnNlbGVjdGVkLnB1c2goaXRlbSk7XG4gICAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgICAgbG9jYWxzWyRzZWxlY3QucGFyc2VyUmVzdWx0Lml0ZW1OYW1lXSA9IGl0ZW07XG5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkc2VsZWN0Lm9uU2VsZWN0Q2FsbGJhY2soc2NvcGUsIHtcbiAgICAgICAgICAgICRpdGVtOiBpdGVtLFxuICAgICAgICAgICAgJG1vZGVsOiAkc2VsZWN0LnBhcnNlclJlc3VsdC5tb2RlbE1hcHBlcihzY29wZSwgbG9jYWxzKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgJHNlbGVjdE11bHRpcGxlLnVwZGF0ZU1vZGVsKCk7XG4gICAgICB9KTtcblxuICAgICAgc2NvcGUuJG9uKCd1aXM6YWN0aXZhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICRzZWxlY3RNdWx0aXBsZS5hY3RpdmVNYXRjaEluZGV4ID0gLTE7XG4gICAgICB9KTtcblxuICAgICAgc2NvcGUuJHdhdGNoKCckc2VsZWN0LmRpc2FibGVkJywgZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIC8vIEFzIHRoZSBzZWFyY2ggaW5wdXQgZmllbGQgbWF5IG5vdyBiZWNvbWUgdmlzaWJsZSwgaXQgbWF5IGJlIG5lY2Vzc2FyeSB0byByZWNvbXB1dGUgaXRzIHNpemVcbiAgICAgICAgaWYgKG9sZFZhbHVlICYmICFuZXdWYWx1ZSkgJHNlbGVjdC5zaXplU2VhcmNoSW5wdXQoKTtcbiAgICAgIH0pO1xuXG4gICAgICAkc2VsZWN0LnNlYXJjaElucHV0Lm9uKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIga2V5ID0gZS53aGljaDtcbiAgICAgICAgc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBwcm9jZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgICAvLyB2YXIgdGFnZ2VkID0gZmFsc2U7IC8vQ2hlY2ttZVxuICAgICAgICAgIGlmKEtFWS5pc0hvcml6b250YWxNb3ZlbWVudChrZXkpKXtcbiAgICAgICAgICAgIHByb2Nlc3NlZCA9IF9oYW5kbGVNYXRjaFNlbGVjdGlvbihrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocHJvY2Vzc2VkICAmJiBrZXkgIT0gS0VZLlRBQikge1xuICAgICAgICAgICAgLy9UT0RPIENoZWNrIHNpIGVsIHRhYiBzZWxlY2Npb25hIGF1biBjb3JyZWN0YW1lbnRlXG4gICAgICAgICAgICAvL0NyZWFyIHRlc3RcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgZnVuY3Rpb24gX2dldENhcmV0UG9zaXRpb24oZWwpIHtcbiAgICAgICAgaWYoYW5ndWxhci5pc051bWJlcihlbC5zZWxlY3Rpb25TdGFydCkpIHJldHVybiBlbC5zZWxlY3Rpb25TdGFydDtcbiAgICAgICAgLy8gc2VsZWN0aW9uU3RhcnQgaXMgbm90IHN1cHBvcnRlZCBpbiBJRTggYW5kIHdlIGRvbid0IHdhbnQgaGFja3kgd29ya2Fyb3VuZHMgc28gd2UgY29tcHJvbWlzZVxuICAgICAgICBlbHNlIHJldHVybiBlbC52YWx1ZS5sZW5ndGg7XG4gICAgICB9XG4gICAgICAvLyBIYW5kbGVzIHNlbGVjdGVkIG9wdGlvbnMgaW4gXCJtdWx0aXBsZVwiIG1vZGVcbiAgICAgIGZ1bmN0aW9uIF9oYW5kbGVNYXRjaFNlbGVjdGlvbihrZXkpe1xuICAgICAgICB2YXIgY2FyZXRQb3NpdGlvbiA9IF9nZXRDYXJldFBvc2l0aW9uKCRzZWxlY3Quc2VhcmNoSW5wdXRbMF0pLFxuICAgICAgICAgICAgbGVuZ3RoID0gJHNlbGVjdC5zZWxlY3RlZC5sZW5ndGgsXG4gICAgICAgICAgICAvLyBub25lICA9IC0xLFxuICAgICAgICAgICAgZmlyc3QgPSAwLFxuICAgICAgICAgICAgbGFzdCAgPSBsZW5ndGgtMSxcbiAgICAgICAgICAgIGN1cnIgID0gJHNlbGVjdE11bHRpcGxlLmFjdGl2ZU1hdGNoSW5kZXgsXG4gICAgICAgICAgICBuZXh0ICA9ICRzZWxlY3RNdWx0aXBsZS5hY3RpdmVNYXRjaEluZGV4KzEsXG4gICAgICAgICAgICBwcmV2ICA9ICRzZWxlY3RNdWx0aXBsZS5hY3RpdmVNYXRjaEluZGV4LTEsXG4gICAgICAgICAgICBuZXdJbmRleCA9IGN1cnI7XG5cbiAgICAgICAgaWYoY2FyZXRQb3NpdGlvbiA+IDAgfHwgKCRzZWxlY3Quc2VhcmNoLmxlbmd0aCAmJiBrZXkgPT0gS0VZLlJJR0hUKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICRzZWxlY3QuY2xvc2UoKTtcblxuICAgICAgICBmdW5jdGlvbiBnZXROZXdBY3RpdmVNYXRjaEluZGV4KCl7XG4gICAgICAgICAgc3dpdGNoKGtleSl7XG4gICAgICAgICAgICBjYXNlIEtFWS5MRUZUOlxuICAgICAgICAgICAgICAvLyBTZWxlY3QgcHJldmlvdXMvZmlyc3QgaXRlbVxuICAgICAgICAgICAgICBpZih+JHNlbGVjdE11bHRpcGxlLmFjdGl2ZU1hdGNoSW5kZXgpIHJldHVybiBwcmV2O1xuICAgICAgICAgICAgICAvLyBTZWxlY3QgbGFzdCBpdGVtXG4gICAgICAgICAgICAgIGVsc2UgcmV0dXJuIGxhc3Q7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVkuUklHSFQ6XG4gICAgICAgICAgICAgIC8vIE9wZW4gZHJvcC1kb3duXG4gICAgICAgICAgICAgIGlmKCF+JHNlbGVjdE11bHRpcGxlLmFjdGl2ZU1hdGNoSW5kZXggfHwgY3VyciA9PT0gbGFzdCl7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5hY3RpdmF0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBTZWxlY3QgbmV4dC9sYXN0IGl0ZW1cbiAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWS5CQUNLU1BBQ0U6XG4gICAgICAgICAgICAgIC8vIFJlbW92ZSBzZWxlY3RlZCBpdGVtIGFuZCBzZWxlY3QgcHJldmlvdXMvZmlyc3RcbiAgICAgICAgICAgICAgaWYofiRzZWxlY3RNdWx0aXBsZS5hY3RpdmVNYXRjaEluZGV4KXtcbiAgICAgICAgICAgICAgICBpZigkc2VsZWN0TXVsdGlwbGUucmVtb3ZlQ2hvaWNlKGN1cnIpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGN1cnI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgbm90aGluZyB5ZXQgc2VsZWN0ZWQsIHNlbGVjdCBsYXN0IGl0ZW1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGFzdDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZLkRFTEVURTpcbiAgICAgICAgICAgICAgLy8gUmVtb3ZlIHNlbGVjdGVkIGl0ZW0gYW5kIHNlbGVjdCBuZXh0IGl0ZW1cbiAgICAgICAgICAgICAgaWYofiRzZWxlY3RNdWx0aXBsZS5hY3RpdmVNYXRjaEluZGV4KXtcbiAgICAgICAgICAgICAgICAkc2VsZWN0TXVsdGlwbGUucmVtb3ZlQ2hvaWNlKCRzZWxlY3RNdWx0aXBsZS5hY3RpdmVNYXRjaEluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBuZXdJbmRleCA9IGdldE5ld0FjdGl2ZU1hdGNoSW5kZXgoKTtcblxuICAgICAgICBpZighJHNlbGVjdC5zZWxlY3RlZC5sZW5ndGggfHwgbmV3SW5kZXggPT09IGZhbHNlKSAkc2VsZWN0TXVsdGlwbGUuYWN0aXZlTWF0Y2hJbmRleCA9IC0xO1xuICAgICAgICBlbHNlICRzZWxlY3RNdWx0aXBsZS5hY3RpdmVNYXRjaEluZGV4ID0gTWF0aC5taW4obGFzdCxNYXRoLm1heChmaXJzdCxuZXdJbmRleCkpO1xuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICAkc2VsZWN0LnNlYXJjaElucHV0Lm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcblxuICAgICAgICBpZiAoICEgS0VZLmlzVmVydGljYWxNb3ZlbWVudChlLndoaWNoKSApIHtcbiAgICAgICAgICBzY29wZS4kZXZhbEFzeW5jKCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc2VsZWN0LmFjdGl2ZUluZGV4ID0gJHNlbGVjdC50YWdnaW5nTGFiZWwgPT09IGZhbHNlID8gLTEgOiAwO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIFB1c2ggYSBcImNyZWF0ZSBuZXdcIiBpdGVtIGludG8gYXJyYXkgaWYgdGhlcmUgaXMgYSBzZWFyY2ggc3RyaW5nXG4gICAgICAgIGlmICggJHNlbGVjdC50YWdnaW5nLmlzQWN0aXZhdGVkICYmICRzZWxlY3Quc2VhcmNoLmxlbmd0aCA+IDAgKSB7XG5cbiAgICAgICAgICAvLyByZXR1cm4gZWFybHkgd2l0aCB0aGVzZSBrZXlzXG4gICAgICAgICAgaWYgKGUud2hpY2ggPT09IEtFWS5UQUIgfHwgS0VZLmlzQ29udHJvbChlKSB8fCBLRVkuaXNGdW5jdGlvbktleShlKSB8fCBlLndoaWNoID09PSBLRVkuRVNDIHx8IEtFWS5pc1ZlcnRpY2FsTW92ZW1lbnQoZS53aGljaCkgKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGFsd2F5cyByZXNldCB0aGUgYWN0aXZlSW5kZXggdG8gdGhlIGZpcnN0IGl0ZW0gd2hlbiB0YWdnaW5nXG4gICAgICAgICAgJHNlbGVjdC5hY3RpdmVJbmRleCA9ICRzZWxlY3QudGFnZ2luZ0xhYmVsID09PSBmYWxzZSA/IC0xIDogMDtcbiAgICAgICAgICAvLyB0YWdnaW5nTGFiZWwgPT09IGZhbHNlIGJ5cGFzc2VzIGFsbCBvZiB0aGlzXG4gICAgICAgICAgaWYgKCRzZWxlY3QudGFnZ2luZ0xhYmVsID09PSBmYWxzZSkgcmV0dXJuO1xuXG4gICAgICAgICAgdmFyIGl0ZW1zID0gYW5ndWxhci5jb3B5KCAkc2VsZWN0Lml0ZW1zICk7XG4gICAgICAgICAgdmFyIHN0YXNoQXJyID0gYW5ndWxhci5jb3B5KCAkc2VsZWN0Lml0ZW1zICk7XG4gICAgICAgICAgdmFyIG5ld0l0ZW07XG4gICAgICAgICAgdmFyIGl0ZW07XG4gICAgICAgICAgdmFyIGhhc1RhZyA9IGZhbHNlO1xuICAgICAgICAgIHZhciBkdXBlSW5kZXggPSAtMTtcbiAgICAgICAgICB2YXIgdGFnSXRlbXM7XG4gICAgICAgICAgdmFyIHRhZ0l0ZW07XG5cbiAgICAgICAgICAvLyBjYXNlIGZvciBvYmplY3QgdGFnZ2luZyB2aWEgdHJhbnNmb3JtIGAkc2VsZWN0LnRhZ2dpbmcuZmN0YCBmdW5jdGlvblxuICAgICAgICAgIGlmICggJHNlbGVjdC50YWdnaW5nLmZjdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0YWdJdGVtcyA9ICRzZWxlY3QuJGZpbHRlcignZmlsdGVyJykoaXRlbXMseydpc1RhZyc6IHRydWV9KTtcbiAgICAgICAgICAgIGlmICggdGFnSXRlbXMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgdGFnSXRlbSA9IHRhZ0l0ZW1zWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBmaXJzdCBlbGVtZW50LCBpZiBpdCBoYXMgdGhlIGBpc1RhZ2AgcHJvcCB3ZSBnZW5lcmF0ZSBhIG5ldyBvbmUgd2l0aCBlYWNoIGtleXVwLCBzaGF2aW5nIHRoZSBwcmV2aW91c1xuICAgICAgICAgICAgaWYgKCBpdGVtcy5sZW5ndGggPiAwICYmIHRhZ0l0ZW0gKSB7XG4gICAgICAgICAgICAgIGhhc1RhZyA9IHRydWU7XG4gICAgICAgICAgICAgIGl0ZW1zID0gaXRlbXMuc2xpY2UoMSxpdGVtcy5sZW5ndGgpO1xuICAgICAgICAgICAgICBzdGFzaEFyciA9IHN0YXNoQXJyLnNsaWNlKDEsc3Rhc2hBcnIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld0l0ZW0gPSAkc2VsZWN0LnRhZ2dpbmcuZmN0KCRzZWxlY3Quc2VhcmNoKTtcbiAgICAgICAgICAgIC8vIHZlcmlmeSB0aGUgbmV3IHRhZyBkb2Vzbid0IG1hdGNoIHRoZSB2YWx1ZSBvZiBhIHBvc3NpYmxlIHNlbGVjdGlvbiBjaG9pY2Ugb3IgYW4gYWxyZWFkeSBzZWxlY3RlZCBpdGVtLlxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBzdGFzaEFyci5zb21lKGZ1bmN0aW9uIChvcmlnSXRlbSkge1xuICAgICAgICAgICAgICAgICByZXR1cm4gYW5ndWxhci5lcXVhbHMob3JpZ0l0ZW0sIG5ld0l0ZW0pO1xuICAgICAgICAgICAgICB9KSB8fFxuICAgICAgICAgICAgICAkc2VsZWN0LnNlbGVjdGVkLnNvbWUoZnVuY3Rpb24gKG9yaWdJdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFuZ3VsYXIuZXF1YWxzKG9yaWdJdGVtLCBuZXdJdGVtKTtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBzY29wZS4kZXZhbEFzeW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0LmFjdGl2ZUluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAkc2VsZWN0Lml0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmV3SXRlbSkgbmV3SXRlbS5pc1RhZyA9IHRydWU7XG4gICAgICAgICAgLy8gaGFuZGxlIG5ld0l0ZW0gc3RyaW5nIGFuZCBzdHJpcHBpbmcgZHVwZXMgaW4gdGFnZ2luZyBzdHJpbmcgY29udGV4dFxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBmaW5kIGFueSB0YWdnaW5nIGl0ZW1zIGFscmVhZHkgaW4gdGhlICRzZWxlY3QuaXRlbXMgYXJyYXkgYW5kIHN0b3JlIHRoZW1cbiAgICAgICAgICAgIHRhZ0l0ZW1zID0gJHNlbGVjdC4kZmlsdGVyKCdmaWx0ZXInKShpdGVtcyxmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaXRlbS5tYXRjaCgkc2VsZWN0LnRhZ2dpbmdMYWJlbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICggdGFnSXRlbXMubGVuZ3RoID4gMCApIHtcbiAgICAgICAgICAgICAgdGFnSXRlbSA9IHRhZ0l0ZW1zWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGV4aXN0aW5nIHRhZyBpdGVtIGlmIGZvdW5kIChzaG91bGQgb25seSBldmVyIGJlIG9uZSB0YWcgaXRlbSlcbiAgICAgICAgICAgIGlmICggaXRlbSAhPT0gdW5kZWZpbmVkICYmIGl0ZW1zLmxlbmd0aCA+IDAgJiYgdGFnSXRlbSApIHtcbiAgICAgICAgICAgICAgaGFzVGFnID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5zbGljZSgxLGl0ZW1zLmxlbmd0aCk7XG4gICAgICAgICAgICAgIHN0YXNoQXJyID0gc3Rhc2hBcnIuc2xpY2UoMSxzdGFzaEFyci5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3SXRlbSA9ICRzZWxlY3Quc2VhcmNoKycgJyskc2VsZWN0LnRhZ2dpbmdMYWJlbDtcbiAgICAgICAgICAgIGlmICggX2ZpbmRBcHByb3hEdXBlKCRzZWxlY3Quc2VsZWN0ZWQsICRzZWxlY3Quc2VhcmNoKSA+IC0xICkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB2ZXJpZnkgdGhlIHRoZSB0YWcgZG9lc24ndCBtYXRjaCB0aGUgdmFsdWUgb2YgYW4gZXhpc3RpbmcgaXRlbSBmcm9tXG4gICAgICAgICAgICAvLyB0aGUgc2VhcmNoZWQgZGF0YSBzZXQgb3IgdGhlIGl0ZW1zIGFscmVhZHkgc2VsZWN0ZWRcbiAgICAgICAgICAgIGlmICggX2ZpbmRDYXNlSW5zZW5zaXRpdmVEdXBlKHN0YXNoQXJyLmNvbmNhdCgkc2VsZWN0LnNlbGVjdGVkKSkgKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgdGFnIGZyb20gcHJldiBpdGVyYXRpb24sIHN0cmlwIGl0IC8gcXVldWUgdGhlIGNoYW5nZVxuICAgICAgICAgICAgICAvLyBhbmQgcmV0dXJuIGVhcmx5XG4gICAgICAgICAgICAgIGlmICggaGFzVGFnICkge1xuICAgICAgICAgICAgICAgIGl0ZW1zID0gc3Rhc2hBcnI7XG4gICAgICAgICAgICAgICAgc2NvcGUuJGV2YWxBc3luYyggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgJHNlbGVjdC5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAkc2VsZWN0Lml0ZW1zID0gaXRlbXM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCBfZmluZENhc2VJbnNlbnNpdGl2ZUR1cGUoc3Rhc2hBcnIpICkge1xuICAgICAgICAgICAgICAvLyBpZiB0aGVyZSBpcyBhIHRhZyBmcm9tIHByZXYgaXRlcmF0aW9uLCBzdHJpcCBpdFxuICAgICAgICAgICAgICBpZiAoIGhhc1RhZyApIHtcbiAgICAgICAgICAgICAgICAkc2VsZWN0Lml0ZW1zID0gc3Rhc2hBcnIuc2xpY2UoMSxzdGFzaEFyci5sZW5ndGgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCBoYXNUYWcgKSBkdXBlSW5kZXggPSBfZmluZEFwcHJveER1cGUoJHNlbGVjdC5zZWxlY3RlZCwgbmV3SXRlbSk7XG4gICAgICAgICAgLy8gZHVwZSBmb3VuZCwgc2hhdmUgdGhlIGZpcnN0IGl0ZW1cbiAgICAgICAgICBpZiAoIGR1cGVJbmRleCA+IC0xICkge1xuICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5zbGljZShkdXBlSW5kZXgrMSxpdGVtcy5sZW5ndGgtMSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW1zID0gW107XG4gICAgICAgICAgICBpZiAobmV3SXRlbSkgaXRlbXMucHVzaChuZXdJdGVtKTtcbiAgICAgICAgICAgIGl0ZW1zID0gaXRlbXMuY29uY2F0KHN0YXNoQXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2NvcGUuJGV2YWxBc3luYyggZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJHNlbGVjdC5hY3RpdmVJbmRleCA9IDA7XG4gICAgICAgICAgICAkc2VsZWN0Lml0ZW1zID0gaXRlbXM7XG5cbiAgICAgICAgICAgIGlmICgkc2VsZWN0LmlzR3JvdXBlZCkge1xuICAgICAgICAgICAgICAvLyB1cGRhdGUgaXRlbSByZWZlcmVuY2VzIGluIGdyb3Vwcywgc28gdGhhdCBpbmRleE9mIHdpbGwgd29yayBhZnRlciBhbmd1bGFyLmNvcHlcbiAgICAgICAgICAgICAgdmFyIGl0ZW1zV2l0aG91dFRhZyA9IG5ld0l0ZW0gPyBpdGVtcy5zbGljZSgxKSA6IGl0ZW1zO1xuICAgICAgICAgICAgICAkc2VsZWN0LnNldEl0ZW1zRm4oaXRlbXNXaXRob3V0VGFnKTtcbiAgICAgICAgICAgICAgaWYgKG5ld0l0ZW0pIHtcbiAgICAgICAgICAgICAgICAvLyBhZGQgdGFnIGl0ZW0gYXMgYSBuZXcgZ3JvdXBcbiAgICAgICAgICAgICAgICAkc2VsZWN0Lml0ZW1zLnVuc2hpZnQobmV3SXRlbSk7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5ncm91cHMudW5zaGlmdCh7bmFtZTogJycsIGl0ZW1zOiBbbmV3SXRlbV0sIHRhZ2dpbmc6IHRydWV9KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGZ1bmN0aW9uIF9maW5kQ2FzZUluc2Vuc2l0aXZlRHVwZShhcnIpIHtcbiAgICAgICAgaWYgKCBhcnIgPT09IHVuZGVmaW5lZCB8fCAkc2VsZWN0LnNlYXJjaCA9PT0gdW5kZWZpbmVkICkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaGFzRHVwZSA9IGFyci5maWx0ZXIoIGZ1bmN0aW9uIChvcmlnSXRlbSkge1xuICAgICAgICAgIGlmICggJHNlbGVjdC5zZWFyY2gudG9VcHBlckNhc2UoKSA9PT0gdW5kZWZpbmVkIHx8IG9yaWdJdGVtID09PSB1bmRlZmluZWQgKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvcmlnSXRlbS50b1VwcGVyQ2FzZSgpID09PSAkc2VsZWN0LnNlYXJjaC50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9KS5sZW5ndGggPiAwO1xuXG4gICAgICAgIHJldHVybiBoYXNEdXBlO1xuICAgICAgfVxuICAgICAgZnVuY3Rpb24gX2ZpbmRBcHByb3hEdXBlKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgICAgICAgdmFyIGR1cGVJbmRleCA9IC0xO1xuICAgICAgICBpZihhbmd1bGFyLmlzQXJyYXkoaGF5c3RhY2spKSB7XG4gICAgICAgICAgdmFyIHRlbXBBcnIgPSBhbmd1bGFyLmNvcHkoaGF5c3RhY2spO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDx0ZW1wQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBoYW5kbGUgdGhlIHNpbXBsZSBzdHJpbmcgdmVyc2lvbiBvZiB0YWdnaW5nXG4gICAgICAgICAgICBpZiAoICRzZWxlY3QudGFnZ2luZy5mY3QgPT09IHVuZGVmaW5lZCApIHtcbiAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSBhcnJheSBmb3IgdGhlIG1hdGNoXG4gICAgICAgICAgICAgIGlmICggdGVtcEFycltpXSsnICcrJHNlbGVjdC50YWdnaW5nTGFiZWwgPT09IG5lZWRsZSApIHtcbiAgICAgICAgICAgICAgZHVwZUluZGV4ID0gaTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaGFuZGxlIHRoZSBvYmplY3QgdGFnZ2luZyBpbXBsZW1lbnRhdGlvblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIG1vY2tPYmogPSB0ZW1wQXJyW2ldO1xuICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc09iamVjdChtb2NrT2JqKSkge1xuICAgICAgICAgICAgICAgIG1vY2tPYmouaXNUYWcgPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICggYW5ndWxhci5lcXVhbHMobW9ja09iaiwgbmVlZGxlKSApIHtcbiAgICAgICAgICAgICAgICBkdXBlSW5kZXggPSBpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkdXBlSW5kZXg7XG4gICAgICB9XG5cbiAgICAgICRzZWxlY3Quc2VhcmNoSW5wdXQub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNlbGVjdE11bHRpcGxlLmFjdGl2ZU1hdGNoSW5kZXggPSAtMTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgIH1cbiAgfTtcbn1dKTtcblxudWlzLmRpcmVjdGl2ZSgndWlTZWxlY3ROb0Nob2ljZScsXG4gICAgWyd1aVNlbGVjdENvbmZpZycsIGZ1bmN0aW9uICh1aVNlbGVjdENvbmZpZykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVzdHJpY3Q6ICdFQScsXG4gICAgICAgICAgICByZXF1aXJlOiAnXnVpU2VsZWN0JyxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2NsdWRlOiB0cnVlLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IGZ1bmN0aW9uICh0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIC8vIE5lZWRlZCBzbyB0aGUgdWlTZWxlY3QgY2FuIGRldGVjdCB0aGUgdHJhbnNjbHVkZWQgY29udGVudFxuICAgICAgICAgICAgICAgIHRFbGVtZW50LmFkZENsYXNzKCd1aS1zZWxlY3Qtbm8tY2hvaWNlJyk7XG4gICAgICBcbiAgICAgICAgICAgICAgICAvLyBHZXRzIHRoZW1lIGF0dHJpYnV0ZSBmcm9tIHBhcmVudCAodWktc2VsZWN0KVxuICAgICAgICAgICAgICAgIHZhciB0aGVtZSA9IHRFbGVtZW50LnBhcmVudCgpLmF0dHIoJ3RoZW1lJykgfHwgdWlTZWxlY3RDb25maWcudGhlbWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoZW1lICsgJy9uby1jaG9pY2UudHBsLmh0bWwnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1dKTtcblxudWlzLmRpcmVjdGl2ZSgndWlTZWxlY3RTaW5nbGUnLCBbJyR0aW1lb3V0JywnJGNvbXBpbGUnLCBmdW5jdGlvbigkdGltZW91dCwgJGNvbXBpbGUpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0VBJyxcbiAgICByZXF1aXJlOiBbJ151aVNlbGVjdCcsICdebmdNb2RlbCddLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycywgY3RybHMpIHtcblxuICAgICAgdmFyICRzZWxlY3QgPSBjdHJsc1swXTtcbiAgICAgIHZhciBuZ01vZGVsID0gY3RybHNbMV07XG5cbiAgICAgIC8vRnJvbSB2aWV3IC0tPiBtb2RlbFxuICAgICAgbmdNb2RlbC4kcGFyc2Vycy51bnNoaWZ0KGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIC8vIEtlZXAgb3JpZ2luYWwgdmFsdWUgZm9yIHVuZGVmaW5lZCBhbmQgbnVsbFxuICAgICAgICBpZiAoaXNOaWwoaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsb2NhbHMgPSB7fSxcbiAgICAgICAgICAgIHJlc3VsdDtcbiAgICAgICAgbG9jYWxzWyRzZWxlY3QucGFyc2VyUmVzdWx0Lml0ZW1OYW1lXSA9IGlucHV0VmFsdWU7XG4gICAgICAgIHJlc3VsdCA9ICRzZWxlY3QucGFyc2VyUmVzdWx0Lm1vZGVsTWFwcGVyKHNjb3BlLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSk7XG5cbiAgICAgIC8vRnJvbSBtb2RlbCAtLT4gdmlld1xuICAgICAgbmdNb2RlbC4kZm9ybWF0dGVycy51bnNoaWZ0KGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgICAgIC8vIEtlZXAgb3JpZ2luYWwgdmFsdWUgZm9yIHVuZGVmaW5lZCBhbmQgbnVsbFxuICAgICAgICBpZiAoaXNOaWwoaW5wdXRWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkYXRhID0gJHNlbGVjdC5wYXJzZXJSZXN1bHQgJiYgJHNlbGVjdC5wYXJzZXJSZXN1bHQuc291cmNlIChzY29wZSwgeyAkc2VsZWN0IDoge3NlYXJjaDonJ319KSwgLy9PdmVyd3JpdGUgJHNlYXJjaFxuICAgICAgICAgICAgbG9jYWxzID0ge30sXG4gICAgICAgICAgICByZXN1bHQ7XG4gICAgICAgIGlmIChkYXRhKXtcbiAgICAgICAgICB2YXIgY2hlY2tGblNpbmdsZSA9IGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgbG9jYWxzWyRzZWxlY3QucGFyc2VyUmVzdWx0Lml0ZW1OYW1lXSA9IGQ7XG4gICAgICAgICAgICByZXN1bHQgPSAkc2VsZWN0LnBhcnNlclJlc3VsdC5tb2RlbE1hcHBlcihzY29wZSwgbG9jYWxzKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQgPT09IGlucHV0VmFsdWU7XG4gICAgICAgICAgfTtcbiAgICAgICAgICAvL0lmIHBvc3NpYmxlIHBhc3Mgc2FtZSBvYmplY3Qgc3RvcmVkIGluICRzZWxlY3Quc2VsZWN0ZWRcbiAgICAgICAgICBpZiAoJHNlbGVjdC5zZWxlY3RlZCAmJiBjaGVja0ZuU2luZ2xlKCRzZWxlY3Quc2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gJHNlbGVjdC5zZWxlY3RlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yICh2YXIgaSA9IGRhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGlmIChjaGVja0ZuU2luZ2xlKGRhdGFbaV0pKSByZXR1cm4gZGF0YVtpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlucHV0VmFsdWU7XG4gICAgICB9KTtcblxuICAgICAgLy9VcGRhdGUgdmlld1ZhbHVlIGlmIG1vZGVsIGNoYW5nZVxuICAgICAgc2NvcGUuJHdhdGNoKCckc2VsZWN0LnNlbGVjdGVkJywgZnVuY3Rpb24obmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKG5nTW9kZWwuJHZpZXdWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICBuZ01vZGVsLiRzZXRWaWV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgbmdNb2RlbC4kcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICRzZWxlY3Quc2VsZWN0ZWQgPSBuZ01vZGVsLiR2aWV3VmFsdWU7XG4gICAgICB9O1xuXG4gICAgICBzY29wZS4kb24oJ3VpczpzZWxlY3QnLCBmdW5jdGlvbiAoZXZlbnQsIGl0ZW0pIHtcbiAgICAgICAgJHNlbGVjdC5zZWxlY3RlZCA9IGl0ZW07XG4gICAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgICAgbG9jYWxzWyRzZWxlY3QucGFyc2VyUmVzdWx0Lml0ZW1OYW1lXSA9IGl0ZW07XG5cbiAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJHNlbGVjdC5vblNlbGVjdENhbGxiYWNrKHNjb3BlLCB7XG4gICAgICAgICAgICAkaXRlbTogaXRlbSxcbiAgICAgICAgICAgICRtb2RlbDogaXNOaWwoaXRlbSkgPyBpdGVtIDogJHNlbGVjdC5wYXJzZXJSZXN1bHQubW9kZWxNYXBwZXIoc2NvcGUsIGxvY2FscylcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgc2NvcGUuJG9uKCd1aXM6Y2xvc2UnLCBmdW5jdGlvbiAoZXZlbnQsIHNraXBGb2N1c3Nlcikge1xuICAgICAgICAkdGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICRzZWxlY3QuZm9jdXNzZXIucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgaWYgKCFza2lwRm9jdXNzZXIpICRzZWxlY3QuZm9jdXNzZXJbMF0uZm9jdXMoKTtcbiAgICAgICAgfSwwLGZhbHNlKTtcbiAgICAgIH0pO1xuXG4gICAgICBzY29wZS4kb24oJ3VpczphY3RpdmF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZm9jdXNzZXIucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTsgLy9XaWxsIHJlYWN0aXZhdGUgaXQgb24gLmNsb3NlKClcbiAgICAgIH0pO1xuXG4gICAgICAvL0lkZWEgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2l2YXluYmVyZy9zZWxlY3QyL2Jsb2IvNzliNWJmNmRiOTE4ZDc1NjBiZGQ5NTkxMDliN2JjZmI0N2VkYWY0My9zZWxlY3QyLmpzI0wxOTU0XG4gICAgICB2YXIgZm9jdXNzZXIgPSBhbmd1bGFyLmVsZW1lbnQoXCI8aW5wdXQgbmctZGlzYWJsZWQ9JyRzZWxlY3QuZGlzYWJsZWQnIGNsYXNzPSd1aS1zZWxlY3QtZm9jdXNzZXIgdWktc2VsZWN0LW9mZnNjcmVlbicgdHlwZT0ndGV4dCcgaWQ9J3t7ICRzZWxlY3QuZm9jdXNzZXJJZCB9fScgYXJpYS1sYWJlbD0ne3sgJHNlbGVjdC5mb2N1c3NlclRpdGxlIH19JyBhcmlhLWhhc3BvcHVwPSd0cnVlJyByb2xlPSdidXR0b24nIC8+XCIpO1xuICAgICAgJGNvbXBpbGUoZm9jdXNzZXIpKHNjb3BlKTtcbiAgICAgICRzZWxlY3QuZm9jdXNzZXIgPSBmb2N1c3NlcjtcblxuICAgICAgLy9JbnB1dCB0aGF0IHdpbGwgaGFuZGxlIGZvY3VzXG4gICAgICAkc2VsZWN0LmZvY3VzSW5wdXQgPSBmb2N1c3NlcjtcblxuICAgICAgZWxlbWVudC5wYXJlbnQoKS5hcHBlbmQoZm9jdXNzZXIpO1xuICAgICAgZm9jdXNzZXIuYmluZChcImZvY3VzXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHNjb3BlLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkc2VsZWN0LmZvY3VzID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGZvY3Vzc2VyLmJpbmQoXCJibHVyXCIsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHNjb3BlLiRldmFsQXN5bmMoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkc2VsZWN0LmZvY3VzID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBmb2N1c3Nlci5iaW5kKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKXtcblxuICAgICAgICBpZiAoZS53aGljaCA9PT0gS0VZLkJBQ0tTUEFDRSAmJiAkc2VsZWN0LmJhY2tzcGFjZVJlc2V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICRzZWxlY3Quc2VsZWN0KHVuZGVmaW5lZCk7XG4gICAgICAgICAgc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUud2hpY2ggPT09IEtFWS5UQUIgfHwgS0VZLmlzQ29udHJvbChlKSB8fCBLRVkuaXNGdW5jdGlvbktleShlKSB8fCBlLndoaWNoID09PSBLRVkuRVNDKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUud2hpY2ggPT0gS0VZLkRPV04gIHx8IGUud2hpY2ggPT0gS0VZLlVQIHx8IGUud2hpY2ggPT0gS0VZLkVOVEVSIHx8IGUud2hpY2ggPT0gS0VZLlNQQUNFKXtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAkc2VsZWN0LmFjdGl2YXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBzY29wZS4kZGlnZXN0KCk7XG4gICAgICB9KTtcblxuICAgICAgZm9jdXNzZXIuYmluZChcImtleXVwIGlucHV0XCIsIGZ1bmN0aW9uKGUpe1xuXG4gICAgICAgIGlmIChlLndoaWNoID09PSBLRVkuVEFCIHx8IEtFWS5pc0NvbnRyb2woZSkgfHwgS0VZLmlzRnVuY3Rpb25LZXkoZSkgfHwgZS53aGljaCA9PT0gS0VZLkVTQyB8fCBlLndoaWNoID09IEtFWS5FTlRFUiB8fCBlLndoaWNoID09PSBLRVkuQkFDS1NQQUNFKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNlbGVjdC5hY3RpdmF0ZShmb2N1c3Nlci52YWwoKSk7IC8vVXNlciBwcmVzc2VkIHNvbWUgcmVndWxhciBrZXksIHNvIHdlIHBhc3MgaXQgdG8gdGhlIHNlYXJjaCBpbnB1dFxuICAgICAgICBmb2N1c3Nlci52YWwoJycpO1xuICAgICAgICBzY29wZS4kZGlnZXN0KCk7XG5cbiAgICAgIH0pO1xuXG5cbiAgICB9XG4gIH07XG59XSk7XG5cbi8vIE1ha2UgbXVsdGlwbGUgbWF0Y2hlcyBzb3J0YWJsZVxudWlzLmRpcmVjdGl2ZSgndWlTZWxlY3RTb3J0JywgWyckdGltZW91dCcsICd1aVNlbGVjdENvbmZpZycsICd1aVNlbGVjdE1pbkVycicsIGZ1bmN0aW9uKCR0aW1lb3V0LCB1aVNlbGVjdENvbmZpZywgdWlTZWxlY3RNaW5FcnIpIHtcbiAgcmV0dXJuIHtcbiAgICByZXF1aXJlOiBbJ15edWlTZWxlY3QnLCAnXm5nTW9kZWwnXSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMsIGN0cmxzKSB7XG4gICAgICBpZiAoc2NvcGVbYXR0cnMudWlTZWxlY3RTb3J0XSA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyB1aVNlbGVjdE1pbkVycignc29ydCcsICdFeHBlY3RlZCBhIGxpc3QgdG8gc29ydCcpO1xuICAgICAgfVxuXG4gICAgICB2YXIgJHNlbGVjdCA9IGN0cmxzWzBdO1xuICAgICAgdmFyICRuZ01vZGVsID0gY3RybHNbMV07XG5cbiAgICAgIHZhciBvcHRpb25zID0gYW5ndWxhci5leHRlbmQoe1xuICAgICAgICAgIGF4aXM6ICdob3Jpem9udGFsJ1xuICAgICAgICB9LFxuICAgICAgICBzY29wZS4kZXZhbChhdHRycy51aVNlbGVjdFNvcnRPcHRpb25zKSk7XG5cbiAgICAgIHZhciBheGlzID0gb3B0aW9ucy5heGlzO1xuICAgICAgdmFyIGRyYWdnaW5nQ2xhc3NOYW1lID0gJ2RyYWdnaW5nJztcbiAgICAgIHZhciBkcm9wcGluZ0NsYXNzTmFtZSA9ICdkcm9wcGluZyc7XG4gICAgICB2YXIgZHJvcHBpbmdCZWZvcmVDbGFzc05hbWUgPSAnZHJvcHBpbmctYmVmb3JlJztcbiAgICAgIHZhciBkcm9wcGluZ0FmdGVyQ2xhc3NOYW1lID0gJ2Ryb3BwaW5nLWFmdGVyJztcblxuICAgICAgc2NvcGUuJHdhdGNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAkc2VsZWN0LnNvcnRhYmxlO1xuICAgICAgfSwgZnVuY3Rpb24obmV3VmFsdWUpe1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICBlbGVtZW50LmF0dHIoJ2RyYWdnYWJsZScsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cignZHJhZ2dhYmxlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50Lm9uKCdkcmFnc3RhcnQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBlbGVtZW50LmFkZENsYXNzKGRyYWdnaW5nQ2xhc3NOYW1lKTtcblxuICAgICAgICAoZXZlbnQuZGF0YVRyYW5zZmVyIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyKS5zZXREYXRhKCd0ZXh0Jywgc2NvcGUuJGluZGV4LnRvU3RyaW5nKCkpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZW1lbnQub24oJ2RyYWdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZHJhZ2dpbmdDbGFzc05hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBtb3ZlID0gZnVuY3Rpb24oZnJvbSwgdG8pIHtcbiAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG4gICAgICAgIHRoaXMuc3BsaWNlKHRvLCAwLCB0aGlzLnNwbGljZShmcm9tLCAxKVswXSk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihjbGFzc05hbWUpIHtcbiAgICAgICAgYW5ndWxhci5mb3JFYWNoKCRzZWxlY3QuJGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicgKyBjbGFzc05hbWUpLCBmdW5jdGlvbihlbCl7XG4gICAgICAgICAgYW5ndWxhci5lbGVtZW50KGVsKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBkcmFnT3ZlckhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIHZhciBvZmZzZXQgPSBheGlzID09PSAndmVydGljYWwnID8gZXZlbnQub2Zmc2V0WSB8fCBldmVudC5sYXllclkgfHwgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgPyBldmVudC5vcmlnaW5hbEV2ZW50Lm9mZnNldFkgOiAwKSA6IGV2ZW50Lm9mZnNldFggfHwgZXZlbnQubGF5ZXJYIHx8IChldmVudC5vcmlnaW5hbEV2ZW50ID8gZXZlbnQub3JpZ2luYWxFdmVudC5vZmZzZXRYIDogMCk7XG5cbiAgICAgICAgaWYgKG9mZnNldCA8ICh0aGlzW2F4aXMgPT09ICd2ZXJ0aWNhbCcgPyAnb2Zmc2V0SGVpZ2h0JyA6ICdvZmZzZXRXaWR0aCddIC8gMikpIHtcbiAgICAgICAgICByZW1vdmVDbGFzcyhkcm9wcGluZ0FmdGVyQ2xhc3NOYW1lKTtcbiAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKGRyb3BwaW5nQmVmb3JlQ2xhc3NOYW1lKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlbW92ZUNsYXNzKGRyb3BwaW5nQmVmb3JlQ2xhc3NOYW1lKTtcbiAgICAgICAgICBlbGVtZW50LmFkZENsYXNzKGRyb3BwaW5nQWZ0ZXJDbGFzc05hbWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgZHJvcFRpbWVvdXQ7XG5cbiAgICAgIHZhciBkcm9wSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyIGRyb3BwZWRJdGVtSW5kZXggPSBwYXJzZUludCgoZXZlbnQuZGF0YVRyYW5zZmVyIHx8IGV2ZW50Lm9yaWdpbmFsRXZlbnQuZGF0YVRyYW5zZmVyKS5nZXREYXRhKCd0ZXh0JyksIDEwKTtcblxuICAgICAgICAvLyBwcmV2ZW50IGV2ZW50IGZpcmluZyBtdWx0aXBsZSB0aW1lcyBpbiBmaXJlZm94XG4gICAgICAgICR0aW1lb3V0LmNhbmNlbChkcm9wVGltZW91dCk7XG4gICAgICAgIGRyb3BUaW1lb3V0ID0gJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgX2Ryb3BIYW5kbGVyKGRyb3BwZWRJdGVtSW5kZXgpO1xuICAgICAgICB9LCAyMCk7XG4gICAgICB9O1xuXG4gICAgICB2YXIgX2Ryb3BIYW5kbGVyID0gZnVuY3Rpb24oZHJvcHBlZEl0ZW1JbmRleCkge1xuICAgICAgICB2YXIgdGhlTGlzdCA9IHNjb3BlLiRldmFsKGF0dHJzLnVpU2VsZWN0U29ydCk7XG4gICAgICAgIHZhciBpdGVtVG9Nb3ZlID0gdGhlTGlzdFtkcm9wcGVkSXRlbUluZGV4XTtcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gbnVsbDtcblxuICAgICAgICBpZiAoZWxlbWVudC5oYXNDbGFzcyhkcm9wcGluZ0JlZm9yZUNsYXNzTmFtZSkpIHtcbiAgICAgICAgICBpZiAoZHJvcHBlZEl0ZW1JbmRleCA8IHNjb3BlLiRpbmRleCkge1xuICAgICAgICAgICAgbmV3SW5kZXggPSBzY29wZS4kaW5kZXggLSAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IHNjb3BlLiRpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGRyb3BwZWRJdGVtSW5kZXggPCBzY29wZS4kaW5kZXgpIHtcbiAgICAgICAgICAgIG5ld0luZGV4ID0gc2NvcGUuJGluZGV4O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdJbmRleCA9IHNjb3BlLiRpbmRleCArIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbW92ZS5hcHBseSh0aGVMaXN0LCBbZHJvcHBlZEl0ZW1JbmRleCwgbmV3SW5kZXhdKTtcblxuICAgICAgICAkbmdNb2RlbC4kc2V0Vmlld1ZhbHVlKERhdGUubm93KCkpO1xuXG4gICAgICAgIHNjb3BlLiRhcHBseShmdW5jdGlvbigpIHtcbiAgICAgICAgICBzY29wZS4kZW1pdCgndWlTZWxlY3RTb3J0OmNoYW5nZScsIHtcbiAgICAgICAgICAgIGFycmF5OiB0aGVMaXN0LFxuICAgICAgICAgICAgaXRlbTogaXRlbVRvTW92ZSxcbiAgICAgICAgICAgIGZyb206IGRyb3BwZWRJdGVtSW5kZXgsXG4gICAgICAgICAgICB0bzogbmV3SW5kZXhcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmVtb3ZlQ2xhc3MoZHJvcHBpbmdDbGFzc05hbWUpO1xuICAgICAgICByZW1vdmVDbGFzcyhkcm9wcGluZ0JlZm9yZUNsYXNzTmFtZSk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGRyb3BwaW5nQWZ0ZXJDbGFzc05hbWUpO1xuXG4gICAgICAgIGVsZW1lbnQub2ZmKCdkcm9wJywgZHJvcEhhbmRsZXIpO1xuICAgICAgfTtcblxuICAgICAgZWxlbWVudC5vbignZHJhZ2VudGVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChlbGVtZW50Lmhhc0NsYXNzKGRyYWdnaW5nQ2xhc3NOYW1lKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuYWRkQ2xhc3MoZHJvcHBpbmdDbGFzc05hbWUpO1xuXG4gICAgICAgIGVsZW1lbnQub24oJ2RyYWdvdmVyJywgZHJhZ092ZXJIYW5kbGVyKTtcbiAgICAgICAgZWxlbWVudC5vbignZHJvcCcsIGRyb3BIYW5kbGVyKTtcbiAgICAgIH0pO1xuXG4gICAgICBlbGVtZW50Lm9uKCdkcmFnbGVhdmUnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ICE9IGVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZW1vdmVDbGFzcyhkcm9wcGluZ0NsYXNzTmFtZSk7XG4gICAgICAgIHJlbW92ZUNsYXNzKGRyb3BwaW5nQmVmb3JlQ2xhc3NOYW1lKTtcbiAgICAgICAgcmVtb3ZlQ2xhc3MoZHJvcHBpbmdBZnRlckNsYXNzTmFtZSk7XG5cbiAgICAgICAgZWxlbWVudC5vZmYoJ2RyYWdvdmVyJywgZHJhZ092ZXJIYW5kbGVyKTtcbiAgICAgICAgZWxlbWVudC5vZmYoJ2Ryb3AnLCBkcm9wSGFuZGxlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XSk7XG5cbi8qKlxuICogRGVib3VuY2VzIGZ1bmN0aW9uc1xuICpcbiAqIFRha2VuIGZyb20gVUkgQm9vdHN0cmFwICQkZGVib3VuY2Ugc291cmNlIGNvZGVcbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS9ib290c3RyYXAvYmxvYi9tYXN0ZXIvc3JjL2RlYm91bmNlL2RlYm91bmNlLmpzXG4gKlxuICovXG51aXMuZmFjdG9yeSgnJCR1aXNEZWJvdW5jZScsIFsnJHRpbWVvdXQnLCBmdW5jdGlvbigkdGltZW91dCkge1xuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2ssIGRlYm91bmNlVGltZSkge1xuICAgIHZhciB0aW1lb3V0UHJvbWlzZTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIGlmICh0aW1lb3V0UHJvbWlzZSkge1xuICAgICAgICAkdGltZW91dC5jYW5jZWwodGltZW91dFByb21pc2UpO1xuICAgICAgfVxuXG4gICAgICB0aW1lb3V0UHJvbWlzZSA9ICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYWxsYmFjay5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgIH0sIGRlYm91bmNlVGltZSk7XG4gICAgfTtcbiAgfTtcbn1dKTtcblxudWlzLmRpcmVjdGl2ZSgndWlzT3BlbkNsb3NlJywgWyckcGFyc2UnLCAnJHRpbWVvdXQnLCBmdW5jdGlvbiAoJHBhcnNlLCAkdGltZW91dCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnQScsXG4gICAgcmVxdWlyZTogJ3VpU2VsZWN0JyxcbiAgICBsaW5rOiBmdW5jdGlvbiAoc2NvcGUsIGVsZW1lbnQsIGF0dHJzLCAkc2VsZWN0KSB7XG4gICAgICAkc2VsZWN0Lm9uT3BlbkNsb3NlQ2FsbGJhY2sgPSAkcGFyc2UoYXR0cnMudWlzT3BlbkNsb3NlKTtcblxuICAgICAgc2NvcGUuJHdhdGNoKCckc2VsZWN0Lm9wZW4nLCBmdW5jdGlvbiAoaXNPcGVuLCBwcmV2aW91c1N0YXRlKSB7XG4gICAgICAgIGlmIChpc09wZW4gIT09IHByZXZpb3VzU3RhdGUpIHtcbiAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkc2VsZWN0Lm9uT3BlbkNsb3NlQ2FsbGJhY2soc2NvcGUsIHtcbiAgICAgICAgICAgICAgaXNPcGVuOiBpc09wZW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XSk7XG5cbi8qKlxuICogUGFyc2VzIFwicmVwZWF0XCIgYXR0cmlidXRlLlxuICpcbiAqIFRha2VuIGZyb20gQW5ndWxhckpTIG5nUmVwZWF0IHNvdXJjZSBjb2RlXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci5qcy9ibG9iL3YxLjIuMTUvc3JjL25nL2RpcmVjdGl2ZS9uZ1JlcGVhdC5qcyNMMjExXG4gKlxuICogT3JpZ2luYWwgZGlzY3Vzc2lvbiBhYm91dCBwYXJzaW5nIFwicmVwZWF0XCIgYXR0cmlidXRlIGluc3RlYWQgb2YgZnVsbHkgcmVseWluZyBvbiBuZy1yZXBlYXQ6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1zZWxlY3QvY29tbWl0LzVkZDYzYWQjY29tbWl0Y29tbWVudC01NTA0Njk3XG4gKi9cblxudWlzLnNlcnZpY2UoJ3Vpc1JlcGVhdFBhcnNlcicsIFsndWlTZWxlY3RNaW5FcnInLCckcGFyc2UnLCBmdW5jdGlvbih1aVNlbGVjdE1pbkVyciwgJHBhcnNlKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICAvKipcbiAgICogRXhhbXBsZTpcbiAgICogZXhwcmVzc2lvbiA9IFwiYWRkcmVzcyBpbiBhZGRyZXNzZXMgfCBmaWx0ZXI6IHtzdHJlZXQ6ICRzZWxlY3Quc2VhcmNofSB0cmFjayBieSAkaW5kZXhcIlxuICAgKiBpdGVtTmFtZSA9IFwiYWRkcmVzc1wiLFxuICAgKiBzb3VyY2UgPSBcImFkZHJlc3NlcyB8IGZpbHRlcjoge3N0cmVldDogJHNlbGVjdC5zZWFyY2h9XCIsXG4gICAqIHRyYWNrQnlFeHAgPSBcIiRpbmRleFwiLFxuICAgKi9cbiAgc2VsZi5wYXJzZSA9IGZ1bmN0aW9uKGV4cHJlc3Npb24pIHtcblxuXG4gICAgdmFyIG1hdGNoO1xuICAgIC8vdmFyIGlzT2JqZWN0Q29sbGVjdGlvbiA9IC9cXChcXHMqKFtcXCRcXHddW1xcJFxcd10qKVxccyosXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqXFwpLy50ZXN0KGV4cHJlc3Npb24pO1xuICAgIC8vIElmIGFuIGFycmF5IGlzIHVzZWQgYXMgY29sbGVjdGlvblxuXG4gICAgLy8gaWYgKGlzT2JqZWN0Q29sbGVjdGlvbil7XG4gICAgLy8gMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTExMTExMTExMDAwMDAwMDAwMDAwMDAwMjIyMjIyMjIyMjIyMjIwMDMzMzMzMzMzMzMzMzMzMzMzMzMzMzMwMDAwNDQ0NDQ0NDQ0NDQ0NDQ0NDQ0MDAwMDAwMDAwMDAwMDAwMDU1NTU1NTU1NTU1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDY2NjY2NjY2NjAwMDAwMDAwXG4gICAgbWF0Y2ggPSBleHByZXNzaW9uLm1hdGNoKC9eXFxzKig/OihbXFxzXFxTXSs/KVxccythc1xccyspPyg/OihbXFwkXFx3XVtcXCRcXHddKil8KD86XFwoXFxzKihbXFwkXFx3XVtcXCRcXHddKilcXHMqLFxccyooW1xcJFxcd11bXFwkXFx3XSopXFxzKlxcKSkpXFxzK2luXFxzKyhcXHMqW1xcc1xcU10rPyk/KD86XFxzK3RyYWNrXFxzK2J5XFxzKyhbXFxzXFxTXSs/KSk/XFxzKiQvKTtcblxuICAgIC8vIDEgQWxpYXNcbiAgICAvLyAyIEl0ZW1cbiAgICAvLyAzIEtleSBvbiAoa2V5LHZhbHVlKVxuICAgIC8vIDQgVmFsdWUgb24gKGtleSx2YWx1ZSlcbiAgICAvLyA1IFNvdXJjZSBleHByZXNzaW9uIChpbmNsdWRpbmcgZmlsdGVycylcbiAgICAvLyA2IFRyYWNrIGJ5XG5cbiAgICBpZiAoIW1hdGNoKSB7XG4gICAgICB0aHJvdyB1aVNlbGVjdE1pbkVycignaWV4cCcsIFwiRXhwZWN0ZWQgZXhwcmVzc2lvbiBpbiBmb3JtIG9mICdfaXRlbV8gaW4gX2NvbGxlY3Rpb25fWyB0cmFjayBieSBfaWRfXScgYnV0IGdvdCAnezB9Jy5cIixcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbik7XG4gICAgfVxuICAgIFxuICAgIHZhciBzb3VyY2UgPSBtYXRjaFs1XSwgXG4gICAgICAgIGZpbHRlcnMgPSAnJztcblxuICAgIC8vIFdoZW4gdXNpbmcgKGtleSx2YWx1ZSkgdWktc2VsZWN0IHJlcXVpcmVzIGZpbHRlcnMgdG8gYmUgZXh0cmFjdGVkLCBzaW5jZSB0aGUgb2JqZWN0XG4gICAgLy8gaXMgY29udmVydGVkIHRvIGFuIGFycmF5IGZvciAkc2VsZWN0Lml0ZW1zIFxuICAgIC8vIChpbiB3aGljaCBjYXNlIHRoZSBmaWx0ZXJzIG5lZWQgdG8gYmUgcmVhcHBsaWVkKVxuICAgIGlmIChtYXRjaFszXSkge1xuICAgICAgLy8gUmVtb3ZlIGFueSBlbmNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgIHNvdXJjZSA9IG1hdGNoWzVdLnJlcGxhY2UoLyheXFwoKXwoXFwpJCkvZywgJycpO1xuICAgICAgLy8gbWF0Y2ggYWxsIGFmdGVyIHwgYnV0IG5vdCBhZnRlciB8fFxuICAgICAgdmFyIGZpbHRlck1hdGNoID0gbWF0Y2hbNV0ubWF0Y2goL15cXHMqKD86W1xcc1xcU10rPykoPzpbXlxcfF18XFx8XFx8KSsoW1xcc1xcU10qKVxccyokLyk7XG4gICAgICBpZihmaWx0ZXJNYXRjaCAmJiBmaWx0ZXJNYXRjaFsxXS50cmltKCkpIHtcbiAgICAgICAgZmlsdGVycyA9IGZpbHRlck1hdGNoWzFdO1xuICAgICAgICBzb3VyY2UgPSBzb3VyY2UucmVwbGFjZShmaWx0ZXJzLCAnJyk7XG4gICAgICB9ICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1OYW1lOiBtYXRjaFs0XSB8fCBtYXRjaFsyXSwgLy8gKGxocykgTGVmdC1oYW5kIHNpZGUsXG4gICAgICBrZXlOYW1lOiBtYXRjaFszXSwgLy9mb3IgKGtleSwgdmFsdWUpIHN5bnRheFxuICAgICAgc291cmNlOiAkcGFyc2Uoc291cmNlKSxcbiAgICAgIGZpbHRlcnM6IGZpbHRlcnMsXG4gICAgICB0cmFja0J5RXhwOiBtYXRjaFs2XSxcbiAgICAgIG1vZGVsTWFwcGVyOiAkcGFyc2UobWF0Y2hbMV0gfHwgbWF0Y2hbNF0gfHwgbWF0Y2hbMl0pLFxuICAgICAgcmVwZWF0RXhwcmVzc2lvbjogZnVuY3Rpb24gKGdyb3VwZWQpIHtcbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLml0ZW1OYW1lICsgJyBpbiAnICsgKGdyb3VwZWQgPyAnJGdyb3VwLml0ZW1zJyA6ICckc2VsZWN0Lml0ZW1zJyk7XG4gICAgICAgIGlmICh0aGlzLnRyYWNrQnlFeHApIHtcbiAgICAgICAgICBleHByZXNzaW9uICs9ICcgdHJhY2sgYnkgJyArIHRoaXMudHJhY2tCeUV4cDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXhwcmVzc2lvbjtcbiAgICAgIH0gXG4gICAgfTtcblxuICB9O1xuXG4gIHNlbGYuZ2V0R3JvdXBOZ1JlcGVhdEV4cHJlc3Npb24gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJyRncm91cCBpbiAkc2VsZWN0Lmdyb3VwcyB0cmFjayBieSAkZ3JvdXAubmFtZSc7XG4gIH07XG5cbn1dKTtcblxufSgpKTtcbmFuZ3VsYXIubW9kdWxlKFwidWkuc2VsZWN0XCIpLnJ1bihbXCIkdGVtcGxhdGVDYWNoZVwiLCBmdW5jdGlvbigkdGVtcGxhdGVDYWNoZSkgeyR0ZW1wbGF0ZUNhY2hlLnB1dChcImJvb3RzdHJhcC9jaG9pY2VzLnRwbC5odG1sXCIsXCI8dWwgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzIHVpLXNlbGVjdC1jaG9pY2VzLWNvbnRlbnQgdWktc2VsZWN0LWRyb3Bkb3duIGRyb3Bkb3duLW1lbnVcXFwiIG5nLXNob3c9XFxcIiRzZWxlY3Qub3BlbiAmJiAkc2VsZWN0Lml0ZW1zLmxlbmd0aCA+IDBcXFwiPjxsaSBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtZ3JvdXBcXFwiIGlkPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy17eyAkc2VsZWN0LmdlbmVyYXRlZElkIH19XFxcIj48ZGl2IGNsYXNzPVxcXCJkaXZpZGVyXFxcIiBuZy1zaG93PVxcXCIkc2VsZWN0LmlzR3JvdXBlZCAmJiAkaW5kZXggPiAwXFxcIj48L2Rpdj48ZGl2IG5nLXNob3c9XFxcIiRzZWxlY3QuaXNHcm91cGVkXFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtZ3JvdXAtbGFiZWwgZHJvcGRvd24taGVhZGVyXFxcIiBuZy1iaW5kPVxcXCIkZ3JvdXAubmFtZVxcXCI+PC9kaXY+PGRpdiBuZy1hdHRyLWlkPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy1yb3cte3sgJHNlbGVjdC5nZW5lcmF0ZWRJZCB9fS17eyRpbmRleH19XFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtcm93XFxcIiBuZy1jbGFzcz1cXFwie2FjdGl2ZTogJHNlbGVjdC5pc0FjdGl2ZSh0aGlzKSwgZGlzYWJsZWQ6ICRzZWxlY3QuaXNEaXNhYmxlZCh0aGlzKX1cXFwiIHJvbGU9XFxcIm9wdGlvblxcXCI+PHNwYW4gY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzLXJvdy1pbm5lclxcXCI+PC9zcGFuPjwvZGl2PjwvbGk+PC91bD5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJib290c3RyYXAvbWF0Y2gtbXVsdGlwbGUudHBsLmh0bWxcIixcIjxzcGFuIGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2hcXFwiPjxzcGFuIG5nLXJlcGVhdD1cXFwiJGl0ZW0gaW4gJHNlbGVjdC5zZWxlY3RlZCB0cmFjayBieSAkaW5kZXhcXFwiPjxzcGFuIGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2gtaXRlbSBidG4gYnRuLWRlZmF1bHQgYnRuLXhzXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIHR5cGU9XFxcImJ1dHRvblxcXCIgbmctZGlzYWJsZWQ9XFxcIiRzZWxlY3QuZGlzYWJsZWRcXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0TXVsdGlwbGUuYWN0aXZlTWF0Y2hJbmRleCA9ICRpbmRleDtcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnYnRuLXByaW1hcnlcXCc6JHNlbGVjdE11bHRpcGxlLmFjdGl2ZU1hdGNoSW5kZXggPT09ICRpbmRleCwgXFwnc2VsZWN0LWxvY2tlZFxcJzokc2VsZWN0LmlzTG9ja2VkKHRoaXMsICRpbmRleCl9XFxcIiB1aS1zZWxlY3Qtc29ydD1cXFwiJHNlbGVjdC5zZWxlY3RlZFxcXCI+PHNwYW4gY2xhc3M9XFxcImNsb3NlIHVpLXNlbGVjdC1tYXRjaC1jbG9zZVxcXCIgbmctaGlkZT1cXFwiJHNlbGVjdC5kaXNhYmxlZFxcXCIgbmctY2xpY2s9XFxcIiRzZWxlY3RNdWx0aXBsZS5yZW1vdmVDaG9pY2UoJGluZGV4KVxcXCI+Jm5ic3A7JnRpbWVzOzwvc3Bhbj4gPHNwYW4gdWlzLXRyYW5zY2x1ZGUtYXBwZW5kPVxcXCJcXFwiPjwvc3Bhbj48L3NwYW4+PC9zcGFuPjwvc3Bhbj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJib290c3RyYXAvbWF0Y2gudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaFxcXCIgbmctaGlkZT1cXFwiJHNlbGVjdC5vcGVuICYmICRzZWxlY3Quc2VhcmNoRW5hYmxlZFxcXCIgbmctZGlzYWJsZWQ9XFxcIiRzZWxlY3QuZGlzYWJsZWRcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnYnRuLWRlZmF1bHQtZm9jdXNcXCc6JHNlbGVjdC5mb2N1c31cXFwiPjxzcGFuIHRhYmluZGV4PVxcXCItMVxcXCIgY2xhc3M9XFxcImJ0biBidG4tZGVmYXVsdCBmb3JtLWNvbnRyb2wgdWktc2VsZWN0LXRvZ2dsZVxcXCIgYXJpYS1sYWJlbD1cXFwie3sgJHNlbGVjdC5iYXNlVGl0bGUgfX0gYWN0aXZhdGVcXFwiIG5nLWRpc2FibGVkPVxcXCIkc2VsZWN0LmRpc2FibGVkXFxcIiBuZy1jbGljaz1cXFwiJHNlbGVjdC5hY3RpdmF0ZSgpXFxcIiBzdHlsZT1cXFwib3V0bGluZTogMDtcXFwiPjxzcGFuIG5nLXNob3c9XFxcIiRzZWxlY3QuaXNFbXB0eSgpXFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LXBsYWNlaG9sZGVyIHRleHQtbXV0ZWRcXFwiPnt7JHNlbGVjdC5wbGFjZWhvbGRlcn19PC9zcGFuPiA8c3BhbiBuZy1oaWRlPVxcXCIkc2VsZWN0LmlzRW1wdHkoKVxcXCIgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaC10ZXh0IHB1bGwtbGVmdFxcXCIgbmctY2xhc3M9XFxcIntcXCd1aS1zZWxlY3QtYWxsb3ctY2xlYXJcXCc6ICRzZWxlY3QuYWxsb3dDbGVhciAmJiAhJHNlbGVjdC5pc0VtcHR5KCl9XFxcIiBuZy10cmFuc2NsdWRlPVxcXCJcXFwiPjwvc3Bhbj4gPGkgY2xhc3M9XFxcImNhcmV0IHB1bGwtcmlnaHRcXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0LnRvZ2dsZSgkZXZlbnQpXFxcIj48L2k+IDxhIG5nLXNob3c9XFxcIiRzZWxlY3QuYWxsb3dDbGVhciAmJiAhJHNlbGVjdC5pc0VtcHR5KCkgJiYgKCRzZWxlY3QuZGlzYWJsZWQgIT09IHRydWUpXFxcIiBhcmlhLWxhYmVsPVxcXCJ7eyAkc2VsZWN0LmJhc2VUaXRsZSB9fSBjbGVhclxcXCIgc3R5bGU9XFxcIm1hcmdpbi1yaWdodDogMTBweFxcXCIgbmctY2xpY2s9XFxcIiRzZWxlY3QuY2xlYXIoJGV2ZW50KVxcXCIgY2xhc3M9XFxcImJ0biBidG4teHMgYnRuLWxpbmsgcHVsbC1yaWdodFxcXCI+PGkgY2xhc3M9XFxcImdseXBoaWNvbiBnbHlwaGljb24tcmVtb3ZlXFxcIiBhcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCI+PC9pPjwvYT48L3NwYW4+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwiYm9vdHN0cmFwL25vLWNob2ljZS50cGwuaHRtbFwiLFwiPHVsIGNsYXNzPVxcXCJ1aS1zZWxlY3Qtbm8tY2hvaWNlIGRyb3Bkb3duLW1lbnVcXFwiIG5nLXNob3c9XFxcIiRzZWxlY3QuaXRlbXMubGVuZ3RoID09IDBcXFwiPjxsaSBuZy10cmFuc2NsdWRlPVxcXCJcXFwiPjwvbGk+PC91bD5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJib290c3RyYXAvc2VsZWN0LW11bHRpcGxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtY29udGFpbmVyIHVpLXNlbGVjdC1tdWx0aXBsZSB1aS1zZWxlY3QtYm9vdHN0cmFwIGRyb3Bkb3duIGZvcm0tY29udHJvbFxcXCIgbmctY2xhc3M9XFxcIntvcGVuOiAkc2VsZWN0Lm9wZW59XFxcIj48ZGl2PjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaFxcXCI+PC9kaXY+PGlucHV0IHR5cGU9XFxcInNlYXJjaFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIGF1dG9jb3JyZWN0PVxcXCJvZmZcXFwiIGF1dG9jYXBpdGFsaXplPVxcXCJvZmZcXFwiIHNwZWxsY2hlY2s9XFxcImZhbHNlXFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LXNlYXJjaCBpbnB1dC14c1xcXCIgcGxhY2Vob2xkZXI9XFxcInt7JHNlbGVjdE11bHRpcGxlLmdldFBsYWNlaG9sZGVyKCl9fVxcXCIgbmctZGlzYWJsZWQ9XFxcIiRzZWxlY3QuZGlzYWJsZWRcXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0LmFjdGl2YXRlKClcXFwiIG5nLW1vZGVsPVxcXCIkc2VsZWN0LnNlYXJjaFxcXCIgcm9sZT1cXFwiY29tYm9ib3hcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInt7JHNlbGVjdC5vcGVufX1cXFwiIGFyaWEtbGFiZWw9XFxcInt7JHNlbGVjdC5iYXNlVGl0bGV9fVxcXCIgbmctY2xhc3M9XFxcIntcXCdzcGlubmVyXFwnOiAkc2VsZWN0LnJlZnJlc2hpbmd9XFxcIiBvbmRyb3A9XFxcInJldHVybiBmYWxzZTtcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3Qtbm8tY2hvaWNlXFxcIj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJib290c3RyYXAvc2VsZWN0LnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtY29udGFpbmVyIHVpLXNlbGVjdC1ib290c3RyYXAgZHJvcGRvd25cXFwiIG5nLWNsYXNzPVxcXCJ7b3BlbjogJHNlbGVjdC5vcGVufVxcXCI+PGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LW1hdGNoXFxcIj48L2Rpdj48c3BhbiBuZy1zaG93PVxcXCIkc2VsZWN0Lm9wZW4gJiYgJHNlbGVjdC5yZWZyZXNoaW5nICYmICRzZWxlY3Quc3Bpbm5lckVuYWJsZWRcXFwiIGNsYXNzPVxcXCJ1aS1zZWxlY3QtcmVmcmVzaGluZyB7eyRzZWxlY3Quc3Bpbm5lckNsYXNzfX1cXFwiPjwvc3Bhbj4gPGlucHV0IHR5cGU9XFxcInNlYXJjaFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgYXJpYS1sYWJlbD1cXFwie3sgJHNlbGVjdC5iYXNlVGl0bGUgfX1cXFwiIGFyaWEtb3ducz1cXFwidWktc2VsZWN0LWNob2ljZXMte3sgJHNlbGVjdC5nZW5lcmF0ZWRJZCB9fVxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbCB1aS1zZWxlY3Qtc2VhcmNoXFxcIiBuZy1jbGFzcz1cXFwieyBcXCd1aS1zZWxlY3Qtc2VhcmNoLWhpZGRlblxcJyA6ICEkc2VsZWN0LnNlYXJjaEVuYWJsZWQgfVxcXCIgcGxhY2Vob2xkZXI9XFxcInt7JHNlbGVjdC5wbGFjZWhvbGRlcn19XFxcIiBuZy1tb2RlbD1cXFwiJHNlbGVjdC5zZWFyY2hcXFwiIG5nLXNob3c9XFxcIiRzZWxlY3Qub3BlblxcXCI+PGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXNcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1uby1jaG9pY2VcXFwiPjwvZGl2PjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInNlbGVjdDIvY2hvaWNlcy50cGwuaHRtbFwiLFwiPHVsIHRhYmluZGV4PVxcXCItMVxcXCIgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzIHVpLXNlbGVjdC1jaG9pY2VzLWNvbnRlbnQgc2VsZWN0Mi1yZXN1bHRzXFxcIj48bGkgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzLWdyb3VwXFxcIiBuZy1jbGFzcz1cXFwie1xcJ3NlbGVjdDItcmVzdWx0LXdpdGgtY2hpbGRyZW5cXCc6ICRzZWxlY3QuY2hvaWNlR3JvdXBlZCgkZ3JvdXApIH1cXFwiPjxkaXYgbmctc2hvdz1cXFwiJHNlbGVjdC5jaG9pY2VHcm91cGVkKCRncm91cClcXFwiIGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy1ncm91cC1sYWJlbCBzZWxlY3QyLXJlc3VsdC1sYWJlbFxcXCIgbmctYmluZD1cXFwiJGdyb3VwLm5hbWVcXFwiPjwvZGl2Pjx1bCBpZD1cXFwidWktc2VsZWN0LWNob2ljZXMte3sgJHNlbGVjdC5nZW5lcmF0ZWRJZCB9fVxcXCIgbmctY2xhc3M9XFxcIntcXCdzZWxlY3QyLXJlc3VsdC1zdWJcXCc6ICRzZWxlY3QuY2hvaWNlR3JvdXBlZCgkZ3JvdXApLCBcXCdzZWxlY3QyLXJlc3VsdC1zaW5nbGVcXCc6ICEkc2VsZWN0LmNob2ljZUdyb3VwZWQoJGdyb3VwKSB9XFxcIj48bGkgcm9sZT1cXFwib3B0aW9uXFxcIiBuZy1hdHRyLWlkPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy1yb3cte3sgJHNlbGVjdC5nZW5lcmF0ZWRJZCB9fS17eyRpbmRleH19XFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtcm93XFxcIiBuZy1jbGFzcz1cXFwie1xcJ3NlbGVjdDItaGlnaGxpZ2h0ZWRcXCc6ICRzZWxlY3QuaXNBY3RpdmUodGhpcyksIFxcJ3NlbGVjdDItZGlzYWJsZWRcXCc6ICRzZWxlY3QuaXNEaXNhYmxlZCh0aGlzKX1cXFwiPjxkaXYgY2xhc3M9XFxcInNlbGVjdDItcmVzdWx0LWxhYmVsIHVpLXNlbGVjdC1jaG9pY2VzLXJvdy1pbm5lclxcXCI+PC9kaXY+PC9saT48L3VsPjwvbGk+PC91bD5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzZWxlY3QyL21hdGNoLW11bHRpcGxlLnRwbC5odG1sXCIsXCI8c3BhbiBjbGFzcz1cXFwidWktc2VsZWN0LW1hdGNoXFxcIj48bGkgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaC1pdGVtIHNlbGVjdDItc2VhcmNoLWNob2ljZVxcXCIgbmctcmVwZWF0PVxcXCIkaXRlbSBpbiAkc2VsZWN0LnNlbGVjdGVkIHRyYWNrIGJ5ICRpbmRleFxcXCIgbmctY2xhc3M9XFxcIntcXCdzZWxlY3QyLXNlYXJjaC1jaG9pY2UtZm9jdXNcXCc6JHNlbGVjdE11bHRpcGxlLmFjdGl2ZU1hdGNoSW5kZXggPT09ICRpbmRleCwgXFwnc2VsZWN0Mi1sb2NrZWRcXCc6JHNlbGVjdC5pc0xvY2tlZCh0aGlzLCAkaW5kZXgpfVxcXCIgdWktc2VsZWN0LXNvcnQ9XFxcIiRzZWxlY3Quc2VsZWN0ZWRcXFwiPjxzcGFuIHVpcy10cmFuc2NsdWRlLWFwcGVuZD1cXFwiXFxcIj48L3NwYW4+IDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6O1xcXCIgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaC1jbG9zZSBzZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0TXVsdGlwbGUucmVtb3ZlQ2hvaWNlKCRpbmRleClcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+PC9hPjwvbGk+PC9zcGFuPlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInNlbGVjdDIvbWF0Y2gudHBsLmh0bWxcIixcIjxhIGNsYXNzPVxcXCJzZWxlY3QyLWNob2ljZSB1aS1zZWxlY3QtbWF0Y2hcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnc2VsZWN0Mi1kZWZhdWx0XFwnOiAkc2VsZWN0LmlzRW1wdHkoKX1cXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0LnRvZ2dsZSgkZXZlbnQpXFxcIiBhcmlhLWxhYmVsPVxcXCJ7eyAkc2VsZWN0LmJhc2VUaXRsZSB9fSBzZWxlY3RcXFwiPjxzcGFuIG5nLXNob3c9XFxcIiRzZWxlY3QuaXNFbXB0eSgpXFxcIiBjbGFzcz1cXFwic2VsZWN0Mi1jaG9zZW5cXFwiPnt7JHNlbGVjdC5wbGFjZWhvbGRlcn19PC9zcGFuPiA8c3BhbiBuZy1oaWRlPVxcXCIkc2VsZWN0LmlzRW1wdHkoKVxcXCIgY2xhc3M9XFxcInNlbGVjdDItY2hvc2VuXFxcIiBuZy10cmFuc2NsdWRlPVxcXCJcXFwiPjwvc3Bhbj4gPGFiYnIgbmctaWY9XFxcIiRzZWxlY3QuYWxsb3dDbGVhciAmJiAhJHNlbGVjdC5pc0VtcHR5KClcXFwiIGNsYXNzPVxcXCJzZWxlY3QyLXNlYXJjaC1jaG9pY2UtY2xvc2VcXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0LmNsZWFyKCRldmVudClcXFwiPjwvYWJicj4gPHNwYW4gY2xhc3M9XFxcInNlbGVjdDItYXJyb3cgdWktc2VsZWN0LXRvZ2dsZVxcXCI+PGI+PC9iPjwvc3Bhbj48L2E+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic2VsZWN0Mi9uby1jaG9pY2UudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1uby1jaG9pY2UgZHJvcGRvd25cXFwiIG5nLXNob3c9XFxcIiRzZWxlY3QuaXRlbXMubGVuZ3RoID09IDBcXFwiPjxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnRcXFwiPjxkaXYgZGF0YS1zZWxlY3RhYmxlPVxcXCJcXFwiIG5nLXRyYW5zY2x1ZGU9XFxcIlxcXCI+PC9kaXY+PC9kaXY+PC9kaXY+XCIpO1xuJHRlbXBsYXRlQ2FjaGUucHV0KFwic2VsZWN0Mi9zZWxlY3QtbXVsdGlwbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1jb250YWluZXIgdWktc2VsZWN0LW11bHRpcGxlIHNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXIgc2VsZWN0Mi1jb250YWluZXItbXVsdGlcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnc2VsZWN0Mi1jb250YWluZXItYWN0aXZlIHNlbGVjdDItZHJvcGRvd24tb3BlbiBvcGVuXFwnOiAkc2VsZWN0Lm9wZW4sIFxcJ3NlbGVjdDItY29udGFpbmVyLWRpc2FibGVkXFwnOiAkc2VsZWN0LmRpc2FibGVkfVxcXCI+PHVsIGNsYXNzPVxcXCJzZWxlY3QyLWNob2ljZXNcXFwiPjxzcGFuIGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2hcXFwiPjwvc3Bhbj48bGkgY2xhc3M9XFxcInNlbGVjdDItc2VhcmNoLWZpZWxkXFxcIj48aW5wdXQgdHlwZT1cXFwic2VhcmNoXFxcIiBhdXRvY29tcGxldGU9XFxcIm9mZlxcXCIgYXV0b2NvcnJlY3Q9XFxcIm9mZlxcXCIgYXV0b2NhcGl0YWxpemU9XFxcIm9mZlxcXCIgc3BlbGxjaGVjaz1cXFwiZmFsc2VcXFwiIHJvbGU9XFxcImNvbWJvYm94XFxcIiBhcmlhLWV4cGFuZGVkPVxcXCJ0cnVlXFxcIiBhcmlhLW93bnM9XFxcInVpLXNlbGVjdC1jaG9pY2VzLXt7ICRzZWxlY3QuZ2VuZXJhdGVkSWQgfX1cXFwiIGFyaWEtbGFiZWw9XFxcInt7ICRzZWxlY3QuYmFzZVRpdGxlIH19XFxcIiBhcmlhLWFjdGl2ZWRlc2NlbmRhbnQ9XFxcInVpLXNlbGVjdC1jaG9pY2VzLXJvdy17eyAkc2VsZWN0LmdlbmVyYXRlZElkIH19LXt7ICRzZWxlY3QuYWN0aXZlSW5kZXggfX1cXFwiIGNsYXNzPVxcXCJzZWxlY3QyLWlucHV0IHVpLXNlbGVjdC1zZWFyY2hcXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eyRzZWxlY3RNdWx0aXBsZS5nZXRQbGFjZWhvbGRlcigpfX1cXFwiIG5nLWRpc2FibGVkPVxcXCIkc2VsZWN0LmRpc2FibGVkXFxcIiBuZy1oaWRlPVxcXCIkc2VsZWN0LmRpc2FibGVkXFxcIiBuZy1tb2RlbD1cXFwiJHNlbGVjdC5zZWFyY2hcXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0LmFjdGl2YXRlKClcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMzRweDtcXFwiIG9uZHJvcD1cXFwicmV0dXJuIGZhbHNlO1xcXCI+PC9saT48L3VsPjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1kcm9wZG93biBzZWxlY3QyLWRyb3Agc2VsZWN0Mi13aXRoLXNlYXJjaGJveCBzZWxlY3QyLWRyb3AtYWN0aXZlXFxcIiBuZy1jbGFzcz1cXFwie1xcJ3NlbGVjdDItZGlzcGxheS1ub25lXFwnOiAhJHNlbGVjdC5vcGVuIHx8ICRzZWxlY3QuaXRlbXMubGVuZ3RoID09PSAwfVxcXCI+PGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXNcXFwiPjwvZGl2PjwvZGl2PjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInNlbGVjdDIvc2VsZWN0LnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtY29udGFpbmVyIHNlbGVjdDIgc2VsZWN0Mi1jb250YWluZXJcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnc2VsZWN0Mi1jb250YWluZXItYWN0aXZlIHNlbGVjdDItZHJvcGRvd24tb3BlbiBvcGVuXFwnOiAkc2VsZWN0Lm9wZW4sIFxcJ3NlbGVjdDItY29udGFpbmVyLWRpc2FibGVkXFwnOiAkc2VsZWN0LmRpc2FibGVkLCBcXCdzZWxlY3QyLWNvbnRhaW5lci1hY3RpdmVcXCc6ICRzZWxlY3QuZm9jdXMsIFxcJ3NlbGVjdDItYWxsb3djbGVhclxcJzogJHNlbGVjdC5hbGxvd0NsZWFyICYmICEkc2VsZWN0LmlzRW1wdHkoKX1cXFwiPjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaFxcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LWRyb3Bkb3duIHNlbGVjdDItZHJvcCBzZWxlY3QyLXdpdGgtc2VhcmNoYm94IHNlbGVjdDItZHJvcC1hY3RpdmVcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnc2VsZWN0Mi1kaXNwbGF5LW5vbmVcXCc6ICEkc2VsZWN0Lm9wZW59XFxcIj48ZGl2IGNsYXNzPVxcXCJzZWFyY2gtY29udGFpbmVyXFxcIiBuZy1jbGFzcz1cXFwie1xcJ3VpLXNlbGVjdC1zZWFyY2gtaGlkZGVuXFwnOiEkc2VsZWN0LnNlYXJjaEVuYWJsZWQsIFxcJ3NlbGVjdDItc2VhcmNoXFwnOiRzZWxlY3Quc2VhcmNoRW5hYmxlZH1cXFwiPjxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiBhdXRvY29ycmVjdD1cXFwib2ZmXFxcIiBhdXRvY2FwaXRhbGl6ZT1cXFwib2ZmXFxcIiBzcGVsbGNoZWNrPVxcXCJmYWxzZVxcXCIgbmctY2xhc3M9XFxcIntcXCdzZWxlY3QyLWFjdGl2ZVxcJzogJHNlbGVjdC5yZWZyZXNoaW5nfVxcXCIgcm9sZT1cXFwiY29tYm9ib3hcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIGFyaWEtb3ducz1cXFwidWktc2VsZWN0LWNob2ljZXMte3sgJHNlbGVjdC5nZW5lcmF0ZWRJZCB9fVxcXCIgYXJpYS1sYWJlbD1cXFwie3sgJHNlbGVjdC5iYXNlVGl0bGUgfX1cXFwiIGNsYXNzPVxcXCJ1aS1zZWxlY3Qtc2VhcmNoIHNlbGVjdDItaW5wdXRcXFwiIG5nLW1vZGVsPVxcXCIkc2VsZWN0LnNlYXJjaFxcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXNcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1uby1jaG9pY2VcXFwiPjwvZGl2PjwvZGl2PjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInNlbGVjdGl6ZS9jaG9pY2VzLnRwbC5odG1sXCIsXCI8ZGl2IG5nLXNob3c9XFxcIiRzZWxlY3Qub3BlblxcXCIgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzIHVpLXNlbGVjdC1kcm9wZG93biBzZWxlY3RpemUtZHJvcGRvd25cXFwiIG5nLWNsYXNzPVxcXCJ7XFwnc2luZ2xlXFwnOiAhJHNlbGVjdC5tdWx0aXBsZSwgXFwnbXVsdGlcXCc6ICRzZWxlY3QubXVsdGlwbGV9XFxcIj48ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy1jb250ZW50IHNlbGVjdGl6ZS1kcm9wZG93bi1jb250ZW50XFxcIj48ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtY2hvaWNlcy1ncm91cCBvcHRncm91cFxcXCI+PGRpdiBuZy1zaG93PVxcXCIkc2VsZWN0LmlzR3JvdXBlZFxcXCIgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzLWdyb3VwLWxhYmVsIG9wdGdyb3VwLWhlYWRlclxcXCIgbmctYmluZD1cXFwiJGdyb3VwLm5hbWVcXFwiPjwvZGl2PjxkaXYgcm9sZT1cXFwib3B0aW9uXFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXMtcm93XFxcIiBuZy1jbGFzcz1cXFwie2FjdGl2ZTogJHNlbGVjdC5pc0FjdGl2ZSh0aGlzKSwgZGlzYWJsZWQ6ICRzZWxlY3QuaXNEaXNhYmxlZCh0aGlzKX1cXFwiPjxkaXYgY2xhc3M9XFxcIm9wdGlvbiB1aS1zZWxlY3QtY2hvaWNlcy1yb3ctaW5uZXJcXFwiIGRhdGEtc2VsZWN0YWJsZT1cXFwiXFxcIj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzZWxlY3RpemUvbWF0Y2gtbXVsdGlwbGUudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaFxcXCIgZGF0YS12YWx1ZT1cXFwiXFxcIiBuZy1yZXBlYXQ9XFxcIiRpdGVtIGluICRzZWxlY3Quc2VsZWN0ZWQgdHJhY2sgYnkgJGluZGV4XFxcIiBuZy1jbGljaz1cXFwiJHNlbGVjdE11bHRpcGxlLmFjdGl2ZU1hdGNoSW5kZXggPSAkaW5kZXg7XFxcIiBuZy1jbGFzcz1cXFwie1xcJ2FjdGl2ZVxcJzokc2VsZWN0TXVsdGlwbGUuYWN0aXZlTWF0Y2hJbmRleCA9PT0gJGluZGV4fVxcXCIgdWktc2VsZWN0LXNvcnQ9XFxcIiRzZWxlY3Quc2VsZWN0ZWRcXFwiPjxzcGFuIGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2gtaXRlbVxcXCIgbmctY2xhc3M9XFxcIntcXCdzZWxlY3QtbG9ja2VkXFwnOiRzZWxlY3QuaXNMb2NrZWQodGhpcywgJGluZGV4KX1cXFwiPjxzcGFuIHVpcy10cmFuc2NsdWRlLWFwcGVuZD1cXFwiXFxcIj48L3NwYW4+IDxzcGFuIGNsYXNzPVxcXCJyZW1vdmUgdWktc2VsZWN0LW1hdGNoLWNsb3NlXFxcIiBuZy1oaWRlPVxcXCIkc2VsZWN0LmRpc2FibGVkXFxcIiBuZy1jbGljaz1cXFwiJHNlbGVjdE11bHRpcGxlLnJlbW92ZUNob2ljZSgkaW5kZXgpXFxcIj4mdGltZXM7PC9zcGFuPjwvc3Bhbj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzZWxlY3RpemUvbWF0Y2gudHBsLmh0bWxcIixcIjxkaXYgbmctaGlkZT1cXFwiJHNlbGVjdC5zZWFyY2hFbmFibGVkICYmICgkc2VsZWN0Lm9wZW4gfHwgJHNlbGVjdC5pc0VtcHR5KCkpXFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LW1hdGNoXFxcIj48c3BhbiBuZy1zaG93PVxcXCIhJHNlbGVjdC5zZWFyY2hFbmFibGVkICYmICgkc2VsZWN0LmlzRW1wdHkoKSB8fCAkc2VsZWN0Lm9wZW4pXFxcIiBjbGFzcz1cXFwidWktc2VsZWN0LXBsYWNlaG9sZGVyIHRleHQtbXV0ZWRcXFwiPnt7JHNlbGVjdC5wbGFjZWhvbGRlcn19PC9zcGFuPiA8c3BhbiBuZy1oaWRlPVxcXCIkc2VsZWN0LmlzRW1wdHkoKSB8fCAkc2VsZWN0Lm9wZW5cXFwiIG5nLXRyYW5zY2x1ZGU9XFxcIlxcXCI+PC9zcGFuPjwvZGl2PlwiKTtcbiR0ZW1wbGF0ZUNhY2hlLnB1dChcInNlbGVjdGl6ZS9uby1jaG9pY2UudHBsLmh0bWxcIixcIjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1uby1jaG9pY2Ugc2VsZWN0aXplLWRyb3Bkb3duXFxcIiBuZy1zaG93PVxcXCIkc2VsZWN0Lml0ZW1zLmxlbmd0aCA9PSAwXFxcIj48ZGl2IGNsYXNzPVxcXCJzZWxlY3RpemUtZHJvcGRvd24tY29udGVudFxcXCI+PGRpdiBkYXRhLXNlbGVjdGFibGU9XFxcIlxcXCIgbmctdHJhbnNjbHVkZT1cXFwiXFxcIj48L2Rpdj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzZWxlY3RpemUvc2VsZWN0LW11bHRpcGxlLnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtY29udGFpbmVyIHNlbGVjdGl6ZS1jb250cm9sIG11bHRpIHBsdWdpbi1yZW1vdmVfYnV0dG9uXFxcIiBuZy1jbGFzcz1cXFwie1xcJ29wZW5cXCc6ICRzZWxlY3Qub3Blbn1cXFwiPjxkaXYgY2xhc3M9XFxcInNlbGVjdGl6ZS1pbnB1dFxcXCIgbmctY2xhc3M9XFxcIntcXCdmb2N1c1xcJzogJHNlbGVjdC5vcGVuLCBcXCdkaXNhYmxlZFxcJzogJHNlbGVjdC5kaXNhYmxlZCwgXFwnc2VsZWN0aXplLWZvY3VzXFwnIDogJHNlbGVjdC5mb2N1c31cXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0Lm9wZW4gJiYgISRzZWxlY3Quc2VhcmNoRW5hYmxlZCA/ICRzZWxlY3QudG9nZ2xlKCRldmVudCkgOiAkc2VsZWN0LmFjdGl2YXRlKClcXFwiPjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1tYXRjaFxcXCI+PC9kaXY+PGlucHV0IHR5cGU9XFxcInNlYXJjaFxcXCIgYXV0b2NvbXBsZXRlPVxcXCJvZmZcXFwiIHRhYmluZGV4PVxcXCItMVxcXCIgY2xhc3M9XFxcInVpLXNlbGVjdC1zZWFyY2hcXFwiIG5nLWNsYXNzPVxcXCJ7XFwndWktc2VsZWN0LXNlYXJjaC1oaWRkZW5cXCc6ISRzZWxlY3Quc2VhcmNoRW5hYmxlZH1cXFwiIHBsYWNlaG9sZGVyPVxcXCJ7eyRzZWxlY3RNdWx0aXBsZS5nZXRQbGFjZWhvbGRlcigpfX1cXFwiIG5nLW1vZGVsPVxcXCIkc2VsZWN0LnNlYXJjaFxcXCIgbmctZGlzYWJsZWQ9XFxcIiRzZWxlY3QuZGlzYWJsZWRcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInt7JHNlbGVjdC5vcGVufX1cXFwiIGFyaWEtbGFiZWw9XFxcInt7ICRzZWxlY3QuYmFzZVRpdGxlIH19XFxcIiBvbmRyb3A9XFxcInJldHVybiBmYWxzZTtcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1jaG9pY2VzXFxcIj48L2Rpdj48ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3Qtbm8tY2hvaWNlXFxcIj48L2Rpdj48L2Rpdj5cIik7XG4kdGVtcGxhdGVDYWNoZS5wdXQoXCJzZWxlY3RpemUvc2VsZWN0LnRwbC5odG1sXCIsXCI8ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtY29udGFpbmVyIHNlbGVjdGl6ZS1jb250cm9sIHNpbmdsZVxcXCIgbmctY2xhc3M9XFxcIntcXCdvcGVuXFwnOiAkc2VsZWN0Lm9wZW59XFxcIj48ZGl2IGNsYXNzPVxcXCJzZWxlY3RpemUtaW5wdXRcXFwiIG5nLWNsYXNzPVxcXCJ7XFwnZm9jdXNcXCc6ICRzZWxlY3Qub3BlbiwgXFwnZGlzYWJsZWRcXCc6ICRzZWxlY3QuZGlzYWJsZWQsIFxcJ3NlbGVjdGl6ZS1mb2N1c1xcJyA6ICRzZWxlY3QuZm9jdXN9XFxcIiBuZy1jbGljaz1cXFwiJHNlbGVjdC5vcGVuICYmICEkc2VsZWN0LnNlYXJjaEVuYWJsZWQgPyAkc2VsZWN0LnRvZ2dsZSgkZXZlbnQpIDogJHNlbGVjdC5hY3RpdmF0ZSgpXFxcIj48ZGl2IGNsYXNzPVxcXCJ1aS1zZWxlY3QtbWF0Y2hcXFwiPjwvZGl2PjxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIiB0YWJpbmRleD1cXFwiLTFcXFwiIGNsYXNzPVxcXCJ1aS1zZWxlY3Qtc2VhcmNoIHVpLXNlbGVjdC10b2dnbGVcXFwiIG5nLWNsYXNzPVxcXCJ7XFwndWktc2VsZWN0LXNlYXJjaC1oaWRkZW5cXCc6ISRzZWxlY3Quc2VhcmNoRW5hYmxlZH1cXFwiIG5nLWNsaWNrPVxcXCIkc2VsZWN0LnRvZ2dsZSgkZXZlbnQpXFxcIiBwbGFjZWhvbGRlcj1cXFwie3skc2VsZWN0LnBsYWNlaG9sZGVyfX1cXFwiIG5nLW1vZGVsPVxcXCIkc2VsZWN0LnNlYXJjaFxcXCIgbmctaGlkZT1cXFwiISRzZWxlY3QuaXNFbXB0eSgpICYmICEkc2VsZWN0Lm9wZW5cXFwiIG5nLWRpc2FibGVkPVxcXCIkc2VsZWN0LmRpc2FibGVkXFxcIiBhcmlhLWxhYmVsPVxcXCJ7eyAkc2VsZWN0LmJhc2VUaXRsZSB9fVxcXCI+PC9kaXY+PGRpdiBjbGFzcz1cXFwidWktc2VsZWN0LWNob2ljZXNcXFwiPjwvZGl2PjxkaXYgY2xhc3M9XFxcInVpLXNlbGVjdC1uby1jaG9pY2VcXFwiPjwvZGl2PjwvZGl2PlwiKTt9XSk7IiwicmVxdWlyZSgnLi9kaXN0L3NlbGVjdC5qcycpO1xubW9kdWxlLmV4cG9ydHMgPSAndWkuc2VsZWN0JztcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpIHx8ICgxLCBldmFsKShcInRoaXNcIik7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgZmlsdGVyIGZyb20gJ2xvZGFzaC9maWx0ZXInO1xyXG5pbXBvcnQgJ3VpLXNlbGVjdCc7XHJcblxyXG5hbmd1bGFyLm1vZHVsZSgnVGVzdEFwcCcsIFsnYW5ndWxhci12aXJ0dWFsLXNlbGVjdCcsICd1aS5zZWxlY3QnXSlcclxuXHQuY29udHJvbGxlcignVGVzdEFwcENvbnRyb2xsZXInLCBmdW5jdGlvbigkc2NvcGUpIHtcclxuXHRcdHRoaXMubGlzdExlbmd0aCA9IDUwMDA7XHJcblxyXG5cdFx0dGhpcy5jb21wb3NlTGlzdCA9IGZ1bmN0aW9uKHNpemUpIHtcclxuXHRcdFx0c2l6ZSA9IHNpemUgfHwgdGhpcy5saXN0TGVuZ3RoO1xyXG5cclxuXHRcdFx0dGhpcy5saXN0ID0gW107XHJcblxyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdExlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IG9iaiA9IHtcclxuXHRcdFx0XHRcdGxhYmVsOiAnVXNlcl8jJyArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSp0aGlzLmxpc3RMZW5ndGgqMTApLFxyXG5cdFx0XHRcdFx0bmFtZTogJ0pvaG4nICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKnRoaXMubGlzdExlbmd0aCoxMCksXHJcblx0XHRcdFx0XHRhZ2U6IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSoxMDApXHJcblx0XHRcdFx0fTtcclxuXHJcblx0XHRcdFx0dGhpcy5saXN0LnB1c2gob2JqKTtcclxuXHRcdFx0fTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmFjdGl2YXRlID0gZnVuY3Rpb24ocGFyKSB7XHJcblx0XHRcdCRzY29wZS4kYnJvYWRjYXN0KCd2aXJ0dWFsU2Nyb2xsQWN0aXZhdGUnLCBwYXIpO1xyXG5cdFx0fTtcclxuXHJcblx0XHR0aGlzLmNoYW5nZUFycmF5U2l6ZSA9IGZ1bmN0aW9uKHNpemUpIHtcclxuXHRcdFx0dGhpcy5saXN0TGVuZ3RoID0gc2l6ZTtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZCA9IG51bGw7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWQyID0gbnVsbDtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZDMgPSBudWxsO1xyXG5cclxuXHRcdFx0dGhpcy5jb21wb3NlTGlzdChzaXplKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy50cnVzdEFzSHRtbCA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRcdHJldHVybiAkc2NlLnRydXN0QXNIdG1sKHZhbHVlKTtcclxuXHRcdH07XHJcblxyXG5cdFx0dGhpcy5jb21wb3NlTGlzdCgpO1xyXG5cdH0pXHJcblx0LmZpbHRlcignYnlBZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbihpdGVtcywgbGltaXQpIHtcclxuXHRcdFx0bGV0IGZpbHRlcmVkID0gZmlsdGVyKGl0ZW1zLCBmdW5jdGlvbihpdGVtKSB7XHJcblx0XHRcdFx0cmV0dXJuIGl0ZW0uYWdlIDw9IGxpbWl0O1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGZpbHRlcmVkO1xyXG5cdFx0fVxyXG5cdH0pXHJcblx0LmZpbHRlcigncHJvcHNGaWx0ZXInLCBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiBmdW5jdGlvbihpdGVtcywgcHJvcHMpIHtcclxuXHRcdFx0dmFyIG91dCA9IFtdO1xyXG5cdFx0XHRpZiAoYW5ndWxhci5pc0FycmF5KGl0ZW1zKSkge1xyXG5cdFx0XHRcdGl0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG5cdFx0XHRcdFx0dmFyIGl0ZW1NYXRjaGVzID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdFx0dmFyIGtleXMgPSBPYmplY3Qua2V5cyhwcm9wcyk7XHJcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dmFyIHByb3AgPSBrZXlzW2ldO1xyXG5cdFx0XHRcdFx0XHR2YXIgdGV4dCA9IHByb3BzW3Byb3BdLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRcdFx0XHRcdGlmIChpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHRleHQpICE9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdGl0ZW1NYXRjaGVzID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdGlmIChpdGVtTWF0Y2hlcykge1xyXG5cdFx0XHRcdFx0XHRvdXQucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBMZXQgdGhlIG91dHB1dCBiZSB0aGUgaW5wdXQgdW50b3VjaGVkXHJcblx0XHRcdFx0b3V0ID0gaXRlbXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBvdXQ7XHJcblx0XHR9XHJcblx0fSk7Il0sInNvdXJjZVJvb3QiOiIifQ==