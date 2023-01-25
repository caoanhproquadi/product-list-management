
// const {Product} =require('../model')
// const { getList, findProductByID } = require("../services/productService")
// // const {checkEmpty}= require('../middlewares/validation')

// const getProductList = (req, res) => {
//     let productList = getList()
//     if (productList) {
//         res.status(200).send(productList)
//     } else {
//         res.status(404).send("not found!")
//     }

// }
// const getProductDetail = (req, res) => {
//     const id = req.params.id
//     let productList = getList()
//     let index = findProductByID(id)  
//     if (index !== -1) {
//         const product = productList[index]
//         res.status(200).send(product)

//     } else {
//         res.status(404).send("not found")
//     }

// }
// const addProduct = async (req, res) => {  
//     const newProduct = await Product.create(req.body)
//     res.status(201).send(newProduct)

// }
// const updateProduct = (req, res) => {
//     const { id } = req.params   
//     let productList = getList()
//     let index = findProductByID(id)  
//     if (index !== -1) {
//         let product = req.body       
//         product = {
//             "id": id,
//             ...product
//         }
//         productList[index] = product
//         res.status(200).send(product)

//     } else {
//         res.status(404).send("not found")
//     }

// }
// const deleteProduct = (req, res) => {
//     const { id } = req.params
   
//     let productList = getList()
//     let index = findProductByID(id)
//     if (index !== -1) {

//         productList.splice(index, 1)
//         res.status(200).send(productList)

//     } else {
//         res.status(404).send("not found")
//     }
// }
// module.exports = {
//     getProductList, getProductDetail, addProduct, updateProduct, deleteProduct
// }

const productServices = require("../services/productService");

const getAllProduct = async (req, res) => {
  const productList = await productServices.getAll();
  res.status(200).send(productList);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await productServices.getById(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("not found");
  }
};
const createProduct = async (req, res) => {
  const { name,amount,price,sale } = req.body;
  const newProduct = await productServices.create(name,amount,price,sale);
  res.status(201).send(newProduct);
};
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name,amount,price,sale } = req.body;
  const product = await productServices.update(id, name,amount,price,sale);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("not found!");
  }
};
const deleteProductById = async (req, res) => {
  const { id } = req.params;

  const productDelete = await productServices.deleteById(id);

  if (productDelete) {
    res.status(200).send(productDelete);
  } else {
    res.status(404).send("Not Found!");
  }
};

module.exports = {
  getAllProduct,
  getProductById,
  createProduct,
  updateProduct,
  deleteProductById,
};
