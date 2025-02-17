const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/db");
const schema = require("./src/schema/schema");

const app = express();

// Connect to DB
connectDB();

app.use(cors());
app.use(express.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
