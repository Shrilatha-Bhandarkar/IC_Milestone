
const Order = require('../models/order');

exports.placeOrder = async (req, res) => {
  try {
    const { userId, foodId, addressId, paymentMode } = req.body;

    const newOrder = new Order({
      userId,
      foodId,
      addressId,
      paymentMode,
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'Pending' 
    });

    await newOrder.save();

    return res.status(201).json({ message: 'Order placed successfully', order: newOrder });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
