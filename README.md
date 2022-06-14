# Save Encrypted Credit Card With Express Rest APIs, AJAX, NodeJS And PostgreSQL.

# Project Structure

I setup express.js and add postgreeSQL and sequelize to connect database with this test assignment. Project contain following folders
- Public for html, css and js 
- Routes for apis endpoint to communication
- Controllers for creditcard controller
- Models for save data
- Utils for helpers methods
- App.js for main express app
- Bin for application initialization
- .env for database enviorment variables
- Questions-Answers.txt for additional questions answers.


## Project setup

## Update .env variables as per your machine

HOST=localhost
USERNAME=postgres
PASSWORD=admin
DBNAME=carmadb

## Install node_modules
```
npm install
```

```
npm install
```

### Run
```
npm start
```

The following are the Rest APIs that will be exported:

- GET     `/v1/api/creditcards`	   get all encrypted cards
- POST    `/v1/api/creditcards`    add new card in encryped form


## credit card number validation

As per requirement i used Luhn's algorithm to determines whether or not a credit card number is valid. If card is valid then encrypt and save into database and show message to user.

For credit card number Luhn's algorithm do following tasks:

- Double the value of every other digit from right to left, beginning with the second to last digit.
- Add the digits of the results of Step 1 to the remaining digits in the credit card number.
- If the result mod 10 is equal to 0, the number is valid. If the result mod 10 is not equal to 0, the validation fails.


