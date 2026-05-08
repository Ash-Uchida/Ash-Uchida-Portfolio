const theForm = document.querySelector('#checkoutForm');

function displayError(msg) {
    document.querySelector('.errors').textContent = msg;
}

function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function submitHandler(event) {
    event.preventDefault();
    let errorMsg = '';
    displayError('');

    const cardNum = document.querySelector('#creditCardNumber').value.trim();
    const cvv = document.querySelector('#cvv').value.trim();
    const expYear = Number(document.querySelector('#expirationYY').value);
    const expMonth = Number(document.querySelector('#expirationMM').value);

    // Card number validation
    if (!/^\d{16}$/.test(cardNum)) {
        errorMsg += 'Card number must be 16 digits\n';
    } else if (!isCardNumberValid(cardNum)) {
        errorMsg += 'Card number is not valid\n';
    }

    // CVV validation
    if (!/^\d{3}$/.test(cvv)) {
        errorMsg += 'CVV must be 3 digits\n';
    }

    // Expiration validation
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    if (
        2000 + expYear < currentYear ||
        (2000 + expYear === currentYear && expMonth < currentMonth)
    ) {
        errorMsg += 'Card is expired\n';
    }

    if (errorMsg !== '') {
        displayError(errorMsg);
        return;
    }

    theForm.innerHTML = '<h2>Thank you for your purchase.</h2>';
}

theForm.addEventListener('submit', submitHandler);