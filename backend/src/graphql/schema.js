const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const EmployeeType = require('../models/Employee'); 
const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs'); 

const EmployeeType = new GraphQLObjectType({
  name: 'Employee',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    class: { type: GraphQLString },
    subjects: { type: new GraphQLList(GraphQLString) },
    attendance: { type: GraphQLInt },
    role: { type: GraphQLString },
    email: { type: GraphQLString },
  })
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEmployee: {
      type: EmployeeType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        class: { type: GraphQLString },
        subjects: { type: new GraphQLList(GraphQLString) },
        attendance: { type: GraphQLInt },
        role: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve: async (parent, args) => {
        const hashedPassword = await bcrypt.hash(args.password, 10);

        const newEmployee = new Employee({
          name: args.name,
          age: args.age,
          class: args.class,
          subjects: args.subjects,
          attendance: args.attendance,
          role: args.role,
          email: args.email,
          password: hashedPassword 
        });

        return newEmployee.save();
      }
    },
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
