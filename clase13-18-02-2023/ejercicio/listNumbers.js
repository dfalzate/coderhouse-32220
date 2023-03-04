process.on('exit', (code) => {
  console.log(`Proceso finalizado - code ${code}`)
})

function listNUmbers(...numbers) {
  const types =[]
  for (const number of numbers) {
    types.push(typeof number)
    if (typeof number !== 'number') {
      console.log('Invalid parameter',types)
      process.exit(-4)
    }
  }
  console.log(types)
}

listNUmbers(1,2,3,4,5,'a',1)