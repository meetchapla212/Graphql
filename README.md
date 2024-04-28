# Graphql
Node Express Graphql

## Steps to create node project with express and graphql.

1. Install graphql, @apollo/server, express, http, cors packages
2. Create main server.js
   1.  Create http server.
   2.  Define Apollo Server with schema and resolvers.
   3.  Start Apollo Server.
   4.  Bind server with path and express app configurations to Apollo Graphql Server.
        1. Define context for all the resolvers.
        2. Database Connection Object, Data Source, anything that is needed for resolvers can be set in context field.
   6.  Listen Server on defined port.
3. Create schema.js and resolvers.js for defining schemas and resolvers for graphql query.
4. Run server.js
5. Run '/graphql' endpoint for Graphql UI on defined host.
