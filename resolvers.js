export default {
  Query: {
    getCasing: (parent, args, { models }) =>
      models.Casing.findOne({ where: args })
  }
};
