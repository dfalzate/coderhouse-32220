import { Router } from 'express'
import passport from '../utils/passport.util.js'

const router = Router()

router.get('/fail', (req, res) => {
  res.send('Fail')
})
router.get('/login',passport.authenticate("github",{scope:["user:email"]}))
router.get('/callback',passport.authenticate('github',{failureRedirect:'/api/github/fail'}))

export default router