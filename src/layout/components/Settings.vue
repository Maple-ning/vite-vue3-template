<script setup lang='ts' name='Settings'>
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/modules/user";

import exit from "@/assets/icon/exit.svg";

const router = useRouter()
const userStore = useUserStore()

// 退出登录
const logout = () => {
  userStore.logout()
  router.push("/login")
}
</script>

<template>
  <div class="layout-settings">
    <img :src="exit" class="layout-exit" @click="logout">
  </div>
</template>

<style lang='scss' scoped>
.layout-settings {
  height: 100%;
  display: flex;
  align-items: center;
}

.layout-exit {
  width: 20px;
  cursor: pointer;
}
</style>