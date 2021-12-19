const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email:{
    type: Sequelize.STRING,
    allowNull: false,
    validate:{isEmail: true}
  },

  imageUrl:{
    type: Sequelize.STRING,
    defaultvalue:"https://www.personality-insights.com/wp-content/uploads/2017/12/default-profile-pic-e1513291410505.jpg",
    validate:{isURL: true}
  },

  gpa:{
    type:Sequelize.DECIMAL,
    validate:{min: 0.0, max: 4.0}
  }

});

module.exports = Student;


//https://sequelize.org/master/manual/validations-and-constraints.html
