<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="storeCommitIncrement">add lamborghini</button>
    <ul>
      <li v-for="(item, index) in myCars" :key="index">{{
        item
      }}</li>
    </ul>
    <button @click="storeGetFerraris">storeGetFerraris</button>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  methods: {
    storeCommitIncrement () {
      this.$store.commit('increment')
    },
  },
  mounted () {
    // console.log(this.getCars)
    // this.fetchProducts()
  },
  computed: {
    myCars () {
      return this.$store.state.cars
    }
  },
  getters: {
    storeGetFerraris () {
      return this.$store.dispatch('getFerraris')
    },
    cartProducts (state, getters, rootState) {
      return state.items.map(cartItem => {
        const product = rootState.products.items.find(product => product.id === cartItem.id)
        return {
          title: product.title,
          price: product.price,
          quantity: cartItem.quantity
        }
      })
    }
  }
}
</script>