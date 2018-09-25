module.exports = function solveEquation(equation) {
  // your implementation
	let arr=equation.split(' ');
	let a=+arr[0];
	let b=+arr[4];
	let c=+arr[8];
	if(arr[3]=='-') b=-b;
	if(arr[7]=='-') c=-c;
	let d = Math.pow(b,2) - 4 * a * c;
	let x1 = (-b - Math.sqrt(d)) / (2 * a);
	let x2 = (-b + Math.sqrt(d)) / (2 * a);
	let array = [Math.round(x1), Math.round(x2)];
	return array.sort(function(a,b) {
		return a - b;
	});
}
