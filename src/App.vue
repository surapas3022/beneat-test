<template>
  <div id="app">
    <nav>
      <router-link v-for="(item, index) in menus" :key="index" :to="item.link"
        >{{ item.name }} <span v-if="index + 1 < menus.length">|</span>
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import { menuList } from "../config/menuList";
export default {
  data() {
    return {
      menus: menuList,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #007bff;
}
</style>
