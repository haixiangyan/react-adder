import React, {FC} from 'react'
import Adder from './components/Adder/index'

interface IProps { }

const App: FC<IProps> = () => {
  return (
    <div className="App">
      <Adder/>
    </div>
  );
}

export default App;
