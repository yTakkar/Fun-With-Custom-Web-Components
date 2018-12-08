// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"countryInfo.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var CountryInfo =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(CountryInfo, _HTMLElement);

  function CountryInfo() {
    var _this;

    _classCallCheck(this, CountryInfo);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CountryInfo).call(this));
    _this._country = '';
    _this._countryInfo = {};

    var shadowRoot = _this.attachShadow({
      mode: 'open'
    });

    return _this;
  }

  _createClass(CountryInfo, [{
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldValue, newValue) {
      console.log('attributeChangedCallback >>', name, oldValue, newValue);

      switch (name) {
        case 'country':
          {
            this._country = newValue;
            oldValue !== newValue && this.getCountryInfo();
          }
      }
    }
  }, {
    key: "getCountryInfo",
    value: function getCountryInfo() {
      var _this2 = this;

      fetch("https://restcountries.eu/rest/v2/name/".concat(this._country, "?fullText=true")).then(function (resp) {
        return resp.json();
      }).then(function (resp) {
        _this2._countryInfo = resp[0];

        _this2.createTemplate();
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "createTemplate",
    value: function createTemplate() {
      var _this$_countryInfo = this._countryInfo,
          name = _this$_countryInfo.name,
          area = _this$_countryInfo.area,
          alpha3Code = _this$_countryInfo.alpha3Code,
          altSpellings = _this$_countryInfo.altSpellings,
          borders = _this$_countryInfo.borders,
          callingCodes = _this$_countryInfo.callingCodes,
          capital = _this$_countryInfo.capital,
          nativeName = _this$_countryInfo.nativeName,
          population = _this$_countryInfo.population,
          region = _this$_countryInfo.region,
          subregion = _this$_countryInfo.subregion,
          demonym = _this$_countryInfo.demonym,
          timezones = _this$_countryInfo.timezones,
          topLevelDomain = _this$_countryInfo.topLevelDomain,
          latlng = _this$_countryInfo.latlng,
          translations = _this$_countryInfo.translations,
          flag = _this$_countryInfo.flag,
          currencies = _this$_countryInfo.currencies;
      var info = "\n      <img src=".concat(flag, " width='300px' />\n\n      <p><b>Name</b>: ").concat(name, "</p>\n      <p><b>Area</b>: ").concat(area, "</p>\n      <p><b>Alpha3 Code</b>: ").concat(alpha3Code, "</p>\n      <p><b>Alt Spellings: </b></p>\n      <p><b>Capital</b>: ").concat(capital, "</p>\n      <p><b>Native Name</b>: ").concat(nativeName, "</p>\n      <p><b>Population</b>: ").concat(population, "</p>\n      <p><b>Region</b>: ").concat(region, "</p>\n      <p><b>SubRegion</b>: ").concat(subregion, "</p>\n      <p><b>Demonym</b>: ").concat(demonym, "</p>\n      <p><b>Latitude</b>: ").concat(latlng[0], "</p>\n      <p><b>Longitude</b>: ").concat(latlng[1], "</p>\n\n      <p><b>Currencies</b>:</p>\n      <ul>\n        ").concat(Object.keys(currencies[0]).map(function (elem) {
        return "<li>".concat(elem, ": ").concat(currencies[0][elem], "</li>");
      }), "\n      </ul>      \n\n      <p><b>Alt Spellings</b>:</p>\n      <ul>\n        ").concat(altSpellings.map(function (elem) {
        return "<li>".concat(elem, "</li>");
      }), "\n      </ul>\n\n      <p><b>Borders</b>:</p>\n      <ul>\n        ").concat(borders.map(function (elem) {
        return "<li>".concat(elem, "</li>");
      }), "\n      </ul>\n\n      <p><b>Calling Codes</b>:</p>\n      <ul>\n        ").concat(callingCodes.map(function (sp) {
        return "<li>".concat(sp.trim(), "</li>");
      }), "\n      </ul>\n\n      <p><b>Timezones</b>:</p>\n      <ul>\n        ").concat(timezones.map(function (elem) {
        return "<li>".concat(elem, "</li>");
      }), "\n      </ul>\n\n      <p><b>Top Level Domains</b>:</p>\n      <ul>\n        ").concat(topLevelDomain.map(function (sp) {
        return "<li>".concat(sp.trim(), "</li>");
      }), "\n      </ul>\n\n     <p><b>Translations</b>:</p>\n      <ul>\n        ").concat(Object.keys(translations).map(function (sp) {
        return "<li>".concat(sp, ": ").concat(translations[sp], "</li>");
      }), "\n      </ul>\n    ");
      var template = "\n      <h1>COUNTRY INFO:</h1>\n      ".concat(info, "\n    ");
      this.shadowRoot.innerHTML = template;
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      console.log("".concat(this.tagName, " mounted from the DOM"));
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      console.log("".concat(this.tagName, " unmounted from the DOM"));
    }
  }, {
    key: "country",
    get: function get() {
      return this._country;
    },
    set: function set(val) {
      this._country = val;
    }
  }], [{
    key: "observedAttributes",
    get: function get() {
      return ['country'];
    }
  }]);

  return CountryInfo;
}(_wrapNativeSuper(HTMLElement)); // DEFINE OUR CUSTOM ELEMENT


customElements.define('country-info', CountryInfo); // CHANGE COUNTRY-INFO'S COUNTRY PROP

var button = document.querySelector('button');
var input = document.querySelector('input[type="text"]');
var customElement = document.querySelector('country-info');
input.value = customElement.getAttribute('country');
button.addEventListener('click', function () {
  var value = input.value;

  if (value && customElements.get('country-info')) {
    customElement.setAttribute('country', value.toLowerCase());
  }
});
},{}],"index.js":[function(require,module,exports) {
"use strict";

require("./countryInfo");
},{"./countryInfo":"countryInfo.js"}],"../../.nvm/versions/node/v8.12.0/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43403" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../.nvm/versions/node/v8.12.0/lib/node_modules/parcel/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/web-components.e31bb0bc.map