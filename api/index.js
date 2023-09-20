const app = require("express")();

app.get("/api", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
  res.end(`Hello! Deploying to Vercel`);
});

app.get("/", (req, res) => {
  res.send("App Entry Point!");
});

app.get("/api/item/:slug", (req, res) => {
  const { slug } = req.params;
  res.end(`Item: ${slug}`);
});

app.listen(4000, () => console.log("APP RUNNING ON PORT 4000"))

module.exports = app;
