const express = require("express");
const {addVolunteer, getVolunteers} = require("../controllers/volunteer");

const router = express.Router();

router.post("/volunteer", addVolunteer);

module.exports = router;
