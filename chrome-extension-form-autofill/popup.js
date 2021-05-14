const username = "nisarg@gmail.com";
const password = "12345678";

const username_field_name = "username";
const password_field_name = "user_pass";

// document.addEventListener("DOMContentLoaded", function () {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open("GET", "http://localhost/phpchrome.php", true); //Mention your database query file here
// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			varxhrjson = JSON.parse(xhr.responseText);
// 			/* Replace the below mentioned field id's with that of your form */
// 			chrome.tabs.executeScript(null, {
// 				code:
// 					"document.getElementById('email').value = '" +
// 					username +
// 					"'",
// 			});
// 			chrome.tabs.executeScript(null, {
// 				code:
// 					"document.getElementById('pass').value = '" +
// 					password+
// 					"'",
// 			});
// 		}
// 	};
// 	xhr.send();
// });
// chrome.runtime.onMessageExternal.addListener(function (
// 	request,
// 	sender,
// 	sendResponse
// ) {
// 	if (sender.url == blocklistedWebsite) return; // don't allow this web page access
// 	if (request.openUrlInEditor) openUrl(request.openUrlInEditor);
// });

// document.addEventListener("hello", function (data) {
// 	chrome.runtime.sendMessage("test");
// });

window.addEventListener(
	"message",
	function (event) {
		console.log("Event happended");
		// We only accept messages from this window to itself [i.e. not from any iframes]
		if (event.source != window) return;

		if (
			event.data.type &&
			event.data.type == "FROM_PAGE_TO_CONTENT_SCRIPT"
		) {
			//   chrome.runtime.sendMessage(event.data);
			console.log(event.data); // broadcasts it to rest of extension, or could just broadcast event.data.payload...
		} // else ignore messages seemingly not sent to yourself
	},
	false
);

document.addEventListener("DOMContentLoaded", function () {
	chrome.tabs.executeScript(null, {
		code: `document.getElementById('${username_field_name}').value = '${username}'`,
	});
	chrome.tabs.executeScript(null, {
		code: `document.getElementById('${password_field_name}').value = '${password}'`,
	});
});
