/*
 * @Author: dahuayuan
 * @Date: 2022-04-30 21:25:05
 * @LastEditors: dahuayuan
 * @LastEditTime: 2022-04-30 23:56:45
 * @Description: 应用级别缓存
 */
import { getMenus } from '@/api/login'
import router from '@/router'

/**
 * @description: 添加路由
 * @param {Array} list 路由列表
 * @param {String} parentName 路由名称
 */
function addRoutes(list, parentName) {
  list.forEach(item => {
    if (item.path && item.components) {
      // 路由信息
      const route = {
        name: item.name,
        path: item.path
      }
      // 是否有子菜单
      if (item.children && item.children.length) {
        route.component = () => import('@/layout/layout_index.vue')
      } else {
        route.component = () => import(`../../views/${item.components}.vue`)
      }

      parentName ? router.addRoute(parentName, route) : router.addRoute('admin', route)

      if (item.children && item.children.length) {
        addRoutes(item.children, item.name)
      }
    }
  })
}

export default {
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    setMenus(state, data) {
      state.menus = data
    }
  },
  actions: {
    getUserMenus({ commit }) {
      return new Promise((resolve, reject) => {
        getMenus()
          .then(res => {
            addRoutes(res.data)
            commit('setMenus', res.data)
            resolve()
          })
          .catch(() => {
            reject(new Error())
          })
      })
    }
  }
}
