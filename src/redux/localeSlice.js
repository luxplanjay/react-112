import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: {
    lang: 'uk',
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default slice.reducer;

export const { changeLang } = slice.actions;

// export const changeLang = createAction('locale/changeLang');

// const initialState = {
//   lang: 'uk',
// };

// export default function localeSliceReducer(state = initialState, action) {
//   console.log('localeSliceReducer: ', state, action);

//   switch (action.type) {
//     case 'locale/changeLang':
//       return {
//         ...state,
//         lang: action.payload,
//       };

//     default:
//       return state;
//   }
// }
