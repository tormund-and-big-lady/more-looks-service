const express = require('express');
const controller = require('./controller.js');
const router = express.Router();


router
  .route('/api')
  .get(controller.get)
  .post(controller.post)

module.exports = router;