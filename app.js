const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

//app.get("/", (req, res) => {
// res.send("¡Hola mundo!");
//});

app.listen(3000, () =>
  console.log("Servidor corriendo en http://localhost:3000")
);

app.get("/", (req, res) => {
  res.sendFile(path.resolve(_dirname, "./views/index.html"));
});
/* app.listen(port, () => {
  console.log(`Servidor corriendo ${port}`)
})
 */
