import React, { Component } from 'react';
import {Row,Col} from 'antd';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import NavLeft  from './components/NavLeft/index';
import './style/common.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className="container">
                <Col span="5" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="19" className="main">
                    <Header />
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer />
                </Col>
            </Row>
         );
    }
}
 
export default App;