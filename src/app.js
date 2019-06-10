console.log('App.js is running!');

// creat app object title/subtitle
// user title/subtitle in the template
// render template

// JSX - JavaScript XML 
var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer!'
}

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: 'Benjamin',
  age: 46,
  location: 'California'
}

var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);