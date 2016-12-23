function D() {}
D.l=function(instance) {
	console.log(instance);
}
D.gs=function(title,collapsed=false) {
	if (collapsed) {
		console.groupCollapsed(title);
	}
	else {
		console.group(title);
	}
}
D.ge=function() {
	console.groupEnd();
}
D.a=function(title) {
	alert(title);
}

