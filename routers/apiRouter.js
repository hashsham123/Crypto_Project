// routers/apiRouter.js
const express = require('express');
const apiController = require('../controller.js/apiController.js');

const router = express.Router();

router.get('/example', apiController.example);
// Define more routes as needed

module.exports = router;
