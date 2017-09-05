'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactApollo = require('react-apollo');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n'], ['\n  mutation createPost($title: String!, $url: String!) {\n    createPost(title: $title, url: $url) {\n      id\n      title\n      votes\n      url\n      createdAt\n    }\n  }\n']);

function Submit(_ref) {
  var createPost = _ref.createPost;

  function handleSubmit(e) {
    e.preventDefault();

    var title = e.target.elements.title.value;
    var url = e.target.elements.url.value;

    if (title === '' || url === '') {
      window.alert('Both fields are required.');
      return false;
    }

    // prepend http if missing from url
    if (!url.match(/^[a-zA-Z]+:\/\//)) {
      url = 'http://' + url;
    }

    createPost(title, url);

    // reset form
    e.target.elements.title.value = '';
    e.target.elements.url.value = '';
  }

  return _react2.default.createElement('form', { onSubmit: handleSubmit, 'data-jsx': 567193191
  }, _react2.default.createElement('h1', {
    'data-jsx': 567193191
  }, 'Submit'), _react2.default.createElement('input', { placeholder: 'title', name: 'title', 'data-jsx': 567193191
  }), _react2.default.createElement('input', { placeholder: 'url', name: 'url', 'data-jsx': 567193191
  }), _react2.default.createElement('button', { type: 'submit', 'data-jsx': 567193191
  }, 'Submit'), _react2.default.createElement(_style2.default, {
    styleId: 567193191,
    css: 'form[data-jsx="567193191"]{border-bottom:1px solid #ececec;padding-bottom:20px;margin-bottom:20px}h1[data-jsx="567193191"]{font-size:20px}input[data-jsx="567193191"]{display:block;margin-bottom:10px}'
  }));
}

var createPost = (0, _reactApollo.gql)(_templateObject);

exports.default = (0, _reactApollo.graphql)(createPost, {
  props: function props(_ref2) {
    var mutate = _ref2.mutate;
    return {
      createPost: function createPost(title, url) {
        return mutate({
          variables: { title: title, url: url },
          updateQueries: {
            allPosts: function allPosts(previousResult, _ref3) {
              var mutationResult = _ref3.mutationResult;

              var newPost = mutationResult.data.createPost;
              return (0, _assign2.default)({}, previousResult, {
                // Append the new post
                allPosts: [newPost].concat((0, _toConsumableArray3.default)(previousResult.allPosts))
              });
            }
          }
        });
      }
    };
  }
})(Submit);