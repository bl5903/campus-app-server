const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
  },

  imageUrl:{
    type: Sequelize.STRING,
    defaultvalue:"https://media.glassdoor.com/l/06/4a/1a/08/campus.jpg",
    validate:{isURL: true}
  },

  address:{
    type: Sequelize.STRING,
    notNull: true
  }

});

module.exports = Campus;
