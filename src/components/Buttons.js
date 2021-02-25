import React from 'react'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import whale from '../assets/whale.png'
import currencies from '../assets/currencies.png';

const Container = styled.div`
    height: 3rem;
    width: 100vw;
    display: block;
`;

const Img = styled.img`
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    border: 2px solid black;
    margin: 0 .5rem 0 .5rem;
    float: right;
`;


const Buttons = () => {
    return ( 
        <Container>
            <Link to={'/whales'}><Img src={whale} alt='meaningful text'/></Link>
            <Link to={'/'}><Img src={currencies} alt='meaningful text' /></Link>
        </Container>
    )
}

export default Buttons
