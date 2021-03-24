'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReaderPapers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ReaderPapers.belongsTo(models.Readers, {foreignKey: 'ReadersId' });
      ReaderPapers.belongsTo(models.Papers, {foreignKey: 'PapersId' });
    }
  };
  ReaderPapers.init({
    ReadersId: DataTypes.INTEGER,
    PapersId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ReaderPapers',
  });
  return ReaderPapers;
};
