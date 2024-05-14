<script setup lang='ts' name='layout'>
import { AppMain, Logo, NavigationBar } from './components';
</script>

<template>
  <div class="app-wrapper">
    <div class="fixed-header layout-header">
      <div class="content">
        <Logo class="logo" />
        <NavigationBar class="navigation-bar"></NavigationBar>
      </div>
    </div>
    <!-- 主容器 -->
    <div class="layout-main">
      <!-- 页面主体内容 -->
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixins.scss";
$transition-time: 0.35s;

.app-wrapper {
  @extend %clearfix;
  width: 100%;
  background: url("@/assets/image/bg.jpg") rgba(78, 139, 127, 0.1);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: multiply;
}

.fixed-header {
  position: fixed;
  top: 0;
  z-index: 1002;
  width: 100%;

  .content {
    padding: 0 50px;
    display: flex;

    .logo {
      width: var(--test-logo-width);
    }

    .navigation-bar {
      flex: 1;
    }
  }
}

.layout-header {
  height: var(--test-header-height);
  background-color: var(--test-header-bg-color);
  box-shadow: var(--test-header-box-shadow);
  border-bottom: var(--test-header-border-bottom);
}

.layout-main {
  height: 100%;
  padding-top: var(--test-header-height);
}

.app-main {
  transition: padding-left $transition-time;
  height: 100%;
  overflow: auto;
}
</style>