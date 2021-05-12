import Vue from 'vue'
import Vuex from 'vuex'
import ActiveInventory from '@/store/modules/activeInventory'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    ActiveInventory
  }
})
export default store