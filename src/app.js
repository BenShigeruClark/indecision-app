class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <Option />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}


class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

// Add Remove all button
// setup handleRemoveAll -> alert some message
// set onClick to fire the method

class Options extends React.Component {
  render() {
    return (
      <div>
        <ol>
          {
            this.props.options.map((option) => <Option key={option} optionText={option}/>)
          }
        </ol>
      </div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

// AddOption -> addOption component here
class AddOption extends React.Component {
  render() {
    return (
      <div>
        addOption component here
      </div>
    )
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));