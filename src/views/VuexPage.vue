<template>
  <div>
    <h1>This is an VuexPage</h1>
    <p>
      <label>vuex token: </label>
      <span>{{ token }}</span>
    </p>
    <p>
      姓：<input type="text" v-model="surname">
      名：<input type="text" v-model="name">
      <button @click="changeNameCb">改变name</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import * as MUTATION from '@/vuex/mutation-types';

export default {
  name: 'VuexPage',
  data() {
    return {
      surname: '',      //姓
      name: ''          //名
    }
  },
  computed: {
    // 普通compute
    // ..

    // vuex的state
    ...mapState({
      token: 'token'
    })
  },
  methods: {
    changeNameCb() {
      // this.$store.commit('changeSurname', {surname: this.surname})
      // this.$store.commit('changeName', {name: this.name})
      this.changeSurname({surname: this.surname});
      this.changeName({name: this.name});
    },
    // mutation 辅助函数
    ...mapMutations({
      changeSurname: MUTATION.CHANGE_SURNAME,
      changeName: MUTATION.CHANGE_NAME
    })
  }
}
</script>

<style>

</style>
