require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/url.routes");

// App + Middlware
const app = express();
app.use(cors());
app.use("/public", express.static(`${process.cwd()}/src/public`));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect Database
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log(`Connected to db`))
  .catch(() => console.error(`Error in connecting to database`));

// Routes
app.get("/", (req, res) => {
  res.sendFile(`${process.cwd()}/src/views/index.html`);
});

app.use("/api", router);

// Listener
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
