import {FC, useState} from 'react';
import './modal.scss';
import cn from 'classnames';

const Modal = ({children, mode, onClick}: any):JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <div className={cn('modal-wrapper', {'open': mode})} onClick={onClick}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>{children}</div>
    </div>
  );
};

export default Modal;
