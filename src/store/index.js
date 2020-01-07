import Vuex from 'vuex';
import Vue from 'vue';
import Counter from './modules/Counter';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    Counter
  }  
});