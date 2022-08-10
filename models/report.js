const mongoose = require("mongoose");
const { Schema } = mongoose;

const ReportSchema = new Schema({
  informantName: {
    type: String,
    trim: true,
  },
  informantContact: {
    type: String,
    trim: true,
  },
  victimName: {
    type: String,
    required: true,
    trim: true,
  },
  incidentDesc: {
    type: String,
    required: true,
  },
  stepsTaken: {
    type: String,
  },
  expectations: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Report", ReportSchema);
