const axios = require('axios')
const Telebot = require('telebot')
const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())
app.post('/new-appeal', async (req, res) => {
  try {
    const { request, name, phone } = req.body

    const settingsUrl = `${process.env.STRAPI_URL || 'http://localhost:1337'}/settings`

    const adminToken = (await axios.get(settingsUrl)).data.adminTelegramID

    const tb = new Telebot({ token: 'TOKEN' })
    await tb.sendMessage(adminToken, `**${request}**\n\nИмя: ${name}\nТелефон: ${phone}`, { parseMode: 'Markdown' })

    res.status(200).json({ ok: 200 })
  } catch (e) {
    res.status(500).send(e)
  }
})

module.exports = app
