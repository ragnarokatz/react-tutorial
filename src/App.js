import React from 'react';
import logo from './logo.svg';
import './App.css';

const element = <h1>Hello, world!</h1>;
const element2 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Whats going on, world!'
);

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

function Weclome(props) {

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {getGreeting(user)}
          {element}
          {element2}
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
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
