// import logo from './logo.svg';
// import './App.css';

import { Checkout } from './components/Checkout';
import axios from 'axios';

export default function App() {

  function onApprove(data) {
    // Optional: add logic such as browser redirection or check data object content
    console.log("onApprove");
    console.log(data);
    switch (data.status) {
      case 'succeeded':
        // On server side, retrieve the payment and check whether the payment status is succeeded. See all the statuses here.
        // If payment succeeded on server create the order.
        axios.post('https://api.chadlim1.repl.co/api/crypto-pay/create-order', {
          payment_id: data.id,
        });
        break;
    }
  }

  return (

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: '100vh',
      }}>

        <Checkout onApprove={onApprove} />
      </div>

  );
}
