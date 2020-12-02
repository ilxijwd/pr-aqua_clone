import { ServerMiddleware } from '@nuxt/types'
import axios from 'axios'

const redirect = (res: any, Location: String) => {
  res.writeHead(301, { Location })
  res.end()
}

const maintenanceMode: ServerMiddleware = async (req, res, next) => {
  const settingsUrl = `${process.env.STRAPI_URL || 'http://localhost:1337'}/settings`

  const lang = req.url?.includes('/en') ? '/en' : req.url?.includes('/ru') ? '/ru' : ''
  const maintenance = (await axios.get(settingsUrl)).data.maintenanceMode
  if (maintenance === false && req.url?.includes('maintenance')) redirect(res, `${lang}/`)
  else if (maintenance === true && !req.url?.includes('maintenance')) redirect(res, `${lang}/maintenance`)
  else next()
}

export default maintenanceMode
