import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Line = styled.div`
    width: 20px;
    height: 3px;
    background-color: #FFF;
    margin: 5px 0 5px 0;
`;

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

const Burger = () => {

    const [circle, setCircle] = useState(false)

    const buttonHandle = () => {
       
        circle === false ? setCircle(true) : setCircle(false)

    }

    const clickHandle = () => {

        setCircle(false)

    }

    return (
        <Fragment>
            
            <button className = 'burgerContainer' onClick={buttonHandle}>
                <Line/>
                <Line/>
                <Line/>
            </button>
            
            {circle ? 
                <Container>
                    <Link to={'/'} onClick={clickHandle}><OptionLine>Crypto currencies</OptionLine></Link>
                    <hr></hr>
                    <Link to={'/whales'} onClick={clickHandle}><OptionLine>Whale transactions</OptionLine></Link>
                </Container>
            : null}
        
        </Fragment>

    )
}

export default Burger
