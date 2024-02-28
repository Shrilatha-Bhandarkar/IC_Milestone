
const Food = require('../models/food');

exports.getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    return res.status(200).json(foods);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.getFoodById = async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);
    if (!food) {
      return res.status(404).json({ message: 'Food not found' });
    }
    return res.status(200).json(food);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.createFood = async (req, res) => {
  try {
    const { name, description, price, image, category } = req.body;

    const newFood = new Food({
      name,
      description,
      price,
      image,
      category
    });

    await newFood.save();

    return res.status(201).json({ message: 'Food created successfully', food: newFood });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
};
