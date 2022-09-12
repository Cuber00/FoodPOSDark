import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategor } from '../../../../redux/slice/categorSl';
import TabsCategor from '../../../UI/Tabs/TabsCategor';
import style from './style.module.scss';
import { SERVER_RESPONSE } from '../../../../redux/constants/apiServices';
import { setActiveCategory } from '../../../../redux/slice/dishesSl';

const Categors = () => {
  const { status, error, list } = useSelector((state) => state.categorSl);
  const activeCategor = useSelector((state) => state.dishesSl.activeCategory);
  const dispatch = useDispatch();
  const [lineLeft, setLineLeft] = useState(-1.5);

  useEffect(() => {
    dispatch(fetchCategor());
  }, []);

  const handleSetActiveCategory = (id) => {
    dispatch(setActiveCategory(id));
  };

  if (status === SERVER_RESPONSE.fulfilled)
    return (
      <div className={style.wrapper}>
        {list.map((i) => (
          <TabsCategor
            key={i.id}
            active={activeCategor === i.id ? true : false}
            checkItem={() => handleSetActiveCategory(i.id)}
            setLineLeft={setLineLeft}>
            {i.caption}
          </TabsCategor>
        ))}
        <div className={style.line} style={{ left: `${lineLeft}px` }}></div>
      </div>
    );
};

export default Categors;
