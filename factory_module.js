module.exports.create = (function(dom) {
	function createInput(type) {
		var element = dom.create("input");
		element.type = type;
		return element;
	}

	var controls = {
		text: function(options) {
			var el = createInput("text");

			if (typeof options.value !== "undefined") {
				el.value = options.value;
			}

			return el;
		},
		checkbox: function() {
			var el = createInput("checkbox");
			if (typeof options.checked !== "undefined") {
				el.checked = options.checked;
			}

			return el;
		}
	};

	return function(options) {
		var type = options.type ? options.type.toLowerCase() : undefined;

		if (!type || !controls[type]) {
			throw new Error(type + " is not supported.");
		}

		return controls[type](options);
	};
})(controls);