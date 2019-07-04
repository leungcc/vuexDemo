<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ about_xcProp }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {

    }
  },
  computed: {
    about_xcProp() {
      return this.$root.xcStore.xcProp1
    }
  }
}
</script>
