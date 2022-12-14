"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Loader = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "loader"
  }, /*#__PURE__*/_react.default.createElement("div", {
    class: "lds-ring"
  }, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", null)));
};

var _default = Loader;
exports.default = _default;