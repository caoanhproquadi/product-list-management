const { DataTypes } = require("sequelize")

const createProduct = (sequelize)=>{
    return sequelize.define("products",{
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        amount:{
            type:DataTypes.INTEGER,
             allowNull:false
        },
        price:{
            type:DataTypes.DOUBLE,
             allowNull:false
        },
        sale:{
            type:DataTypes.STRING,
             allowNull:false
        },
    
    },{
        timestamps:false
    })
}
module.exports={
    createProduct
}