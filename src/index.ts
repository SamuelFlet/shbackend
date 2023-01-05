import express from "express";
import { PrismaClient } from "@prisma/client";
import path from "path";
import cors from "cors";

const prisma = new PrismaClient();
const PORT = process.env.PORT || 8081;
const app = express();
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(router);

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/headphones", async (req, res) => {
  const headphones = await prisma.headphone.findMany();
  res.json(headphones);
});

app.post("/headphones/submit", async (req, res) => {
  var { name, description, impedance, frequency, sensitivity } = req.body;
  impedance = parseInt(impedance);
  sensitivity = parseInt(sensitivity);
  const headphone = await prisma.headphone.create({
    data: {
      name,
      description,
      impedance,
      frequency,
      sensitivity,
    },
  });
  res.json(headphone);
});

app.listen(PORT, () => {
  console.log(`App is listening at http://localhost:${PORT}`);
});
