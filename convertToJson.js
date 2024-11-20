/* 

[
  Date: [
    2024-10-10: 
    {
      "USD" : 1,058
          .
          .
          .
    },
    2024-10-09: 
    {
      "USD" : 1,058
          .
          .
          .
    }
  ]
]


*/

const fs = require("node:fs");

// function getCurrencyValues(values) {
//   values &&
//     values.forEach((element, index) => {
//       const dates = element.split(",")[0];
//       const currencyValue = element.split(`${dates},`);

//       console.log(currencyValue);

//       console.log(dates);

//     });
// }

function getCurrencyTypes(lines) {
  let currencies = lines[0].split("Date,").join("");
  let formattedCurrencies = {};

  currencies.split(",").forEach((prop) => {
    formattedCurrencies[prop] = "";
  });

  return formattedCurrencies;
}

function get(params) {
  
}

function csvToJSON(csvData) {
  const lines = csvData.split("\n");

  let [key, ...values] = lines;

  values &&
    values.forEach((element, index) => {
      const obj = {};
      const dates = element.split(",")[0];
      const currencyValue = element.split(`${dates},`);

      console.log(dates);
      console.log(currencyValue[1]);
    });

  const currenciesType = getCurrencyTypes(lines);
  console.log(currenciesType);
}

// function getCurrencies(lines) {
//   let [key] = lines;

//   let currencies = {};
// console.log(currencies);

//   key &&
//     key.split(",").forEach((curr, index) => {
//       if (index === 0) return;

//       console.log({ curr });

//       currencies[curr] = {};
//     });

//   return currencies;
// }

// function csvToJSON(csvData) {
// const dateObj = {};
// const currencyObj = {};
// const lines = csvData.split("\n");

// const currencies = getCurrencies(lines);

// let [currencies] = lines;

// console.log("currencies: ", currencies);

// currencies &&
//   currencies.split(",").forEach((curr, index) => {
//     if (index === 0) return;

//     currencyObj[curr] = {};
//   });

// console.log(currencyObj);
// lines &&
//   lines.forEach((line, index) => {
//     let key = line.split(",")[0];

// console.log(line.split(key));

// if (index === 0) return;
// if (key === "") return;
// dateObj[key] = { }
// });

// }

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
