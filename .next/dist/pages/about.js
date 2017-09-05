'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _App = require('../components/App');

var _App2 = _interopRequireDefault(_App);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
  return _react2.default.createElement(_App2.default, null, _react2.default.createElement(_Header2.default, { pathname: props.url.pathname }), _react2.default.createElement('article', null, _react2.default.createElement('h1', null, 'The Idea Behind This Example'), _react2.default.createElement('p', null, _react2.default.createElement('a', { href: 'http://dev.apollodata.com' }, 'Apollo'), ' is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server.'), _react2.default.createElement('p', null, 'In this simple example, we integrate Apollo seamlessly with ', _react2.default.createElement('a', { href: 'https://github.com/zeit/next.js' }, 'Next'), ' by wrapping our pages inside a ', _react2.default.createElement('a', { href: 'https://facebook.github.io/react/docs/higher-order-components.html' }, 'higher-order component (HOC)'), '. Using the HOC pattern we\'re able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application.'), _react2.default.createElement('p', null, 'On initial page load, while on the server and inside getInitialProps, we invoke the Apollo method, ', _react2.default.createElement('a', { href: 'http://dev.apollodata.com/react/server-side-rendering.html#getDataFromTree' }, 'getDataFromTree'), '. This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized.'), _react2.default.createElement('p', null, 'This example relies on ', _react2.default.createElement('a', { href: 'http://graph.cool' }, 'graph.cool'), ' for its GraphQL backend.')));
};