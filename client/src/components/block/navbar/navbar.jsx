import React from 'react'
import Logo from '../../../assets/img/navbar-logo.svg'
import {NavbarContainer, NavbarBlock, ContentBlock, Img} from './navbarStyle'
import Button from '../../controls/buttons/buttonsNavbar/button'


const Navbar = () => {
    return (
        <NavbarContainer>
            <NavbarBlock>
                <ContentBlock>
                    <Img src={Logo} alt="Logo"></Img>
                    <h3>MERN CLOUD</h3>
                </ContentBlock>

                <ContentBlock>
                    <Button text={'Войти'} to='/login'>
                    </Button>

                    <Button text={'Регистрация'} to='/registration'>
                    </Button>
                </ContentBlock>

            </NavbarBlock>
        </NavbarContainer>
    )
}

export default Navbar