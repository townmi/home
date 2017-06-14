import * as config from 'config'
import * as request from 'request'
import BaseService from './base.service'

export default class OperatorService extends BaseService {
    private _type: string = 'Operator'
    /**
     *  添加新用户
     * @param {*} obj
     */
    create(obj: object) {
        let self = this
        return new Promise((resolve, reject) => {
            request.post({
                url: config.get('userApi') + `/internal/users?_type=${self._type}`,
                headers: {
                    'content-type': 'application/json'
                },
                body: obj
            }, (err, response, body) => {
                body = JSON.parse(body)
                if (err) reject(err)
                if (body.error_code) reject(body)
                resolve(body)
            })
        })
    }
    /**
     * 修改
     * @param {*} condition
     * @param {*} obj
     */
    update(id: string, obj: object) {
        console.log('obj', obj)
        let self = this
        return new Promise((resolve, reject) => {
            request.put({
                url: config.get('userApi') + `/internal/users/${id}?_type=${self._type}`,
                headers: {
                    'content-type': 'application/json'
                },
                form: obj
            }, (err, response, body) => {
                body = JSON.parse(body)
                if (err) reject(err)
                if (body.error_code) reject(body)
                resolve(body)
            })
        })
    }
    /**
     * 列表
     */
    findAll(obj: object) {
        return new Promise((resolve, reject) => {
            request.post({
                url: config.get('userApi') + `/internal/query/users`,
                headers: {
                    'content-type': 'application/json'
                },
                body: obj
            }, (err, response, body) => {
                body = JSON.parse(body)
                if (err) reject(err)
                if (body.error_code) reject(body)
                resolve(body)
            })
        })
    }
    /**
     * 删除
     * @param {*} obj
     */
    delete(id: string) {
        let self = this
        return new Promise((resolve, reject) => {
            request.delete({
                url: config.get('userApi') + `/internal/users/${id}?_type=${self._type}`,
                headers: {
                    'content-type': 'application/json'
                }
            }, (err, response, body) => {
                body = JSON.parse(body)
                if (err) reject(err)
                if (body.error_code) reject(body)
                resolve(body)
            })
        })
    }

    /**
     * findById
     * 
     * @param {string} id 
     * 
     * @memberOf OperatorService
     */
    findById(id: string) {
        let self = this
        return new Promise((resolve, reject) => {
            request.get({
                url: config.get('userApi') + `/internal/users/${id}?_type=${self._type}`,
                headers: {
                    'content-type': 'application/json'
                },
            }, (err, response, body) => {
                body = JSON.parse(body)
                if (err) reject(err)
                if (body.error_code) reject(body)
                resolve(body)
            })
        })
    }
}