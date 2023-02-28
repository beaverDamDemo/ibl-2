<template>
  <v-container>
    <h1>This is an about page</h1>
    <v-btn color="warning" @click="storeCommitIncrement">add lamborghini</v-btn>
    <CarComponent v-for="(item, index) in myCars" :key="index" :index="index" :name="item.name"
      :displacement="item.displacement" :speed="item.speed" :styles="{ fontWeight: 'bold' }" :oprema="item.oprema"
      :ref="`carComponent-${index}`">
    </CarComponent>
    <CarComponent v-for="(item, index) in myCars" :key="item.name" :index="index" v-bind="item" :styles="{}">
    </CarComponent>
    <rendered-component></rendered-component>
    <v-btn @click="onAddOprema" color="error">
      add oprema
    </v-btn>
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
import CarComponent from '@/components/CarComponent.vue';
import RenderedComponent from '@/components/RenderedComponent.vue';

export default {
  components: { CarComponent, RenderedComponent },
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
    onAddOprema () {
      this.$store.commit('addOprema')
    }
  },
  mounted () {
    // this.fetchProducts()
    console.log("⚛ ~ this.$refs:", this.$refs);
    console.log("⚛ ~ vm.$el:", vm.$el);
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

  },
  watch: {
    '$route.query.id' (val) {
      console.log("⚛ ~ val:", val);
    }
  }
}
</script>