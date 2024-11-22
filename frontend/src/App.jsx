import { useEffect, useState } from "react";
import Header from "./components/Header";
import CustomInput from "./components/CustomInput";

const App = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const day = today.getDate();

    const fullDateToday = `${year}-${month}-${day}`;
    setSelectedDay(fullDateToday);
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `http://localhost:3000/api/v1/data?date=${selectedDay}`
      );

      const resData = await res.json();

      setData(resData.selectedDay);
    }

    if (selectedDay) {
      setData([]);
      fetchData();
    }
  }, [selectedDay]);

  useEffect(() => {
    if (data.length > 0) {
      const firstCurrencyValue = Object.values(data[0])[0];
      setTo(firstCurrencyValue);
    } else {
      setFrom("");
    }
  }, [data]);

  return (
    <div>
      <Header />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <div>
          <h3>From Euro</h3>
        </div>
        <div>
          <input
            type="date"
            value={selectedDay}
            onChange={(e) => setSelectedDay(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            disabled={!data.length || !selectedDay || isNaN(to)}
            style={{
              borderRadius: "1.2rem",
              border: selectedDay && data.length > 0 && "1px solid black",
              width: "200px",
              height: "25px",
              cursor:
                (!selectedDay || !data.length || isNaN(to)) && "not-allowed",
              paddingLeft: "1rem",
            }}
          />
        </div>

        {!data.length && selectedDay && (
          <p>{`No available data for ${selectedDay} day, Please try other day`}</p>
        )}

        <div style={{ display: "flex", alignContent: "center", gap: "1rem" }}>
          {data.length > 0 && (
            <>
              <h3>To</h3>
              <CustomInput data={data} onChange={setTo} />
            </>
          )}
        </div>

        {isNaN(to) && data.length > 0 ? (
          <p>No available price for the currency</p>
        ) : (
          <p>
            {data.length > 0 &&
              selectedDay &&
              (Number(to) * Number(from)).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
