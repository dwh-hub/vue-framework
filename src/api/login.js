import request from '@/utils/request'

export function login(data) {
  return request.post('/login', data)
}

export function getMenus(data) {
  return request.post('/menu', data)
}
