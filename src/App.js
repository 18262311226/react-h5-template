import Header from './layout/Header/index'
import Left from './layout/Left/index'
import Center from './layout/Center/index'
import Right from './layout/Right/index'
import styles from './App.less';
import { useCanvas } from './store/hook';
import { CanvasContext } from './Context.js'
import classNames from 'classnames';
import { useEffect, useReducer } from 'react';

function App(props) {
  const canvas = useCanvas()
  const [, forceUpdate] = useReducer((X) => X+1, 0)

  useEffect(() => {
    const unsubscribe = canvas.subscribe(() => {
      forceUpdate()
    })

    return () => {
      unsubscribe()
    }
  }, [])
  return (
    <div className={classNames(styles.main)}>
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
