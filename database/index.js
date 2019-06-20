const mongoose = require('mongoose');
require('dotenv').config();

let DB_URL = (process.env.NODE_ENV === 'development') ? 'mongodb://localhost/morelooks' : `mongodb+srv://gab:${process.env.DB_PW}@cluster0-2soin.mongodb.net/test?retryWrites=true&w=majority`;


mongoose.Promise = global.Promise;

mongoose.connect(DB_URL, {useNewUrlParser: true})
  .then(() => console.log('connection made'))
  .catch(err => console.error(err))

const productSchema = new mongoose.Schema({
  productname: String,
  imageurl: [String],
  shoesizes: [Number],
  clothingsizes: [String],
  designer: String,
  price: Number,
  color: [String],
  itemtype: String,
  description: String,
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
