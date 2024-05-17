import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      tableData: [], 
    };
  },
  mutations: {
    setData(state, data) {
      state.tableData = data;
    },
  },
});
