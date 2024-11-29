//import express and dotenv files(to use variables defined in dotenv)
const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors"); // Import CORS middleware


dbConnect();

const app = express();

//middleware

app.use(cors()); // This will allow requests from any origin (you can configure this to allow specific origins if needed)
app.use(express.json());

//routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

//start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});