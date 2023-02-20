import Header from './layout/Header/index'
import Left from './layout/Left/index'
import Center from './layout/Center/index'
import Right from './layout/Right/index'
import styles from './App.less';

function App(props) {
  return (
    <div className={styles.main}>
      <Header/>

      <div className={styles.content}>
        <Left/>
        <Center/>
        <Right/>
      </div>
    </div>
  );
}

export default App;
