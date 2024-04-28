const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const express = require("express");
const http = require("http");
const cors = require("cors");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { users } = require("./data/users");

const app = express();
const httpServer = http.createServer(app);

const startServer = async () => {
  // Create new apollo graphql server
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  // Start apollo graphql server
  await server.start();
  // Bind server with path and app configurations.
  app.use(
    "/graphql",
    cors(),
    express.json(),
    expressMiddleware(server, {
      // Context is used for all resolvers
      context: async () => ({ users }),
    })
  );
  // Listen app on defined port.
  await new Promise((resolve) => httpServer.listen({ port: 5000 }, resolve));
  console.log(`Server ready at http://localhost:5000/graphql`);
};

startServer();
