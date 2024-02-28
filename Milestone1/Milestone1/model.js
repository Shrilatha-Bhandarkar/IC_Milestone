// import mongoose from 'mongoose';

//     const foodSchema = new mongoose.Schema({
//       id: String,
//       foodTitle: String,
//       foodDescription: String,
//       foodId:String,
//       foodPrice: Number,
//       foodImage: String,
//       vegNonVeg: { type: String, enum: ['veg', 'non-veg', 'dessert'] }
//   });
    
//     const userSchema = new mongoose.Schema({
//       _id: mongoose.Schema.Types.ObjectId,
//       email: String,
//       password: String,
//       googleId: String,
//       role: { type: String, enum: ['user', 'specialUser'], default: 'user' },
//     });

//     const food=mongoose.model('food', foodSchema);
//     const User = mongoose.model('User', userSchema);

//     module.exports = food;