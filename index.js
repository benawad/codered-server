import express from "express";
import bodyParser from "body-parser";
import { graphiqlExpress, graphqlExpress } from "graphql-server-express";
import { makeExecutableSchema } from "graphql-tools";
import cors from "cors";
import { execute, subscribe } from "graphql";

import typeDefs from "./schema";
import resolvers from "./resolvers";
import models from "./models";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const app = express();

app.use(cors("*"));

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);

app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress(req => ({
    schema,
    context: {
      models
    }
  }))
);

models.sequelize.sync({ force: false }).then(() => app.listen(8080));
