<template>
  <div id="app">
    <v-btn @click="onLogStore" color="error" style="position: absolute; right: 10px; top: 10px">
      log store
    </v-btn>
    <div class="myButContainer">
      <Button @click="() => { }" type="warning">Run</Button>
      <Button @click="() => { }" type="error">Export with SheetJS (WIP)</Button>
      <Button @click="() => { }" type="primary">navodila</Button>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: "app",
  components: {

  },
  data () {
    return {
      // store: store,
    };
  },
  computed: mapState({
    myCars: state => state.cars,
    countPlusLocalState (state) {
      return state.cars
    }
  }),
  created () {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g"]
    const animals = ["dog", "cat", "mouse", "rabbit", "horse"]
    const numbers = ["1", "2", "3", "4", "5", "6"]
    const [a, b] = animals

    function sumAndMultiply (a, b) {
      return [a + b, a * b]
    }

    const [sum, multiply, division = 'No division found'] = sumAndMultiply(3, 4)
    console.log("⚛ ~ multiply:", multiply);
    console.log("⚛ ~ sum:", sum);


    const vsi_trije = { ...this.myCars[0], ...this.myCars[1], ...this.myCars[2] }
    console.log("⚛ ~ vsi_trije:", vsi_trije);


  },
  watch: {
    myCars (newCars) {
      console.log("⚛ ~ newCars:", newCars);
    }
  },
  methods: {
    vzorcek () {
      this.isModalVisible = !this.isModalVisible;
    },
    onLogStore () {
    },
    sendData () {
      this.$eventBus.$emit("send-data", this.setup);
    },
  }
};
</script>
<style></style>
