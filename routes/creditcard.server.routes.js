const express = require('express');
const router = express.Router();

// include controller to call methods via apis
const creditcards = require('../controllers/creditcard.server.controller');
router
  .get('/', creditcards.list)
  .post('/', creditcards.save);

module.exports = router;

