var observer = (function() {
	var subscribers = {};

	function subscribe(type, fn) {
		if (!subscribers[type]) {
			subscribers[type] = [];
		}

		if (subscribers[type].indexOf(fn) === -1) {
			subscribers[type].push(fn);
		}
	}

	function unsubscribe(type, fn) {
		var listeners = subscribers[type];
		if (!listeners) {
			return;
		}

		var index = listeners.indexOf(fn);
		if (index > -1) {
			listeners.splice(index, 1);
		}
	}

	function publish(type, event) {
		if (!subscribers[type]) {
			return;
		}

		if (!event.type) {
			event.type = type;
		}

		var listeners = subscribers[type];
		for (var listener in listeners) {
			listeners[listener](event);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe,
		publish: publish
	};
})();

function foo(event) {
	console.log(event.message);
}


observer.subscribe("test/foo", foo);

observer.publish("test/foo", {
	message: 'Hello this is a custom event'
});

observer.unsubscribe('test/foo', foo);

observer.publish('test/foo', {
	message: 'This should not been seen'
});