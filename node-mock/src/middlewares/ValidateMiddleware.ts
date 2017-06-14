// import * as  joi from 'joi'
import { Request, NextFunction } from "express"
/**
 * 
 */
export function ValidateMiddleware(schema) {
    // return 
    return (req: Request, res: any, next: NextFunction) => {
        return next();
        // let result: any
        // if (schema.body) {
        //     result = joi.validate(req.body, schema.body)
        //     if (result.error) {
        //         return res.apiError(result.error.message)
        //     }
        // }
        // if (schema.params) {
        //     result = joi.validate(req.params, schema.params)
        //     if (result.error) {
        //         return res.apiError(result.error.message)
        //     }
        // }
        // if (schema.query) {
        //     result = joi.validate(req.query, schema.query)
        //     if (result.error) {
        //         return res.apiError(result.error.message)
        //     }
        // }
        // if (schema.header) {
        //     result = joi.validate(req.headers, schema.header, { allowUnknown: true })
        //     if (result.error) {
        //         return res.apiError(result.error.message)
        //     }
        // }
        // next()
    }
}

