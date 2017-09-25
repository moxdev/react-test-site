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
  var style = { color: props.color };

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      { style: style },
      props.title
    )
  );
};
var MyFirstComponent = function MyFirstComponent() {
  return _react2.default.createElement(
    'div',
    { id: 'my-first-comp' },
    _react2.default.createElement(MyTitle, { title: 'Game of Thrones', color: 'lightblue' }),
    _react2.default.createElement(MyTitle, { title: 'House of Cards', color: 'magenta' }),
    _react2.default.createElement(MyTitle, { title: 'Seinfeld', color: 'pink' }),
    _react2.default.createElement(MyTitle, { title: 'Walking Dead', color: 'darkgray' })
  );
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