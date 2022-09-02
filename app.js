const express = require ("express");
const app = express();
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get ("/", (req, res)=> {
    res.send("Servidor en línea");
});

// albumes route

const albumesRoutes = require("./routes/albumes");
app.use("/albumes", albumesRoutes);

// canciones route

const cancionesRoutes = require("./routes/canciones");
app.use("/canciones", cancionesRoutes);

// artistas route

const artistasRoutes = require("./routes/artistas");
app.use("/artistas", artistasRoutes);

// generos route

const generosRoutes = require("./routes/generos");
app.use("/generos", generosRoutes);


app.listen(3000, ()=> console.log("Servidor corriendo en http://localhost:3000/"));
