// routes/order.js

const express = require('express');
const router = express.Router();

const orderController = require('../controllers/orderController');

router.post('/', orderController.placeOrder);

export default router;
