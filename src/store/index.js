import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [
      {
        name: "Ferrari F40",
        displacement: "5000 ccm",
        speed: "275 km/h"
      },
      {
        name: "Ferrari Testarossa",
        displacement: "4942 ccm",
        speed: "240 km/h"
      },
      {
        name: "Ford Sierra Cosworth 4 x 4",
        displacement: "1994 ccm",
        speed: "290 km/h"
      },
      {
        name: "Ferrari 3,2 Mondial",
        displacement: "3185 ccm",
        speed: "299 km/h"
      }
    ]
  },
  getters: {
    getCars: state => {
      return state.cars
    },
    getFerraris: state => {
      return state.cars.filter(car => car.name.indexOf("Ferrari") > -1)
    }
  },
  mutations: {
    increment (state) {
      state.cars.push({
        name: "Lamborghini",
        displacement: "2000 ccm",
        speed: "275 km/h"
      })
    }
  },
  actions: {
    getFerraris: state => {
      return state.cars.filter(car => car.name.indexOf("Ferrari") > -1)
    }
  },
  modules: {
  }
})
