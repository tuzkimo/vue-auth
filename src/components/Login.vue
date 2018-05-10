<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="username...">
      <input type="password" v-model="password" placeholder="password...">
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: ''
      }
    },

    methods: {
      login () {

      }
    }
  }
</script>
