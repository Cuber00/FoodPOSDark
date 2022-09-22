import style from './style.module.scss';
import Categors from '../../components/Main/Content/Categors';
import MySelect from '../../components/UI/MySelect';
import ListDishCard from '../../components/Main/Content/ListDishCard';
import { useSelector } from 'react-redux';

import Header from './Header';
import Modal from './Modal';

const PHome = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.contentWrapper}>
        <Header />
        <Categors />
        <div className={style.content}>
          <div className={style.top}>
            <div className={style.contentTitle}>Choose Dishes</div>
            <MySelect />
          </div>
          <ListDishCard />
        </div>
      </div>
      <Modal />
    </div>
  );
};

export default PHome;
