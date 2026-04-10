// Standard store for basic app state values

export const appStateStore = {
  state: {
    playCanvasState: "",
  },
  getters: {
    getPlayCanvasState(state) {
      return state.playCanvasState;
    },
  },
  mutations: {
    setPlayCanvasState(state, target) {
      state.playCanvasState = target;
    },
  },
  actions: {},
};
