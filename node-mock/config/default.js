module.exports = {
  app: {
    host: process.env.APP_HOST || '0.0.0.0',  // host
    port: process.env.APP_PORT || '4003',  // port
    apiPrefix: process.env.API_PREFIX || '/'   // api 前缀
  },
  smsApi: process.env.SMS_API,
  userApi: process.env.USER_API,
  // Operator role
  role: {
    'bdAdmin': 4,
    'RegionalManager': 3,
    'cityManager': 2,
    'bd': 1
  },
  // CMS role
  cmsRole: {
    'contentAdmin': 1,
    'contentManager': 1
  },
  // other
  otherRole: {
    'warehouse': 1,
    'auditor': 1
  },
  log: {
    appenders: [ // 日志
      {
        type: 'console'
      }, // 控制台输出
      {
        type: 'file',
        filename: 'logs/http.log',
        maxLogSize: 20480,
        backups: 3,
        category: 'http'
      },
      {
        type: 'file',
        filename: 'logs/init.log',
        maxLogSize: 20480,
        backups: 3,
        category: 'init'
      },
      {
        type: 'file',
        filename: 'logs/mysql.log',
        maxLogSize: 20480,
        backups: 3,
        category: 'mysql'
      },
      {
        type: 'file',
        filename: 'logs/operatorController.log',
        maxLogSize: 20480,
        backups: 3,
        category: 'operatorController'
      },
      {
        type: 'file',
        filename: 'logs/userMiddleware.log',
        maxLogSize: 20480,
        backups: 3,
        category: 'userMiddleware'
      }
    ]
  }

}
