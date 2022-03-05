import Header from "./compoment/Header";
import Product from "./compoment/Product";
import {Component} from "react";

class App extends  Component{
    render() {
        return (
            <div className="App">
                <Header/>
                <div className='row'>
                    <Product/>
                    <Product/>
                </div>
            </div>
        );
    }
}

export default App;
