<script setup lang='ts' name='NavigationBar'>
</script>

<template>
  <ul class="navigation-bar">
    <li><router-link to="/home"><span class="navigation-text">HOME</span></router-link></li>
    <li><router-link to="/about"><span class="navigation-text">ABOUT</span></router-link></li>
    <li><router-link to="/contacts"><span class="navigation-text">CONTACTS</span></router-link></li>
    <li><router-link to="/support"><span class="navigation-text">SUPPORT</span></router-link></li>
  </ul>
</template>

<style lang='scss' scoped>
.navigation-bar {
  display: flex;
  list-style: none;
  margin: 0;
  justify-content: flex-end;

  li {
    height: var(--test-header-height);
    line-height: var(--test-header-height);
    font-size: 20px;
    margin: 0 20px;
  }

  .navigation-text {
    color: var(--test-navigation-color);
  }
}
</style>