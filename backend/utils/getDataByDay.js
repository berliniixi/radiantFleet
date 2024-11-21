function getDataByDay(data, day) {
  for (const item of data) {
    if (item[day]) {
      return item[day];
    }
  }
  return null;
}

module.exports = getDataByDay;
