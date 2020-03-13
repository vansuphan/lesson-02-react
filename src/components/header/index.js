import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';
class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink href="/todos/">Todos</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/tranfficlight">Tranfficlight</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default  Header;