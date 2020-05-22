let bin = true;
let dec = false;
let numbers = document.getElementById("numbers");

//Verify if calc is to binary or decimal
function verifyCalc(button) {
  bin = button.id == "binary" ? true : false;
  dec = button.id == "decimal" ? true : false;
  alterLabel();
  alterPlac();
  boxShadow(button);
}

//Change boxShadow in buttons
function boxShadow(button) {
  let addShadow = document.querySelectorAll(".binarydecimal");
  for (let Shadow of addShadow) {
    if (Shadow.id != button.id) {
      Shadow.style.boxShadow = "2px 2px 2px 2px rgba(0,0,0,0.45)";
    }
    else {
      button.style.boxShadow = "none";
    };
  };
};

//Alter placeholder
function alterPlac() {
  let numbers = document.getElementById("numbers");
  numbers.placeholder = bin ? "1010101010101010" : "99999999999999";
}

//Alter label input
function alterLabel() {
  let label = document.querySelector(".label");
  label.innerText = bin ? "Input number binary:" : "Input number decimal:";
}

//Capture values 
function values() {
  let numbers = document.getElementById("numbers");
  return numbers.value;
}

//Convert numbers
function convert() {
  let htmlResult = document.getElementById("result");
  htmlResult.innerHTML = '';
  let textResults = bin ? convertBinary() : convertDecimal();
  htmlResult.innerHTML += bin ? `Result in decimal: ${textResults}` : `Result in binary: ${textResults}`;
};

// Convert to Binary
function convertBinary() {
  let array;
  let arrayNumeric;
  let arrayResultBin = [];
  let valid = false;

  array = Array.from(values());
  arrayNumeric = array.map(numer => Number(numer));

  for (let num of arrayNumeric) {
    if (num > 1 || num < 0) {
      valid = true;
    };
  };

  if (valid) {
    alert("Number entered is not binary");
    return 0;
  } else {
    let pow = arrayNumeric.length - 1;
    for (let array of arrayNumeric) {
      let mult = array == 0 ? 0 : 1;
      let result = mult * (Math.pow(2, pow));
      arrayResultBin.push(result);
      pow--;
    };
    return arrayResultBin.reduce((result, number) => result + number, 0);
  };
};

//Convert to decimal
function convertDecimal() {
  let arrayBinary = [];
  let mod = 0;
  let valueDec = values();
  if (valueDec > 0) {
    while (valueDec > 1) {
      mod = valueDec % 2;
      valueDec = valueDec / 2;
      arrayBinary.push(Math.trunc(mod));
    };
    if (mod == 0) {
      arrayBinary.push(1);
    };
    let resultBin = arrayBinary.reverse();
    return resultBin.join('');
  } else {
    return 0
  };
};


