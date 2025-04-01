const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db"); // Import DB connection
const movieModel= require("./models/movimodel"); // Import Movie model

const app = express();
app.use(cors());
app.use(express.json());

connectDB(); // Connect to MongoDB


const movieRoutes = require("./routes/movies");
app.use("/api", movieRoutes);

app.get("/", (req, res) => {
  res.send("MoodFlixy API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
