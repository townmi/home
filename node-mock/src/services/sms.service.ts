import * as config from 'config'
import * as request from 'request'

export default class SmsService {
    /**
     *  发送短信
     * @param {*} obj
     */
    send(obj: object) {
        return new Promise<string>((resolve, reject) => {
            request.post({
                url: config.get('smsApi') + '/api/smsByTemplate',
                headers: {
                    'content-type': 'application/json'
                },
                form: obj
            }, (err, response, body) => {
                if (err) reject(err)
                resolve(body)
            })
        })
    }
}