// models/order.js

const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food' },
  addressId: String, // Assuming it's a string for simplicity
  paymentMode: { type: String, enum: ['cash', 'card', 'UPI'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['Pending', 'Confirmed', 'Delivered'], default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
