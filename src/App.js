import logo from './logo.svg';
import './App.css';

import { Payment } from './components/Payment';

function App() {

  function onApprove(data) {
    console.log("onApprove");
    console.log(data);
  }

  return (
    <div className="App">
      <Payment onApprove={onApprove} />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
