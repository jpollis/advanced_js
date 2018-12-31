// Function constructor

/*
var john = {
	name: 'John',
	yearOfBirth: 1990,
	job: 'teacher'
};
*/
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





