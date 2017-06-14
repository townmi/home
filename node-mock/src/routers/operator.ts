import { Router, Request, Response } from 'express'
import * as  joi from 'joi'
import OperatorController from '../controllers/operatorController'
import { UserMiddleware } from '../middlewares/UserMiddleware'
import { ValidateMiddleware } from '../middlewares/ValidateMiddleware'

export default function operatorRouter(app: Router) {
    let apiPrefix = 'operators'
    /**
     * @api {post} /operators/users/invite  invite user
     * @apiName invite
     * @apiGroup Operators
     *
     * @apiParam {String} mobile   mobile
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *     {
     *       "status": "OK",
     *       "code": 200,
     *       "data": {
     *         "id": "32436880-25bb-11e7-8306-53622de10340",
     *         "mobile": "18575740461",
     *       }
     *     }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *      {
     *         "status": "Error",
     *         "error_code": 500,
     *         "error_msg": "xxxx"
     *      }
     */
    app.post(`/${apiPrefix}/users/invite`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        }),
        body: joi.object().keys({
            mobile: joi.number().required()
        })
    }), UserMiddleware, (req: Request, res: Response) => {
        new OperatorController({ req, res }).invite()
    })

    /**
     * @api {put} /operators/users/self/name_email  modify self name and email
     * @apiName modify self
     * @apiGroup Operators
     *
     * @apiParam {String} displayName   displayName
     * @apiParam {String} email   email
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *       "status": "OK",
     *       "code": 200,
     *       "data": {
     *       "id": "32436880-25bb-11e7-8306-53622de10340",
     *       "mobile": "18575740461",
     *       "displayName":"test",
     *       "email":"11@qq.com"
     *       }
     *   }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *       {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *       }
     */
    app.put(`/${apiPrefix}/users/self/name_email`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        }),
        body: joi.object().keys({
            displayName: joi.string().required(),
            email: joi.string().required()
        }),
        params: joi.object().keys({
            id: joi.string()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).updateNameEmailById()
    })

    /**
     * @api {put} /operators/users/name_email/:id  modify other name and email
     * @apiName modify other
     * @apiGroup Operators
     *
     * @apiParam {String} id   url params id
     * @apiParam {String} displayName   displayName
     * @apiParam {String} email   email
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *       "status": "OK",
     *       "code": 200,
     *       "data": {
     *       "id": "32436880-25bb-11e7-8306-53622de10340",
     *       "mobile": "18575740461",
     *       "displayName":"test",
     *       "email":"11@qq.com"
     *       }
     *   }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *       {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *       }
     */
    app.put(`/${apiPrefix}/users/name_email/:id`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        }),
        body: joi.object().keys({
            displayName: joi.string().required(),
            email: joi.string().required()
        }),
        params: joi.object().keys({
            id: joi.string()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).updateNameEmailById()
    })

    /**
     * @api {get} /operators/users/get_list  get list
     * @apiName list
     * @apiGroup Operators
     *
     * @apiParam {String} search   search optional
     * @apiParam {String} cityId   cityId optional
     * @apiParam {String} limit   limit optional
     * @apiParam {String} offset   offset optional
     * @apiParam {String} order   order optional
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *           {
     *           "data": {
     *               "user": {
     *               "count": 6,
     *               "rows": [
     *                   {
     *                   "id": "fdea2b50-2989-11e7-8f7f-2da3c7cdc560",
     *                   "displayName": null,
     *                   "role": "bd",
     *                   "email": null,
     *                   "mobile": "185757404678",
     *                   "locationLat": null,
     *                   "locationLon": null,
     *                   "cityId": "123",
     *                   "wechat": null
     *                   }
     *               ]
     *               }
     *           },
     *           "code": 200,
     *           "status": "OK"
     *           }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *       {
     *        "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *       }
     */
    app.get(`/${apiPrefix}/users/get_list`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        }),
        query: joi.object().keys({
            'limit': joi.string(),
            'offset': joi.string(),
            'order': joi.string(),
            'search': joi.string(),
            'cityId': joi.string()
        })
    }), UserMiddleware, (req: Request, res: Response) => {
        new OperatorController({ req, res }).getList()
    })

    /**
     * @api {put} /operators/users/role_city/:id  modify other role and city
     * @apiName modify role city
     * @apiGroup Operators
     *
     * @apiParam {String} id   url params id
     * @apiParam {String} cityId   cityId
     * @apiParam {String} role   role
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *       "status": "OK",
     *       "code": 200,
     *       "data": {
     *       "id": "32436880-25bb-11e7-8306-53622de10340",
     *       "mobile": "18575740461",
     *       "cityId":"test",
     *       "role":"bd"
     *       }
     *   }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *       {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *       }
     */
    app.put(`/${apiPrefix}/users/role_city/:id`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        }),

        body: joi.object().keys({
            cityId: joi.string(),
            role: joi.string()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).updateRoleCity()
    })

    /**
     * @api {delete} /operators/users/delete/:id  delete  operators
     * @apiName delete operators
     * @apiGroup Operators
     *
     * @apiParam {String} id   url params id    
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *       "status": "OK",
     *       "code": 200,
     *       "data": ""
     *   }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *       {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *       }
     */
    app.delete(`/${apiPrefix}/users/delete/:id`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        }),
        params: joi.object().keys({
            id: joi.string()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).deleteById()
    })

    /**
     * @api {get} /operators/users/get_city_list  get city list
     * @apiName get city list
     * @apiGroup Operators
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *         {
     *         "data": {
     *             "user": {
     *                 "rows": [
     *                     {
     *                     "id": "0c33ef70-2967-11e7-bcb9-0972f51320e5",
     *                     "cityId": "123,234"
     *                     }
     *                 ]
     *             }
     *         },
     *         "code": 200,
     *         "status": "OK"
     *         }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *      {
     *         "status": "Error",
     *         "error_code": 500,
     *         "error_msg": "xxxx"
     *      }
     */
    app.get(`/${apiPrefix}/users/get_city_list`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).getCityList()
    })

    /**
     * @api {get} /operators/venues  operators get venues list
     * @apiName operators get venues list
     * @apiGroup Operators
     *
     * 
     * @apiParamExample {JSON} Request-Example:
     *    ?query = {
     *        user(_type:"VenuesManager",limit='',skip='',venuesId='',...),{
     *            count,
     *                rows {
     *                id
     *                displayName
     *                ...
     *                }
     *            }
     *        }
     * 
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *       {
     *       "data": {
     *       "user": {
     *           "count": 11,
     *           "rows": [
     *           {
     *               "id": "ffd828c0-3ad9-11e7-9ef2-17a30b6da512",
     *               "displayName": null
     *           },
     *           {
     *               "id": "fe0f8410-30d0-11e7-88ac-fd4e7010299f",
     *               "displayName": "汤海祥"
     *           }
     *           ]
     *        }
     *       },
     *       "code": 200,
     *       "status": "OK"
     *   }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *   {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *   }
     */
    app.get(`/${apiPrefix}/venues`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        }),
        query: joi.object().keys({
            query: joi.string().required()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).venuesList()
    })

    /**
     * @api {post} /operators/venues  operators add  venues
     * @apiName operators add  venues
     * @apiGroup Operators
     *
     * @apiParamExample {JSON} Request-Example:
     *  {
     *       "displayName": "gass123",
     *       "password": "1234",
     *       "role": "",
     *       "email": "zengyu@ye-dian.com",
     *       "mobile": "18575740461",
     *       "locationLat": "1111",
     *       "locationLon": "1111",
     *       "cityId": "1",
     *       "wechat": {
     *         ...
     *       }
     *  }
     *
     *
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *       "status": "OK",
     *       "code": 200,
     *       "data": {
     *       "id": "32436880-25bb-11e7-8306-53622de10340",
     *       "mobile": "18575740461",
     *       ...
     *       }
     *   }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *       {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *       }
     */
    app.post(`/${apiPrefix}/venues`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        })
    }), (req: Request, res: Response) => {
        console.log('dd', 'ff')
        new OperatorController({ req, res }).createVenues()
    })

    /**
     * @api {put} /operators/venues/:id  operators modify venues
     * @apiName operators modify venues
     * @apiGroup Operators
     *
     * @apiParam {String} id   url params id 
     * 
     * @apiParamExample {JSON} Request-Example:
     *  {
     *       "displayName": "gass123",
     *       "password": "1234",
     *       "role": "",
     *       "email": "zengyu@ye-dian.com",
     *       "mobile": "18575740461",
     *       "locationLat": "1111",
     *       "locationLon": "1111",
     *       "wechat": {
     *         ...
     *       }
     *  }
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *   {
     *       "status": "OK",
     *       "code": 200,
     *       "data": {
     *       "id": "32436880-25bb-11e7-8306-53622de10340",
     *       "mobile": "18575740461",
     *       "cityId":"test",
     *       "role":"bd"
     *       }
     *   }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *   {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *   }
     */
    app.put(`/${apiPrefix}/venues/:id`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).modifyVenues()
    })

    /**
     * @api {delete} /operators/venues/:id  operators delete venues
     * @apiName operators delete venues
     * @apiGroup Operators
     *
     * @apiParam {String} id   url params id           
     *
     * @apiSuccessExample Success-Response:
     *     HTTP/1.1 200 OK
     *    {
     *    "status": "OK",
     *    "code": 200,
     *    "data": ""
     *    }
     *
     * @apiErrorExample Error-Response:
     *     HTTP/1.1 200 Not Found
     *   {
     *       "status": "Error",
     *       "error_code": 500,
     *       "error_msg": "xxxx"
     *   }
     */
    app.delete(`/${apiPrefix}/venues/:id`, ValidateMiddleware({
        header: joi.object().keys({
            'x-userId': joi.string().required()
        })
    }), (req: Request, res: Response) => {
        new OperatorController({ req, res }).deleteVenues()
    })

} 