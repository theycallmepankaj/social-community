import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/user.routes.js";
import ideaRoutes from "./routes/idea.routes.js";
import commentRoutes from "./routes/comment.routes.js";

dotenv.config();

const app = express();


app.use(cors());
app.use(express.json());

app.use("/users", userRoutes);
app.use("/ideas", ideaRoutes);
app.use("/comments", commentRoutes);


mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log(" MongoDB Connected"))
.catch((err) => console.error("❌ MongoDB connection failed:", err.message));


app.listen(process.env.PORT_NUMBER, () => {
  console.log("server Started");
});

