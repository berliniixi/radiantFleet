const fetchCvsData = require("../utils/convertToJson");
const selectedDate = require("../utils/getDataByDay");

async function getData(req, res) {
  try {
    const data = await fetchCvsData("data/eurofxref-hist.csv");

    const selectedDay = selectedDate(data, req.query.date);

    res.status(200).json({ success: true, selectedDay });
  } catch (error) {
    console.error("Error reading CSV file:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

module.exports = getData;
