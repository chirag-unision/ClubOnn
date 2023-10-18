const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
  const { following } = req.body;
  const db= req.db;
  const clubs= db.clubs;

  clubs.findAll({
    where: { id: JSON.parse(following) }
  })
  .then((response)=> {
    res.send({
      data: response.dataValues,
      msg: 'Hello, You are calling the getFollowings api'
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  })

  // res.send('Hello, You are calling the getFollowings api');
});

module.exports = router;