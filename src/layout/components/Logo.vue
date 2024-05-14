<script setup lang='ts' name='Logo'>
import logo from "@/assets/image/logo.png";
</script>

<template>
  <div class="layout-logo-container">
    <transition name="layout-logo-fade">
      <router-link to="/">
        <img :src="logo" class="layout-logo">
        <span class="layout-logo-text">Person Web</span>
      </router-link>
    </transition>
  </div>
</template>

<style lang='scss' scoped>
.layout-logo-container {
  position: relative;
  width: 100%;
  height: var(--test-header-height);
  line-height: var(--test-header-height);
  text-align: center;
}

.layout-logo {
  height: 100%;
  vertical-align: middle;
  display: inline-block;
}

.layout-logo-text {
  height: 100%;
  vertical-align: middle;
  display: inline-block;
  margin-left: 12px;
  font-size: var(--test-logo-text-size);
  color: var(--test-logo-text-color);
}
</style>