module.exports.dom = function() {
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
};