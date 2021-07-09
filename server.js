import "@babel/polyfill";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send(" Welcome To Booking APP");
});

app.use("*", (req, res) =>
  res.status(404).json({
    status: "404",
    message: "route not found"
  })
);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

export default app;