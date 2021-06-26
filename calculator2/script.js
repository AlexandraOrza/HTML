// alert('Hello world!');
// console.log('Hello world!');
const myName = 'Andrei';
// myName = 5;
// myName = false;
let isOk = false;
console.log('Hello '+ myName);

//ES5
function multiply(p1, p2) {
	return p1 * p2;
}
function twoNumbersDivision(p1, p2){
	return p1 / p2;
}
//ES6
const addNumbers = (p1,p2) => {
	return Number(p1) + Number(p2);
}
const substract = (p1,p2) => {
	return Number(p1) - Number(p2);
}


/*const addNumbers(p3,p4){
	return p3 + p4;
}*/

const fibonacci = (num) => {
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 0;
    for (i = 0; i < num; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
		console.log(sum);
    }
    return num2;
}

let element = document.getElementById('blackMirrorId');
element.innerHTML="<h6>BLACK MIRROR</h6>";
element.style="color: red; transform: rotate(180deg);";

function expand (p) {
	let galleryImgs = document.getElementsByClassName('galleryImage');
	for(let i=0;i<galleryImgs.length;i++){
		galleryImgs[i].style = "width:100px;height:100px;"
	}
	let element = document.getElementById('f'+ p);
	element.style = "width:300px;height:300px;";
}

function doCalculate ()  {
	let element = document.getElementById("calcul");
	let result = fibonacci(element.value);
	let resEl = document.getElementById("res");
	resEl.innerHTML = result;
}

function doClear() {
	let element = document.getElementById("calcul");
	element.value = 0;
	let resEl = document.getElementById("res");
	resEl.innerHTML = '';
}

function doAddNumbers(){
	var element1 = document.getElementById("calcul1");
	var element2 = document.getElementById("calcul2");
	var result = addNumbers(element1.value , element2.value);
	var resEl = document.getElementById("res");
	resEl.innerHTML = result;
}

function doMultiplyNumbers(){
	var element1 = document.getElementById("calcul1");
	var element2 = document.getElementById("calcul2");
	var result = multiply(element1.value , element2.value);
	var resEl = document.getElementById("res");
	resEl.innerHTML = result;
}

function doSubstractNumbers(){
	var element1 = document.getElementById("calcul1");
	var element2 = document.getElementById("calcul2");
	var result = substract(element1.value , element2.value);
	var resEl = document.getElementById("res");
	resEl.innerHTML = result;
}

function doDivisionNumbers(){
	var element1 = document.getElementById("calcul1");
	var element2 = document.getElementById("calcul2");
	var result = twoNumbersDivision(element1.value , element2.value);
	var resEl = document.getElementById("res");
	resEl.innerHTML = result;
}