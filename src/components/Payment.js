import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Payment() {

    // const [cryptoPay, setCryptoPay] = useState(window.cryptopay);
    const [paymentId, setPaymentId] = useState("");

    useEffect(() => {
        // var paymentId = document.querySelector('#pay-button').dataset.paymentId;
        if (!paymentId) {
            createPayment();
        }
        if (paymentId) {
            console.log(paymentId);
            window.cryptopay.Button({
                createPayment: function (actions) {
                    return actions.payment.fetch(paymentId)
                },
                onApprove: function (data, actions) {
                    // Optional: add logic such as browser redirection or check data object content
                    console.log(data, actions);
                    console.log('Payment Approved');
                },
                defaultLang: 'en-US' // Optional: default language for payment page
            }).render("#pay-button");
        }
    }, [paymentId]);

    function createPayment() {
        axios.post('https://pay.crypto.com/api/payments', {
            amount: 1000.00,
            currency: 'USD',
            description: 'Product Name'
        }, {
            auth: {
                username: 'sk_test_dKS4ndo9FdX3rpKpAfGjTA1L',
                // password: 's00pers3cret'
            }
        }).then(response => {
            console.log(response);
            setPaymentId(response.data.id);
        });
    }

    return (
        <div>
            <div id="pay-button" data-payment-id="PAYMENT_UNIQUE_ID"></div>
        </div>
    )
}
