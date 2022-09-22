import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            return { items: [...state.items, action.payload] }
        },
        removeTodo: (state, action) => {
            const items = [...state.items];
            const index = action.payload;
            items.splice(index, 1);
            return { items: items }
        },
        clearTodo: () => {
            return { items: [] }
        }
    }
})

export const { addTodo, removeTodo, clearTodo } = todoSlice.actions;

export default todoSlice.reducer;