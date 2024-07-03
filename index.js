const express = require("express");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

app.use(express.static("public"));

app.get((req, res) => {
  res.sendFile(__dirname, "index.html");
});
