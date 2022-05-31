import {configureStore} from '@reduxjs/toolkit';
import {AuthApi} from '@api/auth';

const store = configureStore({
  reducer: {
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(AuthApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
