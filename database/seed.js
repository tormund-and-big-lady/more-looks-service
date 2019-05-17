const Product = require('./index.js');
const data = require('../data.json');

const helper = (arr, size) => {
  for (var i = 0; i < 7; i++) {
    let helper = Math.floor(Math.random() * size.length)
    if (!arr.includes(size[helper])) {
      arr.push(size[helper])
    }
  }
  return arr
}

const randomShoeSizes = () => {
  let arr = []
  let size = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11]

  helper(arr, size)
  let c = arr.sort((a, b) => a - b)
  return c
}

const randomClothingSize = () => {
  let size = [
    ['X-Small', 'Small', 'Medium', 'Large', 'X-Large'],
    ['Small', 'Medium', 'X-Large'],
    ['X-Small', 'Medium', 'Large'],
    ['Small', 'Medium', 'Large', 'X-Large'],
    ['X-Small', 'X-Large']
  ]
  let helper = Math.floor(Math.random() * size.length)
  return size[helper]
}

const randomDesigner = () => {
  let designers = ['Gucci', 'Givency', 'Burberry', 'ALice + Olivia', 'Alexander Wang', 'Max Mara', 'Michael Kors', 'Moschino', 'Theory', 'Thom Browne']
  let helper = Math.floor(Math.random() * designers.length)
  return designers[helper]
}

const randomPrice = (max, min) => {
  return Math.floor(Math.random()*(max-min+1)+min);
}

const description = () => {

}



const seed = () => {
  Product.insertMany(data)
    .then(() => console.log('data seeded'))
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err))
}

seed()