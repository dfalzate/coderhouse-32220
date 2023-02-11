import { Router } from 'express'
import passport from '../utils/passport.util.js'


const router = Router()

router.post('/token', passport.authenticate('jwtToken',{session:false}), (req, res) => {
  res.json({message:'Authorized token',user:req.user})
})


export default router