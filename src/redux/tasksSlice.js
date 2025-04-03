import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask } from './tasksOps';
import { selectTextFilter } from './filtersSlice';

export const selectTasks = (state) => state.tasks.items;

export const selectIsLoading = (state) => state.tasks.loading;

export const selectIsError = (state) => state.tasks.error;

// export const selectVisibleTasks = (state) => {
//   console.log('selectVisibleTasks', Date.now());
//   const tasks = selectTasks(state);
//   const textFilter = selectTextFilter(state);

// return tasks.filter((task) =>
//   task.text.toLowerCase().includes(textFilter.toLowerCase())
// );
// };

export const selectVisibleTasks = createSelector(
  [selectTasks, selectTextFilter],
  (tasks, textFilter) => {
    console.log('selectVisibleTasks', Date.now());
    return tasks.filter((task) =>
      task.text.toLowerCase().includes(textFilter.toLowerCase())
    );
  }
);

// export const selectTaskCount = (state) => {
//   console.log('selectTaskCount', Date.now());
//   const tasks = selectTasks(state);
//   return tasks.length;
// };

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log('selectTaskCount', Date.now());
  return tasks.length;
});

const slice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    loading: false,
    error: false,
    clicks: 0,
  },
  reducers: {
    updateClicks(state) {
      state.clicks += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(addTask.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      });
  },
});

export const { updateClicks } = slice.actions;

export default slice.reducer;
