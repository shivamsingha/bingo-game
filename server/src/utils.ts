import * as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from './config'

export function generateJWT(userId: String): String {
  return jwt.sign({ userId }, TOKEN_SECRET, { algorithm: 'HS512' })
}

export function verifyJWT(token: String): String {
  try {
    const userId: String = jwt.verify(token, TOKEN_SECRET, { algorithm: 'HS512' },
      (err) => {
        throw new Error(err)
      })
    return userId;
  }
  catch (err) {
    console.log(err)
  }
}
