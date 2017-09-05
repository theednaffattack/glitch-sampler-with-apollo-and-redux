"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require("styled-jsx/style.js");

var _style2 = _interopRequireDefault(_style);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var message = _ref.message;
  return _react2.default.createElement("aside", {
    "data-jsx": 1085231873
  }, message, _react2.default.createElement(_style2.default, {
    styleId: 1085231873,
    css: "aside[data-jsx=\"1085231873\"]{padding:1.5em;font-size:14px;color:white;background-color:red}"
  }));
};