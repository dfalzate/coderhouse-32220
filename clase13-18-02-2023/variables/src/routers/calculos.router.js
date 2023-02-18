import { Router } from 'express'
import * as CalculoController from '../controllers/calculos.controller.js'

const router = Router()

router.get('/suma',CalculoController.suma)
router.get('/resta',CalculoController.resta)

export default router