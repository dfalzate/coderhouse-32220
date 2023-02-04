import { Router } from 'express'
import * as JWTController from '../controllers/jwt.controller.js'

const router = Router()

router.post('/login',JWTController.login)

export default router