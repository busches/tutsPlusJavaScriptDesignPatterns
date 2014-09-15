function Beverage() {
	this._cost = 0;
}

Beverage.prototype.cost = function() {
	return this._cost;
};

function BeverageDecorator(beverage) {
	Beverage.call(this);
	this.beverage = beverage;
}

BeverageDecorator.prototype = Object.create(Beverage.prototype);

BeverageDecorator.prototype.cost = function() {
	return this._cost + this.beverage.cost();
};

function Coffee() {
	Beverage.call(this);
	this._cost = 5;
}

Coffee.prototype = Object.create(Beverage.prototype);

function Small(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = -1;
}

Small.prototype = Object.create(BeverageDecorator.prototype);

function Medium(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 0;
}

Medium.prototype = Object.create(BeverageDecorator.prototype);

function Large(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 1;
}

Large.prototype = Object.create(BeverageDecorator.prototype);

function Sugar(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 0.15;
}

Sugar.prototype = Object.create(BeverageDecorator.prototype);

function Creamer(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 0.15;
}

Creamer.prototype = Object.create(BeverageDecorator.prototype);

function WhippedCream(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 0.15;
}

WhippedCream.prototype = Object.create(BeverageDecorator.prototype);

function Foam(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 0.15;
}

Foam.prototype = Object.create(BeverageDecorator.prototype);

function Chocolate(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 0.15;
}

Chocolate.prototype = Object.create(BeverageDecorator.prototype);

function Milk(beverage) {
	BeverageDecorator.call(this, beverage);
	this._cost = 0.15;
}

Milk.prototype = Object.create(BeverageDecorator.prototype);

function Mocha(beverage) {
	beverage = new Milk(beverage);
	beverage = new Foam(beverage);
	beverage = new Chocolate(beverage);
	BeverageDecorator.call(this, beverage);
}

Mocha.prototype = Object.create(BeverageDecorator.prototype);

var coffee = new Coffee();
var mocha = new Coffee();
mocha = new Medium(mocha);
mocha = new Mocha(mocha);

console.log(coffee.cost());
console.log(mocha.cost());