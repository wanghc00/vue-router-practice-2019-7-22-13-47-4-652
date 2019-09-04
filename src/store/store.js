import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        userInput:"",
    },
    getters: {
        getUserInput: function (state) {
            return state.userInput;
        },
    },
    mutations: {
        setUserInput(state,userInput){
            state.userInput = userInput;
        }
    },
  })


  export default store;