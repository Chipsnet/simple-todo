export const state = () => ({
    tasks: []
})

export const mutations = {
    add(state, text) {
        console.log(state);
        state.tasks.push(text);
    },
    remove(state, todo) {
        state.tasks.splice(state.tasks.indexOf(todo), 1);
    }
};
