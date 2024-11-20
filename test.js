function getCurrencyRegion(key) {
  let currencies = key.split("Date,").join("");

  let result = [];

  currencies.split(",").forEach((prop) => {
    if (prop === "") return;

    const currCurrency = { [prop]: "" };
    result.push(currCurrency);
  });

  return result;
}

function getDates(values) {
  let datesWithCurrentPrices = {};

  values.forEach((el) => {
    const columns = el.split(",");
    const date = columns[0];

    // columns;
    // date;
    // Initialize the date entry if it doesn't exist
    if (!datesWithCurrentPrices[date]) {
      datesWithCurrentPrices[date] = [];
    }

    for (let i = 1; i < columns.length; i++) {
      //   console.log(columns[i]);
      //   console.log(currencies[i - 1]);
      //   for (const key in datesWithCurrentPrices) {
      //     console.log(key);
      //     currencies;
      //     return (datesWithCurrentPrices[date] = {
      //       [[key][currencies]]: [columns[i]],
      //     });
      //   }
      //   datesWithCurrentPrices[date] = [currencies[i - 1]][columns[i]];
    }
  });

  console.log(datesWithCurrentPrices);

  return datesWithCurrentPrices;
}

function csvToJSON(csvData) {
  const lines = csvData.split("\n");

  let [key, ...values] = lines;

  values;

  const currencies = getCurrencyRegion(key);
  currencies;
  const dates = getDates(values);
  dates;


  return dates;
}

async function fetchCvsData() {
  fs.readFile("./eurofxref-hist.csv", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    //   console.log(data);
    const res = csvToJSON(data);

    console.log("res: ", res);
    // return res;
  });
}

fetchCvsData();
