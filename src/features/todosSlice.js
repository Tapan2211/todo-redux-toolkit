import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [],
    reducers: {
        addTodos: (state, action) => {
            state.push({ id: Date.now, text: action.payload, comleted: false });
        },

        toggleTodos: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload);
            if (todo) {
                todo.comleted = !todo.comleted
            }
        },

        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload);
        }
    }
});

export const { addTodos, toggleTodos, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
