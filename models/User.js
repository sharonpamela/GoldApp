const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  balance: { type: Number, default: 300 },
  favorites: String,
  price: Number,
  owned: {
    type: Array,
    default: [
      { CoinName: 'LTC', amount: 0 },
      { CoinName: '300', amount: 0 },
      { CoinName: 'ETH', amount: 0 },
      { CoinName: 'ETC', amount: 0 },
      { CoinName: 'ZEC', amount: 0 }]
  }}
  );

mongoose.model('users', userSchema);
