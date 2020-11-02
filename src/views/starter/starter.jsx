import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from 'components/dashboard-components';

export default class componentName extends Component {
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