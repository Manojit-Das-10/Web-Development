const { createSlice } = from ("@reduxjs/toolkit");

const initialState = {
    value:0,
}

export const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(value) =>{
            state.value += 1;
        },
        decrement:(value) =>{
            state.value -= 1;
        },
    }
})

export const {increment,decrement} = CounterSlice.actions;
export default CounterSlice.reducers;

// Redux