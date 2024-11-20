const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  allowedHeaders: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const dataRoute = require("./routes/data");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api/v1/data", dataRoute);

const port = process.env.PORT || 3000;

async function start() {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
}

start();
