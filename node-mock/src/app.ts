import * as express from 'express';
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as methodOverride from 'method-override'
import * as dotenv from 'dotenv'
dotenv.load()   //before config 
import * as config from 'config'
import * as log4js from 'log4js'
import register from './routers'
import { APIOutputMiddleware } from './middlewares/APIOutputMiddleware'


// log config
log4js.configure(config.get('log'))
const logger = log4js.getLogger('http')
logger.setLevel('INFO')
const app = express()

app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({
  origin: true,
  credentials: true
}))
// add put delete method
app.use(methodOverride())
app.use(APIOutputMiddleware)


register(app)

if (!module.parent) {
  app.listen(config.get('app.port') || 4000, config.get('app.host') || '127.0.0.1', () => {
    logger.info(`服务器启动，${config.get('app.host')}:${config.get('app.port')}`)
  })
}

export default app;