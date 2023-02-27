<template>
  <div id="app">
    <Button @click="onLogStore" type="error" style="position: absolute; right: 10px; top: 10px">
      log store
    </Button>
    <div class="myButContainer">
      <Button @click="() => { }" type="warning">Run</Button>
      <Button @click="() => { }" type="error">Export with SheetJS (WIP)</Button>
      <Button @click="() => { }" type="primary">navodila</Button>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {

  },
  data () {
    return {
      // store: store,e,
    };
  },
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


  },
  methods: {
    vzorcek () {
      this.isModalVisible = !this.isModalVisible;
    },
    onLogStore () {
      Object.entries(this.store).forEach((e) => {
        console.log(e[0] + ": " + e[1]);
      });
    },
    sendData () {
      this.$eventBus.$emit("send-data", this.setup);
    },
  }
};
</script>
<style></style>
