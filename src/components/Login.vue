<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input v-model="id" placeholder="username...">
      <input type="password" v-model="password" placeholder="password...">
      <button type="submit">login</button>
      <p v-if="error">login failed</p>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        username: '',
        password: '',
        error: false
      }
    },

    methods: {
      login () {
        const { username, password } = this

        this.$store.dispatch('login', { username, password }).then(success => {
          this.$router.replace('/')
        }).catch(error => {
          console.log(error.message || 'login failed')
          this.error = true
        })
      }
    }
  }
</script>
