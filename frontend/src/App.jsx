import { useEffect, useState } from "react";
import Header from "./components/Header";
import CustomInput from "./components/CustomInput";

const App = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("1.0583");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/api/v1/data");

      const resData = await res.json();

      setData(resData.data);

      console.log("resData: ", resData);
    }

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <h3>From Euro</h3>
      </div>

      <div>
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(Number(e.target.value))}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <h3>To </h3>
        <CustomInput data={data} onValue={to} onChange={setTo} />
      </div>
      <p>{(to * from).toFixed(2)}</p>
    </div>
  );
};

export default App;
