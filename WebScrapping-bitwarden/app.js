const axios = require("axios");
const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();

// Let this eb the url we got from client
const URL = "https://www.facebook.com/";

// fetch_h;

var getForm = async (url) => {
  axios
    .get(url)
    .then((response) => {
      // console.log(typeof response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// getForm(URL);

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  console.log("URL : " + req.body.siteurl);

  var content = getForm(URL);

  console.log(typeof content);
  console.log(content);
  res.send("Success");
  // res.redirect('/');
});

app.listen(54321);
