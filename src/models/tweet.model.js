module.exports = (sequelize, Sequelize) => {
  const Tutorial = sequelize.define("tweet", {
    content: {
      type: Sequelize.STRING
    },
    username: {
      type: Sequelize.STRING
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('NOW()')
    }
  });

  return Tutorial;
};