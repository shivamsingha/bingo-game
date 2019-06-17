import * as crypto from 'crypto'

export const PORT = process.env.PORT || 4000
export const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/bingo-game'

function jwtSecret():String {
  if (process.env.TOKEN_SECRET)
    return process.env.TOKEN_SECRET
  process.emitWarning(
    'TOKEN_SECRET env variable not set! Using random string as token secret.',
    'Warning',
    (w) => console.log(w))
  let randomToken:String;
  crypto.randomBytes(16, (_, buf)=>{
    randomToken=buf.toString('base64')
  })
  return randomToken
}

export const TOKEN_SECRET = jwtSecret()
