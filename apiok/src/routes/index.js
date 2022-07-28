const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const fs = require("fs");

const router = Router();
const axios = require("axios");

//---llamado de DB~~~~~~~~~~~~~~~~~~~~~~~~~~
const { Principal } = require("../db");
const { conn } = require("../db.js"); //dabase

//---fi llamado de DB~~~~~~~~~~~~~~~~~~~~~~~~~~

//---funciones~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function reverse(texto) {
  return texto.split("").reverse().join("");
}

//---fin funciones~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//---Rutas~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// router.get("/rutax/:id", async (req, res) => {
//   const { name } = req.query;
//   const { id } = req.params;
//   const { nambre, apellido } = req.body;
//   const typeApi = await axios.get("http//urlEndT");
// });

router.get("/", async (req, res) => {
  const { name } = req.query;
  return res.status(200).send("hola mundo");

  if (name) {
  } else {
    // res.status(200).send(pokeTotal);
    res.status(200).send(pokeTotal);
  }
});

router.get("/kenneth", async (req, res) => {
  let newPokemon = await Principal.create({
    name: "diego puliche",
  });
  const { name } = req.query;
  return res.json({ nombre: "kenneth", apelido: "puliche" });

  if (name) {
  } else {
    // res.status(200).send(pokeTotal);
    res.status(200).send(pokeTotal);
  }
});

router.get("/ping", async (req, res) => {
  const result = await conn.Sequelize;
  console.log(result.default);
  const arrInfo = await Principal.findAll({});

  res.send({ mensaje: arrInfo });
});

router.get("/texto", async (req, res) => {
  //GET /iecho?text=test

  const { text } = req.query;
  let textLower = text.toLowerCase();
  let alfabetico = /^[a-z]+$/;
  let textOk = alfabetico.test(textLower);
  let texto_invertido = reverse(textLower);
  let palindrome = false;
  console.log("textOk: ", textOk);
  console.log("texto_invertido: ", texto_invertido);
  if (texto_invertido === textLower) {
    palindrome = true;
  }
  // "palindrome": true

  if (!textOk) {
    return res.status(400).json({ error: "no text" });
  } else {
    if (palindrome) {
      let newText = await Principal.create({
        name: text,
        nameReverse: texto_invertido,
        palindrome: palindrome,
      });
      return res.status(200).json({ text: texto_invertido, palindrome: true });
    } else {
      let newText = await Principal.create({
        name: text,
        nameReverse: texto_invertido,
        palindrome: palindrome,
      });
      return res.status(200).json({ text: texto_invertido });
    }
  }
});
router.get("/textos", async (req, res) => {
  const arrInfo = await Principal.findAll({});
  return res.status(200).send(arrInfo);
});

router.delete("/borrar", async (req, res) => {
  let dataDb = await Principal.destroy({
    where: {},
    truncate: true,
  });
  //  return countryDb;
  res.send([]);
});

router.get("/pruebat", (req, res) => {
  return res.json("hola mundo");
});
//---fin Rutas~~~~~~~~~~~~~~~~~~~~~~~~~~~~

module.exports = router;
