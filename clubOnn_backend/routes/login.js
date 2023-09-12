const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// Route: GET /
router.post('/', (req, res) => {
  const { mobile }= req.body;
  res.send('Hello, You are calling the login api. Your mobile no. is '+mobile);

  const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
});

module.exports = router;