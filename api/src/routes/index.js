const express = require('express');
const pokemonRouter = require('./pokemonRouter');
const typeRouter = require('./typeRouter');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = express.Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/pokemons', pokemonRouter);
router.use('/type', typeRouter);

module.exports = router;