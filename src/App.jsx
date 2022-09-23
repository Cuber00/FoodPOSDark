import 'App.scss';
import RouterConfig from 'navigation/RouterConfig';
import { Sidebar } from 'navigation/components';

function App() {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="content">
        <RouterConfig />
      </div>
    </div>
  );
}

export default App;
