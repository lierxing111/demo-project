const state = () => ({
  count: 0,
});

const getters = {
  username: (state) => {
    state.username;
  },
};

const mutations = {
  increment: (state) => {
    state.count++;
  },
  decrement: (state) => {
    state.count--;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
