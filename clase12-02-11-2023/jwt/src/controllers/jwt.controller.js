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


export function localStorage(req, res) {
  console.log('Local Storage')
  res.send('Local storage')
}

export async function loginCookie(req, res) {
  try {
    const { email, password } = req.body
    const user = await JWTService.login(email, password)
    delete user.password
    const token = generateToken(user)
    const page = `
      <div>
        <button id="cookies">
          Cookies
        </button>
        <script>
          const cookie = document.getElementById('cookies')
          cookie.addEventListener('click',()=>{
            console.log(document.cookie)
          })
        </script>
      </div>
    `
    res.cookie('coderhouse', token, { maxAge: 100000, httpOnly:true }).send(page)
  } catch (error) {
    res.status(403).send(error.message)
  }
}
