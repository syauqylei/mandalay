'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Papers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Papers.belongsToMany(models.Readers, { through: 'ReaderPapers',
                                             foreignKey: 'PapersId' } );
      Papers.belongsToMany(models.Authors, { through: 'PaperAuthors',
                                             foreignKey: 'PapersId'} );
    }
  };
  Papers.init({
    title: DataTypes.STRING,
    url: DataTypes.STRING,
    keywords: DataTypes.STRING,
    summary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Papers',
  });
  return Papers;
};
