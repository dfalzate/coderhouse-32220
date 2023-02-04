import { Router } from 'express'
import passport from '../utils/passport.util.js'

const router = Router()

router.get("/fail", (req, res)=>{
  console.log('Fail')
  res.send('Fail')
})

router.post('/signup', passport.authenticate("signup", {
  failureRedirect:'/api/passportLocal/fail'
}), (req, res) => {
  res.status(201).json({user:req.user})
})

router.post('/login', passport.authenticate('login', {
  failureRedirect:'/api/passportLocal/fail'
}), (req, res) => {
  req.session.logged = true
  req.session.user = req.user
  res.send('Usuario registrado con passport Local')
})


export default router