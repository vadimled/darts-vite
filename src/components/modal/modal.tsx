// import {useState} from 'react';
import './modal.scss';
import cn from 'classnames';
import {ReactElement} from 'react';

const Modal = ({children, mode, onClick}: never): ReactElement => {
  // const [count, setCount] = useState(0);

  return (
    <div className={cn('modal-wrapper', {open: mode})} onClick={onClick}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
