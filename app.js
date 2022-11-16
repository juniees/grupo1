const path = requiere("path");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(path.join(_dirname, "./views/index.html"));
});

app.listen(3000, () => console.log("http://localhost:3000"));

/* app.listen(port, () => {
  console.log(`Servidor corriendo ${port}`)
})
 */
