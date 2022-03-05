import React, {Component} from "react";

class Header extends Component {
    render() {
        return (
            <nav className='navigate'>
                <div>
                    <a>New React</a>
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li className="active">
                            <a>Product</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
