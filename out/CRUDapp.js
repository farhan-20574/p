"use strict";
const stdName = document.getElementById("stdInput");
const stdMaj = document.getElementById("majInput");
const submitBtn = document.getElementById("submit");
const tableBody = document.getElementById("tbody");
submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let name = stdName.value;
    let major = stdMaj.value;
    console.log('button pressd');
    if (name && major) {
    }
});
