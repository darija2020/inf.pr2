<template>
  <div class="search" fill-width>
    <div class="searchContainer">
      <div class="srch">
        <v-responsive max-width="260" class="searchBtn">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            placeholder="Search..."
            v-model="searchValue"
          ></v-text-field>
        </v-responsive>

        <v-btn @click="getData" class="searchBtn"
          >Pretraži citate po nazivu anime serije</v-btn
        >
      </div>
    </div>

    <h1 class="nemaRezultata" v-if="nemaRezultata">
      Nema rezultata. Pokušajte ponovno !
    </h1>

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
      searchValue: "",
      nemaRezultata: false,
    };
  },
  methods: {
    getData() {
      this.axios
        .get(
          `https://animechan.vercel.app/api/quotes/anime?title=${this.searchValue}`
        )
        .then((response) => {
          if (this.searchValue === "") {
            this.nemaRezultata = true;
          } else {
            this.nemaRezultata = false;
            this.citati = response.data;
          }
        });
    },
  },
};
</script>

<style scoped>
.search {
  width: 100vw;
  height: 100%;
  margin: 0 auto;
}

.searchContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  margin: 0 auto;
}

.srch {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
}

.searchBtn {
  margin: 1rem 0;
}

.nemaRezultata {
  text-align: center;
  color: #333;
}
</style>