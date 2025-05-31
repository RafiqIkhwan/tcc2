import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";

const app = express();

const corsOptions = {
 origin: [
    'http://localhost:3000',
    'https://3000-cs-810354217693-default.cs-asia-southeast1-seal.cloudshell.dev'
  ], credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api",UserRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
