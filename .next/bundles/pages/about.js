
          window.__NEXT_REGISTER_PAGE('/about', function() {
            var comp = module.exports=webpackJsonp([5],{367:function(e,t,a){e.exports=a(368)},368:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(5),o=l(r),n=a(188),i=l(n),u=a(191),s=l(u);t.default=function(e){return o.default.createElement(i.default,null,o.default.createElement(s.default,{pathname:e.url.pathname}),o.default.createElement("article",null,o.default.createElement("h1",null,"The Idea Behind This Example"),o.default.createElement("p",null,o.default.createElement("a",{href:"http://dev.apollodata.com"},"Apollo")," is a GraphQL client that allows you to easily query the exact data you need from a GraphQL server. In addition to fetching and mutating data, Apollo analyzes your queries and their results to construct a client-side cache of your data, which is kept up to date as further queries and mutations are run, fetching more results from the server."),o.default.createElement("p",null,"In this simple example, we integrate Apollo seamlessly with ",o.default.createElement("a",{href:"https://github.com/zeit/next.js"},"Next")," by wrapping our pages inside a ",o.default.createElement("a",{href:"https://facebook.github.io/react/docs/higher-order-components.html"},"higher-order component (HOC)"),". Using the HOC pattern we're able to pass down a central store of query result data created by Apollo into our React component hierarchy defined inside each page of our Next application."),o.default.createElement("p",null,"On initial page load, while on the server and inside getInitialProps, we invoke the Apollo method, ",o.default.createElement("a",{href:"http://dev.apollodata.com/react/server-side-rendering.html#getDataFromTree"},"getDataFromTree"),". This method returns a promise; at the point in which the promise resolves, our Apollo Client store is completely initialized."),o.default.createElement("p",null,"This example relies on ",o.default.createElement("a",{href:"http://graph.cool"},"graph.cool")," for its GraphQL backend.")))}}},[367]);
            return { page: comp.default }
          })
        