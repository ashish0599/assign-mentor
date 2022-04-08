const mentorRouter = require("./Routers/MentorRouter");
const studentRouter = require("./Routers/StudentRouter");

const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
app.use(cors()); /* To avoid cross origin error */

app.use(express.json());

const PORT = process.env.PORT || 9009;
const URL = process.env.MONGODB_URL;

const mongoose = require("mongoose");

app.listen(PORT, () => console.log(`App started on the port ${PORT}`));

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const connection = mongoose.connection;
connection.on("open", () => console.log("MongoDB Connected"));

app.get("/", (req, res) =>
  res.send(`STUDENT-MENTOR-TASK`)
);

app.use("/Mentors", mentorRouter);
app.use("/Students", studentRouter);


