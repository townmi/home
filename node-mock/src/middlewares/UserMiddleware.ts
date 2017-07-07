import { Request, NextFunction } from "express"
import * as log4js from 'log4js'
import OperatorService from '../services/operator.service'
const logger = log4js.getLogger('userMiddleware')
/**
 * 
 */
export const UserMiddleware = async (req: Request, res: any, next: NextFunction) => {
    try {
        let operatorService = new OperatorService()
        let response: any = await operatorService.findById('')
        req.headers['x-role'] = response.data.role
        req.headers['x-displayName'] = response.data.displayName
        req.headers['x-cityId'] = response.data.cityId
        logger.info(`UserMiddleware:`, response)
    } catch (error) {
        logger.error(`UserMiddleware:`, error)
        return res.apiError(error)

    }
    next()
}

