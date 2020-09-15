import React from 'react'
import { useSelector } from 'react-redux';

import Logo from '../../../assets/img/navbar-logo.svg'
import {NavbarContainer, NavbarBlock, ContentBlock, Img} from './navbarStyle'
import Button from '../../controls/buttons/buttonsNavbar/button'
import ButtonBack from '../../controls/buttons/buttonsNavbar/buttonBack'

import {logout} from '../../../actions/index'

const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)

    return (
        <NavbarContainer>
            <NavbarBlock>
                <ContentBlock>
                    <Img src={Logo} alt="Logo"></Img>
                    <h3>MERN CLOUD</h3>
                </ContentBlock>

                <ContentBlock>
                    {!isAuth && <Button text={'Войти'} to='/login'></Button>}
                    {!isAuth && <Button text={'Регистрация'} to='/registration'></Button>}
                    {isAuth &&  <ButtonBack text={'Выход'} logOut={logout}></ButtonBack>}
                </ContentBlock>

            </NavbarBlock>
        </NavbarContainer>
    )
}

export default Navbar