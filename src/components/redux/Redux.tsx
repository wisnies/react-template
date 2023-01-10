import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { exampleActions } from '../../redux/slices/example';

import styles from '../../styles/Redux.module.scss';

export const Redux: React.FC = () => {
  const dispatch = useAppDispatch();
  const { boolean, string } = useAppSelector((state) => state.example);

  const [newString, setNewString] = useState('');
  console.log(boolean);

  return (
    <div className={styles.container}>
      <p>Current boolean value: {JSON.stringify(boolean)}</p>
      <button onClick={() => dispatch(exampleActions.switchBoolean())}>
        Switch boolean
      </button>
      <p>Current string value: {string}</p>
      <input
        type='text'
        value={newString}
        onChange={(e) => setNewString(e.target.value)}
      />
      <button onClick={() => dispatch(exampleActions.setString(newString))}>
        Set new String
      </button>
    </div>
  );
};
