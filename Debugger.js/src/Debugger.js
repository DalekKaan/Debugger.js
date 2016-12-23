function D() {}
D.l=function(instence) {
	console.log(instence);
}
D.gs=function(title,collapsed=false) {
	if (collapsed) {
		console.groupCollapsed(title);
	}
	else {
		console.group(title);
	}
}

