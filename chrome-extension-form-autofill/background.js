chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
	alert("message received");
});

chrome.windows.create(
	{
		type: "popup",
		url: "http://my.localhost/*",
		type: "popup",
	},
	function (newWindow) {}
);
