const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const secretKey= '8ef03ny423f07fh3f';
// Route: GET /
router.post('/', (req, res) => {
  const { mobile }= req.body;
  const db= req.db;
  const users= db.users;

  users.findOne({
    where: { mobile: mobile }
  })
  .then((user) => {
    const token = jwt.sign({ mobile: mobile }, secretKey, { expiresIn: '672h' });
    if(user==null) {
      users.create({ mobile: mobile })
      .then((newUser) => {
        console.log('New student created:', newUser.toJSON());
        res.send({
          token: token, 
          interests: '[]', 
          msg: 'Hello, You are calling the login api. Your mobile no. is '+mobile
        });
      })
      .catch((error) => {
        console.error('Error creating student:', error);
      });
    } else {
      res.send({
        token: token, 
        interests: user.dataValues.interests, 
        msg: 'Hello, You are calling the login api. Your mobile no. is '+mobile
      });
    }
  })
  .catch((error) => {
    console.error('Error retrieving students:', error);
  });

});

module.exports = router;