import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom'

import Logo from '../../../assets/img/navbar-logo.svg'
import {NavbarContainer, NavbarBlock, ContentBlock, ImgLogo, NameUser} from './navbarStyle'
import {ButtonEnter, ButtonReg, ButtonBack} from '../../controls/buttons/buttonsNavbar/index'

import {Input} from '../../controls/inputs/index'

import {searchFiles, getFiles, showLoader} from '../../../actions/index'

const Navbar = () => {
    const dispatch = useDispatch()

    const isAuth = useSelector(state => state.user.isAuth)
    const currentUser = useSelector(state => state.user.currentUser)
    const currentDir = useSelector(state=> state.files.currentDir)

    const [searchName, setSeatchName] = useState('')
    const [searchTimeout, setsearchTimeout] = useState(false)

    const searchChangeHandler = (newValue) => {
        setSeatchName(newValue)
        dispatch(showLoader())
        if(searchTimeout !== false){
            clearTimeout(searchTimeout)
        }
        if(newValue !== ''){
            setsearchTimeout(setTimeout((value) => {
                dispatch(searchFiles(value))
            }, 1000, newValue))
        }else {
            dispatch(getFiles(currentDir.id))
        }
    }

    return (
        <NavbarContainer>
            <NavbarBlock>
                <ContentBlock className='box-logo'>
                    <ContentBlock>
                        <NavLink to='/'><ImgLogo src={Logo} alt="Logo"></ImgLogo></NavLink>
                        <h3>MY<br></br>CLOUD</h3>
                    </ContentBlock>
                    {isAuth && 
                            <Input placeholder='Название файла...' 
                                    type='text'
                                    className='search'
                                    value={searchName} 
                                    setValue={searchChangeHandler}> 
                            </Input>}
                </ContentBlock>

                <ContentBlock className='box-btn'>
                    {!isAuth && <ButtonEnter></ButtonEnter>}
                    {!isAuth && <ButtonReg></ButtonReg>}
                    {isAuth &&  <NameUser>{currentUser.login}</NameUser>}
                    {isAuth &&  <ButtonBack ></ButtonBack>}
                </ContentBlock>

            </NavbarBlock>
        </NavbarContainer>
    )
}

export default Navbar