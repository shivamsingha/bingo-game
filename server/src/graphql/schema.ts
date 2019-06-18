import { gql } from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    
  }

  type board{
    numbers: [Boolean!]!
  }
  
  type userStats{
    numGames: Int,
    numWon: Int,
    numLost: Int,
    numTied: Int,
    leastMoves: Int,
    mostMoves: Int
  }
  
  type user{
    name: String!,
    email: String!,
    password: String!,
    stats: userStats!
  }
  
  type lobbyOptions{
    numPlayers: Int!,
    maxPlayers: Int!,
    hidden: Boolean!,
    isPasswordSet: Boolean!,
    password: String
  }
  
  type lobbyPlayers{
    user: user!,
    board: board!
  }
  
  type lobby{
    lobbyName: String!,
    players: [lobbyPlayers!]!,
    options: lobbyOptions!,
    status: String
  }
  
  type lobbyList{
    lobbies: [lobby]
  }
`