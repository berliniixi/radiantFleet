const fs = require("node:fs");

function csvToJSON(csv) {
  let lines = csv.split("\n");

  let result = [];
  let headers = lines[0].split(",");

  for (let i = 1; i < lines.length; i++) {
    let currentLine = lines[i].split(",");
    let date = currentLine[0];
    let obj = { date: date, data: {} };

    for (let j = 1; j < headers.length; j++) {
      obj.data[headers[j]] = currentLine[j];
    }

    result.push(obj);
  }

  return result;
}
async function fetchCvsData(filepath) {
  try {
    const res = fs.readFileSync(filepath, "utf8");
    console.log(res);

    const data = csvToJSON(res);

    return data;
  } catch (err) {
    console.error(err);
  }
}

module.exports = fetchCvsData;
