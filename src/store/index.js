import { createStore } from 'vuex'
import userService from "@/services/userService.js"
// import CryptoJS from 'crypto-js'
// import crypto from 'crypto'
// let key = 'secretkey123'
export default createStore({
  state: {
    token: "",
  },
  getters: {
  },
  mutations: {
    setToken(state, token){
      // let mykey = crypto.createCipher('aes-128-cbc', 'mypassword');
      // let etoken = mykey.update(token, 'utf8', 'hex')
      // etoken += mykey.final('hex')
      // console.log(etoken)
      localStorage.setItem("token", token)
      state.token = token
    }
  },
  actions: {
    async getToken({commit}, userdata){
      let res = await userService.login(userdata);
      // console.log(res)
      commit('setToken', res.data.token);
    }
  },
  modules: {
  }
})
