import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import ErrorBoundary from './error';

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      {(hasError) => (
        <App hasError={hasError} />
      )}
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
