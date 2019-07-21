<template>
  <v-container fluid style="height: 100vh">
    <v-layout column fill-height justify-center align-center>
      <v-card class="card-info">
        <v-card-title style="align-items: center; justify-content: center">
          <h2>{{ namePlanet }}</h2>
        </v-card-title>
        <v-divider></v-divider>
        <v-container fluid>
          <v-layout column>
            <v-flex>
              <p>
                <strong>Population:</strong>
                {{population}}
              </p>
            </v-flex>
            <v-flex>
              <p>
                <strong>Climate:</strong>
                {{climate}}
              </p>
            </v-flex>
            <v-flex>
              <p>
                <strong>Terrain:</strong>
                {{terrain}}
              </p>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-container fluid>
            <v-layout justify-center align-center>
              <v-flex style="justify-content: center">
                <p style="text-align: center">
                  Features in
                  <strong>{{(films || 0)}}</strong> Films
                </p>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-actions>
      </v-card>
      <v-btn :loading="loading" @click="nextPlanet" color="gray" style="border-radius: 10px;">Next</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CardInfo",
  data() {
    return {
      loading: false
    };
  },
  mounted() {
    this.nextPlanet();
  },
  computed: {
    /**
     * @function namePlanet
     * @return Getters namePlanet
     */
    namePlanet() {
      return this.$store.getters.namePlanet;
    },
    /**
     * @function population
     * @return Getters population
     */
    population() {
      return this.$store.getters.population;
    },
    /**
     * @function climate
     * @return Getters climate
     */
    climate() {
      return this.$store.getters.climate;
    },
    /**
     * @function terrain
     * @return Getters terrain
     */
    terrain() {
      return this.$store.getters.terrain;
    },
    /**
     * @function films
     * @return Getters films
     */
    films() {
      return this.$store.getters.films;
    }
  },
  methods: {
    ...mapActions(["getPlanet"]),
    /**
     * @function randomNumber
     * @param {Integer} min
     * @param {Integer} max
     * @return Returns a random value
     */
    randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
    /**
     * @function nextPlanet
     * @return Shoot action vuex
     */
    nextPlanet() {
      this.loading = true;
      let int = 1;
      /**
       * @actions getPlanet
       * @param {Integer} @function randomNumber
       */
      this.getPlanet(parseInt(this.randomNumber(1, 61))).then(
        () => (this.loading = false)
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-info {
  min-width: 300px;
  max-width: 400px;
  border-radius: 10px;
}
</style>
