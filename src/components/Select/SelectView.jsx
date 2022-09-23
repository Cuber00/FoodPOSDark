import React from 'react';
import cl from './style.module.scss';
import { Transition } from 'react-transition-group';

import { HeaderSelect } from './component/HeaderSelect';

export const SelectView = (props) => {
  const { optionsArray, handleSelect } = props;
  const rootRef = React.useRef(null);
  const nodeRef = React.useRef(null);

  const [open, setOpen] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0);

  const classHeader = open ? `${cl.header} ${cl.active} ${cl.focus}` : `${cl.header}`;
  const acvItem = optionsArray[activeItem];
  const handleSetOpen = (id) => {
    setOpen(false);
    if (id !== activeItem) {
      setActiveItem(id);
      handleSelect();
    }
  };
  const handleSelectBody = () => {
    setOpen(!open);
  };
  React.useEffect(() => {
    document.addEventListener('click', (e) => {
      if (!e.path.includes(rootRef.current)) setOpen(false);
    });
  }, []);

  return (
    <div className={cl.wrapper} ref={rootRef}>
      <HeaderSelect acvItem={acvItem} classRoot={classHeader} handleSelectBody={handleSelectBody} />
      <Transition in={open} nodeRef={nodeRef} timeout={200} mountOnEnter unmountOnExit>
        {(state) => (
          <div ref={nodeRef} className={`${cl.body} ${cl[state]}`}>
            {optionsArray.map((item) => (
              <div className={cl.item} onClick={() => handleSetOpen(item.id)} key={item.id}>
                {item.title}
              </div>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};
