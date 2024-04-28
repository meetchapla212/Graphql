const resolvers = {
  Query: {
    getUser: (parent, { id }, { users }, info) => {
      return users.find((user) => user.id === id);
    },
    getAllUsers: (parent, args, { users }, info) => {
      return users;
    },
  },

  Mutation: {
    createUser: (_, { user }, { users }) => {
      let data = {
        id: 2,
        name: user.name,
      };
      users.push(data);
      return data;
    },
  },
};

module.exports = {
  resolvers: resolvers,
};
