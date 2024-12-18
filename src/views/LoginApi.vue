<template>
  <div class="about">
    <form v-on:submit.prevent="login()">
      <label for="email">
        <input type="text" id="email" v-model="email" required>
      </label>
      <label for="password">
        <input type="text" id="password" v-model="password" required>
      </label>
      <input type="submit">
    </form>
  </div>

</template>
  <script>
      import { mapActions } from "vuex";
      export default {
    data(){
      return{
        email: "",
        password: "",
      }
    },
    methods: {
      ...mapActions(["getToken"]),
      async login(){
        try{
          await this.getToken({email:this.email, password:this.password})        
          this.$router.push("/posts");
        }
        catch(error){
          console.error(error);
        }
      }

    },

  }


  </script>
