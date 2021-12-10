const state = () => ({
  // token
  token: "",
  username: "游客",
});

const getters = {
  username: (state) => {
    state.username;
  },
};

const mutations = {
  //设置token
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  setUsername(state, username) {
    state.username = username;
  },
};

const actions = {
  async setUserManage({ commit }) {
    commit("setUsername", "新用户");
  },
};

export default { state, getters, mutations, actions };
