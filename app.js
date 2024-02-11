// Calculator


let result = '';
let resultDiv = document.querySelector(".calcResult");


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

  if ( screen.width < 800){
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