import { faker } from '@faker-js/faker'

// const local = localStorage.Credentials
// const myData = JSON.parse(local)
// const response = await axios.get(`/users?email=${myData.email}`)

// const user = response.data[0]
let productList = []

productList = Array(100)
  .fill()
  .map((_, i) => ({
    id: i + 1,
    image: faker.image.url(),
    name: faker.commerce.product(),
    category: faker.commerce.productMaterial(),
    price: faker.commerce.price({ min: 0, max: 10000 }),
    stock: faker.number.int({ min: 0, max: 10000 }),
  }))

// if (user.Inventory) {
//   productList = user.Inventory
//   console.log(productList)
// }

export default productList
