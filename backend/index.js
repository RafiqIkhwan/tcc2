import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

const corsOptions = {
 origin: ['http://localhost:3001','http://localhost:3000'],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api",UserRoute);

app.listen(5000, () => console.log("Server jalan di port 5000"))
