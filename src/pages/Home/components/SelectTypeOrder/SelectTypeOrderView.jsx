import { Select } from 'components';

export const SelectTypeOrderView = (props) => {
  return (
    <>
      <Select
        activeId={props.activeId}
        optionsArray={props.listTypeOrder}
        handleSelect={props.handleSelect}
      />
    </>
  );
};
