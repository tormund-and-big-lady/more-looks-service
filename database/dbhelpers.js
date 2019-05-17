const Product = require('./index.js');

const dbhelpers = {
  get: () => Product.find(),
  post: Product.create()
}

module.exports = dbhelpers;