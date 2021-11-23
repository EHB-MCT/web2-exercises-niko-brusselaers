"use strict"


function compareNumber(generatedNumber, guessNumber) {
    let promise = new promise(function (resolve, reject) {
        let generatedNumber = Math.floor(Math.random() * 100);

        if (generatedNumber == guessNumber) {
            resolve("you have the right number")
        }
    })

}
}


document.getElementById('guessNumberForm').addEventListener('submit', event => {
    event.preventDefault();
    let guessNumber = 21 //document.getElementById('guessnumber').value
    console.log(guessNumber);


})