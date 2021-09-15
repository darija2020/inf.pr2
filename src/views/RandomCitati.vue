<template>
  <div class="random" fill-width>
    <v-row no-gutters dense>
      <v-col
        class="ma-4"
        cols="4"
        v-for="citat in citati"
        :key="citat.quote"
        lg="2"
        md="3"
        sm="4"
      >
        <v-card elevation="2" shaped>
          <v-card-title>{{ citat.anime }}</v-card-title>
          <v-card-subtitle>{{ citat.character }}</v-card-subtitle>
          <v-card-text>" {{ citat.quote }} "</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      citati: null,
    };
  },
  created() {
      this.axios
        .get(
          `https://animechan.vercel.app/api/quotes`
        )
        .then((response) => {
            this.citati = response.data;
          });
  }
};
</script>

<style scoped>
.random {
  width: 100vw;
  height: 100%;
  margin: 2rem auto;
}
</style>