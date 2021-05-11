const DomParser = require("dom-parser");

function parsepage(data) {
  // console.log(data);
  const parser = new DomParser();
  const document = parser.parseFromString(data, "text/hmtl");

  console.dir(document);
}
