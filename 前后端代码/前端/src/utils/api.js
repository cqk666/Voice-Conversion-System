import { request } from './baseURL' // 引入刚刚创建的域名文件
import Cookie from 'js-cookie'
//post请求---传输json数据时
export function getUser(data) {
  return request({
    url: '/api/admin/login',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'post',
    // data: {
    //   // username: 'admin',
    //   // password: '12345'
    // }
    data: data
  })
}

export function getTeacherMessage() {
  return request({
    url: '/api/teacher/list',
    headers: {
      'Content-Type': 'application/json',
      token: Cookie.get('token')
    },
    method: 'get'
  })
}
//添加教师的按钮
export function addTeacher(data) {
  return request({
    url: '/api/teacher/add',
    headers: {
      'Content-Type': 'application/json',
      token: Cookie.get('token')
    },
    method: 'post',
    // data: {
    //   // username: 'admin',
    //   // password: '12345'
    // }
    data: data
  })
}
//教师上传文件
export function uploadExcel(data) {
  return request({
    url: '/api/teacher/excel/import',
    headers: {
      "Content-Type": "multipart/form-data",
      token: Cookie.get('token')
    },
    method: 'post',
    data: data
  })
}
//教师信息excel导出
export function downLoad() {
  return request({
    url: '/api/teacher/excel/export',
    responseType: "blob",
    headers: {
      "Content-Type": "application/json",
      token: Cookie.get("token"),
    },
    method: 'get',
  })
}
//删除教师信息
export function deleteTeacher(data) {
  return request({
    url: '/api/teacher/delete',
    headers: {
      'Content-Type': 'application/json',
      token: Cookie.get('token')
    },
    method: 'post',
    data: data
  })
}
//编辑教师信息
export function editTeacher(data) {
  return request({
    url: '/api/teacher/update',
    headers: {
      'Content-Type': 'application/json',
      token: Cookie.get('token')
    },
    method: 'post',
    data: data
  })
}
