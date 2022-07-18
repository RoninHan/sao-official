import React, { useState } from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import Product from '../../components/product'
import { Col, Divider, Row } from 'antd';
const home : React.FC = () =>{
    return <div>
        <Header />
        <Banner />
        <Row gutter={16}>
            <Col className="gutter-row" span={12}>
                <Product/>
            </Col>
            <Col className="gutter-row" span={12}>
                <Product/>
            </Col>
            <Col className="gutter-row" span={12}>
                <Product/>
            </Col>
            <Col className="gutter-row" span={12}>
                <Product/>
            </Col>
        </Row>
    </div>
}
export default home