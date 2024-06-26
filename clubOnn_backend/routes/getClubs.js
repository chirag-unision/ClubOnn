const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
  const { interests } = req.body;
  const db= req.db;
  const clubs= db.clubs;

  clubs.findAll({
    where: { id: JSON.parse(interests) }
  })
  .then((response)=> {
    res.send({
      data: response.dataValues,
      msg: 'Hello, You are calling the getClubs api'
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  })

  // res.send('Hello, You are calling the getClubs api');

});

module.exports = router;