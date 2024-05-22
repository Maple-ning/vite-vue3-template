<script setup lang='ts' name='login'>
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useUserStore } from "@/store/modules/user"

const form = reactive({
  username: '',
  password: ''
})

const router = useRouter()
const userStore = useUserStore()

const handleLogin = () => {
  userStore.login().then(()=>{
    router.push('/home')
  }).catch(()=>{

  }).finally(()=>{

  })
}
</script>

<template>
  <div class="login-page">
    <div class="login-box">
      <div class="exhibition-selection"></div>
      <div class="operate-selection">
        <el-form :model="form" label-width="auto" class="operate-form">
          <h1>Space Web</h1>
          <el-form-item>
            <el-input v-model="form.username" placeholder="Username" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="form.password" placeholder="Password" />
          </el-form-item>
          <el-form-item>
            <el-button link>Forgot Password</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">Login</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.login-page {
  position: relative;
  height: 100vh;
  background-color: rgb(27, 34, 122);
  .login-box {
    position: absolute;
    width: 50vw;
    height: 70vh;
    background-color: rgb(59, 63, 69);
    border: 3px solid #fff;
    border-radius: 32px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    overflow: hidden;
  }

  .exhibition-selection {
    width: 100%;
    border-radius: 32px;
    background-image: url('@/assets/image/space.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .operate-selection {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  :deep(.operate-form) {
    text-align: center;
    margin: 0 auto;
    h1 {
      margin-top: 70px;
      margin-bottom: 60px;
      color: white;
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
    .el-button.is-link {
      color: white;
    }
  }
}
</style>