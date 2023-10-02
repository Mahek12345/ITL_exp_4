require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8003; 


const router = require("./controllers/controller");
require("./db/conn");

app.use(cors());
app.use(express.json());
app.use(router);

mongoose.connect(process.env.DB_URL || "mongodb://127.0.0.1:27017/Crud_operation", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1); 
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
