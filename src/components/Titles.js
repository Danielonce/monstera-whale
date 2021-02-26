import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h2`
    background-color: #313131;
    color: #EFF2F5;
    text-align: center;
    padding: .8rem;
    margin: 0 25% 0 25%;
    border-radius: 10px;
`;

const Titles = ({text}) => {
    return (
        <Title>{text}</Title>
    )
}

export default Titles
