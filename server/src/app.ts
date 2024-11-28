import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import { NODE_DEV_URL, NODE_PROD_URL } from './config'
import PointMonitor from './routes/point.monitoring.routes'
import i18n from './i18nConfig'

const allowedOrigins =
  process.env.NODE_ENV === 'production' ? NODE_PROD_URL : NODE_DEV_URL

const app = express()
// app.use(timezoneMiddleware)

app.use(morgan('dev'))
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)

      const origins = allowedOrigins ? allowedOrigins.split(',') : []

      if (
        process.env.NODE_ENV !== 'production' ||
        origins.some((o: any) =>
          o instanceof RegExp ? o.test(origin) : o === origin
        )
      ) {
        callback(null, true)
      } else {
        callback(new Error('No permitido por CORS'))
      }
    },
    credentials: true,
  })
)

app.use(express.json())

app.use(i18n.init)

app.use('/api/v1/main', PointMonitor)

export default app
