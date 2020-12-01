
import WelcomeMessage from './WelcomeMessage';
import AppLayout from './AppLayout';
import AppBar from './AppBar';

import './App.css';

function App() {

  const hello = "hello";

  return (
    <AppLayout>
      <AppBar/>
      <WelcomeMessage/>
      {hello};
    </AppLayout>
  );
}

export default App;
