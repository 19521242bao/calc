function calculation() {
    document.calc.output.value = eval(document.calc.output.value);
    
}

function xoa() {
	document.calc.output.value = '';
}

// variable s contains the actual value of the button pressed 
function nhap(s) {
	document.calc.output.value+=s;
}
function abs1(a){
	return Math.abs(a);
}
function absfunction(){
	let x=document.calc.output.value;
	document.calc.output.value =eval("Math.abs(x)");
}
function tinhGiaiThua(x){
	let s=1;
	for(let i=1;i<=x;i++)
		s*=i;
	return s;
}
function giaithua(){
	let x=document.calc.output.value;
	document.calc.output.value=eval('tinhGiaiThua(x)');
}
function pow()
{
	let x=document.calc.output.value;
	document.calc.output.value=eval("Math.pow(x,2)");
}
function sqrt()
{
	let x=document.calc.output.value;
	document.calc.output.value=eval("Math.sqrt(x)");
}