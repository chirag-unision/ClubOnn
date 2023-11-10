const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
  const { clubid, uid } = req.body;
  const db= req.db;
  const clubs= db.clubs;

  clubs.findAll({
    where: { id: clubid }
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