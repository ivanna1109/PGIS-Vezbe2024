function izracunajDistancu() {
	const x = document.getElementById('xKoordinata').value;
	const y = document.getElementById('yKoordinata').value;
	if (Number.isNaN(x) || Number.isNaN(y)) {
		console.log("u ifu")
		return;
	}
	const x_float = parseFloat(x)
	const y_float = parseFloat(y)
	console.log(typeof (x_float))
	console.log(x_float)

	const distance = Math.sqrt(x_float * x_float + y_float * y_float)
	console.log(distance.toFixed(2))
	document.getElementById('rezultat').textContent = "Distanca je: " + distance.toFixed(2);
	document.getElementById('xKoordinata').value = '';
	document.getElementById('yKoordinata').value = '';

}