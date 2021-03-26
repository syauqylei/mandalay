'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Readers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Readers.belongsToMany(models.Papers, {through: 'ReaderPapers',
                                             foreignKey: 'ReadersId' } );
    }

    fullName() {
      return this.first_name + ' '+ this.last_name;
    }

  };
  Readers.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Readers',
  });
  return Readers;
};
