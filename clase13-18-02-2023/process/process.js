process.on('exit', (code) => {
  console.log(`Finalización proceso -  code ${code}`)
})
process.on('uncaughtException', (err) => {
  console.log(err)
})
process.on('beforeExit', () => {
  console.log('Antes de salir')
})


console.log(process.cwd()) //directorio actual
console.log(process.pid) // PID
console.log(process.memoryUsage()) //Memoria
console.log(process.env) // Variables de entorno
console.log('ARGV',process.argv) // Argumentos
console.log(process.version) // Version node

noExiste()

console.log(process.exit(30)) // Exit
console.log(process.argv.slice(2)) // Version node


