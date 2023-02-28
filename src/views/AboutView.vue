<template>
  <v-container>
    <h1>This is an about page</h1>
    <v-btn color="warning" @click="storeCommitIncrement">add lamborghini</v-btn>
    <ul>
      <li v-for="(item, index) in myCars" :key="index">{{
        item
      }}</li>
    </ul>
    <v-btn color="info" @click="actionIncrement">actionIncrement</v-btn>
    <ol>
      <li v-for="(item, index) in $store.getters.getFerraris" :key="index">{{
        item
      }}</li>
    </ol>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {

    }
  },
  methods: {
    storeCommitIncrement () {
      this.$store.commit('increment')
    },
    actionIncrement () {
      this.$store.dispatch('actionIncrement')
    },
  },
  mounted () {
    // this.fetchProducts()
  },

  // shorthand for computed is mapstate
  // computed: {
  //   myCars () {
  //     return this.$store.state.cars
  //   }
  // },
  computed: mapState({
    myCars: state => state.cars,
    countPlusLocalState (state) {
      return state.cars
    }
  }),
  getters: {

  }
}
</script>