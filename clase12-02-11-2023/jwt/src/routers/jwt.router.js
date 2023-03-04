import { Router } from 'express'
import * as JWTController from '../controllers/jwt.controller.js'
import { authToken } from '../middleware/jwt.middleware.js'

const router = Router()

router.post('/login', JWTController.login)
router.get('/localStorage', authToken, JWTController.localStorage)
router.post('/loginCookie',JWTController.loginCookie)

export default router