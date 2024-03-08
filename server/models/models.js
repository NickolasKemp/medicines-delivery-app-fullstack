const sequelize = require('../db')

const {DataTypes} = require('sequelize')

const Order = sequelize.define('order' ,{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
    address: {type: DataTypes.STRING}
})

const Medicine = sequelize.define('medicine', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    price: {type: DataTypes.INTEGER, defaultValue: 0},
    shop: {type: DataTypes.INTEGER},
    img: {type: DataTypes.STRING, allowNull: false}
})

const Store = sequelize.define('store', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false}
})

Store.hasMany(Medicine)
Medicine.belongsTo(Store)

module.exports = {
    Order,
    Medicine,
    Store
}