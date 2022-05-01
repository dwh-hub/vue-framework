<template>
  <div class="layout">
    <el-container style="height: 100vh">
      <el-aside width="210px" class="aside">
        <div class="aside-head">
          <!-- <img class="logo-img" src="@/assets/images/logo.png" /> -->
        </div>
        <div class="menu-wrapper">
          <layout-menu></layout-menu>
        </div>
      </el-aside>
      <el-container>
        <el-header class="header">
          <layout-header></layout-header>
        </el-header>
        <el-main style="padding: 16px">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import layoutHeader from './components/mian-header.vue'
import layoutMenu from './components/aside-menu.vue'
</script>

<style lang="scss" scoped>
.layout {
  .aside {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 26px 0;
    transition: 0.3s;
    overflow-x: hidden;
    color: #fff;
    background: $theme_color;
    .aside-head {
      flex-shrink: 60px;
      width: 100%;
      padding-left: 45px;
      box-sizing: border-box;
      .logo-img {
        width: 77px;
        cursor: pointer;
      }
    }
    .menu-wrapper {
      flex: 1;
    }
  }
  .header {
    width: 100%;
    height: 60px;
    background: #fff;
    padding: 13px 33px;
    box-shadow: 0px 2px 5px #e7e6e6;
    z-index: 9;
  }
}
</style>
