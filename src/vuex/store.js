import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import vuextest from './modules/vuextest'
Vue.use(Vuex)
//对外暴露-------
export default new Vuex.Store({
    modules: {
        user,
        common,
        vuextest
    }
})