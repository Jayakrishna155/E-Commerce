import React from 'react'
import './breadcrum.css'
import arrowIcon from '../Assets/Frontend_Assets/breadcrum_arrow.png'
export default function Breadcrum (props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" />{product.category} <img src={arrowIcon} alt="" />{product?.name}
    </div>
  )
}
