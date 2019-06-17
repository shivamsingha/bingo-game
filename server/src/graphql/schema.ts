import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    
  }

  type User {
    name:String,
    email:String,
    password:String
  }

  type Game {
    numbers:[Boolean]
  }
`