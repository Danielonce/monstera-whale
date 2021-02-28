import React from 'react'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
    float: right;
    background-color: rgba(0,0,0,0);
    margin: .7rem 1rem 0 0;  
`;

const Button = styled.button`
    padding: .3rem;
    border-radius: 15px;
    background-color: #EFF2F5;
    border: none;
    margin-right: .5rem;
    outline: none;
    font-weight: 900;
    :hover{
        background-color: #159E49;
        color: #EFF2F5;
        transition: 1s;
    }
`;

const Options = () => {
    return ( 
        <Container>
            <Link to={'/'}><Button>Crypto currencies</Button></Link>
            <Link to={'/whales'}><Button>Whale transactions</Button></Link>
        </Container>
    )
}

export default Options
