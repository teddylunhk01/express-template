import express from 'express'
import path from 'path'
// import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { sendError, checkPostBody } from '../utils/errorHandler'


const middlewares = (app) => {
  // view engine setup
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'jade')

  // uncomment after placing your favicon in /public
  // app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
  app.use(logger('dev'))
  app.use(bodyParser.json())
  app.use(checkPostBody)
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))
}

export default middlewares