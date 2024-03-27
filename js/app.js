const todos = [
    {
        text: 'Fare la spesa',
        done: false
    },
    {
        text: 'Fare le pulizie',
        done: false
    },
    {
        text: 'Cucinare',
        done: false
    },
    {
        text: 'Palestra',
        done: false
    }
]


const { createApp } = Vue

createApp({
    data() {
        return {
            todos: todos,
        }
    }
}).mount('#app')