import * as express from 'express'
import * as cookieParser from 'cookie-parser'
import * as bodyParser from 'body-parser'
import { ApolloServer, gql } from 'apollo-server-express'
import { PORT } from './config'
import { isAuthorized } from './auth'

const app = express();
const apolloServer = new ApolloServer({})

app.use(cookieParser())
app.use(bodyParser.json())
app.use(isAuthorized)
apolloServer.applyMiddleware({ app })
app.get('/', (req, res) => res.send('hello'))

app.listen({ port: PORT }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}/`)
)
