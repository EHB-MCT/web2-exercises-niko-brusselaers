'use strict';

window.onload = function () {
    console.log("the page is loaded");

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const order = document.getElementById('order').value;

        const message = `<p> the  order of ${order} for ${name} will be made and a mail will be sent to ${email}
    </p>`;

        document.getElementById('message').innerHTML = message;
    })
};