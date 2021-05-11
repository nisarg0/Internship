const pageParser = require("./pageParser");
const axios = require("axios");
const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
const { response } = require("express");
const app = express();

var GetHtmlPage = async (url) => {
  axios
    .get(url)
    .then((response) => {
      // console.log(response.data);
      const data = response.data;
      return data;
    })
    .then((data) => {
      pageParser.parsepage(data);
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
