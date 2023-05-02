inlets = 1;

function bang()
{
	const subpatcher = this.patcher.getnamed("testSubject").subpatcher();
	const supervp_sourcefilter = subpatcher.getnamed("supervp_sourcefilter");

	const test = function(inputType) {
		const timbreDial = subpatcher.getnamed(inputType + "Timbre");
		const meanDial = subpatcher.getnamed(inputType + "Mean");
		const message = "get" + inputType;

		timbreDial["float"](50);
		supervp_sourcefilter.message(message);

		meanDial["float"](50);
		supervp_sourcefilter.message(message);

		timbreDial["float"](0);
		supervp_sourcefilter.message(message);

		meanDial["float"](0);
		supervp_sourcefilter.message(message);

		timbreDial["float"](100);
		meanDial["float"](100);
		supervp_sourcefilter.message(message);
	};

	test("source");
	test("filter");
}
