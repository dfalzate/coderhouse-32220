function login(user,password) {
  if (!password) return 'No se ha proporcionado un password'
  if (!user) return 'No se ha proporcionado un usuario'
  if(password!=='123') return 'Password incorrecto'
  if(user!=='coderUser') return 'Usuario incorrecto'
  if(user==='coderUser' && password === '123') return 'Loggeado'
}

module.exports=login