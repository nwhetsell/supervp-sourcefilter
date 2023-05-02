inlets = 1;

function bang()
{
	const supervp_sourcefilter = this.patcher.getnamed("testSubject").subpatcher().getnamed("supervp_sourcefilter");
	[
		"getchannels",
		"getwindowsize",
		"getfftover",
		"getoversamp",
		"getsource",
		"getfilter",
		"getenvmode",
		"getmaxfreq",
		"getlpcorder"
	].forEach(function(message) {
		supervp_sourcefilter.message(message);
	});
}
