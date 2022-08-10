const express = require("express");
const {
	addReport,
	getReports,
	getOneReport,
	deleteReport,
} = require("../controllers/report");

const router = express.Router();

router.post("/report", addReport);
router.get("/reports", getReports);
router.get("/r/:id", getOneReport);
router.post("/delete-report", deleteReport);

module.exports = router;
