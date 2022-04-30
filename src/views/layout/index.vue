<template>
  <div class="layout">
    <el-container style="height: 100vh">
      <el-aside width="210px" class="aside">
        <div class="aside_head">
          <!-- <img class="logo_img" src="@/assets/images/logo.png" /> -->
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
import layoutHeader from './components/mian_header.vue'
</script>

<style lang="scss" scoped>
.layout {
  .aside {
    color: #fff;
    background: $theme_color;
    height: 100vh;
    padding: 26px 0;
    position: relative;
    transition: 0.3s;
    overflow-x: hidden !important;
    .aside_head {
      width: 100%;
      padding-left: 45px;
      box-sizing: border-box;
      .logo_img {
        width: 77px;
        cursor: pointer;
      }
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
