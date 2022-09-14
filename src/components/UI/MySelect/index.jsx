import React, { useState } from 'react';
import style from './style.module.scss';
import { Transition } from 'react-transition-group';
import { ReactComponent as Arrow } from '../../../assets/icons/Arrow-ios-down.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveDeliveryType } from '../../../redux/slice/dishesSl';

const MySelect = ({ styles }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const optionsArray = [
    { id: 0, title: 'Dine In' },
    { id: 1, title: 'To Go' },
    { id: 2, title: 'Delivery' },
  ];
  const classHeader = open ? `${style.header} ${style.active} ${style.focus}` : `${style.header}`;
  const activeDeliveryType = useSelector((state) => state.dishesSl.activeDeliveryType);
  const handleSetOpen = (id) => {
    setOpen(false);
    dispatch(setActiveDeliveryType(id + 1));
  };

  return (
    <div className={style.wrapper} style={styles}>
      <div className={classHeader} onClick={() => setOpen(true)}>
        <Arrow width="20" height="20" className={style.icon} />
        <span className={style.current} value={optionsArray[activeDeliveryType - 1].id}>
          {optionsArray[activeDeliveryType - 1].title}
        </span>
      </div>
      <Transition in={open} timeout={200} mountOnEnter unmountOnExit>
        {(state) => (
          <div className={`${style.body} ${style[state]}`}>
            {optionsArray.map((item) => (
              <div className={style.item} onClick={() => handleSetOpen(item.id)} key={item.id}>
                {item.title}
              </div>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default MySelect;
