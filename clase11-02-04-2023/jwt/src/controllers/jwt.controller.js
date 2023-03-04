import * as JWTService from '../services/jwt.service.js'
import { generateToken } from '../utils/jwt.util.js'

export async function login(req, res) {
  try {
    const { email, password } = req.body
    const user = await JWTService.login(email, password)
    delete user.password
    const token = generateToken(user)
    res.json({
      status: 'SUCCESS',
      token
    })
  } catch (error) {
    res.status(403).send(error.message)
  }
}