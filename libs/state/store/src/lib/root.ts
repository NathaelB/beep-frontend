import {combineReducers, configureStore} from '@reduxjs/toolkit'
import {permissionApi, roleApi, userApi, userReducer} from "@leadcode/domains/users";

export const rootReducer = combineReducers({
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [roleApi.reducerPath]: roleApi.reducer,
  [permissionApi.reducerPath]: permissionApi.reducer
})

export function setupStore(preloadedState?: never) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: true
      })
        .concat(userApi.middleware)
        .concat(roleApi.middleware)
        .concat(permissionApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
