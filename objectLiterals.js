var obj = {
	firstName: 'Scott',
	lastName: 'McPeak'
};

obj.firstName = 'Scott';
obj['lastName'] = 'McPeak';

var firstName = obj['firstName'];
var lastName = obj.lastName;

Object.defineProperty(obj, 'country', {
	value: 'USA'
});

Object.defineProperties(obj, {
	twitter: {
		value: 'blahblah'
	},
	email: {
		value: 'peak@blah.com'
	}
});