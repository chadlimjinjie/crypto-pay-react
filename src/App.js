// import logo from './logo.svg';
import './App.css';

import { Payment } from './components/Payment';
import axios from 'axios';

function App() {

  function onApprove(data) {
    // Optional: add logic such as browser redirection or check data object content
    console.log("onApprove");
    console.log(data);
    switch (data.status) {
      case 'succeeded':
        // On server side, retrieve the payment and check whether the payment status is succeeded. See all the statuses here.
        // If payment succeeded on server create the order.
        axios.post('https://api.chadlim1.repl.co/crypto-pay/create-order', {
          payment_id: data.id,
        });
        break;
    }
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
