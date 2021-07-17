const faker = require("faker");

const buildProductList = (size) => {
  const result = [];

  for (let i = 0; i < size; i++) {
    result.push({
      id: i +1,
      image: faker.image.imageUrl(),
      title: faker.commerce.productName(),
      summary: faker.commerce.productDescription(),
      slang: faker.lorem.slug(),
    })
  }

  return result;
}

console.log(JSON.stringify(buildProductList(20), null, "  ")); // null, "  " são parametros para deixar o json formatado

// comando para este product.js que ira gerar o products.json na pasta fixtures
//# node src/simulador/models/builders/products.js > src/simulador/models/builders/fixtures/products.json