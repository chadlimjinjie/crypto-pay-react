import React, { useEffect, useState } from 'react';
import axios from 'axios';

export function Checkout({ username = "sk_test_dKS4ndo9FdX3rpKpAfGjTA1L:", paymentAmount = 100, paymentCurrency = "USD", productDescription = "Product Name", returnUrl = "", cancelUrl = "", onApprove }) {

    // const [cryptoPay, setCryptoPay] = useState(window.cryptopay);
    const [paymentId, setPaymentId] = useState("");

    useEffect(() => {
        // var paymentId = document.querySelector('#pay-button').dataset.paymentId;
        if (!paymentId) {
            createPayment(paymentAmount, paymentCurrency, productDescription);
        }
        if (paymentId) {
            console.log(paymentId);
            window.cryptopay.Button({
                createPayment: function (actions) {
                    return actions.payment.fetch(paymentId);
                },
                onApprove: function (data, actions) {
                    // Optional: add logic such as browser redirection or check data object content
                    // console.log(data, actions);
                    if (!onApprove) return;
                    // if (!paymentId) return;
                    onApprove(data);
                },
                defaultLang: 'en-US' // Optional: default language for payment page
            }).render("#pay-button");
        }
    }, [paymentId]);

    function createPayment(paymentAmount, paymentCurrency, productDescription) {
        let payload = {
            amount: paymentAmount,
            currency: paymentCurrency,
            description: productDescription
        };
        if (returnUrl && cancelUrl) {
            payload.return_url = returnUrl;
            payload.cancel_url = cancelUrl;
        }
        axios.post('https://pay.crypto.com/api/payments', payload, {
            auth: {
                username: username,
            }
        }).then(response => {
            console.log(response);
            setPaymentId(response.data.id);
        });
    }

    return (
        <div id="pay-button" data-payment-id={paymentId}></div>
    )
}
