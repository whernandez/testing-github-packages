'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledMyComponent = styled__default["default"].div `
  color: ${p => p.color || 'pink'};
`;
const MyComponent = ({ text, color }) => (React__default["default"].createElement(StyledMyComponent, { color: color }, text));

exports.MyComponent = MyComponent;
