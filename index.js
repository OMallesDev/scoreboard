let scoreHome = 0
let scoreGuest = 0
let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function addHome1() {
    scoreHome +=  1
    homeEl.textContent = scoreHome
}

function addHome2() {
    scoreHome +=  2
    homeEl.textContent = scoreHome
}

function addHome3() {
    scoreHome +=  3
    homeEl.textContent = scoreHome
}

function addGuest1() {
    scoreGuest +=  1
    guestEl.textContent = scoreGuest
}

function addGuest2() {
    scoreGuest +=  2
    guestEl.textContent = scoreGuest
}

function addGuest3() {
    scoreGuest +=  3
    guestEl.textContent = scoreGuest
}


function reset() {
    scoreHome = 0
    scoreGuest = 0
    guestEl.textContent = scoreGuest
    homeEl.textContent = scoreHome
}