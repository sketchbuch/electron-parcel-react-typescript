import '@testing-library/jest-dom/extend-expect';
import 'jest-localstorage-mock';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-i18next', () => {
  const reactI18next = jest.requireActual('react-i18next')

  return {
    ...reactI18next,
    t: (key: string) => key,
    useTranslation: () => { 
      return {
        t: (key: string) => key 
      }
    }
  }
});
