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