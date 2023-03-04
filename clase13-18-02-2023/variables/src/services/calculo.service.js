export async function suma() {
  let suma =0
  for (let i = 0; i < 2e5; i++) {
    console.log(i) 
    suma++
  }
  const number = Math.floor(Math.random()*10)
  return { suma, number }

}
export async function resta() {
  const number = Math.floor(Math.random()*10)
  console.log(`Resta: ${number}`)
  return `Resta: ${number}`
}

process.on('message', async (msg) => {
  console.log(msg)
  const resultado = await suma()
  process.send(resultado)
})