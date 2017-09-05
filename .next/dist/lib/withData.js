'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactApollo = require('react-apollo');

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _initApollo = require('./initApollo');

var _initApollo2 = _interopRequireDefault(_initApollo);

var _initRedux = require('./initRedux');

var _initRedux2 = _interopRequireDefault(_initRedux);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

exports.default = function (ComposedComponent) {
  var _class, _temp;

  return _temp = _class = function (_React$Component) {
    (0, _inherits3.default)(WithData, _React$Component);

    (0, _createClass3.default)(WithData, null, [{
      key: 'getInitialProps',
      value: function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
          var serverState, composedInitialProps, apollo, redux, url, state;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  serverState = {};

                  // Evaluate the composed component's getInitialProps()

                  composedInitialProps = {};

                  if (!ComposedComponent.getInitialProps) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return ComposedComponent.getInitialProps(ctx);

                case 5:
                  composedInitialProps = _context.sent;

                case 6:
                  if (process.browser) {
                    _context.next = 20;
                    break;
                  }

                  apollo = (0, _initApollo2.default)();
                  redux = (0, _initRedux2.default)(apollo);
                  // Provide the `url` prop data in case a GraphQL query uses it

                  url = { query: ctx.query, pathname: ctx.pathname };
                  _context.prev = 10;
                  _context.next = 13;
                  return (0, _reactApollo.getDataFromTree)(
                  // No need to use the Redux Provider
                  // because Apollo sets up the store for us
                  _react2.default.createElement(_reactApollo.ApolloProvider, { client: apollo, store: redux }, _react2.default.createElement(ComposedComponent, (0, _extends3.default)({ url: url }, composedInitialProps))));

                case 13:
                  _context.next = 17;
                  break;

                case 15:
                  _context.prev = 15;
                  _context.t0 = _context['catch'](10);

                case 17:
                  // getDataFromTree does not call componentWillUnmount
                  // head side effect therefore need to be cleared manually
                  _head2.default.rewind();

                  // Extract query data from the store
                  state = redux.getState();

                  // No need to include other initial Redux state because when it
                  // initialises on the client-side it'll create it again anyway

                  serverState = {
                    apollo: { // Only include the Apollo data state
                      data: state.apollo.data
                    }
                  };

                case 20:
                  return _context.abrupt('return', (0, _extends3.default)({
                    serverState: serverState
                  }, composedInitialProps));

                case 21:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, this, [[10, 15]]);
        }));

        function getInitialProps(_x) {
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    function WithData(props) {
      (0, _classCallCheck3.default)(this, WithData);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithData.__proto__ || (0, _getPrototypeOf2.default)(WithData)).call(this, props));

      _this.apollo = (0, _initApollo2.default)();
      _this.redux = (0, _initRedux2.default)(_this.apollo, _this.props.serverState);
      return _this;
    }

    (0, _createClass3.default)(WithData, [{
      key: 'render',
      value: function render() {
        return (
          // No need to use the Redux Provider
          // because Apollo sets up the store for us
          _react2.default.createElement(_reactApollo.ApolloProvider, { client: this.apollo, store: this.redux }, _react2.default.createElement(ComposedComponent, this.props))
        );
      }
    }]);

    return WithData;
  }(_react2.default.Component), _class.displayName = 'WithData(' + getComponentDisplayName(ComposedComponent) + ')', _temp;
};