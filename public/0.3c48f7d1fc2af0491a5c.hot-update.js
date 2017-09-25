webpackHotUpdate(0,{

/***/ "./js/ClientApp.jsx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/preact-compat/dist/preact-compat.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ce = _react2.default.createElement;

var MyTitle = function MyTitle(props) {
  // return ce('div', null, ce('h1', { style: { color: props.color } }, props.title));
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      props.title
    )
  );
};
var MyFirstComponent = function MyFirstComponent() {
  return ce('div', { id: 'divy' }, ce(MyTitle, { title: 'GOT', color: 'maroon' }), ce(MyTitle, { title: 'NFL', color: 'peru' }), ce(MyTitle, { title: 'Jimmy', color: 'lightblue' }), ce(MyTitle, { title: 'What', color: 'lime' }));
};

(0, _reactDom.render)(ce(MyFirstComponent), document.getElementById('app'));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ce, 'ce', '/Users/mox/Box Sync/Tuts/Frontend-Masters/react/js/ClientApp.jsx');

  __REACT_HOT_LOADER__.register(MyTitle, 'MyTitle', '/Users/mox/Box Sync/Tuts/Frontend-Masters/react/js/ClientApp.jsx');

  __REACT_HOT_LOADER__.register(MyFirstComponent, 'MyFirstComponent', '/Users/mox/Box Sync/Tuts/Frontend-Masters/react/js/ClientApp.jsx');
}();

;

/***/ })

})