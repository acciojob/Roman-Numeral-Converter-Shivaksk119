function convertToRoman(num) {
	let obj = {
		0:['M',1000], 
		1:['CM',900], 
		2:['D', 500], 
		3:['CD', 400], 
		4:['C', 100], 
		5:['XC', 90], 
		6:['L', 50], 
		7:['XL', 40], 
		8:['X', 10], 
		9:['IX', 9], 
		10:['V', 5], 
		11:['IV', 4], 
		12:['I', 1]
	};

	let romanNum = "";
	// for (let i = 0;i < obj.length; i++) {
	// 	console.log(obj[i][0]);
	// }
	for (e in obj) {
		while(num>=obj[e][1]) {
			romanNum += obj[e][0];
			num -= obj[e][1];
		}
	};
	return romanNum;
	
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

//console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
