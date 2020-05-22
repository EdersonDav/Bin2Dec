
let bin = true;
let dec = false;

//Verify if calc is to binary or decimal
function verifyCalc(button) {
  bin = button.id == "binary" ? true : false
  dec = button.id == "decimal" ? true : false
  boxShadow(button)
}

function boxShadow(button) {
  let addShadow = document.querySelectorAll(".binarydecimal")
  for (let Shadow of addShadow) {
    if (Shadow.id != button.id) {
      Shadow.style.boxShadow = "1px 1px 1px 2px rgba(0,0,0,0.45)"
    }
    else {
      button.style.boxShadow = "none"
    }
  }
}