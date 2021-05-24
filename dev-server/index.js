const express = require("express");

let app = express();

app.use(express.static("../"));

const port = process.env.PORT || 9090;
app.listen(port, () => console.log("Listening on http://localhost:%d", port));
