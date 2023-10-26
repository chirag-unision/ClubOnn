const express = require('express');
const router = express.Router();

// Route: POST /
router.get('/', (req, res) => {
  const db= req.db;
  const category= db.category;

  category.findAll()
  .then((response)=> {
    res.send({
      data: response.dataValues,
      msg: 'Hello, You are calling the getCategories api'
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  })

  // res.send('Hello, You are calling the getClubs api');

});

module.exports = router;