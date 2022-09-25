import { Title } from 'components';
import { SelectTypeOrder, ListDishes } from 'pages/Home/components';
import cl from './style.module.scss';

export const Content = () => {
  return (
    <div className={cl.root}>
      <div className={cl.header}>
        <Title type="h2">Choose Dishes</Title>
        <SelectTypeOrder />
      </div>
      <ListDishes />
    </div>
  );
};
