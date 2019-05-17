const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/morelooks', {useNewUrlParser: true})
  .then(() => console.log('connection made'))
  .catch(err => console.error(err))

const productSchema = new mongoose.Schema({
  productname: String,
  imageurl: [String],
  sizes: [String],
  designer: String,
  price: Number,
  color: [String],
  description: String,
});

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
