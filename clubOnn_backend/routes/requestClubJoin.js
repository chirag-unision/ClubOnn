const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
  const { userID, clubID } = req.body;
  const db= req.db;
  const requests= db.requests;

  clubs.create({
    clubid: clubID,
    userid: userID,
    status: 'N'
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