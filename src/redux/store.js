import { configureStore, createAction } from '@reduxjs/toolkit';

const initialState = {
  balance: {
    value: 123,
  },
  locale: {
    lang: 'uk',
  },
  notes: {
    items: ['JS', 'TS', 'React', 'Node'],
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'balance/deposit':
      return {
        ...state,
        balance: {
          value: state.balance.value + action.payload,
        },
      };

    case 'balance/withdraw':
      return {
        ...state,
        balance: {
          value: state.balance.value - action.payload,
        },
      };

    case 'locale/changeLang':
      return {
        ...state,
        locale: {
          lang: action.payload,
        },
      };

    case 'notes/addNote':
      return {
        ...state,
        notes: {
          items: [...state.notes.items, action.payload],
        },
      };

    default:
      return state;
  }
};

export const store = configureStore({
  reducer: rootReducer,
});

export const deposit = createAction('balance/deposit');

export const withdraw = createAction('balance/withdraw');

export const changeLang = createAction('locale/changeLang');

export const addNote = createAction('notes/addNote');
