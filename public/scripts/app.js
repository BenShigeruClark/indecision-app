'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML 
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      'Item one'
    ),
    React.createElement(
      'li',
      null,
      'Item two'
    )
  )
);

// Create a templateTwo var JSX experession
// div 
//  h1 -> your name
// p -> Age: your age
// p -> Location: Your State
// Render templateTwo instead of template
var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ben Clark'
  ),
  React.createElement(
    'p',
    null,
    'Age: 46'
  ),
  React.createElement(
    'p',
    null,
    'Location: California'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
