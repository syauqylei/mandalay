'use strict';
const fs = require('fs');

const rawData = fs.readFileSync('./data/rawdata.json','utf8');
const data = JSON.parse(rawData)
const authors = [];
for (let item of data) {
  authors.push(item.authors);
}

const Authors = authors.flat()
const uniqueAuthors = []

for(let item of Authors) {
  if (uniqueAuthors.indexOf(item) === -1) {
    item.createdAt = new Date();
    item.updatedAt = new Date();
    item.email = '';
    item.affiliate = '';
    uniqueAuthors.push(item);

  }
}
console.log(uniqueAuthors[0]);

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Authors',uniqueAuthors);
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
    return queryInterface.bulkDelete('Authors');
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
