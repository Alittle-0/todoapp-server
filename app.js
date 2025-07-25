const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const taskRoutes = require("./routes/tasks");

const app = express();
connectDB();

const CORS = {
    origin: [
        "http://localhost:3000",
        "http://127.0.0.1:3000", 
        process.env.FRONTEND_URL
    ],
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(CORS));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Todo API is running!' });
});

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));