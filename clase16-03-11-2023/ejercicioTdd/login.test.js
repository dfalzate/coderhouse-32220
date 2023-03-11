const login = require('./login.js')

describe('Pruebas de login', () => {
  test("Si no se pasa un password debe devolver mensaje 'No se ha proporcionado un password'", () => {
    expect(login('coderUser',null)).toBe('No se ha proporcionado un password')
  })
  test("Si no se pasa un usuario debe devolver mensaje 'No se ha proporcionado un usuario'", () => {
    expect(login(null,'123')).toBe('No se ha proporcionado un usuario')
  })
  test("Si se pasa un usuario incorrecto de devolver mensaje 'Usuario incorrecto'", () => {
    expect(login('incorrect','123')).toBe('Usuario incorrecto')
  })
  test("Si se pasa un password incorrecto de devolver mensaje 'Password incorrecto'", () => {
    expect(login('coderUser','incorrect')).toBe('Password incorrecto')
  })
  test("Si usuario y password correctos debe devolver 'Loggeado'", () => {
    expect(login('coderUser', '123')).toBe('Loggeado')
  })
})