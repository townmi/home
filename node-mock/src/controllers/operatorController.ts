import * as log4js from 'log4js'
import * as config from 'config'
import BaseControler from './base'
import OperatorService from '../services/operator.service'
import SmsService from '../services/sms.service'
import VenuesService from '../services/venues.service'


export default class OperatorController extends BaseControler {
    public OperatorService: any
    public SmsService: any
    public VenuesService: any
    public logger: any = log4js.getLogger('operatorController')

    constructor(args) {
        super(args)
        if (!this.OperatorService) {
            this.OperatorService = new OperatorService()
        }
        if (!this.SmsService) {
            this.SmsService = new SmsService()
        }
        if (!this.VenuesService) {
            this.VenuesService = new VenuesService()
        }
    }
    /**
     * 邀请
     */
    async invite() {
        this.logger.info(`invite:mobile:`, this.http.req.body.mobile)
        try {
            let body = `{
            "role": "bd",
            "mobile":"${this.http.req.body.mobile}"
          }`

            let response = await this.OperatorService.create(body)

            // 发送短信
            await this.SmsService.send({
                'templateid': '1',
                'tel': this.http.req.body.mobile,
                'message': this.http.req.headers['x-displayName'] ? this.http.req.headers['x-displayName'] : ''
            })
            return this.http.res.send(response)
        } catch (error) {
            this.logger.error(`invite:  `, error)
            return this.http.res.send(error)
        }
    }
    /**
     * 更新姓名和邮箱
     *
     *
     */
    async updateNameEmailById() {
        this.logger.info(`updateNameEmailById: `, this.http.req.body)
        try {
            let body = this.http.req.body
            let id = this.http.req.params.id ? this.http.req.params.id : this.http.req.headers['x-userId']
            let response = await this.OperatorService.update(id, body)
            return this.http.res.send(response)
        } catch (error) {
            this.logger.error(`updateNameEmailById: `, error)
            return this.http.res.send(error)
        }
    }

    /**
     * 更新user  角色 和 城市
     *
     */
    async updateRoleCity() {
        this.logger.info(`updateRoleCity: id:  `, this.http.req.params.id)
        try {
            let body = this.http.req.body
            let id: string = this.http.req.params.id
            let result: any = await this.OperatorService.findById(this.http.req.params.id)
            let allRole = result.data.role.split(',')
            let roleConfig = config.get('role')

            // let allRole = 'bd,other-role'.split(',')
            for (let i = 0; i < allRole.length; i++) {
                if (roleConfig[allRole[i]] > 0) {
                    allRole[i] = this.http.req.body.role// 修改角色
                    break
                }
            }
            body.role = allRole.join(',')
            let response = await this.OperatorService.update(id, body)
            return this.http.res.send(response)
        } catch (error) {
            this.logger.error(`updateNameEmailById:  `, error)
            return this.http.res.send(error)
        }
    }
    /**
     * 删除
     *
     */
    async deleteById() {
        this.logger.info(`deleteById: id:  `, this.http.req.params.id)
        try {
            let id = this.http.req.params.id
            await this.OperatorService.delete(id)
            return this.http.res.apiSuccess('ok')
        } catch (error) {
            this.logger.error(`deleteById:  `, error)
            this.http.res.send(error)
        }
    }

    /**
     * 列表
     *
     */
    async getList() {
        //let query: string = `{"query": "query{user(_type:\\"Operator\\"){count,rows{ id,cityId}}}" } `
        this.logger.info(`getList: query:  `, this.http.req.query)
        try {
            let allRole = '';
            let roleConfig = config.get('role')
            let currentRole  // 当前角色
            // let allRole = 'bd,other-role'.split(',')
            for (let i = 0; i < allRole.length; i++) {
                if (roleConfig[allRole[i]] > 0) {
                    currentRole = allRole[i]// 修改角色
                    break
                }
            }
            // 拼接graphsql
            let query: string = `{"query": "query{user(_type:\\"Operator\\",role:\\"${currentRole}\\"`
            if (this.http.req.headers['x-role'] === 'bdAdmin') {
                if (this.http.req.query.cityId) {
                    query += `,cityId:\\"${this.http.req.query.cityId}\\"`
                }
            } else {
                query += this.http.req.query.cityId ? `,cityId:\\"${this.http.req.query.cityId}\\"` : `,cityId:\\"${this.http.req.headers['x-cityId']}\\"`
            }
            query += this.http.req.query.search ? `,search:\\"${this.http.req.query.search}\\"` : ``
            query += this.http.req.query.limit ? `,limit:${this.http.req.query.limit}` : ``
            query += this.http.req.query.offset ? `,offset:${this.http.req.query.offset}` : ``
            query += this.http.req.query.order ? `,order:\\"${this.http.req.query.order}\\"` : ``
            query += `){count,rows{ id, displayName, role , email,mobile,locationLat, locationLon,cityId,wechat { id, nickName }}}}"}`

            // switch (this.http.req.headers['x-role']) {
            //     case 'cityManager': query = `{"query": "query{user(_type:\\"Operator\\",cityId:\\"${this.http.req.headers['x-cityId'] } \\",role:\"cityManager\"){count,rows{ id, displayName, role , email,mobile,locationLat, locationLon,cityId,wechat { id, nickName }}}}" } `
            //         break
            //     case 'RegionalManager': query = `{"query": "query{user(_type:\\"Operator\\",cityId:\\"${this.http.req.query.cityId ? this.http.req.query.cityId : this.http.req.headers['x-cityId'] } \\",role:\\"RegionalManager\\",search:\\"${this.http.req.query.search ? this.http.req.query.search : false } \\"){count,rows{ id, displayName, role , email,mobile,locationLat, locationLon,cityId,wechat { id, nickName }}}}" } `
            //         break
            //     case 'bdAdmin': query = `{"query": "query{user(_type:\\"Operator\\",role:\\"bdAdmin\\")){count,rows{ id, displayName, role , email,mobile,locationLat, locationLon,cityId,wechat { id, nickName }}}}" } `
            //         break
            // }
            this.logger.info(`getCityList:query `, query)
            let result = await this.OperatorService.findAll(query)
            return this.http.res.send(result)
        } catch (error) {
            console.log('err', error.toString())
            this.logger.error(`getList: `, error)
            this.http.res.send(error)
        }
    }

    /**
     * 得到用户城市 list
     */
    async getCityList() {
        this.logger.info(`getCityList: x - user - id :`, this.http.req.headers['x-userId'])
        try {
            let query = `{"query": "query{user(_type:\\"Operator\\",id:\\"${this.http.req.headers['x-userId']}\\"){rows{ id,cityId}}}" } `
            let result = await this.OperatorService.findAll(query)
            return this.http.res.send(result)
        } catch (error) {
            this.logger.error(`getCityList:  `, error)
            this.http.res.send(error)
        }
    }


    /**
     * createVenues
     * 
     * @returns 
     * 
     * @memberof OperatorController
     */
    async createVenues() {
        this.logger.info(`createVenues:body:`, this.http.req.body)
        try {
            let body = this.http.req.body

            let response = await this.VenuesService.create(body)

            return this.http.res.send(response)
        } catch (error) {
            this.logger.error(`createVenues:  `, error)
            return this.http.res.send(error)
        }
    }


    /**
     * modifyVenues
     * 
     * @returns 
     * 
     * @memberof OperatorController
     */
    async modifyVenues() {
        this.logger.info(`modifyVenues:id:`, this.http.req.params.id)
        try {
            let body = this.http.req.body
            let id: string = this.http.req.params.id
            let response = await this.VenuesService.update(id, body)

            return this.http.res.send(response)
        } catch (error) {
            this.logger.error(`modifyVenues:  `, error)
            return this.http.res.send(error)
        }
    }


    /**
     * 
     * deleteVenues
     * 
     * @returns 
     * 
     * @memberof OperatorController
     */
    async deleteVenues() {
        this.logger.info(`deleteVenues:id:`, this.http.req.params.id)
        try {
            let id: string = this.http.req.params.id

            let response = await this.VenuesService.delete(id)

            return this.http.res.send(response)
        } catch (error) {
            this.logger.error(`deleteVenues:  `, error)
            return this.http.res.send(error)
        }
    }

    /**
     * venuesList
     * 
     * 
     * @memberof OperatorController
     */
    async venuesList() {
        this.logger.info(`getList: query:  `, this.http.req.query)
        try {
            let query: string = this.http.req.query
            this.logger.info(`getCityList:query `, query)
            let result = await this.VenuesService.findAll(query)
            return this.http.res.send(result)
        } catch (error) {
            console.log('err', error.toString())
            this.logger.error(`getList: `, error)
            this.http.res.send(error)
        }
    }
}