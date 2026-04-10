import {appStateStore} from "./app-state";

export const store = {
  state: {
    ...appStateStore.state
  },
  getters: {
    ...appStateStore.getters,
  },
  mutations: {
    ...appStateStore.mutations,
  },
  actions: {
    ...appStateStore.actions,
  },
};
