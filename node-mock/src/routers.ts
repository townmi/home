import { Router } from 'express'
import rootRouter from './routers/root'
import operatorRouter from './routers/operator'

/**
 * 注册路由
 * 
 * @export
 * @param {any} app 
 */
export default function register(app: Router) {
    rootRouter(app)
    operatorRouter(app)
}