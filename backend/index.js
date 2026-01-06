import express from 'express';
import cors from "cors";
import todoRoutes from "./routes/todo.js";

const app = express();


app.use(cors());
app.use(express.json());



app.use("/todos", todoRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
