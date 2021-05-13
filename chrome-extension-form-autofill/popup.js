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

document.addEventListener("DOMContentLoaded", function () {
	chrome.tabs.executeScript(null, {
		code: `document.getElementById('${username_field_name}').value = '${username}'`,
	});
	chrome.tabs.executeScript(null, {
		code: `document.getElementById('${password_field_name}').value = '${password}'`,
	});
});
