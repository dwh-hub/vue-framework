<template>
  <div class="aside">
    <el-menu
      unique-opened
      :default-active="defaultActive"
      background-color="#364fcd"
      text-color="#fff"
      active-text-color="#5cfffe"
    >
      <aside-menu-item :menulist="$data.menus"></aside-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import asideMenuItem from './aside-menu-item.vue'

const store = useStore()
const route = useRoute()

const $data = reactive({
  menus: store.state.app.menus
})

// 根据路径获取菜单信息
function getMenuInfo() {
  const path = route.path
  let _routeInfo
  const ergodicList = function (list) {
    for (const i in list) {
      const item = list[i]
      if (item.path === path) {
        _routeInfo = item
        return
      }
      if (item.children && item.children.length) {
        ergodicList(item.children)
      }
    }
  }
  ergodicList($data.menus)
  return _routeInfo
}

// 挂载信息
const defaultActive = computed(() => {
  const _routeInfo = getMenuInfo()
  return _routeInfo.name
})
</script>

<style lang="scss" scoped></style>
