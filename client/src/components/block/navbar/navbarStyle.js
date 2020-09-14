import styled from 'styled-components'

export const NavbarContainer = styled.div`
    background: ${props => props.theme.colors.write};
    box-shadow: 0px 3px 4px rgba(92, 92, 92, 0.25);
`

export const NavbarBlock = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 50px 8px 50px;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`

export const ContentBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 600px) {
        margin-bottom: 30px;
    }

    @media (max-width: 400px) {
        flex-wrap: wrap;
    }

`

export const Img = styled.img`
    margin-right: 16px
`