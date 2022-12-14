/*!
 * Copyright 2017 Amazon.com,
 * Inc. or its affiliates. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the
 * License. A copy of the License is located at
 * 
 *      http://aws.amazon.com/apache2.0/
 * 
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, express or implied. See the License
 * for the specific language governing permissions and
 * limitations under the License. 
 */


(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("aws-sdk/global"), require("aws-sdk/clients/cognitoidentityserviceprovider"));
	else if(typeof define === 'function' && define.amd)
		define(["aws-sdk/global", "aws-sdk/clients/cognitoidentityserviceprovider"], factory);
	else if(typeof exports === 'object')
		exports["AmazonCognitoIdentity"] = factory(require("aws-sdk/global"), require("aws-sdk/clients/cognitoidentityserviceprovider"));
	else
		root["AmazonCognitoIdentity"] = factory(root["AWSCognito"], root["AWSCognito"]["CognitoIdentityServiceProvider"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_11__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _src = __webpack_require__(10);

	Object.keys(_src).forEach(function (key) {
	  if (key === "default" || key === "__esModule") return;
	  Object.defineProperty(exports, key, {
	    enumerable: true,
	    get: function get() {
	      return _src[key];
	    }
	  });
	});

	var _cognitoidentityserviceprovider = __webpack_require__(11);

	var _cognitoidentityserviceprovider2 = _interopRequireDefault(_cognitoidentityserviceprovider);

	var enhancements = _interopRequireWildcard(_src);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	Object.keys(enhancements).forEach(function (key) {
	  _cognitoidentityserviceprovider2.default[key] = enhancements[key];
	});

	// The version of crypto-browserify included by aws-sdk only
	// checks for window.crypto, not window.msCrypto as used by
	// IE 11 ??? so we set it explicitly here
	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	if (typeof window !== 'undefined' && !window.crypto && window.msCrypto) {
	  window.crypto = window.msCrypto;
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _global = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*!
	                                                                                                                                                           * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                           * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	                                                                                                                                                          
	                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                           * You may not use this file except in compliance with the License.
	                                                                                                                                                           * A copy of the License is located at
	                                                                                                                                                           *
	                                                                                                                                                           *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                           *
	                                                                                                                                                           * or in the "license" file accompanying this file.
	                                                                                                                                                           * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                           * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                           * License for the specific language governing permissions
	                                                                                                                                                           * and limitations under the License.
	                                                                                                                                                           */

	/** @class */
	var CognitoAccessToken = function () {
	  /**
	   * Constructs a new CognitoAccessToken object
	   * @param {string=} AccessToken The JWT access token.
	   */
	  function CognitoAccessToken(AccessToken) {
	    _classCallCheck(this, CognitoAccessToken);

	    // Assign object
	    this.jwtToken = AccessToken || '';
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  CognitoAccessToken.prototype.getJwtToken = function getJwtToken() {
	    return this.jwtToken;
	  };

	  /**
	   * Sets new value for access token.
	   * @param {string=} accessToken The JWT access token.
	   * @returns {void}
	   */


	  CognitoAccessToken.prototype.setJwtToken = function setJwtToken(accessToken) {
	    this.jwtToken = accessToken;
	  };

	  /**
	   * @returns {int} the token's expiration (exp member).
	   */


	  CognitoAccessToken.prototype.getExpiration = function getExpiration() {
	    var payload = this.jwtToken.split('.')[1];
	    var expiration = JSON.parse(_global.util.base64.decode(payload).toString('utf8'));
	    return expiration.exp;
	  };

	  /**
	   * @returns {string} the username from payload.
	   */


	  CognitoAccessToken.prototype.getUsername = function getUsername() {
	    if (this.jwtToken === null) {
	      return undefined;
	    }
	    var payload = this.jwtToken.split('.')[1];
	    var usernameSource = JSON.parse(_global.util.base64.decode(payload).toString('utf8'));
	    return usernameSource.username;
	  };

	  return CognitoAccessToken;
	}();

	exports.default = CognitoAccessToken;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _global = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*!
	                                                                                                                                                           * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                           * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	                                                                                                                                                          
	                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                           * You may not use this file except in compliance with the License.
	                                                                                                                                                           * A copy of the License is located at
	                                                                                                                                                           *
	                                                                                                                                                           *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                           *
	                                                                                                                                                           * or in the "license" file accompanying this file.
	                                                                                                                                                           * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                           * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                           * License for the specific language governing permissions
	                                                                                                                                                           * and limitations under the License.
	                                                                                                                                                           */

	/** @class */
	var CognitoIdToken = function () {
	  /**
	   * Constructs a new CognitoIdToken object
	   * @param {string=} IdToken The JWT Id token
	   */
	  function CognitoIdToken(IdToken) {
	    _classCallCheck(this, CognitoIdToken);

	    // Assign object
	    this.jwtToken = IdToken || '';
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  CognitoIdToken.prototype.getJwtToken = function getJwtToken() {
	    return this.jwtToken;
	  };

	  /**
	   * Sets new value for id token.
	   * @param {string=} idToken The JWT Id token
	   * @returns {void}
	   */


	  CognitoIdToken.prototype.setJwtToken = function setJwtToken(idToken) {
	    this.jwtToken = idToken;
	  };

	  /**
	   * @returns {int} the token's expiration (exp member).
	   */


	  CognitoIdToken.prototype.getExpiration = function getExpiration() {
	    var payload = this.jwtToken.split('.')[1];
	    var expiration = JSON.parse(_global.util.base64.decode(payload).toString('utf8'));
	    return expiration.exp;
	  };

	  return CognitoIdToken;
	}();

	exports.default = CognitoIdToken;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	/** @class */
	var CognitoRefreshToken = function () {
	  /**
	   * Constructs a new CognitoRefreshToken object
	   * @param {string=} RefreshToken The JWT refresh token.
	   */
	  function CognitoRefreshToken(RefreshToken) {
	    _classCallCheck(this, CognitoRefreshToken);

	    // Assign object
	    this.refreshToken = RefreshToken || '';
	  }

	  /**
	   * @returns {string} the record's token.
	   */


	  CognitoRefreshToken.prototype.getToken = function getToken() {
	    return this.refreshToken;
	  };

	  /**
	   * Sets new value for refresh token.
	   * @param {string=} refreshToken The JWT refresh token.
	   * @returns {void}
	   */


	  CognitoRefreshToken.prototype.setToken = function setToken(refreshToken) {
	    this.refreshToken = refreshToken;
	  };

	  return CognitoRefreshToken;
	}();

	exports.default = CognitoRefreshToken;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */

	/** @class */
	var CognitoTokenScopes = function () {
	  /**
	   * Constructs a new CognitoTokenScopes object
	   * @param {array=} TokenScopesArray The token scopes
	   */
	  function CognitoTokenScopes(TokenScopesArray) {
	    _classCallCheck(this, CognitoTokenScopes);

	    // Assign object
	    this.tokenScopes = TokenScopesArray || [];
	  }

	  /**
	   * @returns {Array} the token scopes.
	   */


	  CognitoTokenScopes.prototype.getScopes = function getScopes() {
	    return this.tokenScopes;
	  };

	  /**
	   * Sets new value for token scopes.
	   * @param {array=} tokenScopes The token scopes
	   * @returns {void}
	   */


	  CognitoTokenScopes.prototype.setTokenScopes = function setTokenScopes(tokenScopes) {
	    this.tokenScopes = tokenScopes;
	  };

	  return CognitoTokenScopes;
	}();

	exports.default = CognitoTokenScopes;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _CognitoTokenScopes = __webpack_require__(4);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(1);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(2);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(3);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*!
	                                                                                                                                                           * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                           * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	                                                                                                                                                          
	                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                           * You may not use this file except in compliance with the License.
	                                                                                                                                                           * A copy of the License is located at
	                                                                                                                                                           *
	                                                                                                                                                           *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                           *
	                                                                                                                                                           * or in the "license" file accompanying this file.
	                                                                                                                                                           * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                           * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                           * License for the specific language governing permissions
	                                                                                                                                                           * and limitations under the License.
	                                                                                                                                                           */

	/** @class */
	var CognitoAuthSession = function () {
	  /**
	   * Constructs a new CognitoUserSession object
	   * @param {CognitoIdToken} IdToken The session's Id token.
	   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	   * @param {CognitoAccessToken} AccessToken The session's access token.
	   * @param {array}  TokenScopes  The session's token scopes.
	   */
	  function CognitoAuthSession() {
	    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	        IdToken = _ref.IdToken,
	        RefreshToken = _ref.RefreshToken,
	        AccessToken = _ref.AccessToken,
	        TokenScopes = _ref.TokenScopes;

	    _classCallCheck(this, CognitoAuthSession);

	    if (IdToken) {
	      this.idToken = IdToken;
	    } else {
	      this.idToken = new _CognitoIdToken2.default();
	    }
	    if (RefreshToken) {
	      this.refreshToken = RefreshToken;
	    } else {
	      this.refreshToken = new _CognitoRefreshToken2.default();
	    }
	    if (AccessToken) {
	      this.accessToken = AccessToken;
	    } else {
	      this.accessToken = new _CognitoAccessToken2.default();
	    }
	    if (TokenScopes) {
	      this.tokenScopes = TokenScopes;
	    } else {
	      this.tokenScopes = new _CognitoTokenScopes2.default();
	    }
	  }

	  /**
	   * @returns {CognitoIdToken} the session's Id token
	   */


	  CognitoAuthSession.prototype.getIdToken = function getIdToken() {
	    return this.idToken;
	  };

	  /**
	   * Set a new Id token
	   * @param {CognitoIdToken} IdToken The session's Id token.
	   * @returns {void}
	   */


	  CognitoAuthSession.prototype.setIdToken = function setIdToken(IdToken) {
	    this.idToken = IdToken;
	  };

	  /**
	   * @returns {CognitoRefreshToken} the session's refresh token
	   */


	  CognitoAuthSession.prototype.getRefreshToken = function getRefreshToken() {
	    return this.refreshToken;
	  };

	  /**
	   * Set a new Refresh token
	   * @param {CognitoRefreshToken} RefreshToken The session's refresh token.
	   * @returns {void}
	   */


	  CognitoAuthSession.prototype.setRefreshToken = function setRefreshToken(RefreshToken) {
	    this.refreshToken = RefreshToken;
	  };

	  /**
	   * @returns {CognitoAccessToken} the session's access token
	   */


	  CognitoAuthSession.prototype.getAccessToken = function getAccessToken() {
	    return this.accessToken;
	  };

	  /**
	   * Set a new Access token
	   * @param {CognitoAccessToken} AccessToken The session's access token.
	   * @returns {void}
	   */


	  CognitoAuthSession.prototype.setAccessToken = function setAccessToken(AccessToken) {
	    this.accessToken = AccessToken;
	  };

	  /**
	   * @returns {CognitoTokenScopes} the session's token scopes
	   */


	  CognitoAuthSession.prototype.getTokenScopes = function getTokenScopes() {
	    return this.tokenScopes;
	  };

	  /**
	   * Set new token scopes
	   * @param {array}  tokenScopes  The session's token scopes.
	   * @returns {void}
	   */


	  CognitoAuthSession.prototype.setTokenScopes = function setTokenScopes(tokenScopes) {
	    this.tokenScopes = tokenScopes;
	  };

	  /**
	   * Checks to see if the session is still valid based on session expiry information found
	   * in Access and Id Tokens and the current time
	   * @returns {boolean} if the session is still valid
	   */


	  CognitoAuthSession.prototype.isValid = function isValid() {
	    var now = Math.floor(new Date() / 1000);
	    try {
	      if (this.accessToken != null) {
	        return now < this.accessToken.getExpiration();
	      }
	      if (this.idToken != null) {
	        return now < this.idToken.getExpiration();
	      }
	      return false;
	    } catch (e) {
	      return false;
	    }
	  };

	  return CognitoAuthSession;
	}();

	exports.default = CognitoAuthSession;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */
	var dataMemory = {};

	/** @class */

	var MemoryStorage = function () {
	  function MemoryStorage() {
	    _classCallCheck(this, MemoryStorage);
	  }

	  /**
	   * This is used to set a specific item in storage
	   * @param {string} key - the key for the item
	   * @param {object} value - the value
	   * @returns {string} value that was set
	   */
	  MemoryStorage.setItem = function setItem(key, value) {
	    dataMemory[key] = value;
	    return dataMemory[key];
	  };

	  /**
	   * This is used to get a specific key from storage
	   * @param {string} key - the key for the item
	   * This is used to clear the storage
	   * @returns {string} the data item
	   */


	  MemoryStorage.getItem = function getItem(key) {
	    return Object.prototype.hasOwnProperty.call(dataMemory, key) ? dataMemory[key] : undefined;
	  };

	  /**
	   * This is used to remove an item from storage
	   * @param {string} key - the key being set
	   * @returns {string} value - value that was deleted
	   */


	  MemoryStorage.removeItem = function removeItem(key) {
	    return delete dataMemory[key];
	  };

	  /**
	   * This is used to clear the storage
	   * @returns {string} nothing
	   */


	  MemoryStorage.clear = function clear() {
	    dataMemory = {};
	    return dataMemory;
	  };

	  return MemoryStorage;
	}();

	/** @class */


	var StorageHelper = function () {

	  /**
	   * This is used to get a storage object
	   * @returns {object} the storage
	   */
	  function StorageHelper() {
	    _classCallCheck(this, StorageHelper);

	    try {
	      this.storageWindow = window.localStorage;
	      this.storageWindow.setItem('aws.cognito.test-ls', 1);
	      this.storageWindow.removeItem('aws.cognito.test-ls');
	    } catch (exception) {
	      this.storageWindow = MemoryStorage;
	    }
	  }

	  /**
	   * This is used to return the storage
	   * @returns {object} the storage
	   */


	  StorageHelper.prototype.getStorage = function getStorage() {
	    return this.storageWindow;
	  };

	  return StorageHelper;
	}();

	exports.default = StorageHelper;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _CognitoTokenScopes = __webpack_require__(4);

	var _CognitoTokenScopes2 = _interopRequireDefault(_CognitoTokenScopes);

	var _CognitoAccessToken = __webpack_require__(1);

	var _CognitoAccessToken2 = _interopRequireDefault(_CognitoAccessToken);

	var _CognitoIdToken = __webpack_require__(2);

	var _CognitoIdToken2 = _interopRequireDefault(_CognitoIdToken);

	var _CognitoRefreshToken = __webpack_require__(3);

	var _CognitoRefreshToken2 = _interopRequireDefault(_CognitoRefreshToken);

	var _CognitoAuthSession = __webpack_require__(5);

	var _CognitoAuthSession2 = _interopRequireDefault(_CognitoAuthSession);

	var _StorageHelper = __webpack_require__(6);

	var _StorageHelper2 = _interopRequireDefault(_StorageHelper);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /*!
	                                                                                                                                                           * Amazon Cognito Auth SDK for JavaScript
	                                                                                                                                                           * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
	                                                                                                                                                          
	                                                                                                                                                           * Licensed under the Apache License, Version 2.0 (the "License").
	                                                                                                                                                           * You may not use this file except in compliance with the License.
	                                                                                                                                                           * A copy of the License is located at
	                                                                                                                                                           *
	                                                                                                                                                           *         http://aws.amazon.com/apache2.0/
	                                                                                                                                                           *
	                                                                                                                                                           * or in the "license" file accompanying this file.
	                                                                                                                                                           * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	                                                                                                                                                           * OR CONDITIONS OF ANY KIND, either express or implied. See the
	                                                                                                                                                           * License for the specific language governing permissions
	                                                                                                                                                           * and limitations under the License.
	                                                                                                                                                           */

	/** @class */
	var CognitoAuth = function () {
	  /**
	   * Constructs a new CognitoAuth object
	   * @param {object} data Creation options
	   * @param {string} data.ClientId Required: User pool application client id.
	   * @param {string} data.AppWebDomain Required: The application/user-pools Cognito web hostname,
	   *                     this is set at the Cognito console.
	   * @param {array} data.TokenScopesArray Optional: The token scopes
	   * @param {string} data.RedirectUriSignIn Required: The redirect Uri,
	   * which will be launched after authentication as signed in.
	   * @param {string} data.RedirectUriSignOut Required:
	   * The redirect Uri, which will be launched when signed out.
	   * @param {nodeCallback<CognitoAuthSession>} Optional: userhandler Called on success or error.
	   */
	  function CognitoAuth(data) {
	    _classCallCheck(this, CognitoAuth);

	    var _ref = data || {},
	        ClientId = _ref.ClientId,
	        AppWebDomain = _ref.AppWebDomain,
	        TokenScopesArray = _ref.TokenScopesArray,
	        RedirectUriSignIn = _ref.RedirectUriSignIn,
	        RedirectUriSignOut = _ref.RedirectUriSignOut;

	    if (data == null || !ClientId || !AppWebDomain || !RedirectUriSignIn || !RedirectUriSignOut) {
	      throw new Error(this.getCognitoConstants().PARAMETERERROR);
	    }

	    this.clientId = ClientId;
	    this.appWebDomain = AppWebDomain;
	    this.TokenScopesArray = TokenScopesArray || [];
	    if (!Array.isArray(TokenScopesArray)) {
	      throw new Error(this.getCognitoConstants().SCOPETYPEERROR);
	    }
	    var tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
	    this.RedirectUriSignIn = RedirectUriSignIn;
	    this.RedirectUriSignOut = RedirectUriSignOut;
	    this.signInUserSession = new _CognitoAuthSession2.default();
	    this.responseType = this.getCognitoConstants().TOKEN;
	    this.storage = new _StorageHelper2.default().getStorage();
	    this.signInUserSession.setTokenScopes(tokenScopes);
	    this.username = this.getLastUser();
	  }

	  /**
	   * @returns {JSON} the constants
	   */


	  CognitoAuth.prototype.getCognitoConstants = function getCognitoConstants() {
	    var CognitoConstants = {
	      DOMAIN_SCHEME: 'https',
	      DOMAIN_PATH_SIGNIN: 'oauth2/authorize',
	      DOMAIN_PATH_TOKEN: 'oauth2/token',
	      DOMAIN_PATH_SIGNOUT: 'logout',
	      DOMAIN_QUERY_PARAM_REDIRECT_URI: 'redirect_uri',
	      DOMAIN_QUERY_PARAM_SIGNOUT_URI: 'logout_uri',
	      DOMAIN_QUERY_PARAM_RESPONSE_TYPE: 'response_type',
	      CLIENT_ID: 'client_id',
	      STATE: 'state',
	      SCOPE: 'scope',
	      TOKEN: 'token',
	      CODE: 'code',
	      POST: 'POST',
	      PARAMETERERROR: 'The parameters: App client Id, App web domain' + ', the redirect URL when you are signed in and the ' + 'redirect URL when you are signed out are required.',
	      SCOPETYPEERROR: 'Scopes have to be array type. ',
	      QUESTIONMARK: '?',
	      POUNDSIGN: '#',
	      COLONDOUBLESLASH: '://',
	      SLASH: '/',
	      AMPERSAND: '&',
	      EQUALSIGN: '=',
	      SPACE: ' ',
	      CONTENTTYPE: 'Content-Type',
	      CONTENTTYPEVALUE: 'application/x-www-form-urlencoded',
	      AUTHORIZATIONCODE: 'authorization_code',
	      IDTOKEN: 'id_token',
	      ACCESSTOKEN: 'access_token',
	      REFRESHTOKEN: 'refresh_token',
	      ERROR: 'error',
	      STRINGTYPE: 'string',
	      STATELENGTH: 32,
	      STATEORIGINSTRING: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	      WITHCREDENTIALS: 'withCredentials',
	      UNDEFINED: 'undefined',
	      SELF: '_self',
	      HOSTNAMEREGEX: /:\/\/([0-9]?\.)?(.[^/:]+)/i,
	      QUERYPARAMETERREGEX1: /#(.+)/,
	      QUERYPARAMETERREGEX2: /=(.+)/,
	      HEADER: { 'Content-Type': 'application/x-www-form-urlencoded' }
	    };
	    return CognitoConstants;
	  };

	  /**
	   * @returns {string} the client id
	   */


	  CognitoAuth.prototype.getClientId = function getClientId() {
	    return this.clientId;
	  };

	  /**
	   * @returns {string} the app web domain
	   */


	  CognitoAuth.prototype.getAppWebDomain = function getAppWebDomain() {
	    return this.appWebDomain;
	  };

	  /**
	   * method for getting the current user of the application from the local storage
	   *
	   * @returns {CognitoAuth} the user retrieved from storage
	   */


	  CognitoAuth.prototype.getCurrentUser = function getCurrentUser() {
	    var lastUserKey = 'CognitoIdentityServiceProvider.' + this.clientId + '.LastAuthUser';

	    var lastAuthUser = this.storage.getItem(lastUserKey);
	    return lastAuthUser;
	  };

	  /**
	   * @param {string} Username the user's name
	   * method for setting the current user's name
	   * @returns {void}
	   */


	  CognitoAuth.prototype.setUser = function setUser(Username) {
	    this.username = Username;
	  };

	  /**
	   * sets response type to 'code'
	   * @returns {void}
	   */


	  CognitoAuth.prototype.useCodeGrantFlow = function useCodeGrantFlow() {
	    this.responseType = this.getCognitoConstants().CODE;
	  };

	  /**
	   * sets response type to 'token'
	   * @returns {void}
	   */


	  CognitoAuth.prototype.useImplicitFlow = function useImplicitFlow() {
	    this.responseType = this.getCognitoConstants().TOKEN;
	  };

	  /**
	   * @returns {CognitoAuthSession} the current session for this user
	   */


	  CognitoAuth.prototype.getSignInUserSession = function getSignInUserSession() {
	    return this.signInUserSession;
	  };

	  /**
	   * @returns {string} the user's username
	   */


	  CognitoAuth.prototype.getUsername = function getUsername() {
	    return this.username;
	  };

	  /**
	   * @param {string} Username the user's username
	   * @returns {void}
	   */


	  CognitoAuth.prototype.setUsername = function setUsername(Username) {
	    this.username = Username;
	  };

	  /**
	   * This is used to get a session, either from the session object
	   * or from the local storage, or by using a refresh token
	   * @param {string} RedirectUriSignIn Required: The redirect Uri,
	   * which will be launched after authentication.
	   * @param {array} TokenScopesArray Required: The token scopes, it is an
	   * array of strings specifying all scopes for the tokens.
	   * @returns {void}
	   */


	  CognitoAuth.prototype.getSession = function getSession() {
	    var tokenScopesInputSet = new Set(this.TokenScopesArray);
	    var cachedScopesSet = new Set(this.signInUserSession.tokenScopes.getScopes());
	    var URL = this.getFQDNSignIn();
	    if (this.signInUserSession != null && this.signInUserSession.isValid()) {
	      return this.userhandler.onSuccess(this.signInUserSession);
	    }
	    this.signInUserSession = this.getCachedSession();
	    // compare scopes
	    if (!this.compareSets(tokenScopesInputSet, cachedScopesSet)) {
	      var tokenScopes = new _CognitoTokenScopes2.default(this.TokenScopesArray);
	      var idToken = new _CognitoIdToken2.default();
	      var accessToken = new _CognitoAccessToken2.default();
	      var refreshToken = new _CognitoRefreshToken2.default();
	      this.signInUserSession.setTokenScopes(tokenScopes);
	      this.signInUserSession.setIdToken(idToken);
	      this.signInUserSession.setAccessToken(accessToken);
	      this.signInUserSession.setRefreshToken(refreshToken);
	      this.launchUri(URL);
	    } else if (this.signInUserSession.isValid()) {
	      return this.userhandler.onSuccess(this.signInUserSession);
	    } else if (!this.signInUserSession.getRefreshToken() || !this.signInUserSession.getRefreshToken().getToken()) {
	      this.launchUri(URL);
	    } else {
	      this.refreshSession(this.signInUserSession.getRefreshToken().getToken());
	    }
	    return undefined;
	  };

	  /**
	   * @param {string} httpRequestResponse the http request response
	   * @returns {void}
	   * Parse the http request response and proceed according to different response types.
	   */


	  CognitoAuth.prototype.parseCognitoWebResponse = function parseCognitoWebResponse(httpRequestResponse) {
	    if (httpRequestResponse.indexOf(this.getCognitoConstants().QUESTIONMARK) > -1) {
	      this.getCodeQueryParameter(httpRequestResponse);
	    } else if (httpRequestResponse.indexOf(this.getCognitoConstants().POUNDSIGN) > -1) {
	      // To parse the response to get tokens
	      this.getTokenQueryParameter(httpRequestResponse);
	    }
	  };

	  /**
	   * @param {string} httpRequestResponse the http request response
	   * @returns {void}
	   * Parse the http request response and proceed according to code response type.
	   */


	  CognitoAuth.prototype.getCodeQueryParameter = function getCodeQueryParameter(httpRequestResponse) {
	    var mapSecond = new Map();
	    mapSecond = this.getQueryParameters(httpRequestResponse, mapSecond);
	    if (mapSecond.has(this.getCognitoConstants().CODE)) {
	      // if the response contains code
	      // To parse the response and get the code value.
	      var codeParameter = this.getCodeParameter(httpRequestResponse);
	      var url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
	      var header = this.getCognitoConstants().HEADER;
	      var body = { grant_type: this.getCognitoConstants().AUTHORIZATIONCODE,
	        client_id: this.getClientId(),
	        redirect_uri: this.RedirectUriSignIn,
	        code: codeParameter };
	      var boundOnSuccess = this.onSuccessExchangeForToken.bind(this);
	      var boundOnFailure = this.onFailure.bind(this);
	      this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
	    }
	  };

	  /**
	   * Parse the http request response and proceed according to token response type.
	   * @param {string} httpRequestResponse the http request response
	   * @returns {void}
	   */


	  CognitoAuth.prototype.getTokenQueryParameter = function getTokenQueryParameter(httpRequestResponse) {
	    var map = new Map();
	    map = this.getQueryParameters(httpRequestResponse, map);
	    var idToken = new _CognitoIdToken2.default();
	    var accessToken = new _CognitoAccessToken2.default();
	    var refreshToken = new _CognitoRefreshToken2.default();
	    if (httpRequestResponse.indexOf(this.getCognitoConstants().IDTOKEN) > -1) {
	      idToken.setJwtToken(map.get(this.getCognitoConstants().IDTOKEN));
	      this.signInUserSession.setIdToken(idToken);
	    } else {
	      this.signInUserSession.setIdToken(idToken);
	    }
	    if (httpRequestResponse.indexOf(this.getCognitoConstants().ACCESSTOKEN) > -1) {
	      accessToken.setJwtToken(map.get(this.getCognitoConstants().ACCESSTOKEN));
	      this.signInUserSession.setAccessToken(accessToken);
	    } else {
	      this.signInUserSession.setAccessToken(accessToken);
	    }
	    if (httpRequestResponse.indexOf(this.getCognitoConstants().REFRESHTOKEN) > -1) {
	      refreshToken.setToken(map.get(this.getCognitoConstants().REFRESHTOKEN));
	      this.signInUserSession.setRefreshToken(refreshToken);
	    } else {
	      this.signInUserSession.setRefreshToken(refreshToken);
	    }
	    this.cacheTokensScopes();
	    return this.userhandler.onSuccess(this.signInUserSession);
	  };

	  /**
	   * Get cached tokens and scopes and return a new session using all the cached data.
	   * @returns {CognitoAuthSession} the auth session
	   */


	  CognitoAuth.prototype.getCachedSession = function getCachedSession() {
	    if (!this.username) {
	      return new _CognitoAuthSession2.default();
	    }
	    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId() + '.' + this.username;
	    var idTokenKey = keyPrefix + '.idToken';
	    var accessTokenKey = keyPrefix + '.accessToken';
	    var refreshTokenKey = keyPrefix + '.refreshToken';
	    var scopeKey = keyPrefix + '.tokenScopesString';

	    var scopesString = this.storage.getItem(scopeKey);
	    var scopesArray = [];
	    if (scopesString) {
	      scopesArray = scopesString.split(' ');
	    }
	    var tokenScopes = new _CognitoTokenScopes2.default(scopesArray);
	    var idToken = new _CognitoIdToken2.default(this.storage.getItem(idTokenKey));
	    var accessToken = new _CognitoAccessToken2.default(this.storage.getItem(accessTokenKey));
	    var refreshToken = new _CognitoRefreshToken2.default(this.storage.getItem(refreshTokenKey));

	    var sessionData = {
	      IdToken: idToken,
	      AccessToken: accessToken,
	      RefreshToken: refreshToken,
	      TokenScopes: tokenScopes
	    };
	    var cachedSession = new _CognitoAuthSession2.default(sessionData);
	    return cachedSession;
	  };

	  /**
	   * This is used to get last signed in user from local storage
	   * @returns {string} the last user name
	   */


	  CognitoAuth.prototype.getLastUser = function getLastUser() {
	    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
	    var lastUserKey = keyPrefix + '.LastAuthUser';
	    var lastUserName = this.storage.getItem(lastUserKey);
	    if (lastUserName) {
	      return lastUserName;
	    }
	    return undefined;
	  };

	  /**
	   * This is used to save the session tokens, scope and state to local storage
	   * Input parameter is a set of strings.
	   * @returns {void}
	   */


	  CognitoAuth.prototype.cacheTokensScopes = function cacheTokensScopes() {
	    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
	    var tokenUserName = this.signInUserSession.getAccessToken().getUsername();
	    var idTokenKey = keyPrefix + '.' + tokenUserName + '.idToken';
	    var accessTokenKey = keyPrefix + '.' + tokenUserName + '.accessToken';
	    var refreshTokenKey = keyPrefix + '.' + tokenUserName + '.refreshToken';
	    var lastUserKey = keyPrefix + '.LastAuthUser';
	    var scopeKey = keyPrefix + '.' + tokenUserName + '.tokenScopesString';
	    var scopesArray = this.signInUserSession.getTokenScopes().getScopes();
	    var scopesString = scopesArray.join(' ');
	    this.storage.setItem(idTokenKey, this.signInUserSession.getIdToken().getJwtToken());
	    this.storage.setItem(accessTokenKey, this.signInUserSession.getAccessToken().getJwtToken());
	    this.storage.setItem(refreshTokenKey, this.signInUserSession.getRefreshToken().getToken());
	    this.storage.setItem(lastUserKey, tokenUserName);
	    this.storage.setItem(scopeKey, scopesString);
	  };

	  /**
	   * Compare two sets if they are identical.
	   * @param {set} set1 one set
	   * @param {set} set2 the other set
	   * @returns {boolean} boolean value is true if two sets are identical
	   */


	  CognitoAuth.prototype.compareSets = function compareSets(set1, set2) {
	    if (set1.size !== set2.size) {
	      return false;
	    }
	    for (var _iterator = set1, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	      var _ref2;

	      if (_isArray) {
	        if (_i >= _iterator.length) break;
	        _ref2 = _iterator[_i++];
	      } else {
	        _i = _iterator.next();
	        if (_i.done) break;
	        _ref2 = _i.value;
	      }

	      var item = _ref2;

	      if (!set2.has(item)) {
	        return false;
	      }
	    }
	    return true;
	  };

	  /**
	   * @param {string} url the url string
	   * Get the hostname from url.
	   * @returns {string} hostname string
	   */


	  CognitoAuth.prototype.getHostName = function getHostName(url) {
	    var match = url.match(this.getCognitoConstants().HOSTNAMEREGEX);
	    if (match != null && match.length > 2 && _typeof(match[2]) === this.getCognitoConstants().STRINGTYPE && match[2].length > 0) {
	      return match[2];
	    }
	    return undefined;
	  };

	  /**
	   * Get http query parameters and store them into a map.
	   * @param {string} url the url string
	   * @param {map} map the query parameter map
	   * @returns {map} map
	   */


	  CognitoAuth.prototype.getQueryParameters = function getQueryParameters(url, map) {
	    var str = String(url).split(this.getCognitoConstants().QUERYPARAMETERREGEX1);
	    var url2 = str[1];
	    var str1 = String(url2).split(this.getCognitoConstants().AMPERSAND);
	    var num = str1.length;
	    var i = void 0;
	    for (i = 0; i < num; i++) {
	      str1[i] = String(str1[i]).split(this.getCognitoConstants().QUERYPARAMETERREGEX2);
	      map.set(str1[i][0], str1[i][1]);
	    }
	    return map;
	  };

	  /**
	   * Get the code parameter from the url.
	   * @param {string} url the url string
	   * @returns {string} code
	   */


	  CognitoAuth.prototype.getCodeParameter = function getCodeParameter(url) {
	    var urlEdit = String(url).split(this.getCognitoConstants().QUESTIONMARK);
	    var url1 = urlEdit[1];
	    var urlStr = String(url1).split(this.getCognitoConstants().EQUALSIGN);
	    var code = urlStr[1];
	    return code;
	  };

	  /**
	   * helper function to generate a random string
	   * @param {int} length the length of string
	   * @param {string} chars a original string
	   * @returns {string} a random value.
	   */


	  CognitoAuth.prototype.generateRandomString = function generateRandomString(length, chars) {
	    var result = '';
	    var i = length;
	    for (; i > 0; --i) {
	      result += chars[Math.round(Math.random() * (chars.length - 1))];
	    }return result;
	  };

	  /**
	   * This is used to clear the session tokens, scopes and state from local storage
	   * @returns {void}
	   */


	  CognitoAuth.prototype.clearCachedTokensScopes = function clearCachedTokensScopes() {
	    var keyPrefix = 'CognitoIdentityServiceProvider.' + this.getClientId();
	    var idTokenKey = keyPrefix + '.' + this.username + '.idToken';
	    var accessTokenKey = keyPrefix + '.' + this.username + '.accessToken';
	    var refreshTokenKey = keyPrefix + '.' + this.username + '.refreshToken';
	    var lastUserKey = keyPrefix + '.LastAuthUser';
	    var scopeKey = keyPrefix + '.' + this.username + '.tokenScopesString';

	    this.storage.removeItem(idTokenKey);
	    this.storage.removeItem(accessTokenKey);
	    this.storage.removeItem(refreshTokenKey);
	    this.storage.removeItem(lastUserKey);
	    this.storage.removeItem(scopeKey);
	  };

	  /**
	   * This is used to build a user session from tokens retrieved in the authentication result
	   * @param {object} refreshToken authResult Successful auth response from server.
	   * @returns {void}
	   */


	  CognitoAuth.prototype.refreshSession = function refreshSession(refreshToken) {
	    // https POST call for refreshing token
	    var url = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_TOKEN);
	    var header = this.getCognitoConstants().HEADER;
	    var body = { grant_type: this.getCognitoConstants().REFRESHTOKEN,
	      client_id: this.getClientId(),
	      redirect_uri: this.RedirectUriSignIn,
	      refresh_token: refreshToken };
	    var boundOnSuccess = this.onSuccessRefreshToken.bind(this);
	    var boundOnFailure = this.onFailure.bind(this);
	    this.makePOSTRequest(header, body, url, boundOnSuccess, boundOnFailure);
	  };

	  /**
	   * Make the http POST request.
	   * @param {JSON} header header JSON object
	   * @param {JSON} body body JSON object
	   * @param {string} url string
	   * @param {function} onSuccess callback
	   * @param {function} onFailure callback
	   * @returns {void}
	   */


	  CognitoAuth.prototype.makePOSTRequest = function makePOSTRequest(header, body, url, onSuccess, onFailure) {
	    // This is a sample server that supports CORS.
	    var xhr = this.createCORSRequest(this.getCognitoConstants().POST, url);
	    var bodyString = '';
	    var i = 0;
	    var j = 0;
	    var jsonData = xhr.responseText;
	    if (!xhr) {
	      return;
	    }
	    // set header
	    for (; j < header.length; j++) {
	      xhr.setRequestHeader(j, header[j]);
	    }
	    for (; i < body.length; i++) {
	      bodyString = bodyString.concat(i, this.getCognitoConstants().EQUALSIGN, body[i], this.getCognitoConstants().AMPERSAND);
	    }
	    bodyString = bodyString.substring(0, bodyString.length - 1);
	    xhr.send(bodyString);
	    xhr.onreadystatechange = function addressState() {
	      if (xhr.readyState === 4) {
	        if (xhr.status === 200) {
	          xhr.onload = onSuccess(jsonData);
	        } else {
	          xhr.onerror = onFailure(jsonData);
	        }
	      }
	    };
	  };

	  /**
	   * Create the XHR object
	   * @param {string} method which method to call
	   * @param {string} url the url string
	   * @returns {object} xhr
	   */


	  CognitoAuth.prototype.createCORSRequest = function createCORSRequest(method, url) {
	    var xhr = new XMLHttpRequest();
	    xhr.open(method, url, true);
	    if (this.getCognitoConstants().WITHCREDENTIALS in xhr) {
	      // XHR for Chrome/Firefox/Opera/Safari.
	      xhr.open(method, url, true);
	    } else if ((typeof XDomainRequest === 'undefined' ? 'undefined' : _typeof(XDomainRequest)) !== this.getCognitoConstants().UNDEFINED) {
	      // XDomainRequest for IE.
	      xhr = new XDomainRequest();
	      xhr.open(method, url);
	    } else {
	      // CORS not supported.
	      xhr = null;
	    }
	    return xhr;
	  };

	  /**
	   * The http POST request onFailure callback.
	   * @param {object} err the error object
	   * @returns {function} onFailure
	   */


	  CognitoAuth.prototype.onFailure = function onFailure(err) {
	    this.userhandler.onFailure(err);
	  };

	  /**
	   * The http POST request onSuccess callback when refreshing tokens.
	   * @param {JSON} jsonData tokens
	   * @returns {function} onSuccess
	   */


	  CognitoAuth.prototype.onSuccessRefreshToken = function onSuccessRefreshToken(jsonData) {
	    var jsonDataObject = JSON.parse(jsonData);
	    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
	      var URL = this.getFQDNSignIn();
	      this.launchUri(URL);
	    } else {
	      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
	        this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
	      }
	      if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
	        this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
	      }
	      this.cacheTokensScopes();
	      return this.userhandler.onSuccess(this.signInUserSession);
	    }
	    return undefined;
	  };

	  /**
	   * The http POST request onSuccess callback when exchanging code for tokens.
	   * @param {JSON} jsonData tokens
	   * @returns {function} onSuccess
	   */


	  CognitoAuth.prototype.onSuccessExchangeForToken = function onSuccessExchangeForToken(jsonData) {
	    var jsonDataObject = JSON.parse(jsonData);
	    var refreshToken = new _CognitoRefreshToken2.default();
	    var accessToken = new _CognitoAccessToken2.default();
	    var idToken = new _CognitoIdToken2.default();
	    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ERROR)) {
	      return this.userhandler.onFailure(jsonData);
	    }
	    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().IDTOKEN)) {
	      this.signInUserSession.setIdToken(new _CognitoIdToken2.default(jsonDataObject.id_token));
	    } else {
	      this.signInUserSession.setIdToken(idToken);
	    }
	    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().ACCESSTOKEN)) {
	      this.signInUserSession.setAccessToken(new _CognitoAccessToken2.default(jsonDataObject.access_token));
	    } else {
	      this.signInUserSession.setAccessToken(accessToken);
	    }
	    if (Object.prototype.hasOwnProperty.call(jsonDataObject, this.getCognitoConstants().REFRESHTOKEN)) {
	      this.signInUserSession.setRefreshToken(new _CognitoRefreshToken2.default(jsonDataObject.refresh_token));
	    } else {
	      this.signInUserSession.setRefreshToken(refreshToken);
	    }
	    this.cacheTokensScopes();
	    return this.userhandler.onSuccess(this.signInUserSession);
	  };

	  /**
	   * Launch Cognito Auth UI page.
	   * @param {string} URL the url to launch
	   * @returns {void}
	   */


	  CognitoAuth.prototype.launchUri = function launchUri(URL) {
	    window.open(URL, this.getCognitoConstants().SELF);
	  };

	  /**
	   * @returns {string} scopes string
	   */


	  CognitoAuth.prototype.getSpaceSeperatedScopeString = function getSpaceSeperatedScopeString() {
	    var tokenScopesString = this.signInUserSession.getTokenScopes().getScopes();
	    tokenScopesString = tokenScopesString.join(this.getCognitoConstants().SPACE);
	    return encodeURIComponent(tokenScopesString);
	  };

	  /**
	   * Create the FQDN(fully qualified domain name) for authorization endpoint.
	   * @returns {string} url
	   */


	  CognitoAuth.prototype.getFQDNSignIn = function getFQDNSignIn() {
	    var state = this.generateRandomString(this.getCognitoConstants().STATELENGTH, this.getCognitoConstants().STATEORIGINSTRING);
	    var tokenScopesString = this.getSpaceSeperatedScopeString();
	    // Build the complete web domain to launch the login screen
	    var uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNIN, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_REDIRECT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignIn), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().DOMAIN_QUERY_PARAM_RESPONSE_TYPE, this.getCognitoConstants().EQUALSIGN, this.responseType, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId(), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().STATE, this.getCognitoConstants().EQUALSIGN, state, this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().SCOPE, this.getCognitoConstants().EQUALSIGN, tokenScopesString);
	    console.log('--uri: '.concat(uri));
	    return uri;
	  };

	  /**
	   * Sign out the user.
	   * @returns {void}
	   */


	  CognitoAuth.prototype.signOut = function signOut() {
	    var URL = this.getFQDNSignOut();
	    this.signInUserSession = null;
	    this.clearCachedTokensScopes();
	    this.launchUri(URL);
	  };

	  /**
	   * Create the FQDN(fully qualified domain name) for signout endpoint.
	   * @returns {string} url
	   */


	  CognitoAuth.prototype.getFQDNSignOut = function getFQDNSignOut() {
	    var uri = this.getCognitoConstants().DOMAIN_SCHEME.concat(this.getCognitoConstants().COLONDOUBLESLASH, this.getAppWebDomain(), this.getCognitoConstants().SLASH, this.getCognitoConstants().DOMAIN_PATH_SIGNOUT, this.getCognitoConstants().QUESTIONMARK, this.getCognitoConstants().DOMAIN_QUERY_PARAM_SIGNOUT_URI, this.getCognitoConstants().EQUALSIGN, encodeURIComponent(this.RedirectUriSignOut), this.getCognitoConstants().AMPERSAND, this.getCognitoConstants().CLIENT_ID, this.getCognitoConstants().EQUALSIGN, this.getClientId());
	    return uri;
	  };

	  return CognitoAuth;
	}();

	exports.default = CognitoAuth;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*!
	 * Amazon Cognito Auth SDK for JavaScript
	 * Copyright 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.

	 * Licensed under the Apache License, Version 2.0 (the "License").
	 * You may not use this file except in compliance with the License.
	 * A copy of the License is located at
	 *
	 *         http://aws.amazon.com/apache2.0/
	 *
	 * or in the "license" file accompanying this file.
	 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES
	 * OR CONDITIONS OF ANY KIND, either express or implied. See the
	 * License for the specific language governing permissions
	 * and limitations under the License.
	 */
	var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var weekNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	/** @class */

	var DateHelper = function () {
	  function DateHelper() {
	    _classCallCheck(this, DateHelper);
	  }

	  /**
	   * @returns {string} The current time in "ddd MMM D HH:mm:ss UTC YYYY" format.
	   */
	  DateHelper.prototype.getNowString = function getNowString() {
	    var now = new Date();

	    var weekDay = weekNames[now.getUTCDay()];
	    var month = monthNames[now.getUTCMonth()];
	    var day = now.getUTCDate();

	    var hours = now.getUTCHours();
	    if (hours < 10) {
	      hours = '0' + hours;
	    }

	    var minutes = now.getUTCMinutes();
	    if (minutes < 10) {
	      minutes = '0' + minutes;
	    }

	    var seconds = now.getUTCSeconds();
	    if (seconds < 10) {
	      seconds = '0' + seconds;
	    }

	    var year = now.getUTCFullYear();

	    // ddd MMM D HH:mm:ss UTC YYYY
	    var dateNow = weekDay + ' ' + month + ' ' + day + ' ' + hours + ':' + minutes + ':' + seconds + ' UTC ' + year;

	    return dateNow;
	  };

	  return DateHelper;
	}();

	exports.default = DateHelper;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _CognitoAccessToken = __webpack_require__(1);

	Object.defineProperty(exports, 'CognitoAccessToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAccessToken).default;
	  }
	});

	var _CognitoIdToken = __webpack_require__(2);

	Object.defineProperty(exports, 'CognitoIdToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoIdToken).default;
	  }
	});

	var _CognitoRefreshToken = __webpack_require__(3);

	Object.defineProperty(exports, 'CognitoRefreshToken', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoRefreshToken).default;
	  }
	});

	var _CognitoTokenScopes = __webpack_require__(4);

	Object.defineProperty(exports, 'CognitoTokenScopes', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoTokenScopes).default;
	  }
	});

	var _CognitoAuth = __webpack_require__(8);

	Object.defineProperty(exports, 'CognitoAuth', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuth).default;
	  }
	});

	var _CognitoAuthSession = __webpack_require__(5);

	Object.defineProperty(exports, 'CognitoAuthSession', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CognitoAuthSession).default;
	  }
	});

	var _DateHelper = __webpack_require__(9);

	Object.defineProperty(exports, 'DateHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_DateHelper).default;
	  }
	});

	var _StorageHelper = __webpack_require__(6);

	Object.defineProperty(exports, 'StorageHelper', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_StorageHelper).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ })
/******/ ])
});
;