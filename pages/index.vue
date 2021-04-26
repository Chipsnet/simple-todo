<template>
    <div class="main">
        <div class="bg-gray-200 text-3xl p-4">
            <p>Simple TODO with Nuxt.js</p>
        </div>
        <div class="py-5 px-7">
            <input @keyup.enter="addTodo" type="text" placeholder="タスクを入力してEnter" class="border-2 border-gray-900 w-5/12">
        </div>
        <div v-for="todo in todos" :key="todo.id" class="px-4 py-2">
            <div @click="removeTodo(todo)" class="border-2 rounded-sm border-gray-900 p-4">
                <p>{{todo}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    computed: {
        todos () {
            return this.$store.state.tasks
        }
    },
    methods: {
        addTodo (e) {
            this.$store.commit('add', e.target.value)
            e.target.value = ''
        },
        removeTodo (todo) {
            console.log(todo);
            this.$store.commit('remove', todo)
        }
    }
};
</script>

<style scoped></style>
