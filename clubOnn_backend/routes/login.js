const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const secretKey= '8ef03ny423f07fh3f';
// Route: GET /
router.post('/', (req, res) => {
  const { mobile }= req.body;

  const token = jwt.sign({ mobile: mobile }, secretKey, { expiresIn: '672h' });
  res.send({token: token, msg: 'Hello, You are calling the login api. Your mobile no. is '+mobile});
});

module.exports = router;