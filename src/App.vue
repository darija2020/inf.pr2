<template>
  <div id="app">
    <v-app>
      <NavBar />

      <v-main>
        <router-view></router-view>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";

export default {
  components: { NavBar },
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  all: unset;
}
</style>
