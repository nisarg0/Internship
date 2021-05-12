const axios = require("axios");
const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const { response } = require("express");
const app = express();
const DomParser = require("dom-parser");

const CardAttributes = [
  "autoCompleteType",
  "data-stripe",
  "htmlName",
  "htmlID",
  "label-tag",
  "placeholder",
  "label-left",
  "label-top",
  "data-recurly",
];

const IdentityAttributes = [
  "autoCompleteType",
  "data-stripe",
  "htmlName",
  "htmlID",
  "label-tag",
  "placeholder",
  "label-left",
  "label-top",
  "data-recurly",
];

const UsernameFieldNames = [
  "username",
  "user name",
  "email",
  "email address",
  "e-mail",
  "e-mail address",
  "userid",
  "user id",
  "customer id",
  "login id",
];

const ExcludedAutofillTypes = [
  "radio",
  "checkbox",
  "hidden",
  "file",
  "button",
  "image",
  "reset",
  "search",
];

// function findUsernameField(
//   pageDetails,
//   passwordField,
//   canBeHidden,
//   canBeReadOnly,
//   withoutForm
// ) {
//   let usernameField = null;
//   for (let i = 0; i < pageDetails.fields.length; i++) {
//     const f = pageDetails.fields[i];
//     if (f.elementNumber >= passwordField.elementNumber) {
//       break;
//     }

//     if (
//       !f.disabled &&
//       (canBeReadOnly || !f.readonly) &&
//       (withoutForm || f.form === passwordField.form) &&
//       (canBeHidden || f.viewable) &&
//       (f.type === "text" || f.type === "email" || f.type === "tel")
//     ) {
//       usernameField = f;

//       if (this.findMatchingFieldIndex(f, UsernameFieldNames) > -1) {
//         // We found an exact match. No need to keep looking.
//         break;
//       }
//     }
//   }

//   return usernameField;
// }
class AutofillPageDetails {
  constructor() {
    documentUUID: string;
    title: string;
    url: string;
    documentUrl: string;
    tabUrl: string;
    // forms: { [id: string]: AutofillForm; };
    fields: AutofillField;
    collectedTimestamp: number;
  }
}
function parsePage(data) {
  // console.log(data);
  var temp = "<strong>Beware of the leopard</strong>";
  const parser = new DomParser();
  const doc = parser.parseFromString(temp, "text/hmtl");
  // console.log(doc.fields)
  console.log(doc.body);
}

// ------------------------------------Server details---------------------------------
// Calls the site and seds its html body
var GetHtmlPage = async (url) => {
  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      const data = response.data;
      return data;
    })
    .then((data) => {
      parsePage(data);
    })
    .catch((error) => {
      console.log(error);
    });
  // return data;
};

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("URL : " + req.body.siteurl);
  // URL I recieve from site
  var url = req.body.siteurl;

  GetHtmlPage(url);

  res.send("Success");
});

app.listen(54321);
