'use strict';

window.onload = function () {
    console.log("the page is loaded");

    document.getElementById('form').addEventListener('submit', event => {
        event.preventDefault();
        let person = {
            name,
            email,
            order,

            orderDetails : function(){
                return `<p> the  order of ${this.order} for ${this.name} will be made and a mail will be sent to ${this.email} </p>`
            }
        }
        person.name = document.getElementById('name').value;
        person.email = document.getElementById('email').value;
        person.order = document.getElementById('order').value;
       
        console.log(person.orderDetails());
        document.getElementById('message').innerHTML = person.orderDetails();
    })
};