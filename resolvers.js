export default {
  Query: {
    getCasing: (parent, args, { models }) => {
      return models.Casing.FindOne({ where: args });
    }
  }
};
