import React, { Component } from 'react';
import {
    Row,
    Col
} from 'reactstrap';
import Feeds from '../components/dashboard-components/Feeds';
import Projects from '../components/dashboard-components/Projects';
import SalesSummary from '../components/dashboard-components/SalesSummary';

export default class Starter extends Component {
  render() {
    return (
        <div>
            <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
        </div>
    )
  }
}
