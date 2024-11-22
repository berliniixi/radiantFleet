const CustomInput = ({ data, onChange }) => {
  let currencyCode, currencyValue;

  return (
    <select value={currencyValue} onChange={(e) => onChange(e.target.value)}>
      {data.map((currency) => {
        currencyCode = Object.keys(currency)[0];
        currencyValue = currency[currencyCode];
        return (
          <option key={currencyCode} value={currencyValue} id={currencyCode}>
            {currencyCode}
          </option>
        );
      })}
    </select>
  );
};

export default CustomInput;
