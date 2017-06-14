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
let id

/**
 * /operatorCore/operators/users/invite should return ok
 *
 */

/**
 * 创建数据
 */
test.before(async t => {
// This runs after the above, but before tests
 // console.log('before', 'before')
  let mock = {mobile: faker.random.number()}
 // let userId = 'e95e4051-061b-48e1-9434-f1522a495e9b'
  try {
    let res = await app.post('/operators/users/invite')
                                .send(mock)
                                .set('x-consumer-custom-id', `${userId}`)
                                .expect('Content-Type', /json/)
                                .expect(200)
    id = res.body.data.id
    t.pass()
  } catch (error) {
    console.error('error', error)
    t.fail(error)
  }
})


test('/delete /operatorCore/operators/users/delete/:id should return ok', async t => {
 // let userId = 'e95e4051-061b-48e1-9434-f1522a495e9b'
 // let id = '5284cf5f-27c0-4acb-b706-ee9cd15b2541'
  try {
    let res = await app.delete(`/operators/users/delete/${id}`)
                                .set('x-consumer-custom-id', `${userId}`)
                                .expect(200)
 //   console.log('delete test res',res.body)
    t.is(res.body.code, 200)
   // console.log('res', res)
  } catch (error) {
    console.error('error', error)
    t.fail(error)
  }
})
