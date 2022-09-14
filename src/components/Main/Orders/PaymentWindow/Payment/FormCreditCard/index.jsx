import React from 'react';
import Divider from '../../../../../UI/Divider';
import MySelect from '../../../../../UI/MySelect';
import Block from '../Block';
import style from './style.module.scss';
const FormCreditCard = () => {
  return (
    <div className={style.form}>
      <Block placeholder="Name" title="Cardholder Name" />
      <Block placeholder="**** **** **** ****" title="Card Number" />
      <div className={style.row}>
        <Block placeholder="**/****" title="Expiration Date" />
        <Block placeholder="***" title="CVV" />
      </div>
      <Divider />
      <div className={style.row}>
        <div className={style.block}>
          Order Type
          <MySelect styles={{ width: '100%' }} />
        </div>
        <Block placeholder="***" title="Table no." />
      </div>
    </div>
  );
};

export default FormCreditCard;
