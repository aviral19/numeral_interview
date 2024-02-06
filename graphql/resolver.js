const { sequelize } = require("../models");
const { City } = sequelize.models;

const Query = {
  getCities: async () => {
    try {
      const cities = City.findAll();
      return cities;
    } catch (err) {
      console.log(err);
    }
  },
};

module.exports = { Query };
