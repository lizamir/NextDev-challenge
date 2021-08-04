import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import storage from "redux-persist/lib/storage";


import { userReducer } from './reducers/userReducer'
import { persistReducer, persistStore } from 'redux-persist'

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userReducer'],
}

const rootReducer = combineReducers({
  userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)
