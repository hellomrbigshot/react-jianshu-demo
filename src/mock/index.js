import { headerList, writerList, homeInfo } from './db.js'
const Mock = require('mockjs')

Mock.mock('/api/getheaderlist', () => {
  return {
    code: 'OK',
    data: {
      list: getRandomArray(headerList, 10)
    }
  }
})
Mock.mock('/api/getwriterlist', () => {
  return {
    code: 'OK',
    data: {
      list: getRandomArray(writerList)
    }
  }
})
Mock.mock('/api/gethomeinfo', () => {
  return {
    code: 'OK',
    data: homeInfo
  }
})
Mock.mock('/api/gethomelist', () => {
  return {
    code: 'OK',
    data: getRandomArray(homeInfo.articleList)
  }
})

/** 
 * @params {Array} arr 数组
 * @params {number} number 获取的数量
 * @return {Array} 返回数组
 */
function getRandomArray(arr = [], number = 5) {
  // 算法参考 https://segmentfault.com/q/1010000006819233
  arr = JSON.parse(JSON.stringify(arr))
  let result = []
  let count = arr.length
  for (let i = 0; i < number; i++) {
    let index = ~~(Math.random() * count) + i
    result[i] = arr[index]
    arr[index] = arr[i]
    count--
  }
  return result
}
