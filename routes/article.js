const express = require("express");
const {
	getArticles,
	getOneArticle,
	addArticle,
	deleteArt,
	getAllArticles,
	acceptArt,
} = require("../controllers/article");

const router = express.Router();

router.get("/articles", getArticles);
router.get("/all-articles", getAllArticles);
router.get("/a/:id", getOneArticle);
router.post("/add-article", addArticle);
router.post("/accept-article", acceptArt);
router.post("/delete-article", deleteArt);

module.exports = router;
