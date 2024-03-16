import React from 'react'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux'

import { filterChange } from './reducers/filterReducer'
import { createNote } from './reducers/noteReducer'

import App from './App'

import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'

const store = configureStore({
  reducer: {
    notes: noteReducer,
    filter: filterReducer
  }
})

/*
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
*/

// Reducer solo se proporciona como parámetro a la función createStore que crea el store
// El store ahora usa el reducer para manejar acciones
// const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))

console.log(store.getState())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App/>
  </Provider>
)



/*
// Suscribe --> Se utiliza para crear funciones callback que el store llama cuando cambia su estado.
store.subscribe(renderApp)
*/