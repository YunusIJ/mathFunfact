import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import numRoute from "./router.js"; 

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3030;

// Middleware
app.use(cors());
app.use(express.json());

app.use('/api/classify-number', numRoute);


app.get('/', (req, res) => {E
  res.send('Number Properties API is running!');
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
});