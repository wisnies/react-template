import styles from './styles/App.module.scss';
import img from './assets/image.png';

import { Provider } from 'react-redux';
import store from './redux/store';
import Redux from './components/redux';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <img src={img} alt='some description' className={styles.image} />
        <h1 className={styles.title}>Hello {process.env.string}</h1>
        <Redux />
      </div>
    </Provider>
  );
};
