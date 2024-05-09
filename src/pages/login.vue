<template>
  <div class="login-page">
    <div class="login-box">
      <div class="exhibition-selection"></div>
      <div class="operate-selection">
        <el-form :model="form" label-width="auto" class="operate-form">
          <h1>管理系统</h1>
          <el-form-item>
            <el-input v-model="form.username" placeholder="用户名"/>
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="密码"/>
          </el-form-item>
          <el-form-item>
            <el-button link>忘记密码</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="goToHome">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts' name='login'>
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'

const form = reactive({
  username: '',
  password: '',
})

const router = useRouter()

const goToHome = () => {
  // 模拟登录成功，获取token
  localStorage.setItem('token', '123')
  router.push('/home')
}
</script>

<style scoped lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('@/assets/image/background1.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  .login-box {
    width: 800px;
    height: 600px;
    display: flex;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.8);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }

  .exhibition-selection {
    flex: 4.5;
    background-image: url('@/assets/image/lucky.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .operate-selection {
    flex: 5.5;
  }

  :deep(.operate-form) {
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
    h1 {
      margin-top: 70px;
      margin-bottom: 60px;
    }
    .el-button--primary {
      width: 100%;
    }
    .el-form-item {
      margin-bottom: 30px;
      .el-input {
        height: 40px;
        line-height: 40px;
      }
    }
  }
}
</style>