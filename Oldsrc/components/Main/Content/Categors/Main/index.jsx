import { useDispatch, useSelector } from 'react-redux';
import { setLeftLine } from '../../../../../redux/slice/categorSl';
import { setActiveCategory } from '../../../../../redux/slice/dishesSl';
import TabsCategor from '../../../../UI/Tabs/TabsCategor';
import style from '../style.module.scss';

const Main = () => {
  const activeCategor = useSelector((state) => state.dishesSl.activeCategory);
  const { list, lineLeft } = useSelector((state) => state.categorSl);
  const styleLineLeft = { left: `${lineLeft}px` };

  const dispatch = useDispatch();
  const handleActiveCategory = (id) => {
    dispatch(setActiveCategory(id));
  };
  const handleLineLeft = (left) => {
    dispatch(setLeftLine(left));
  };
  return (
    <div className={style.wrapper}>
      {list.map((i) => (
        <TabsCategor
          key={i.id}
          id={i.id}
          chooseTabs={handleActiveCategory}
          active={activeCategor === i.id ? true : false}
          handleLineLeft={handleLineLeft}>
          {i.caption}
        </TabsCategor>
      ))}
      <div className={style.line} style={styleLineLeft}></div>
    </div>
  );
};

export default Main;
