import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import ButtonContainer from './button'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-xl navbar-dark bg-primary px-sm-5 ">
                <div className="navbar-brand "><h2 className="blue-c">Kart</h2></div>
                <ul className="navbar-nav align-items-center">
                    <li><Link to="/" className="nav-link">Products</Link></li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fa fa-cart-plus" />my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
    .nav-link{
        font-size: 1.2rem;
        margin-left: 30px;
    }
`