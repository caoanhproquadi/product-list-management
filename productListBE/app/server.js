const express = require("express")
const router =require('./routers/rootRouter')
const app = express()
const port =4000
// setup sequelize
const {sequelize} = require('./model/index')
sequelize.sync({alter:true})

app.use(router)
app.use(express.json())


app.listen(port,()=>{
    console.log(`app run on localhost:${port}`)
})

