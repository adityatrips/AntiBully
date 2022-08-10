const report = require("../models/report");
const nodemailer = require("nodemailer");

exports.addReport = async (req, res) => {
	const { victimName, incidentDesc, expectations } = req.body;
	if (!victimName || !incidentDesc || !expectations)
		return res.status(400).send("MISSING INFO");

	const r = new report(req.body);

	try {
		await r.save();
		console.log("DONE");
		return res.json({ ok: true });
	} catch (e) {
		console.log(e);
		return res.json({ err: e });
	}
};

exports.getReports = async (req, res) => {
	try {
		const reports = await report.find({});
		res.send(reports);
	} catch (e) {
		res.status(500).send(e);
	}
};

exports.getOneReport = async (req, res) => {
	try {
		const id = req.params.id;
		const r = await report.findOne({ _id: id }).exec();
		return res.send(r);
	} catch (e) {
		return res.status(404).send(e);
	}
};

exports.deleteReport = async (req, res) => {
	const { id } = req.body;
	try {
		await report.findByIdAndRemove(id);
		return res.status(200).send({ ok: true });
	} catch (err) {
		return res.status(500).send({ error: err });
	}
};
