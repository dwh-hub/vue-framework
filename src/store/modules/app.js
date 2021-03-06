/*
 * @Author: dahuayuan
 * @Date: 2022-04-30 21:25:05
 * @LastEditors: dahuayuan
 * @LastEditTime: 2022-06-07 23:22:21
 * @Description: 应用级别缓存
 */
import { getMenus } from '@/api/login'
import router from '@/router'
import empty from '@/pages/layout/empty.vue'

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
        route.component = empty
        route.redirect = item.children[0].path
      } else {
        // TODO 改成动态路径
        route.component = () => import(`../../pages/${item.components}.vue`)
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
            router.addRoute({
              path: '/:catchAll(.*)',
              redirect: '/404',
              name: 'NotFound'
            })
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
