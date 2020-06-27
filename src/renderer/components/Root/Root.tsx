import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as React from 'react';
import { NoProps } from '../../types';
import App from '../App/App';
import store from '../../store/redux';

const Root: React.FC<NoProps> = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  );
};

export { store };
export default Root;
