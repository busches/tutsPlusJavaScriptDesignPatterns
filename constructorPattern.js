function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;

	this.hi = function() {
		return 'Hi';
	};
}

Person.prototype.sayName = function() {
	return 'My name is ' + this.firstName + ' ' + this.lastName;
};

var johnDoe = new Person('John', 'Doe');
var janeDoe = new Person('Jane', 'Doe');

var isPerson = johnDoe instanceof Person;
console.log(isPerson);

var isSame = johnDoe.sayName === janeDoe.sayName;
console.log(isSame); // true with protoype

var isSameHi = johnDoe.hi === janeDoe.hi;
console.log(isSameHi); // false with object literal