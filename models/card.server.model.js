// include utlis to encrpted and decrypted method
const { encrypted, decrypted } = require('../utils/encrypt-decrypt.string');

module.exports = (sequelize, Sequelize) => {

  // define card schema with data type
  const Card = sequelize.define('cards', {
    cardHolder: {
      type: Sequelize.STRING
    },
    cardNumber: {
      type: Sequelize.STRING
    },
    cardMonth: {
      type: Sequelize.STRING
    },
    cardYear: {
      type: Sequelize.STRING
    },
    cardCvv: {
      type: Sequelize.STRING
    }
  });

  // call hook before data save into database to encrypt card number and cvv 
  Card.beforeCreate(function (card, options) {
    // encrypt card number and cvv and proceed with encrypted data
    card.cardNumber = encrypted(card.cardNumber);
    card.cardCvv = encrypted(card.cardCvv);
    // return promise as updated result
    return Promise.resolve(card, options);
  });

  return Card;
};