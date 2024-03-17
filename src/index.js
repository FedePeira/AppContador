import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
// import { createStore, combineReducers } from 'redux'

import store from './store'

import App from './App'
/*
const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer
})
*/

// Reducer solo se proporciona como parámetro a la función createStore que crea el store
// El store ahora usa el reducer para manejar acciones
// const store = createStore(reducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

/*
// Suscribe --> Se utiliza para crear funciones callback que el store llama cuando cambia su estado.
store.subscribe(renderApp)
*/