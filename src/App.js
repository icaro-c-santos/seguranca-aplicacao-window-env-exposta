import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <p>Payment URL: {window.env.PAY_URL}</p>
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
