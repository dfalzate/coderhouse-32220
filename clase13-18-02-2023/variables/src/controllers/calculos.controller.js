import * as CalculosService from '../services/calculo.service.js'
import {fork} from 'child_process'

export async function suma(req, res) {
  // const response = await CalculosService.suma()
  // res.json(response)
  const computo = fork('./src/services/suma.js')
  computo.send('start')
  computo.on('message', (resultado) => {
    console.log(resultado)
    res.json(resultado)
  })
}

export async function resta(req, res) {
  const response = await CalculosService.resta()
  res.send(response)
}