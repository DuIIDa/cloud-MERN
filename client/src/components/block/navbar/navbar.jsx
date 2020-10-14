import React from 'react'
import { useSelector } from 'react-redux';

import Logo from '../../../assets/img/navbar-logo.svg'
import {NavbarContainer, NavbarBlock, ContentBlock, ImgLogo, NameUser} from './navbarStyle'
import {ButtonEnter, ButtonReg, ButtonBack} from '../../controls/buttons/buttonsNavbar/index'

import {Input} from '../../controls/inputs/inputSearch/input'

const Navbar = () => {

    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.currentUser)

    return (
        <NavbarContainer>
            <NavbarBlock>
                <ContentBlock className='box-logo'>
                    <ContentBlock>
                        <ImgLogo src={Logo} alt="Logo"></ImgLogo>
                        <h3>MERN<br></br>CLOUD</h3>
                    </ContentBlock>
                    {isAuth && <Input></Input>}
                </ContentBlock>

                <ContentBlock className='box-btn'>
                    {!isAuth && <ButtonEnter></ButtonEnter>}
                    {!isAuth && <ButtonReg></ButtonReg>}
                    {isAuth &&  <NameUser>{currentUser.email}</NameUser>}
                    {isAuth &&  <ButtonBack ></ButtonBack>}
                </ContentBlock>

            </NavbarBlock>
        </NavbarContainer>
    )
}

export default Navbar