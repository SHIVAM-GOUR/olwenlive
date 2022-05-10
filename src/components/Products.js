import React from 'react'
import {Button} from 'antd'

function Products() {
    const product1 = require('../assets/images/product1.jpg')
    const product2 = require('../assets/images/product2.jpg')
    const product3 = require('../assets/images/product3.jpg')
    const product4 = require('../assets/images/product4.jpg')
    const product5 = require('../assets/images/product5.jpg')
    const product6 = require('../assets/images/product6.jpg')
    const product7 = require('../assets/images/product7.jpg')
    const product8 = require('../assets/images/product8.jpg')

  return (
    <div className='products-mainContainer'>
        <h2 className="products-heading">OUR PRODUCTS</h2>

        <div className="products-box-container">
            <div className="product-box">
                <img src={product1} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>
            <div className="product-box">
                <img src={product2} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>
            <div className="product-box">
                <img src={product3} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>
            <div className="product-box">
                <img src={product4} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>
            <div className="product-box">
                <img src={product5} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>
            <div className="product-box">
                <img src={product6} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>
            <div className="product-box">
                <img src={product7} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>
            <div className="product-box">
                <img src={product8} className="product-img" alt="Product Image" />
                <div className="product-details">
                    <p className="product-name">Dalbergia Sissoo,Cissus Quadrangularis Tablet</p>
                    <p className="product-price">Only 19$</p>
                    <Button className='product-buy-btn' type='primary'>Buy Now</Button>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Products