import './App.css';
import { RecoilRoot } from 'recoil';
import AComponent from './components/AComponent';
import BComponent from './components/BComponent';

function App() {

  return (
    <RecoilRoot>
      <AComponent/>
      <BComponent/>
    </RecoilRoot>
  );
}

export default App;
