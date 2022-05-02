<template>
  <template v-for="(item, index) in menulist" :key="index">
    <el-menu-item
      v-if="!item.children || !item.children.length"
      :index="item.name"
      @click="selectMenu(item)"
    >
      {{ item.name }}
    </el-menu-item>
    <el-sub-menu v-else :index="item.name">
      <template #title>{{ item.name }}</template>
      <aside-menu-item :menulist="item.children"></aside-menu-item>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  menulist: Array
})
const { menulist } = toRefs(props)
const router = useRouter()

function selectMenu(item) {
  router.push(item.path)
}
</script>
<script>
export default {
  name: 'asideMenuItem'
}
</script>

<style lang="scss" scoped></style>
