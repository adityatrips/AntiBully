const express = require("express");
const fs = require("fs");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

const app = express();

mongoose
	.connect(process.env.DB, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("DB CONNECTED"))
	.catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

fs.readdirSync("./routes").map((route) => {
	app.use("/api", require(`./routes/${route}`));
});

app.listen(process.env.PORT, () => console.log("SERVER STARTED"));
