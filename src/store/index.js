import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [
      {
        name: "Ferrari F40",
        displacement: "2936 ccm",
        speed: "324 km/h",
        turbocharged: true
      },
      {
        name: "Ferrari Testarossa",
        displacement: "4942 ccm",
        speed: "293 km/h",
        v12engine: true
      },
      {
        name: "Ford Sierra Cosworth 4 x 4",
        displacement: "1994 ccm",
        speed: "260 km/h",
        fourWheelDrive: true,
        turbocharged: true
      },
      {
        name: "Ferrari 3,2 Mondial",
        displacement: "3185 ccm",
        speed: "263 km/h"
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
    actionIncrement (context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
