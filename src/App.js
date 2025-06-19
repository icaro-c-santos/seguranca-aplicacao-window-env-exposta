import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div style={{ padding: 25 }}>
      <h1>DevSecOps Demo</h1>
      <p>API Key: {window.env.API_KEY}</p>
      <p>Payment URL: {window.env.PAY_URL}</p>
    </div>
  );
}
export default App;
