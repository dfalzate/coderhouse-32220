import dotenv from 'dotenv'
import twilio from 'twilio'

dotenv.config()

const client = twilio(process.env.SID, process.env.TOKEN)

async function sms() {
  try {
    const message = {
      body:'Hola coderhouse desde twilio - ensayo',
      from:process.env.FROM,
      to:process.env.TO
    }
    const response = await client.messages.create(message)
    console.log(response)
  } catch (error) {
    throw new Error(error.message)
  }
}

// sms()

/* -------------------------------------------------------------------------- */
/*                                  Whatsapp                                  */
/* -------------------------------------------------------------------------- */

async function sendWP() {
  try {
    const message = {
      from:`whatsapp:${process.env.WP}`,
      to:`whatsapp:${process.env.TO}`,
      body: 'Hola coderhouse desde twilio',
      mediaUrl:["https://www.androidsis.com/wp-content/uploads/2009/06/fondo-de-pantalla-juegos-1.jpeg"],
    }
    const response = await client.messages.create(message)
    console.log(response)
  } catch (error) {
    throw new Error(error.message)
  }
}

sendWP()