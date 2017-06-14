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
// let app

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

/**
 * 删除数据
 */
test.after(async t => {
 await new OperatorService().delete(id)
  t.pass()
})

/**
 * /operators/users/name_email should return ok
 *
 */
test('/put /operators/users/self/name_email should return ok', async t => {
  let mock = {displayName: faker.name.findName(), email: faker.internet.email()}
 // let userId = '990f6f59-55b7-41a2-95e1-44a8370bd849'
  try {
    let res = await app.put('/operators/users/self/name_email')
                          .send(mock)
                          .set('x-consumer-custom-id', `${userId}`)
                          .expect('Content-Type', /json/)
                          .expect(200)
   //console.log('put test res',res.body)
    t.is(res.body.data.displayName, mock.displayName)
  } catch (error) {
    console.log('error',error)
    t.fail(error)
  }
})

/**
 * /put /operatorCore/operators/users/name_email/:id should return ok
 *
 * role bd-regional-manager
 */
test('/put /operators/users/name_email/:id should return ok', async t => {
  let mock = {displayName: faker.name.findName(), email: faker.internet.email()}
//  let userId = 'e95e4051-061b-48e1-9434-f1522a495e9b'  // bd-regional-manager
 // let id = '990f6f59-55b7-41a2-95e1-44a8370bd849'
  try {
    let res = await app.put(`/operators/users/name_email/${id}`)
                          .send(mock)
                          .set('x-consumer-custom-id', `${userId}`)
                          .expect('Content-Type', /json/)
                          .expect(200)
   //console.log('put test res',res.body)
    t.is(res.body.data.displayName, mock.displayName)
  } catch (error) {
    console.error('error', error)
    t.fail(error)
  }
})


/**
 * /put /operatorCore/operators/users/role_city/:id should return ok
 *
 * role bd-regional-manager
 */
test('/put /operators/users/role_city/:id should return ok', async t => {
  let mock = {cityId: '58d1ecade841a18ba5399023', role: 'bd-city-manager'}
  // let userId = 'e95e4051-061b-48e1-9434-f1522a495e9b'  // bd-regional-manager
//  let id = '990f6f59-55b7-41a2-95e1-44a8370bd849'
  try {
    let res = await app.put(`/operators/users/role_city/${id}`)
                          .send(mock)
                          .set('x-consumer-custom-id', `${userId}`)
                          .expect('Content-Type', /json/)
                          .expect(200)
    console.log('res', res.body)
    t.is(res.body.code, 200)
  } catch (error) {
    console.error('error', error)
    t.fail(error)
  }
})

