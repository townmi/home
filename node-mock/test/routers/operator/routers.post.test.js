/**
 * operator 路由测试模块
 *
 */
import test from 'ava'
import supertest from 'supertest'
import faker from 'faker'
import server from '../../../dist/app'
import OperatorService from '../../../dist/services/operator.service'

const app = supertest(server)
faker.locale = 'zh_CN'
let userId = 'a6c4c5a0-2b24-11e7-bf2a-6951e064b3be' // bd-regional-manager




/**
 * /operators/users/invite should return ok
 *
 */
test('/post /operators/users/invite should return ok', async t => {
  let mock = {mobile: faker.random.number()}
  try {
    let res = await app.post('/operators/users/invite')
                                .send(mock)
                                .set('x-consumer-custom-id', `${userId}`)
                                .expect('Content-Type', /json/)
                                .expect(200)
    //console.log(res.body)    
    t.is(res.body.status,'OK')                        
    t.is(res.body.data.role,'bd')  // default role bd
    // delete
    await new OperatorService().delete(res.body.data.id)
  } catch (error) {
    console.error('error', error)
    t.fail(error)
  }
})