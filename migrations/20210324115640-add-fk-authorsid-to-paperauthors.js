'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('PaperAuthors', {
      fields: ['AuthorsId'],
      type: 'foreign key',
      name: 'custom_fkey_Authorsid_PaperAuthors',
      references: { //Required field
        table: 'Authors',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('PaperAuthors','custom_fket_Authorsid_PaperAuthors');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
