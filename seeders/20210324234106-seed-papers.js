'use strict';
const fs = require('fs');
const data = fs.readFileSync('./data/papers.json','utf8')
const dataInput = JSON.parse(data);
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Papers',dataInput);
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
    return queryInterface.bulkDelete('Papers');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
