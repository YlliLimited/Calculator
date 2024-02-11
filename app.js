let result = '';
let resultDiv = document.querySelector(".calcResult");


function evaluateResult() {
  let evaluation = eval(result);

  if (evaluation.toString().length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }

  resultDiv.innerHTML = evaluation
};

function C () {
  result = ''

  resultDiv.innerHTML = result;
}

function addNumber(number) {
  result += number;

  if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }

  console.log(result.length);

  resultDiv.innerHTML = result;
}

function addition(){
  result += ' + ';

  if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }
  
  resultDiv.innerHTML = result;
}
function substraction(){
  result += ' - ';

  if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }

  resultDiv.innerHTML = result;
}
function multiplication(){
  result += ' * ';

  if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }

  resultDiv.innerHTML = result;
}
function division(){
  result += ' / ';

  if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }

  resultDiv.innerHTML = result;
}
function decimal(){
  result += '.';

  if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }

  resultDiv.innerHTML = result;
}
function percent () {
   result = result / 100;

   if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }

   resultDiv.innerHTML = result;
}
 function negNumber () {
   result += '-';

   if (result.length > 19){
    resultDiv.style.fontSize = '30px';
  }
  else if (result.length > 12) {
    resultDiv.style.fontSize = '40px';
  }
  else {
    resultDiv.style.fontSize = '60px';
  }resultDiv.style.fontSize = '60px';

   resultDiv.innerHTML = result;
}