import React from 'react';
import './PageHeader.scss';
import bg from '../../Assets/Images/MYXJ_20211114113852445_save (2).jpg';

const PageHeader = props => {
  return (
    <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
        <h2>{props.children}</h2>

    </div>
  )
}



export default PageHeader