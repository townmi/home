import { Request, NextFunction } from "express"

/**
 * 给res对象添加拓展的返回方法
 */
export function APIOutputMiddleware(req: Request, res: any, next: NextFunction) {
    req.headers['x-userId'] = req.headers['x-consumer-custom-id']
    delete req.headers['x-consumer-custom-id']

    // 相应api成功结果
    res.apiSuccess = (data) => {
        res.jsonp({
            status: 'OK',
            code: 200,
            data: data
        })
    }
    // 相应api出错结果，err是一个Error对象
    res.apiError = (err) => {
        res.jsonp({
            status: 'Error',
            error_code: err.err_code || 500,
            error_msg: err.error_msg || err.toString(),
            error_exmsg: err.exMsg || ''
        })
    }
    next()
}

