export const state = () => ({
  skew: true
})
export const mutations = {
  skew(state, payload) {
    state.skew = payload
  }
}
