module.exports = (sequelize, dataTypes) => {

    let alias = "Posts"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: dataTypes.INTEGER(100),
            allowNull: false
        },
        content:{
            type: dataTypes.INTEGER(500),
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(1000),
            allowNull: true,
        },
        category:{
            type: dataTypes.INTEGER(200),
            allowNull: false,
        },
        date:{
            type: dataTypes.DATEONLY,
            allowNull: false,
        }
    }

    let config = {
        tableName: "post",
        timestamps: false
    }

    const Operation = sequelize.define(alias,cols,config)

    return Operation
}