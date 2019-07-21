import Axios from "axios";
import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);
const webApi = {
  /**
   * @function getPlanet
   * @param {Integer} int
   * @return Information on the planet
   */
  getPlanet: async int => {
    let config = {
      method: "get",
      url: "https://swapi.co/api/planets/" + int
    };
    return await Axios.request(config);
  },
  /**
   * @function getNameFilms
   * @param {String} url
   * @return Movie info
   */
  getNameFilms: async url => {
    let config = {
      method: "get",
      url: url
    };
    return await Axios.request(config);
  }
};

export default new Vuex.Store({
  state: {
    info: []
  },
  mutations: {
    /**
     * @function SAVE_PLANET
     * @param {Object} state
     * @param {Array} obj
     * @param {Array} names
     */
    SAVE_PLANET(state, obj, names) {
      state.info = obj;
      state.info.names = names;
    }
  },
  getters: {
    /**
     * Getters
     * @function namePlanet
     * @param {Object} state
     * @return Name Planet
     */
    namePlanet: state => {
      return state.info.name ? state.info.name : "Planet Name";
    },
    /**
     * @function population
     * @param {Object} state
     * @return number of inhabitants
     */
    population: state => {
      return state.info.population ? state.info.population : "";
    },
    /**
     * @function climate
     * @param {Object} state
     * @return Weather features
     */
    climate: state => {
      return state.info.climate ? state.info.climate : "";
    },
    /**
     * @function terrain
     * @param {Object} state
     * @return Terrain feature
     */
    terrain: state => {
      return state.info.terrain ? state.info.terrain : "";
    },
    /**
     * @function films
     * @param {Object} state
     * @return Number of movies
     */
    films: state => {
      return state.info.films ? state.info.films.length : 0;
    }
  },
  actions: {
    /**
     * @function getPlanet
     * @param {function} param0
     * @param {Integer} int
     */
    async getPlanet({ commit }, int) {
      try {
        let result = await webApi.getPlanet(int);
        let names = [];
        for (let i = 0; i < result.data.films.length; i++) {
          let name = await webApi.getNameFilms(result.data.films[i]);
          names.push(name.data.title);
        }
        await commit("SAVE_PLANET", result.data, names);
      } catch (error) {}
    }
  }
});
