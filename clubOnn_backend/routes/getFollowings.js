const express = require('express');
const router = express.Router();

// Route: POST /
router.post('/', (req, res) => {
  const { uid } = req.body;
  const db= req.db;
  const clubs= db.clubs;
  const users= db.users;
  
  users.findOne({
    where: { id: uid }
  })
  .then((user)=> {
    if(user!=null) {
      clubs.findAll({
        where: { id: JSON.parse(user.clubsfollowing) }
      })
      .then((response)=> {
        res.send({
          data: response,
          msg: 'Hello, You are calling the getFollowings api'
        });
      })
      .catch((error) => {
        console.log('Error: ', error);
      })
    }
  })

  // res.send('Hello, You are calling the getFollowings api');
});

module.exports = router;