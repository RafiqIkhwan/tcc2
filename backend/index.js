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

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server up and running on port ${port}...`));
