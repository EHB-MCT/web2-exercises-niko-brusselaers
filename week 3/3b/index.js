"use strict"

let baseurl = "http://www.omdbapi.com/?apikey=c92ba7b8&"


window.onload = function () {
    console.log('loaded');
}

document.getElementById('searchform').addEventListener('submit', Event => {
    Event.preventDefault();
    let title = document.getElementById('inputTitle').value
    let url =
})

async function getData(url) {
    let response = await fetch(url)
    return await response.json()

}