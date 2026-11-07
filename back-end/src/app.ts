
import 'dotenv/config'

import express, { json, urlencoded } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

import indexRouter from './routes/index'
import usersRouter from './routes/users'
import customersRouter from './routes/customers'
import carsRouter from './routes/cars'

const app = express()

// Configuração do CORS para permitir acesso do front-end.
const allowedOrigins = (
  process.env.ALLOWED_ORIGINS ||
  'http://localhost:5173,http://127.0.0.1:5173'
)
  .split(',')
  .map(origin => origin.trim())

app.use(cors({
  origin: allowedOrigins,
}))

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cookieParser())

/***************** ROTAS *************************/

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/customers', customersRouter)
app.use('/cars', carsRouter)

export default app
