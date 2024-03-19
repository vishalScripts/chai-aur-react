import {configureStore} from 'react-redux'
import authSlice from './authSlice'


export const store = configureStore({
  reducer: {
    auth: authSlice
  }
})

export default store