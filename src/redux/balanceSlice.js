import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'balance',
  initialState: {
    value: 100,
  },
  reducers: {
    deposit: (state, action) => {
      state.value += action.payload;
    },
    withdraw: (state, action) => {
      state.value -= action.payload;
    },
  },
});

export default slice.reducer;

export const { deposit, withdraw, a } = slice.actions;

// export const deposit = createAction('balance/deposit');

// export const withdraw = createAction('balance/withdraw');

// const initialState = {
//   value: 123,
// };

// export default function balanceSliceReducer(state = initialState, action) {
//   console.log('balanceSliceReducer: ', state, action);

//   switch (action.type) {
//     case 'balance/deposit':
//       return{
//         ...state,
//         value: state.value + action.payload,
//       };

//     case 'balance/withdraw':
// return {
//   ...state,
//   value: state.value - action.payload,
// };

//     default:
//       return state;
//   }
// }
