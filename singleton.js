var dom = (function  () {
	var _counter = 0;
	var instance;

	function generateId() {
		return "customID" + _counter++;
	}

	function create(tagName, id) {
		var el = document.createElement(tagName);

		el.id = id || generateId();

		return el;
	}

	function createInstance() {
		return {
			generateId: generateId,
			create: create
		};
	}

	return {
		getInstance: function() {
			return instance || (instance = createInstance());
		}
	};
})();

var instance = dom.getInstance();

console.log(instance === dom.getInstance());