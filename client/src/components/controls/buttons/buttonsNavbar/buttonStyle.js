import styled from 'styled-components'

export const ButtonStyle = styled.button`
    text-align: center;
    display: inline-block;
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.colors.fontColor};
    text-transform: capitalize;
    font-size: 18px;
    font-weight : bold;
    padding: 5px 0px;
    width: 180px;
    border-radius: 9px;
    border: 1px solid black;
    overflow: hidden;
    transition: all 500ms ease;
    
    &:before {
        content: "${'\\2794'}";
        font-size: 20px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        top: 0;
        opacity: 0;
        height: 100%;
        width: 40px;
        color: ${props => props.theme.colors.write}
    }

    &:hover {
        text-indent: -20px;
    
        &:before {
            opacity: 1;
            text-indent: 0px;
        }
    }

    &:not(:last-child) {
        margin-right: 27px;
        width: 120px;
    }

    > a {
        text-decoration: none;
        color: ${props => props.theme.colors.fontColor};
    }

    @media (max-width: 400px) {
        margin-bottom: 10px;
    }
`