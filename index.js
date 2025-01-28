/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertBtn = document.querySelector("#convert-btn")
const inputTxt = document.querySelector("#input-txt")
convertBtn.addEventListener("click", () => {
    const value = Number(inputTxt.value)

    // Tested - Button works!
    // console.log(calcMetersToFeet(value))
    // console.log(calcLitersToGallons(value))
    // console.log(calcKilosToPounds(value))

})

// Let's aim for DRY

// function render(element) {
//     const meters = document.querySelector("#meters")
//     const liters = document.querySelector("#liters")
//     const kilos = document.querySelector("#kilos")


// }

function renderHTML(elementId, inputValue, result) {
    const el = document.querySelector(`#${elementId}`)
}

function calcMetersToFeet(meters) {
    return (meters * 3.281).toFixed(3)
}

function calcLitersToGallons(liters) {
    return (liters * 0.264).toFixed(3)
}

function calcKilosToPounds(kilos) {
    return (kilos * 2.204).toFixed(3)
}