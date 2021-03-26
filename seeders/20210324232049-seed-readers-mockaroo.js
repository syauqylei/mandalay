'use strict';
const fs = require('fs');
const hash = require('../helpers/hash.js')
const readers = JSON.parse(fs.readFileSync('./data/readers.json','utf8'));

for (let item of readers) {
  item.password = hash(item.password)
  item.createdAt = new Date();
  item.updatedAt = new Date();
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Readers',readers);
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
    return queryInterface.bulkDelete('Readers');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
