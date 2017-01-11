import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutation from './mutation';
Vue.use (Vuex);

const state = {
	count:0
}
export default new Vuex.Store({
	state,
	mutation,
	actions
})
