module.exports = {
    HOST: "localhost",
    USER: "regineruud",
    DB: "postgis_test",
    dialect: "postgresql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };