import React from 'react'
import styled from '@emotion/styled'

const Title = styled.h3`
    background-color: #313131;
    color: #EFF2F5;
    text-align: center;
    padding: .8rem;
    margin: 0 35% 0 35%;
    border-radius: 10px;
    display: inline-block;
    @media screen and (max-width: 850px){
        font-size: 1rem;
        margin: 0 5% 0 5%;
        padding: .5rem;
    }
`;

const Img = styled.img`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    margin-right: .5rem;
    @media screen and (max-width: 850px){
        height: 2rem;
        width: 2rem;
    }
`;

const Titles = ({text, image}) => {
    return (
        <Title><Img src={image}/>{text}</Title>
    )
}

export default Titles
