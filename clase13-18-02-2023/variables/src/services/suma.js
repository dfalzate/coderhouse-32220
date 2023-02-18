export function suma() {
  let suma =0
  for (let i = 0; i < 2e5; i++) {
    console.log(i) 
    suma++
  }
  const number = Math.floor(Math.random()*10)
  return { suma, number }

}

process.on('message', (msg) => {
  console.log(msg)
  const resultado =  suma()
  process.send(resultado)
})