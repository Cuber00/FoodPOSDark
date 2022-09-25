import { Select } from 'components';

export const SelectTypeOrderView = (props) => {
  return (
    <>
      <Select optionsArray={props.listTypeOrder} handleSelect={props.handleSelect} />
    </>
  );
};
