// let productList = [
//     {
//         "id": 0,
//         "name": "Dang Cao Anh0",
//         "amount": 10,
//         "price": 10,
//         "sale": "10%"
//     },
//     {
//         "id": 1,
//         "name": "Dang Cao Anh1",
//         "amount": 10,
//         "price": 10,
//         "sale": "10%"
//     }, {
//         "id": 2,
//         "name": "Dang Cao Anh2",
//         "amount": 10,
//         "price": 10,
//         "sale": "10%"
//     }, {
//         "id": 3,
//         "name": "Dang Cao Anh3",
//         "amount": 10,
//         "price": 10,
//         "sale": "10%"
//     }, {
//         "id": 4,
//         "name": "Dang Cao Anh4",
//         "amount": 10,
//         "price": 10,
//         "sale": "10%"
//     }
// ]

// const getList = () => {
//     if (productList) {
//         return productList
//     } else {
//         return false
//     }
// }
// const findProductByID = (id) => {
//     const index = productList.findIndex((product) => {
//         return product.id == id
//     })
//     return index
// }
// module.exports = {
//     getList, findProductByID
// }

const { Product } = require("../model");

const getAll = async () => {
  const productList = await Product.findAll();
  if (productList) {
    return productList;
  } else {
    return "Not Found!";
  }
};

const getById = async (id) => {
  const product = await Product.findOne({
    where: {
      id,
    },
  });
  return product;
};

const create = async (name, amount, price,sale) => {
  const newProduct = await Product.create({ name, amount, price,sale });
  return newProduct;
};

const update = async (id, name, amount, price,sale) => {
  const product = await Product.findOne({
    where: {
      id,
    },
  });
  if (product) {
    product.name = name;
    product.amount = amount;
    product.price = price;
    product.sale = sale;
    const productUpdated = await product.save();
    return productUpdated;
  } else {
    return null;
  }
};

const deleteById = async (id) => {
  const product = await Product.findOne({
    where: {
      id,
    },
  });
  if (product) {
    await Product.destroy({
      where: {
        id,
      },
    });
    return product;
  } else {
    return false;
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
};
