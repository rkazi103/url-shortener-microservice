require("dotenv").config();
const express = require("express");
const cors = require("cors");

// App + Middlware
const app = express();
app.use(cors());
app.use("/public", express.static(`${process.cwd()}/src/public`));

// Routes
app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/src/views/index.html");
});

app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
