const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(_dirname, "views/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve(_dirname, "views/login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(_dirname, "views/reister.html"));
});

app.listen(PORT, () =>
console.log("Servidor corriendo en http://localhost:3000")
);

//app.get("/", (req, res) => {
// res.send("¡Hola mundo!");
//});

/* app.listen(port, () => {
  console.log(`Servidor corriendo ${port}`)
})
 */
