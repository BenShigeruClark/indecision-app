'use strict';

var appRoot = document.getElementById('app');

// const toggle = (e) => {
//   document.getElementById("clickToggle").innerHTML = "Hide Details";
// };

var visibility = false;

var toggleVisibility = function toggleVisibility() {
  visibility = !visibility;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle!'
    ),
    React.createElement(
      'button',
      { onClick: toggleVisibility },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Hey. These are some details you can now see!'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

render();
