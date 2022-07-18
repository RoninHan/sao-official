import React from 'react';

//css
import './index.scss'

const Product:React.FC = () =>{
    return <div className={'product'}>
        <div className={'product-item'}>
            <div className={'product-title'}></div>
            <div className={'product-content'}></div>
            <div className={'product-more'}></div>
        </div>
    </div>
}
export default Product