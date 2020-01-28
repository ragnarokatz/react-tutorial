import React from 'react';
import logo from './logo.svg';
import './App.css';

const element = <h1>Hello, world!</h1>;
const element2 = React.createElement(
  'h1',
  { className: 'greeting' },
  'Whats going on, world!'
);

function formatDate(date) {
  return date.toLocaleDateString();
}

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function getGreeting(user) {
  if (user) {
    return <h1>Yo, {formatName(user)}!</h1>;
  }
  return <h1>Yo, Stranger.</h1>;
}

function Welcome(props) {
  return <h1>Welcome, {props.name}</h1>;
}

class Welcome2 extends React.Component {
  render() {
    return <h1>Welcome again, {this.props.name}</h1>;
  }
}

const element4 = <Welcome name="Sara" />;
const element5 = <Welcome2 name="Bowei" />;

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />

  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Toggle />
          Edit <code>src/App.js</code> and save to reload.
          {getGreeting(user)}
          {element}
          {element2}
          <Clock />
          {element4}
          {element5}
          <Welcome name="whatever" />
          <Comment
            date={comment.date}
            text={comment.text}
            author={comment.author}
          />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
