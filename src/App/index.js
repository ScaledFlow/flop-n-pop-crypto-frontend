import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';

import './App.css';

function App() {

  return (

    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Settings/>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
