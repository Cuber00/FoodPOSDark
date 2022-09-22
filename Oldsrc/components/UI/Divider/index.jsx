import style from './style.module.scss';

const Divider = ({ classNames = '' }) => {
  return <div className={style.divider + ' ' + classNames}></div>;
};

export default Divider;
