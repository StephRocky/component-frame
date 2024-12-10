import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export interface State {
  baseForm: Record<string, FormData>;
}
export default new Vuex.Store({
  state: {
    baseForm: {},
  } as State,
  getters: {},
  mutations: {
    setBaseForm(state, { key, val }) {
      state.baseForm[key] = val;
    },
  },
  actions: {},
  modules: {},
});
