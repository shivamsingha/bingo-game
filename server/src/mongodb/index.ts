import * as mongoose from 'mongoose'
import { MONGODB_URL } from '../config'

mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', () => console.log('Mongodb connection error!'))
db.once('open', () => console.log('Mongodb connected'))

const board = new mongoose.Schema({
  numbers: [Boolean]
})

const userStats = new mongoose.Schema({
  numGames: Number,
  numWon: Number,
  numLost: Number,
  numTied: Number,
  leastMoves: Number,
  mostMoves: Number
})

const user = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  stats: {
    type: userStats
  }
})

const lobbyOptions = new mongoose.Schema({
  numPlayers: Number,
  maxPlayers: Number,
  hidden: Boolean,
  isPasswordSet: Boolean,
  password: String
})

const lobbyPlayers = new mongoose.Schema({
  user: {
    type: user
  },
  board: {
    type: board
  }
})

const lobby = new mongoose.Schema({
  lobbyName: String,
  players: {
    type: [lobbyPlayers]
  },
  options: {
    type: lobbyOptions
  },
  status: String
})

const lobbyList = new mongoose.Schema({
  lobbies: {
    type: [lobby]
  }
})