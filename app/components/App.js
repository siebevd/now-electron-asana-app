import React from 'react';
import styles from './App.css';

const App = (props) => (
  <div className={styles.container}>
		<div className={styles.bar} />
		{!props.account.loggedIn && <button className={styles.loginBtn}>Login to Asana</button>}
  </div>
);

export default App;
