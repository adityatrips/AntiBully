const mongoose = require("mongoose");
const { Schema } = mongoose;

const ArticleSchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	brief: {
		type: String,
		required: true,
		trim: true,
	},
	body: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
		trim: true,
	},
	isModerated: {
		type: Boolean,
		default: false,
	},
});

module.exports = mongoose.model("Article", ArticleSchema);
