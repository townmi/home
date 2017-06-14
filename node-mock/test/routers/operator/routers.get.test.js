/**
 * operator 路由测试模块
 *
 */
import test from 'ava'
import supertest from 'supertest'
import faker from 'faker'
import server from '../../../dist/app'

const app = supertest(server)
faker.locale = 'zh_CN'
let userId = 'a6c4c5a0-2b24-11e7-bf2a-6951e064b3be' // bd-regional-manager
// let app

/**
 * /get /operatorCore/operators/users/get_list should return ok
 *
 * role bd-regional-manager
 */
test('/get /operators/users/get_list should return ok, role bd-regional-manager', async t => {
  let mock = {}
 // let userId = 'e95e4051-061b-48e1-9434-f1522a495e9b'
  try {
    let res = await app.get('/operators/users/get_list')
                          .send(mock)
                          .set('x-consumer-custom-id', `${userId}`)
                          .expect('Content-Type', /json/)
                          .expect(200)
   // console.log('res', res.body)
    t.is(res.body.code, 200)
  } catch (error) {
    t.fail(error)
  }
})


/**
 * /get /operatorCore/operators/users/get_list should return ok
 *
 * role bd-regional-manager
 *
 * query cityCode
 */
test('/get /operators/users/get_list?cityCode should return ok, role bd-regional-manager', async t => {
  let mock = {
    cityId: '123'
  }
 // let userId = 'e95e4051-061b-48e1-9434-f1522a495e9b'
  try {
    let res = await app.get(`/operators/users/get_list?cityId=${mock.cityId}`)
                          .set('x-consumer-custom-id', `${userId}`)
                          .expect('Content-Type', /json/)
                          .expect(200)
    console.log('res', res.body)
    if (res.body.data.count > 0) {
      t.is(res.body.data.rows[0].cityId, mock.cityCode)
    }
  } catch (error) {
    t.fail(error)
  }
})