inlets = 1;

function bang()
{
	const subpatcher = this.patcher.getnamed("testSubject").subpatcher();
	const supervp_sourcefilter = subpatcher.getnamed("supervp_sourcefilter");

	const sendMessages = function() {
		[
			"getwindowsize",
			"getfftover",
			"getoversamp"
		].forEach(function(message) {
			supervp_sourcefilter.message(message);
		});
	};

	sendMessages();

	subpatcher.getnamed("windowSize")["int"](2048);
	subpatcher.getnamed("interpolation")["int"](1);
	subpatcher.getnamed("hopRatio")["int"](3);
	sendMessages();
}
