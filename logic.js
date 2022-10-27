const btn = document.getElementById('result');
const dis = document.getElementById('display');
const dis1 = document.getElementById('display1');
const inp = document.getElementById('input1');
function res(){
	dis.innerHTML = inp.value;
	let k = inp.value;
	dis.innerHTML = eval(k)
}
btn.addEventListener('click',res);