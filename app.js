const express = require("express");
const app = express();
//静态资源托管
app.use(express.static("./src"));
app.listen("8008", () => {
  console.log("to http://127.0.0.1:8008");
});
