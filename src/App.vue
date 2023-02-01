<template>
  <header>
    <div id="app">
      <router-view></router-view>
    </div>
  </header>
</template>

<script>
import routes from "./router/index";
import List from "./components/List/List.vue";

export default {
  name: "App",
  components: {
    List
  },
  data() {
    return {
      routes
    };
  }
};
</script>

<style scoped></style>
