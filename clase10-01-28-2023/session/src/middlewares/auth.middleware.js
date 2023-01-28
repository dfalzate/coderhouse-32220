export default function auth(req, res, next) {
  if (req.session.login) {
    next();
  } else {
    res.send("Ruta restringida");
  }
}
