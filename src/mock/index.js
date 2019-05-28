const Mock = require('mockjs')

Mock.mock('/api/getheaderlist', {
  'list|2-4': [
    'AMD',
    'CMD',
    'UMD',
    'AA'
  ]
})
Mock.mock('/api/getwriterlist', {
  'list|1-3': [
    {
      name: '张三',
      like: '100',
      wordCount: '10k',
      id: 1,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/8952775/4ca21a2c-28bc-4140-9c80-bffe8c93d5b0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
    },
    {
      name: '李四',
      like: '21',
      wordCount: '8088',
      id: 2,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/11985089/da0818ec-167e-4579-9c44-1a082a5a8664.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
    },
    {
      name: '王五',
      like: '1008',
      wordCount: '25k',
      id: 3,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/8952775/4ca21a2c-28bc-4140-9c80-bffe8c93d5b0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
    },
    {
      name: '赵六',
      like: '8',
      wordCount: '6789',
      id: 4,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/8952775/4ca21a2c-28bc-4140-9c80-bffe8c93d5b0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
    },
    {
      name: '小七',
      like: '590',
      wordCount: '30.5k',
      id: 5,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/8952775/4ca21a2c-28bc-4140-9c80-bffe8c93d5b0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
    },
    {
      name: '小雨',
      like: '18',
      wordCount: '13.4k',
      id: 6,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/11985089/da0818ec-167e-4579-9c44-1a082a5a8664.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
    },
    {
      name: '糖糖',
      like: '98',
      wordCount: '7.7k',
      id: 7,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/8952775/4ca21a2c-28bc-4140-9c80-bffe8c93d5b0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
    },
    {
      name: '小宝',
      like: '150',
      wordCount: '9.7k',
      id: 8,
      imgUrl: 'https://upload.jianshu.io/users/upload_avatars/11985089/da0818ec-167e-4579-9c44-1a082a5a8664.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96'
    },
  ]
})