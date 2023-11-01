const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
  const { interests } = req.body;
  const db= req.db;
  const clubs= db.clubs;
//   const users= db.users;

  clubs.findAll({ attributes: ['category', 'title', 'description'] }, {
    where: { category: JSON.parse(interests) }
  })
  .then((response)=> {
    res.send({
      data: response,
      msg: 'Hello, You are calling the getSuggestions api'
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  })

  // res.send('Hello, You are calling the getClubs api');

});

module.exports = router;