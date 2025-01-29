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
    "meters": [METERS_TO_FEET, "feet"],
    "liters": [LITERS_TO_GALLONS, "gallons"],
    "kilos": [KILOS_TO_POUNDS, "pounds"]
}

function convert(el, value) {
    return (value * conversion[el.getAttribute("name")][0]).toFixed(3)
}

function reverseConvert(el, value) {
    return (value / conversion[el.getAttribute("name")][0]).toFixed(3)
}

const metersEl = document.querySelector("#meter")
const litersEl = document.querySelector("#liter")
const kilosEl = document.querySelector("#kilo")

function renderHTML(el, inputValue) {
    const calculation = convert(el, inputValue)
    const reverseCalculation = reverseConvert(el, inputValue)
    const convertFrom = el.getAttribute("name")
    const convertTo = conversion[convertFrom][1]

    el.innerHTML = `${inputValue} ${convertFrom} = ${calculation} ${convertTo} | 
        ${inputValue} ${conversion[convertFrom][1]} = ${reverseCalculation} ${convertFrom}`
}

const convertBtn = document.querySelector("#convert-btn")
const inputTxt = document.querySelector("#input-txt")
convertBtn.addEventListener("click", () => {
    const value = Number(inputTxt.value)
    renderHTML(metersEl, value)
    renderHTML(litersEl, value)
    renderHTML(kilosEl, value)
})
