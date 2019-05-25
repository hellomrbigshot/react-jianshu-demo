const Mock = require('mockjs')

Mock.mock('/api/getheaderlist', {
  "list|2-4": [
    "AMD",
    "CMD",
    "UMD",
    "AA"
  ]
})