import { configureStore } from '@reduxjs/toolkit';
import loadingSlice from './slices/loadingSlice';

// export const store = configureStore({
//   reducer: {
//     loading,
//   },
// });
export default configureStore({
  reducer: {
    loading: loadingSlice,
  },
});
