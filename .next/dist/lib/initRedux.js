'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = initRedux;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _redux = require('redux');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reduxStore = null;

// Get the Redux DevTools extension and fallback to a no-op function
var devtools = function devtools(f) {
  return f;
};
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create(apollo) {
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return (0, _redux.createStore)((0, _redux.combineReducers)((0, _extends3.default)({}, _reducers2.default, {
    apollo: apollo.reducer()
  })), initialState, // Hydrate the store with server-side data
  (0, _redux.compose)((0, _redux.applyMiddleware)(apollo.middleware()), // Add additional middleware here
  devtools));
}

function initRedux(apollo, initialState) {
  // Make sure to create a new store for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(apollo, initialState);
  }

  // Reuse store on the client-side
  if (!reduxStore) {
    reduxStore = create(apollo, initialState);
  }

  return reduxStore;
}