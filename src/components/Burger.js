import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';
import Options from './Options';

const Line = styled.div`
    width: 20px;
    height: 3px;
    background-color: #FFF;
    margin: 5px 0 5px 0;
`;

const Burger = () => {

    const [circle, setCircle] = useState(false)

    const buttonHandle = () => {
       
        circle === false ? setCircle(true) : setCircle(false)

    }

    return (
        <Fragment>
            
            <button className = 'burgerContainer' onClick={buttonHandle}>
                <Line/>
                <Line/>
                <Line/>
            </button>
            
            {circle ? <Options/> : null}
        
        </Fragment>

    )
}

export default Burger
