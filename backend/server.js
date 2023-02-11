const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/slots", (req, res) => {
  res.json({ slots: "Total 1200 Slots Available" });
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});