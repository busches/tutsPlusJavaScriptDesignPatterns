var foo = {};

var bar = Object.create(Object.prototype);

var johnDoe = {
	firstName: 'John',
	lastName: 'Doe',
	sayName: function() {
		return 'My name is ' + this.firstName + ' ' + this.lastName;
	}
};

var janeDoe = Object.create(johnDoe, {
	firstName: {
		value: 'Jane'
	},
	greet: {
		value: function(person) {
			return 'Hello, ' + person.firstName;
		}
	}
});

var jimSmith = Object.create(janeDoe, {
	firstName: {
		value: 'Jim'
	},
	lastName: {
		value: 'Smith'
	}
});

console.log(johnDoe.sayName());
console.log(janeDoe.sayName() + " " + janeDoe.greet(johnDoe));
console.log(jimSmith.sayName() + " " + jimSmith.greet(janeDoe));

console.log(janeDoe.__proto__ === johnDoe);
console.log(jimSmith.__proto__ === janeDoe);
