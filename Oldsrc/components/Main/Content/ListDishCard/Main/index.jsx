import { useSelector } from 'react-redux';
import DishCard from '../../../../UI/Cards/DishCard';
import style from '../style.module.scss';
const Main = () => {
  const { dishesList } = useSelector((state) => state.dishesSl);
  return (
    <div className={style.items}>
      {dishesList.length > 0 ? (
        dishesList.map((i) => (
          <DishCard
            id={i.id}
            image={i.image}
            available={i.available}
            price={i.price}
            title={i.title}
            key={i.id}
          />
        ))
      ) : (
        <>В данной категории остутвуют блюда</>
      )}
    </div>
  );
};

export default Main;
