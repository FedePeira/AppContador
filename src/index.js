import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import noteReducer from './reducers/noteReducer'
// Reducer solo se proporciona como parámetro a la función createStore que crea el store
// El store ahora usa el reducer para manejar acciones
const store = createStore(noteReducer)


ReactDOM.render(
  <Provider store={store}>
      <App/>
  </Provider>,
  document.getElementById('root')
)


/*
// Suscribe --> Se utiliza para crear funciones callback que el store llama cuando cambia su estado.
store.subscribe(renderApp)
*/