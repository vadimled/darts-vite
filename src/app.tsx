import './app.scss';
import {FC} from 'react';
import Exercise from './layouts/exercise';

const App: FC = () => {
  return (
    <div className="app">
      <header className="header">Exercise</header>
      <Exercise />
      <div className="show-result">Result</div>
      <div className="show-legs-table" />
    </div>
  );
};

export default App;
