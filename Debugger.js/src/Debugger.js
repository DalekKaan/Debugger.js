function D() {}
/**
 * Alias of console.log()
 * @param {type} instance
 * @returns {void}
 */
D.l=function(instance) {
	console.log(instance);
}
/**
 * Alias of console.group() and console.groupCollapsed()
 * @param {String} title
 * @param {Booleat} collapsed
 * @returns {void}
 */
D.gs=function(title,collapsed=false) {
	if (collapsed) {
		console.groupCollapsed(title);
	}
	else {
		console.group(title);
	}
}
/**
 * Alias of console.groupEnd()
 * @returns {void}
 */
D.ge=function() {
	console.groupEnd();
}
/**
 * Alias of alert()
 * @param {String} msg
 * @returns {void}
 */
D.a=function(msg) {
	alert(msg);
}

