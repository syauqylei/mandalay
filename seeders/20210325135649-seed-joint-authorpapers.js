'use strict';
const fs = require('fs');
const Values = JSON.parse(fs.readFileSync('./data/PaperAuthors.json'))
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PaperAuthors',Values);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PaperAuthors');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
