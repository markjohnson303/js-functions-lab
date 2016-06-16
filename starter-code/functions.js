// Question 1
function maxOfTwoNumbers(a, b) {
	if (a>b){
		return a;
	} else if (a<b){
		return b;
	} else {
		return "Numbers are equal, dummy!";
	}
}

// Question 2
function maxOfThree(a, b, c) {
	if (a>b && a>c){
		return a;
	} else if (b>a && b>c){
		return b;
	} else if (c>a && c>b){
		return c;
	} else {
		return "Numbers are equal, dummy!";
	}
}

// Question 3
function isCharacterAVowel(letter) {
	if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u'){
		return true;
	} else {
		return false;
	}
}

// Question 4
function sumArray(array) {
	var sum = 0;
 	for (var i = 0; i < array.length; i++) {
 		sum += array[i];
 	}
 	return sum;
}

// Question 4
function multiplyArray() {
	var answer = 1;
 	for (var i = 0; i < array.length; i++) {
 		answer *= array[i];
 	}
 	return answer;
}


// Question 5
var numberOfArguments = function(){
  return arguments.length;
};



// Question 6
var reverseString = function (string){
	var reversedString = "";
	for (var i = string.length - 1; i = 0; i--) {
		reversedString += string.charAt(i)
	}
	return reversedString;
};


// Question 7
function findLongestWord () {
  
}


// Question 8
function filterLongWords () {
  
}


// Bonus 1
function charactersOccurencesCount() {
  
}

