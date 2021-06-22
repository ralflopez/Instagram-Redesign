import { configureStore, getDefaultMiddleware, Store } from '@reduxjs/toolkit'
import { useMemo } from 'react'
import userSlice from '../features/userSlice'

let store: Store | undefined

const initStore = (preloadedState: any = {}) => configureStore({
  reducer: {
    // [userSlice.reducerPath]: userSlice.reducer
    user: userSlice
  },
  preloadedState,
  // middleware: (getDefaultMiddleware) => {
  //   return getDefaultMiddleware()
  //   .concat(userSlice.middleware)
  // }
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(
    
  )
})

export const initializeStore = (preloadedState: {} | void) => {
  let _store = store ?? initStore(preloadedState)

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState: any) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export function removeUndefined(state: any): any {
  if (typeof state === 'undefined') return null
  if (Array.isArray(state)) return state.map(removeUndefined)
  if (typeof state === 'object' && state !== null) {
    return Object.entries(state).reduce((acc, [key, value]) => {
      return {
        ...acc,
        [key]: removeUndefined(value)
      }
    }, {})
  }

  return state
}

export type AppDispatch = ReturnType<typeof initStore>['dispatch']
export type RootState = ReturnType<typeof initStore>['getState']