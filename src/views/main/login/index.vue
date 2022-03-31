<template>
  <div id="login">
    <el-card shadow="always" header="登录" class="login_card">
      <el-form label-width="80px">
        <el-form-item label="用户名">
          <el-input type="text" v-model="$data.user.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="$data.user.password" @keyup.enter="login"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="_login">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { login } from '@/api/login'

const router = useRouter()

const $data = reactive({
  user: {
    username: '',
    password: ''
  }
})

function _login() {
  login($data.user).then(res => {
    localStorage.setItem('token', res.data)
    router.push('/')
  })
}
</script>

<style lang="scss" scoped>
#login {
  .login_card {
    @include mult_line(1);
    margin: 10vw auto;
    .el-card__header {
      font-weight: bold;
    }
    width: 40vw;
    max-width: 450px;
    min-width: 250px;
  }
}
</style>
