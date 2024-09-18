import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/Store.js'; // Corrected from 'presistor' to 'persistor'
import { PersistGate } from 'redux-persist/integration/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}> {/* Corrected 'presistor' to 'persistor' */}
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>
);
