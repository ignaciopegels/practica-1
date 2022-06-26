const express = require ("express")
const app = express ();
const path = require ("path");
const routes = require ("./src/Routes/routes")

app.set ("view engine" , "ejs");
app.set ("views", path.join (__dirname, "views"))

app.listen(3003, () => console.log("servidos funcionando en el puerto 3003"));

app.use(express.static(path.join(__dirname, './public')))

app.use(routes)
