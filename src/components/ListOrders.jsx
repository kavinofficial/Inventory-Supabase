import productList from '../components/ProductList'
import { faker } from '@faker-js/faker'

function generateIndianPhoneNumber() {
  let number = '9'

  for (let i = 0; i < 9; i++) {
    number += Math.floor(Math.random() * 10)
  }

  return '+91' + number
}

const customers = Array(25)
  .fill()
  .map((_, i) => ({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    position: faker.commerce.department(),
    mobile: generateIndianPhoneNumber(),
    id: i + 1,
    products: [
      {
        quantity: faker.number.int({ max: 10 }),
        product: productList[faker.number.int({ min: 0, max: 20 })],
      },
    ],
  }))

export default customers
