import React from 'react';
import useFetch from '../hooks/useFetch';
import styled from '@emotion/styled';
import Timestamp from 'react-timestamp';
import {FlexContainer} from '../components/ShowCards'
import Titles from './Titles';

const WhaleLine = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border: 2px solid #EFF2F5;
    margin: 2rem;
    width: 70%;
    background-color: #EFF2F5;
    height: 110px;
    border-radius: 10px;
    @media screen and (max-width: 800px){
        width: 92%;
    }
    @media screen and (max-width: 650px){
        height: auto;
        width: 74%;
        flex-direction: column;
        margin: 1rem 0 1rem 0;
        align-items: center;
    }
`;

const Info = styled.div`
    background-color: #EFF2F5;
    font-size: 1rem;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: 650px){
        margin: .5rem 0 .5rem 0;
    }
`;

const Whales = () => {

    const moves = useFetch('https://monstera-movement-server.herokuapp.com/whales', {loading: true, data: []});

    const moveList = moves.data;


    return(

        <FlexContainer>

            <Titles text={'Last 11 whale transactions'} />

            {moveList.slice(0).reverse().map( (move, i) => {
                

                while(i<11) {
                
                return (
                    <WhaleLine key={i}>

                        <Info>
                            <h4>Transaction made: <Timestamp className='infoSpan' relative date={move.timestamp} autoUpdate/></h4>
                            <h4>Currency: <span className='infoSpan'>{move.blockchain}</span></h4>
                        </Info>

                        <Info>
                            <h4>From: <span className='infoSpan'>{move.from.owner_type}</span></h4> 
                            <h4>to: <span className='infoSpan'>{move.to.owner_type}</span></h4>
                        </Info>

                        <Info>
                            <h4>Volume {move.symbol}: <span className='infoSpan'>{move.amount}</span></h4>
                            <h4>Bought for: <span className='infoSpan'>{move.amount_usd} USD</span></h4>
                        </Info>

                    </WhaleLine>
                )
                }
                
            } )}
        </FlexContainer>
    )

}

export default Whales;