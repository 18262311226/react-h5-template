import Header from './layout/Header/index'
import Left from './layout/Left/index'
import Center from './layout/Center/index'
import Right from './layout/Right/index'
import styles from './App.less';
import { useCanvas } from './store/canvas';
import { CanvasContext } from './Context.js'

function App(props) {
  const canvas = useCanvas()
  return (
    <div className={styles.main}>
      <CanvasContext.Provider value={canvas}>
        <Header/>

        <div className={styles.content}>
          <Left/>
          <Center/>
          <Right/>
        </div>
      </CanvasContext.Provider>
    </div>
  );
}

export default App;
