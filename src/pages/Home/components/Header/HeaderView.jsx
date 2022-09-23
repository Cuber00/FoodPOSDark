import { Title, Typography } from 'components';
import { Search } from 'pages/Home/components';
import cl from './style.module.scss';

export const HeaderView = (props) => {
  return (
    <div className={cl.root}>
      <div className={cl.content}>
        <Title type="h1">Jaegar Resto</Title>
        <Typography type="large" weight="regular" color="ligth">
          {props.date}
        </Typography>
      </div>
      <Search />
    </div>
  );
};
