const userModel = require('../models/userModel');

const resolvers = {
  Query: {
    getUsers:  async () => await userModel.getAll(),
    getUser:   async (_, { id }) => await userModel.getById(id),
  },
  Mutation: {
    createUser:  async (_, { name, email }) => await userModel.create(name, email),
    updateUser:  async (_, { id, name, email }) => await userModel.update(id, name, email),
    removeUser:  async (_, { id }) => await userModel.remove(id),
  }
};

module.exports = resolvers;
