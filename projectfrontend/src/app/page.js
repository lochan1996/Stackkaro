'use client';
import { Provider } from 'react-redux';
// import store from './store/store';
import  Counter  from './Counter';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { store } from './store/store';

let persistor = persistStore(store)

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Counter />
      </PersistGate>
    </Provider>
  )
}
