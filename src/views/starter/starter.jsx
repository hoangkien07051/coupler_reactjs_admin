import React, { Component } from 'react'
import {
    Row,
    Col
} from 'reactstrap';
import Feeds from '../../components/dashboard-components/feeds/feeds';
import Projects from '../../components/dashboard-components/projects/projects';
import SalesSummary from '../../components/dashboard-components/sales-summary/sales-summary';

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
