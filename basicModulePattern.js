// var dom = {
// 	_counter: 0,
// 	create: function(tagName, id) {
// 		var element = document.createElement(tagName);

// 		element.id = id || this.generateId();

// 		return element;
// 	},
// 	generateId: function() {
// 		return 'customId' + this._counter++;
// 	}
// };

var dom = (function() {
	var _counter = 0;

	return {
		create: function(tagName, id) {
			var element = document.createElement(tagName);

			element.id = id || this.generateId();

			return element;
		},
		generateId: function() {
			return 'customId' + _counter++;
		}
	};
})();

var div = dom.create("div");
console.log(div);