import passport from "passport";
import {Strategy, ExtractJwt} from 'passport-jwt'
import { UserModel } from '../models/user.model.js'
import dotenv from 'dotenv'
dotenv.config()

passport.serializeUser(function (user, done) {
  console.log("Serializing");
  done(null, user._id);
});

passport.deserializeUser(function (_id, done) {
  console.log("Deserializing");
  UserModel.findById(_id, function (err, user) {
    done(err, user);
  });
});

passport.use("jwtToken", new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey:process.env.SECRET
}, async function (jwtPayload,done) {
  console.log(jwtPayload)
  done(null,jwtPayload.user)
}))


function extractor(req) {
  console.log(req)
  if (req?.cookies['coderhouse']) {
    const token = req.cookies['coderhouse']
    return token
  }
  return false
}

passport.use('jwtCookie', new Strategy({
  jwtFromRequest:ExtractJwt.fromExtractors([extractor]),
  secretOrKey:process.env.SECRET
}, async function (jwtPayload, done) {
  console.log(jwtPayload)
  done(null, jwtPayload.user)
}))

// passport.use('jwtCookie', new Strategy({
//   jwtFromRequest:ExtractJwt.,
//   secretOrKey:process.env.SECRET
// }, async function (jwtPayload, done) {
//   console.log(jwtPayload)
//   done(null, jwtPayload.user)
// }))



export default passport;