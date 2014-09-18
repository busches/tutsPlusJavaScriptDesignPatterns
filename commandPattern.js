function Calculator() {
	this._currentValue = 0;
	this.commands = [];
}

Calculator.prototype = {
	execute: function(command) {
		this._currentValue = command.execute(this._currentValue);
		this.commands.push(command);
	},
	getCurrentValue: function() {
		return this._currentValue;
	},
	undo: function() {
		var lastCommand = this.commands.pop();
		this._currentValue = lastCommand.undo(this._currentValue);
	}
};

function add(value) {
	return value + this.value;
}

function sub(value) {
	return value - this.value;
}

function Command(fn, undo, value) {
	this.execute = fn;
	this.undo = undo;
	this.value = value;
}

function addCommand(value) {
	Command.call(this, add, sub, value);
}

function subCommand(value) {
	Command.call(this, sub, add, value);
}

var calc = new Calculator();
calc.execute(new addCommand(20));
console.log(calc.getCurrentValue());
calc.execute(new subCommand(2));
console.log(calc.getCurrentValue());
calc.undo();
console.log(calc.getCurrentValue());