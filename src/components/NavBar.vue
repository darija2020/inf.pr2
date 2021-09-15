<template>
  <div class="navbar">
    <v-toolbar>
      <v-toolbar-title>Anime Citati</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      >
        <v-icon>mdi-menu</v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-items
        class="hidden-sm-and-down"
        v-for="link in links"
        :key="link.name"
      >
        <v-btn :to="link.path" text>{{ link.name }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer
      v-model="drawer"
      temporary
      absolute
      width="250"
      id="drawer"
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> Anime Citati </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item
          v-for="item in links"
          :key="item.name"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { name: "Pretrazi po nazivu lika", path: "/", icon: "mdi-home" },
        { name: "Pretrazi po seriji", path: "/PoAnimeu", icon: "mdi-shuffle" },
        { name: "Random Citati", path: "/RandomCitati", icon: "mdi-shuffle" },
        {
          name: "Dodaj Citat",
          path: "/DodajCitat",
          icon: "mdi-comment-quote-outline",
        },
      ],
      drawer: false,
    };
  },
};
</script>

<style scoped>
.nav-btn {
  box-shadow: none;
}
</style>