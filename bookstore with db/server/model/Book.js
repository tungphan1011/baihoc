import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const Book = sequelize.define('books', {
  // Model attributes are defined here
  title:{
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: true
    // allowNull defaults to true
  },
  summary:{
    type: DataTypes.STRING
    
  }
});

Book.sync().then(()=>{
    console.log('book table created')
})
export default Book