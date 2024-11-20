const fetchCvsData = require("../utils/convertToJson");

async function getData(req, res) {
  try {
    const data = await fetchCvsData("data/eurofxref.csv");
    console.log("data: ", data);

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error reading CSV file:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
}

module.exports = getData;
