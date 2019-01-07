// Function constructor

/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};
*/

/*
var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}


Person.prototype.calculateAge = function() {
		console.log(2018 - this.yearOfBirth);
	}


//Person.prototype.lastName = 'Smith';

var john = new Person('john', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1950, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();


// creating my own constructor and prototype

var Animal = function(name, type, breed, sex) {
	this.name = name;
	this.type = type;
	this.breed = breed;
	this.sex = sex;
}

Animal.prototype.doesBark = function() {
	if (this.type === 'dog') {
		console.log(this.name + ' barks!');
	} else {
		console.log(this.name + ' does not bark!');
	}
}

var koda = new Animal('Koda', 'dog', 'pitbull', 'male');
koda.doesBark();

var pussyCat = new Animal('puss in boots', 'cat', 'siamese', 'female');
pussyCat.doesBark();

*/


// Object.create method


var personProto = {
	calculateAge: function() {
		console.log(2018 - this.yearOfBirth);
	}
};

var john = Object.create(personProto);

john.name = 'john';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
	name: { value: 'jane' },
	yearOfBirth: { value: 1975 },
	job: { value: 'designer' }
});


// primitives vs objects


// primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);


// objects
var obj1 = {
	name: 'john',
	age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// functions

var age = 27;
var obj = {
	name: 'Joe',
	city: 'fort lauderdale'
};

function change(a, b) {
	a = 30;
	b.city = 'San Francisco';
}

change(age, obj);

console.log(age);
console.log(obj.city);


/************************
** Passing functions as arguments
*/

var years = [1990, 1988, 1975, 1945, 2010];

function arrayCalc(arr, func) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(func(arr[i]));
	}
	return newArr;
}

function calculateAge(year) {
	return 2018 - year;
}

function isFullAge(year) {
	return year >= 18;
}

function maxHeartRate(year) {
	if (year >= 18 && year <= 81) {
		return Math.round(206.9 - (0.67 * year));
	} else {
		return -1;
	}
}

var ages = arrayCalc(years, calculateAge);
var fullAge = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(fullAge);
console.log(rates);



/************************
** Functions returning functions
*/

function interviewQuestion(job) {
	if (job === 'designer') {
		return function(name) {
			console.log(name + ', can you explain what a UI is?');
		}
	} else if (job === 'teacher') {
		return function(name) {
			console.log('what subject do you teach, ' + name + '?');
		}
	} else {
		return function(name) {
			console.log('What exactly do you do?');
		}
	}
}

// storing the first function in a variable
var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var miscQuestion = interviewQuestion('solutions engineer');
//then calling the 2nd function according to the job
teacherQuestion('Greg');
designerQuestion('Alex');
miscQuestion('Joe');


//calling both functions at the same time
interviewQuestion('designer')('Joe');



/********************
** IIFE
*/

/*
function game() {
	var score = Math.random * 10;
	console.log(score >= 5);
}

game();
*/

(function () {
	var score = Math.random * 10;
	console.log(score >= 5);
})();

//console.log(score);



(function (goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})(5);



/******************
** Closures
*/

function retirement(retirementAge) {
	var a = ' years until retirement.';
	return function(yearOfBirth) {
		var age = 2018 - yearOfBirth;
		console.log((retirementAge - age) + a);
	}
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementUS(1990);
retirementIceland(1990);

function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log('What does a designer do, ' + name + '?');
		} else if (job === 'teacher') {
			console.log(name + ', what subject do you teach?');
		} else {
			console.log('what do you do?');
		}
	}
}

//call both functions at once
interviewQuestion('designer')('alex');
//or assign first function to a variable
var designerQuestion = interviewQuestion('designer');
designerQuestion('alex');


// IIFE version
(function interviewQuestion(job) {
	return function(name) {
		if (job === 'designer') {
			console.log('What does a designer do, ' + name + '?');
		} else if (job === 'teacher') {
			console.log(name + ', what subject do you teach?');
		} else {
			console.log('what do you do?');
		}
	}
})('teacher')('joe');


/***************************
** Bind, call and apply
*/

var john = {
	name: 'john',
	age: 26,
	job: 'designer',
	presentation: function(style, timeOfDay) {
	if (style === 'formal') {
		console.log('Good ' + timeOfDay + ', Ladies and gentlemen! My name is ' + this.name + '. I am a ' + this.job + ' and ' + this.age + ' years old.');
	} else if (style === 'friendly') {
			console.log("Hey! What's up? I'm " + this.name + ". I'm a " + this.job + ", and I'm " + this.age + " years old!" + " Have a nice " + timeOfDay + "!");
		}
	}
}

john.presentation('formal', 'morning');

var emily = {
	name: 'Emily',
	age: 34,
	job: 'teacher'
}

// call method to apply a method from another object
john.presentation.call(emily, 'friendly', 'evening');

// apply method same as call but takes an array as the 2nd arg 
john.presentation.apply(emily, ['formal', 'afternoon']);

// bind method to preset args
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');

var emilyFormal = john.presentation.bind(emily, 'formal');

emilyFormal('evening');



// using bind method for funcs as arguments
var years = [1990, 1988, 1975, 1945, 2010];

function arrayCalc(arr, func) {
	var newArr = [];
	for (var i = 0; i < arr.length; i++) {
		newArr.push(func(arr[i]));
	}
	return newArr;
}

function calculateAge(year) {
	return 2018 - year;
}

function isFullAge(limit, year) {
	return year >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);




































































