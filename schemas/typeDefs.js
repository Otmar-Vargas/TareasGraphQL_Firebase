const { gql } = require("apollo-server");
//const gql = require("apollo-server").gql;

//tarea: Validar el email tanto en crear como en actualizar
//Agregar firebase tambien
const typeDefs = gql`
    """Representa a un usuario dentro del sistema"""
    type User {
        id: ID!
        name: String!
        email: String!
    }

    type Query {
        getUsers: [User]
        getUser(id: ID!): User 
    }

    type Mutation {
        createUser (name: String!, email: String!): User
        updateUser (id: ID!, name: String!, email: String!): User 
        removeUser(id: ID!): User
    }
`;

module.exports = typeDefs;