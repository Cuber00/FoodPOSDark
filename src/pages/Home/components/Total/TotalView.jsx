import { Typography } from 'components';
import React from 'react';
import cl from './style.module.scss';
import PropTypes from 'prop-types';

export const TotalView = (props) => {
  return (
    <div className={cl.wrapper}>
      <div className={cl.row}>
        <Typography weight="regular" color="ligth">
          Discount
        </Typography>
        <Typography type="large">{props.discount}</Typography>
      </div>
      <div className={cl.row}>
        <Typography weight="regular" color="ligth">
          Sub total
        </Typography>
        <Typography type="large">{props.subTotal}</Typography>
      </div>
    </div>
  );
};
TotalView.propTypes = {
  subTotal: PropTypes.string,
  discount: PropTypes.string,
};
TotalView.defaultProps = {
  subTotal: `$ 0`,
  discount: `$ 0`,
};
