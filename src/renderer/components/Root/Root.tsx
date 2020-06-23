import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import * as React from 'react';
import { NoProps } from '../../types';
import App from '../App/App';
import store from '../../store/redux';

const Root: React.FC<NoProps> = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export { store };
export default Root;
