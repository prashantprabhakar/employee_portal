import React from 'react'
const EdiPop = (props) => {
  return (
    <div className='popup'>
      <div className='popup_inner'>
        <button className="btn waves-light red m-4 right" onClick={props.closePopup}>
          <i className="small material-icons">close</i>
        </button>
        <h1>{props.text}</h1>
        {props.children}
      </div>
    </div>
  );
}

export default EdiPop
