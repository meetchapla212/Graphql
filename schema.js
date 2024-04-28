module.exports = {
  typeDefs: `
    type User{
        id: Int!
        name: String!
    }

    input UserData{
            name: String!
    }

    type Query {
        getAllUsers: [User]
        getUser(id: Int!): User 
    }

    type Mutation { 
        createUser(user: UserData): User
    }
`,
};
