import { BrowserRouter } from 'react-router-dom';
import 'App.scss';
import RouterConfig from 'navigation/RouterConfig';

function App() {
  return (
    <div>
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
