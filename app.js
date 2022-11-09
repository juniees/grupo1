const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HOLA MUNDO");
});

app.listen(3000, () => console.log("http://localhost3000"));

/* app.listen(port, () => {
  console.log(`Servidor corriendo ${port}`)
})
 */
