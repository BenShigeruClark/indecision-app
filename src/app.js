console.log('App.js is running!');

// JSX - JavaScript XML 
var template = (
  <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

// Create a templateTwo var JSX experession
// div 
//  h1 -> your name
// p -> Age: your age
// p -> Location: Your State
// Render templateTwo instead of template
var templateTwo = (
  <div>
    <h1>Ben Clark</h1>
    <p>Age: 46</p>
    <p>Location: California</p>
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);