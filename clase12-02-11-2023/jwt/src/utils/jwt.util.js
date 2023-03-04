import jwt from 'jsonwebtoken'

export function generateToken(user) {
  const token = jwt.sign({ user }, process.env.SECRET,{expiresIn:'10h'})
  return token
}