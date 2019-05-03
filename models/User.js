const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  balance: { type: Number, default: 300 },
  favorites: String,
  price: Number,
  owned: { type: Array, 
    default: [
      {coinName:'LTC', amount:0}, 
      {coinName:'300', amount:0}, 
      {coinName:'ETC', amount:0}, 
      {coinName:'ETH', amount:0}, 
      {coinName:'ZEC', amount:0}] },
});

mongoose.model('users', userSchema);
