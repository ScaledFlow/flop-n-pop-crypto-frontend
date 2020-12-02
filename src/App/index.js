
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';
import {AppProvider} from './AppProvider';

import './App.css';

function App() {

  return (

    <AppLayout>
      <AppProvider>
        <AppBar/>
      </AppProvider>
      <WelcomeMessage/>
    </AppLayout>
  
  );
}

export default App;
