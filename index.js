/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound

Length (Meter/Feet)
20 meters = 65.616 feet | 20 feet = 6.096 meters

Volume (Liters/Gallons)
20 liters = 5.284 gallons | 20 gallons = 75.708 liters

Mass (Kilograms/Pounds)
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos

*/

const METERS_TO_FEET = 3.28084
const LITERS_TO_GALLONS = 0.264172
const KILOS_TO_POUNDS = 2.20462

const conversion = {
    "meters": (meters) => {return (meters * METERS_TO_FEET).toFixed(3)},
    "liters": (liters) => {return (liters * LITERS_TO_GALLONS).toFixed(3)},
    "kilos": (kilos) => {return (kilos * KILOS_TO_POUNDS).toFixed(3)}
}

const convertBtn = document.querySelector("#convert-btn")
const inputTxt = document.querySelector("#input-txt")
convertBtn.addEventListener("click", () => {
    const value = Number(inputTxt.value)

    // Tested - Button works!
    // console.log(calcMetersToFeet(value))
    // console.log(calcLitersToGallons(value))
    // console.log(calcKilosToPounds(value))

})

console.log(conversion["meters"](20))

// Let's aim for DRY

// function render(element) {
//     const meters = document.querySelector("#meters")
//     const liters = document.querySelector("#liters")
//     const kilos = document.querySelector("#kilos")


// }

function renderHTML(elementId, inputValue, result) {
    const el = document.querySelector(`#${elementId}`)
}
