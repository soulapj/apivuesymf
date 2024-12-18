<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
  <form v-on:submit.prevent="register">
    <label for="email">
      <input type="text" id="email" v-model="email" required>
    </label>
    <label for="password">
      <input type="text" id="password" v-model="password" required>
    </label>
    <input type="submit" >
  </form>
</template>

<script>
  import userService from "@/services/userService.js"

  export default {
    data(){
      return{
        email: "",
        password: "",
      }
    },
    methods: {
      async register(){
        try {
          console.log("test")
          await userService.register({email:this.email, password:this.password})
          this.$router.push(('/login'))
        }
        catch(error){
          console.error(error);
        }
      }
    }
  }

</script>
