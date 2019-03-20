require('dotenv').config();

const appName = 'Purchase app Test';

const config = {
  appName: process.env.APP_NAME || appName,
  server: {
    port: process.env.PORT
  },
  mongo: {
    salt_value: 10,
    connection: {
      host: process.env.MONGODB_HOST,
      username: process.env.MONGODB_USER,
      password: process.env.MONGODB_PASSWORD,
      port: process.env.MONGODB_PORT,
      db: process.env.MONGODB_DATABASE_NAME
    },
    queryLimit: process.env.MONGODB_QUERY_LIMIT,
    questionLimit: process.env.QUESTION_LIMIT
  },

  mongoErrorCode: {
    duplicateId: 11000
  },
};

module.exports = config;
