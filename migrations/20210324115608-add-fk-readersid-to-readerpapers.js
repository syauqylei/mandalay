'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('ReaderPapers', {
      fields: ['ReadersId'],
      type: 'foreign key',
      name: 'custom_fkey_Readersid_ReaderPapers',
      references: { //Required field
        table: 'Readers',
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
    return queryInterface.removeConstraint('ReaderPapers','custom_fkey_Readersid_ReaderPapers');
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
