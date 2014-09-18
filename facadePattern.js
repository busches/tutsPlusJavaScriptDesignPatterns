function addEvent(element, event, fn) {
	if (element.addEventListener) {
		element.addEventListener(event, fn, false);
	} else if (el.attachEvent) {
		element.attachEvent("on" + ev, fn);
	} else {
		element["on" + ev] = fn;
	}
}

function removeEvent(element, event, fn) {
	if (element.removeEventListener) {
		element.removeEventListener(event, fn, false);
	} else if (el.detatchEvent) {
		element.detatchEvent("on" + ev, fn);
	} else {
		element["on" + ev] = null;
	}
}