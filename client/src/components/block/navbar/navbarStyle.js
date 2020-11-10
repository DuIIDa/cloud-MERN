import styled from 'styled-components'

export const NavbarContainer = styled.div`
    background: ${props => props.theme.colors.whiteNavbar};
    box-shadow: -3px 20px 36px -3px rgba(34, 60, 80, 0.56);
    min-width: 400px;
`

export const NavbarBlock = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 8px 50px 0px 50px;

`
            
export const ContentBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > .title-site {
        margin-right: 20px;
    }

    @media (max-width: 775px) {
        margin-bottom: 10px;
        align-items: flex-start;

        &.box-logo {
            flex-direction: column;
            
        }
    }

    @media (max-width: 640px) {
        flex-wrap: wrap;

        &.box-btn {
            align-items: flex-end;
            flex-direction: column;
        }
    }

`

export const ImgLogo = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 16px;
`

export const NameUser = styled.h3`
    max-width: 230px;
    margin-right: 10px;
    overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

    @media (max-width: 640px) {
        max-width: 140px;
        margin-bottom: 15px;
    }

    @media (max-width: 400px) {
        max-width: 120px;
    }
`