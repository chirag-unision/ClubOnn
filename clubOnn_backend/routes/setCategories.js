const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
  const { userID, data } = req.body;
  const db= req.db;
  const users= db.users;

  users.update({ interests: data  }, {
    where: { mobile: userID }
  })
  .then((response)=> {
    res.send({
      status: 100,
      msg: 'Hello, You are calling the getFollowings api'
    });
  })
  .catch((error) => {
    console.log('Error: ', error);
  })

  // res.send('Hello, You are calling the getFollowings api');
});

module.exports = router;