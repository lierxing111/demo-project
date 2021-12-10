const state = () => ({
  networkOutage: "",
});

const getters = {
  networkOutage: (state) => {
    return state.networkOutage;
  },
};

const mutations = {
  //设置是否断网
  CHANGE_NETWORK_OUTAGE: (state, val) => {
    state.networkOutage = val;
  },
};

const actions = {};

export default { state, getters, mutations, actions };
