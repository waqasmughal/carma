// include luhn algo to verify credit card.
const { validate } = require('../utils/card.validation.luhn');
const db = require("../models");

// view all cards method 
exports.list = async (req, res) => {
  try {
    const card = await db.card.findAll();
    res.json(card);
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while retrieving cards.'
    });
  }
};

// save new card through web page
exports.save = async (req, res) => {

  const { cardHolder, cardNumber, cardMonth, cardYear, cardCvv } = req.body;
  // check if card is valid or not
  if (!validate(cardNumber)) {
    return res.status(400).send({
      message: 'Invalid card details',
    });
  }
  // save data into database or handle error
  try {
    const card = await db.card.create({ cardHolder, cardNumber, cardMonth, cardYear, cardCvv })
    res.json({ message: 'Card number saved successfully!' });
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred while saving the card.'
    });
  };


};
