import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

export default class Sidebar extends Component {

    expandLogo() {
    }
                
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'selected' : '';
    }

    render() {
        return (
            <aside className="left-sidebar" id="sidebarbg" data-sidebarbg="skin6" onMouseEnter={this.expandLogo()} onMouseLeave={this.expandLogo()}>
                <div className="scroll-sidebar">
                    <PerfectScrollbar className="sidebar-nav">
                        <Nav id="sidebarnav">
                            { this.props.routes.map((prop, key) => {
                                if (prop.redirect) 
                                    return null;
                                return (                                                       
                                    <li className={this.activeRoute(prop.path) + (prop.pro ? ' active active-pro' : '') + ' sidebar-item'} key={key}>
                                        <NavLink to={prop.path} className="sidebar-link" activeClassName="active">
                                            <i className={prop.icon} />
                                            <span className="hide-menu">{prop.name}</span>
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </Nav>
                    </PerfectScrollbar>
                </div>
            </aside>
        )
    }
}



