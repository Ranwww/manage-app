export default {
    state: {
        isCollapse: false
    },
    mutations: {
        changeIsCollapse(state) {
            state.isCollapse = !state.isCollapse
        }
    }
}