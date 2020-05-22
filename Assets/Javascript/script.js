let bin = true;
let dec = false;

//Verify if calc is to binary or decimal
function verifyCalc(button) {
  bin = button.id == "binary" ? true : false
  dec = button.id == "decimal" ? true : false
  alterLabel()
  boxShadow(button)
}

//Change boxShadow in buttons
function boxShadow(button) {
  let addShadow = document.querySelectorAll(".binarydecimal")
  for (let Shadow of addShadow) {
    if (Shadow.id != button.id) {
      Shadow.style.boxShadow = "2px 2px 2px 2px rgba(0,0,0,0.45)"
    }
    else {
      button.style.boxShadow = "none"
    }
  }
}

//Alter label input
function alterLabel() {
  let label = document.querySelector(".label")
  label.innerText = bin ? "Input number binary:" : "Input number decimal:"
}

//Capture values 
function values() {
  let numbers = document.getElementById("numbers")
  return numbers.value
}

//Convert numbers
function convert() {
  let htmlResult = document.getElementById("result")
  htmlResult.innerHTML = ''
  let textResults = bin ? convertBinary() : convertDecimal()
  htmlResult.innerHTML += `Result: ${textResults}`
}

// Convert Binary
function convertBinary() {
  let array;
  let arrayNumeric;
  let arrayResultBin = [];

  array = Array.from(values())
  arrayNumeric = array.map(numer => Number(numer))

  let pow = arrayNumeric.length - 1
  for (let array of arrayNumeric) {
    let mult = array == 0 ? 0 : 1
    let result = mult * (Math.pow(2, pow))
    arrayResultBin.push(result)
    pow--
  }

  return arrayResultBin.reduce((result, number) => result + number, 0)
}