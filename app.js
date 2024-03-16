// Calculator


let result = '';
const resultDiv = document.querySelector(".calcResult");


function calculatorFontSize () {
  if (screen.width < 500) {
    if (result.length > 19){
      resultDiv.style.fontSize = '5cqw';
    }
    else if (result.length > 12) {
      resultDiv.style.fontSize = '7cqw';
    }
    else {
      resultDiv.style.fontSize = '11cqw';
    }
  }
  else if (screen.width < 800) {
    if (result.length > 19){
      resultDiv.style.fontSize = '20px';
    }
    else if (result.length > 12) {
      resultDiv.style.fontSize = '30px';
    }
    else {
      resultDiv.style.fontSize = '50px';
    }
  } else {
    if (result.length > 19){
      resultDiv.style.fontSize = '30px';
    }
    else if (result.length > 12) {
      resultDiv.style.fontSize = '40px';
    }
    else {
      resultDiv.style.fontSize = '60px';
    }
  }
}

function evaluateResult() {
  let evaluation = eval(result);

  if (screen.width < 500) {
    if (evaluation.toString().length > 19){
      resultDiv.style.fontSize = '5cqw';
    }
    else if (evaluation.toString().length > 12) {
      resultDiv.style.fontSize = '7cqw';
    }
    else {
      resultDiv.style.fontSize = '11cqw';
    }
  }
  else if ( screen.width < 800){
    if (evaluation.toString().length > 12) {
      resultDiv.style.fontSize = '30px';
    }
    else {
      resultDiv.style.fontSize = '50px';
    }
  }
  else{
    if (evaluation.toString().length > 12) {
      resultDiv.style.fontSize = '40px';
    }
    else {
      resultDiv.style.fontSize = '60px';
    }
  }

  resultDiv.innerHTML = evaluation
};
function C () {
  result = ''

  resultDiv.innerHTML = result;
}
function addNumber(number) {
  result += number;

  calculatorFontSize ();

  resultDiv.innerHTML = result;
}

function addition(){
  result += ' + ';

  calculatorFontSize ();
  
  resultDiv.innerHTML = result;
}
function substraction(){
  result += ' - ';

  calculatorFontSize ();

  resultDiv.innerHTML = result;
}
function multiplication(){
  result += ' * ';

  calculatorFontSize ();

  resultDiv.innerHTML = result;
}
function division(){
  result += ' / ';

  calculatorFontSize ();

  resultDiv.innerHTML = result;
}
function decimal(){
  result += '.';

  calculatorFontSize ();

  resultDiv.innerHTML = result;
}
function percent () {
   result = result / 100;

   calculatorFontSize ();

   resultDiv.innerHTML = result;
}
 function negNumber () {
   result += '-';

   calculatorFontSize ();

   resultDiv.innerHTML = result;
}













//Random Number Generator

const rngButton = document.getElementsByClassName('randButton')[0];
const rngC = document.getElementsByClassName('randButton')[1];
const rngResult = document.getElementsByClassName('randResult')[0];

rngButton.addEventListener('click', function() {
  let rngMin = document.getElementById('minNumber').value || 0;
  let rngMax = document.getElementById('maxNumber').value || 0;

  rngMin = parseInt(rngMin);
  rngMax = parseInt(rngMax);

  if (rngMin <= rngMax) {
  rngResult.innerText = Math.round(Math.random() * (rngMax - rngMin)) + rngMin;
  } else {
    rngResult.innerText = 'Error';
  }
});
rngC.addEventListener('click', function() {
  let rngMin = document.getElementById('minNumber').value = '';
  let rngMax = document.getElementById('maxNumber').value = '';
  rngResult.innerText = '';
});












//Prime number generator


const prmButton = document.getElementsByClassName('primeButton')[0];
const prmC = document.getElementsByClassName('primeButton')[1];
const prmResult = document.getElementById('primeResult');

prmButton.addEventListener('click', function(){
  let pnums = [];

  let numbers = document.getElementById('primeTo').value;

  for(let n = 0; n <= numbers; n++){
    if (n % 2 != 0 && n % 3 != 0 && n % 5 != 0 && n % 7 != 0 && n % 11 != 0 && n % 13 != 0){
      pnums.push(n);
    } if (n == 2 || n == 3 || n == 5 || n == 7 || n == 11 || n == 13){
      pnums.push(n);
    }
  } 

  prmResult.textContent = pnums.join(', ');
});

prmC.addEventListener('click', function(){
  prmResult.textContent = '';
  document.getElementById('primeTo').value = '';
});







//Variations calculatior

const variButton = document.getElementsByClassName('variationsButton')[0];
const variC = document.getElementsByClassName('variationsButton')[1];
const variResult = document.getElementById('variationsResult');

variButton.addEventListener('click', function(){

  let k = parseInt(document.getElementById('vClass').value);
  let n = parseInt(document.getElementById('vNums').value);

  let nF = 1;
  let knF = 1;

  for (let i = 1; i<=n; i++){
    nF = nF * i
  }

  for (let j = 1; j <= (n - k); j++){
    knF = knF * j
  }

  variResult.textContent = nF / knF;
  
});

variC.addEventListener('click', function(){
  variResult.textContent = '';
  document.getElementById('vClass').value = '';
  document.getElementById('vNums').value = '';
});










//Binom Formula

const binRez = document.getElementById('binomialResult');
const binButton = document.getElementsByClassName('binomialButton')[0];
const binC = document.getElementsByClassName('binomialButton')[1];




binButton.addEventListener('click', function(){

  let layer = parseInt(document.getElementById('exponentB').value) + 1;

  if (document.getElementById('exponentB').value == 0){
    binRez.textContent = 1;
  } else if (document.getElementById('exponentB').value > 0) {
    let lastPascalNums = [];

    for (let i = 0; i <= layer - 1; i++) {
        currentPascalNums = [];

        if (i == 0) {
            currentPascalNums = [1];
            lastPascalNums = currentPascalNums;
        } else {
            if (lastPascalNums.length > 1) {
                currentPascalNums.push(i);

                if (lastPascalNums.length > 2) {
                    if (lastPascalNums.length > 3) {
                        for (let j = 0; j < i - 3; j++) {
                            let num1 = lastPascalNums[1 + j];
                            let num2 = lastPascalNums[2 + j];

                            currentPascalNums.push(num1 + num2);

                            let pascalNewVals = currentPascalNums.slice(
                                2,
                                currentPascalNums.length
                            );
                            pascalNewVals.reverse();

                            currentPascalNums.join(pascalNewVals);
                        }
                    }

                    currentPascalNums.push(i);
                }
            }

            currentPascalNums.push(1);
            currentPascalNums.unshift(1);

            lastPascalNums = currentPascalNums;
        }
    }

    let a = [];
    let b = [];
    let ab = [];

    for (let i = 0; i <= layer -1 ; i++) {
        let iStr = i.toString();

        if (i != 1){
          var reza = "a" + iStr.sup();
          var rezb = "b" + iStr.sup();
        } else{
          var reza = "a";
          var rezb = "b";
        }
  
        a.push(reza);
        b.push(rezb);
    }
    a = a.reverse();

    let j = 0;
    for (let as of a) {
        if (j == 0) {
            ab.push(as);
        } else if (j == layer - 1) {
            ab.push(b[j]);
        } else {
            ab.push(as + b[j]);
        }

        j++;
    }

    let formula = [];
    let k = 0;
    for (let n of currentPascalNums) {

      if (n != 1) {
        formula.push(n + ab[k]);
      } else{
      formula.push(ab[k]);
      }

      k++;
    }
    formula = formula.join(" + ");

    binRez.innerHTML = formula;
  } else{
    binRez.textContent = 'Error';
  }
});


binC.addEventListener('click', function(){
  binRez.textContent = '';
  document.getElementById('exponentB').value = '';
});