const {Sequelize} =require('sequelize');
const {PASSWORD,DB,HOST,USER,dialect}=require('../configs/dbconfig')
const {createProduct}=require('./productModel')
const sequelize = new Sequelize (DB,USER,PASSWORD,{
    host:HOST,
    dialect:"mysql"
})

const Product = createProduct(sequelize)
module.exports={sequelize,Product}