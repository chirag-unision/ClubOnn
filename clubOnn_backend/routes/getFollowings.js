const express = require('express');
const router = express.Router();

// Route: GET /
router.get('/', (req, res) => {
  res.send('Hello, You are calling the getFollowings api');
});

module.exports = router;