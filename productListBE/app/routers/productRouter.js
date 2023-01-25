const express = require("express")
const productRouter = express.Router()
const {createProduct,deleteProductById,getAllProduct,getProductById,updateProduct}= require("../controllers/productController")


productRouter.use(express.json())
// lay danh sach sp url = localhost:3000/products
productRouter.get('/products',getAllProduct)

// lay ds tung sp url = localhost:3000/products/:id
productRouter.get('/products/:id',getProductById)

// them sp url = localhost:3000/products
productRouter.post('/products',createProduct)

// sua sp url = localhost:3000/products/:id
productRouter.put('/products/:id',updateProduct)
// xoa sp url = localhost:3000/products/:id
productRouter.delete('/products/:id',deleteProductById)
module.exports = productRouter