<template>
  <div class="about">
    <div class="contactForm">
      <v-text-field label="Naziv anime-a" v-model="naziv"></v-text-field>
      <v-text-field label="Naziv lika" v-model="ime"></v-text-field>
      <v-text-field label="Citat" v-model="citat"></v-text-field>
      <v-btn elevation="2" mx="4" @click="pokaziPoruku()">Submit</v-btn>


      <v-alert class="poruka" type="success" v-if="prikaziSuccess"
        >Citat uspjesno objavljen</v-alert
      >
      <v-alert class="poruka" type="error" v-if="prikaziError"
        >Niste popunili sve podatke</v-alert
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prikaziError: false,
      prikaziSuccess: false,
      naziv: "",
      ime: "",
      citat: "",
    };
  },
  methods: {
    pokaziPoruku() {
      if (this.naziv != "" && this.ime != "" && this.citat != "") {
        this.prikaziSuccess = true;
        setTimeout(() => {
          this.prikaziSuccess = false;
        }, 3000);
      } else {
        this.prikaziError = true;
        setTimeout(() => {
          this.prikaziError = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped>
.contactForm {
  padding: 2rem;
}

.poruka {
  margin: 2rem 0;
}
</style>
