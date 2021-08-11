const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('SDC-Products', 'postgres', 'fundip52', {
  host: 'localhost',
  dialect: 'postgres'
});

let test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test();