'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var pathname = _ref.pathname;
  return _react2.default.createElement('header', {
    'data-jsx': 2280026175
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', { className: pathname === '/' && 'is-active', 'data-jsx': 2280026175
  }, 'Home')), _react2.default.createElement(_link2.default, { prefetch: true, href: '/about' }, _react2.default.createElement('a', { className: pathname === '/about' && 'is-active', 'data-jsx': 2280026175
  }, 'About')), _react2.default.createElement(_style2.default, {
    styleId: 2280026175,
    css: 'header[data-jsx="2280026175"]{margin-bottom:25px}a[data-jsx="2280026175"]{font-size:14px;margin-right:15px;text-decoration:none}.is-active[data-jsx="2280026175"]{text-decoration:underline}'
  }));
};