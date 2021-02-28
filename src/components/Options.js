import React from 'react'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Container = styled.div`
    float: right;
    margin: 3rem -1.5rem 0 0;
    background-color: #313131;
    border-radius: 0 0 10px 10px;
    
`;

const OptionLine = styled.div`
    padding: 1rem;
    background-color: rgba(0,0,0,0);
    color: #FFF;
    text-align: center;
    
`;

const Options = () => {
    return ( 
        <Container>
            <Link to={'/'}><OptionLine>Crypto currencies</OptionLine></Link>
            <hr></hr>
            <Link to={'/whales'}><OptionLine>Whale transactions</OptionLine></Link>
        </Container>
    )
}

export default Options
