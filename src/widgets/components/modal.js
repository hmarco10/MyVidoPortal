import React from 'react';
import './modal.css';
import {Link} from 'react-router-dom';
function Modal(props) {
  return (
    <div className="Modal">
      {props.children}
      <Link
      //le indicamos que debe poner en la url y que debe mostrar
        to={{
          pathname:'/videos ',
          state:{
            modal:false
          }
        }}
      >
        <button
          onClick={props.handleClick}
          className="Modal-close"
        />
      </Link>
    </div>
  )
}

export default Modal;
