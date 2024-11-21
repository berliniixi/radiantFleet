const fs = require("node:fs");

function getCurrencyRegion(dates) {
  return dates.split(",").slice(1);
}

function transformData(currency, values) {
  const currencies = getCurrencyRegion(currency);

  const result = [];

  let obj = {};
  values.forEach((data) => {
    const perDay = data.split(",");

    let [date, ...valuesPerDay] = perDay;

    const res = perDay.map((item, i) => {
      if (currencies[i] === undefined || currencies[i] === "") return;

      obj = { [currencies[i]]: valuesPerDay[i] };
      return obj;
    });

    result.push({ [date]: res });
  });

  return result;
}

function csvToJSON(csvData) {
  const lines = csvData.split("\n");

  let [currency, ...values] = lines;

  const result = transformData(currency, values);

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
