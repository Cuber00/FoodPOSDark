import Sidebar from '../Main/Sidebar';
import Content from '../Main/Content';
import Orders from '../Main/Orders';

import style from './style.module.scss';

function App() {
  return (
    <div className={style.wrapper}>
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
