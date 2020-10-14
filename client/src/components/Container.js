import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    max-width: 1140px;
    min-width: 400px;
    padding: 10px 80px;
    background: ${props => props.theme.colors.bgTwoColors};

    @media (max-width: 500px) {
        padding: 10px 15px;
    }
`