require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db.js");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const jobRoutes=require("./routes/job");
const applicationRoutes=require("./routes/jobs.js")
const profileRoutes=require("./routes/profile.js")
// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
}

));


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/job",jobRoutes);
app.use("api/jobs",applicationRoutes);
app.use("api/profile",profileRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
