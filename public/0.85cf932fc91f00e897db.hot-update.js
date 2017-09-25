webpackHotUpdate(0,{

/***/ "./js/ClientApp.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { className: 'app' },
    _react2.default.createElement(
      'div',
      { className: 'landing' },
      _react2.default.createElement(
        'h1',
        null,
        'svideo'
      ),
      _react2.default.createElement('input', { type: 'text', placeholder: 'Search' }),
      _react2.default.createElement(
        'a',
        { href: '#' },
        'or Browse All'
      )
    )
  );
};

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/mox/Box Sync/Tuts/Frontend-Masters/react/js/ClientApp.jsx');
}();

;

/***/ })

})