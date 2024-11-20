const CustomInput = ({ data, onValue, onChange }) => {
  return (
    <select value={onValue} onChange={(e) => onChange(e.target.value)}>
      {data.map(({ data }, index) =>
        Object.entries(data).map((key) => (
          <option key={`${index}-${key}`} value={key[1]}>
            {key[0]}
          </option>
        ))
      )}
    </select>
  );
};

export default CustomInput;
