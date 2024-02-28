// routes/food.js

import express from 'express';
import foodController from "../controllers/foodController"
const router = express.Router();



router.get('/', foodController.getAllFoods);
router.get('/:id', (req, res) => {
  const id = req.params.id;
  foodController.getFoodById(id, (err, food) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(food);
    }
  });
});
router.post('/', (req, res) => {
  const newFood = req.body;
  foodController.createFood(newFood, (err, food) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(food);
    }
  });
});

// Export the router as default
export default router;
