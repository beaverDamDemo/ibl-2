<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="storeCommitIncrement">add lamborghini</button>
    <ul>
      <li v-for="(item, index) in myCars" :key="index">{{
        item
      }}</li>
    </ul>
    <button @click="foo">foo</button>
    <ol>
      <li v-for="(item, index) in $store.getters.getFerraris" :key="index">{{
        item
      }}</li>
    </ol>
  </div>
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
    foo () {

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