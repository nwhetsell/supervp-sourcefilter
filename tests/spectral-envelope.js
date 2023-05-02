inlets = 1;

function bang()
{
	const subpatcher = this.patcher.getnamed("testSubject").subpatcher();
	const supervp_sourcefilter = subpatcher.getnamed("supervp_sourcefilter");

	const sendMessages = function() {
		[
			"getenvmode",
			"getmaxfreq",
			"getlpcorder"
		].forEach(function(message) {
			supervp_sourcefilter.message(message);
		});
	};

	sendMessages();

	subpatcher.getnamed("sourceEnvelopeMode").symbol("LPC");
	subpatcher.getnamed("sourceEnvelopeMaxFrequency")["float"](9000);
	subpatcher.getnamed("sourceEnvelopeLPCOrder")["int"](1);
	subpatcher.getnamed("filterEnvelopeMode").symbol("True Env.");
	subpatcher.getnamed("filterEnvelopeMaxFrequency")["float"](10000);
	subpatcher.getnamed("filterEnvelopeLPCOrder")["int"](2);
	sendMessages();
}
