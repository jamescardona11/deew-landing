const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

const Mail = async (req, res) => {
  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}
  `

  const resp = await mail.send({
    to: 'jjcardonao@gmail.com',
    from: 'deew@j11.io',
    subject: 'New Deew Form Message',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  // console.log(resp)

  res.status(200).json({ status: 'Ok' })
}

export default Mail
