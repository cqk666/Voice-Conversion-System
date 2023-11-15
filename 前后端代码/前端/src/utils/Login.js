import { request } from './baseURL' // 引入刚刚创建的域名文件
import Cookie from 'js-cookie'
export function login(data) {
    return request({
      url: '/user/login',
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      data: data
    })
  }