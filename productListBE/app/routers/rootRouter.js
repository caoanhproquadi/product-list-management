const express = require("express")
const productRouter =require('./productRouter')
const router =express.Router()

router.use(productRouter)
module.exports =router