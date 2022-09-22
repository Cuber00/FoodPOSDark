import style from '../style.module.scss';
import Search from './Search';
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.text}>
        <div className={style.title}>Jaegar Resto</div>
        <div className={style.date}>Tuesday, 2 Feb 2021</div>
      </div>
      <Search />
    </div>
  );
};

export default Header;
