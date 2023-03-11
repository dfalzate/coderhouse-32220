function suma(...parameters) {
  // condicion nueva
  if (parameters.length===0) return 0
  const noNumber = parameters.filter(number => typeof number !== 'number')
  if (noNumber.length > 0) return null
  console.log(parameters)
  // return parameters.reduce((acc,val)=>acc+val)
  return 3
}

console.log(suma())
console.log(suma(1,2,3))

module.exports = suma;
