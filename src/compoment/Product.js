import React, {Component} from "react";

class Product extends Component {
    render() {
        return (
            <div className='col-4'>
                <div className='image'>
                    <img
                        src='https://imgs.viettelstore.vn/Images/Product/ProductImage/dien-thoai/Apple/iPhone%2013%20Pro/iPhone-13-Pro-1.jpg'/>
                    <div>
                        <h3>pro 1</h3>
                        <p>16.000.000</p>

                    </div>
                </div>
                <button className='btn buy'>Buy</button>
            </div>

        );
    }
}

export default Product;
