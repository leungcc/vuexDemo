<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{ h_xcProp }}</p>
    <button @click="changeRootXcStore">change xcStore</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mounted() {
    console.log(this.$root)
  },
  props: {
    msg: String
  },
  computed: {
    h_xcProp() {
      return this.$root.xcStore.xcProp1
    }
  },
  methods: {
    changeRootXcStore() {
      console.log(this.$root.xcStore.xcProp1)
      this.$root.xcStore.xcProp1 = 'change now'
      console.log('change success')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
