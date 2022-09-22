import style from '../style.module.scss';
import { ReactComponent as IError } from '../../../../../assets/icons/Error.svg';
import { useSelector } from 'react-redux';
const Error = () => {
  const error = useSelector((state) => state.dishesSl.error);
  return (
    <div className={style.items}>
      <div className={style.error}>
        <IError fill="inherit" />
        {error}
      </div>
    </div>
  );
};

export default Error;
