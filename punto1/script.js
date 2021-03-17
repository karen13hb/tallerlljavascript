function suma(){
	let num1 = document.getElementById('numuno').value;
	let num2 = document.getElementById('numdos').value;
	let sumas= parseInt(num1)+parseInt(num2)
	document.getElementById('resultado').innerHTML =sumas;
}