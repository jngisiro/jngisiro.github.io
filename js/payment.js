const username = '1ef58ced1109c34f';
const password = 'f5b2a3833a024d82';
const action = 'cardpayment';
const currency = 'USD';
const reference = 'default';
const reason = 'deposit';

// Card Number 4842245690686386
// CVV 701

// POST URL
const URL = 'https://www.easypay.co.ug/api/';

const makePayment = async () => {
  console.log('Making payment');

  const amount = document.querySelector('#amount').value;
  const name = document.querySelector('#cardName').value;
  const cardno = document.querySelector('#cardNumber').value;
  const cvv = document.querySelector('#cvv').value;
  const month = document.querySelector('#month').value;
  const year = document.querySelector('#year').value;
  const email = document.querySelector('#email').value;
  const address = document.querySelector('#address').value;
  const city = document.querySelector('#city').value;
  const state = document.querySelector('#state').value;
  const zip = document.querySelector('#zip').value;
  const country = document.querySelector('#country').value;
  const phone = document.querySelector('#phone').value;

  const payload = {
    username,
    password,
    action,
    amount,
    currency,
    name,
    cardno,
    cvv,
    month,
    year,
    email,
    address,
    city,
    state,
    zip,
    country,
    phone,
    reference,
    reason,
  };

  if (
    username &&
    password &&
    action &&
    amount &&
    currency &&
    name &&
    cardno &&
    cvv &&
    month &&
    year &&
    email &&
    address &&
    city &&
    state &&
    zip &&
    country &&
    phone &&
    reference &&
    reason
  ) {
    console.log(payload);

    try {
      const response = await fetch(URL, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
      });

      console.log(response.json());
    } catch (err) {
      console.log('Error: ', err);
    }
  }
};
