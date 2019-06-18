class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a comuter</h2>
      </div>
    );
  }
}


class Action extends React.Component {
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

// Options -> Options component here
class Options extends React.Component {
  render() {
    return (
      <div>
        Options component here
        <Option />
      </div>
    );
  }
}

// Option -> Option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        Option component here
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