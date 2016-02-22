function outerFunc(param) {
	function innerFunc(input) {
		console.log(input * 4);
	}
	console.log ('The result is ' + innerFunc(param));
}
outerFunc(12);
