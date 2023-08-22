require("dotenv").config({
	path: ".env.local"
});
require("dotenv").config();
let express = require("express");
let path = require("path");
let cookieParser = require("cookie-parser");

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.listen(process.env.PORT, () => {
	console.log("Server listening on port " + process.env.PORT);
});
