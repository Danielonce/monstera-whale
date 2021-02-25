import styled from '@emotion/styled';
import { Fragment } from 'react';


const Card = styled.div`
    width: 70%;
    height: 7rem;
    border: 2px solid #EFF2F5; 
    display: flex;
    flex-direction: row;
    margin: 2rem;
    border-radius: 10px;
    background-color: #FFF;
    justify-content: space-between;
    max-width: 1221px;
    @media screen and (max-width: 800px){
        width: 92%;
    }
    @media screen and (max-width: 650px){
        height: auto;
        width: 65%;
        flex-direction: column;
        margin: 1rem 0 1rem 0;
        align-items: center;
    }
`;

const SubCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 88%;
    background-color: #EFF2F5;
    height: 100%;
    border-radius: 10px 0px 0px 10px;
    @media screen and (max-width: 650px){
        flex-direction: column;
        width: 100%;       
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




const Imagen = styled.img`
    width: 5rem;
    height: 5rem;
    margin: 1rem;
`;


const useCard = (coins) => {


    
    const Labeler = () => (

        <Fragment>            
            {coins.map((coin, i) => (
                <Card key={i}>

                    <SubCard>
                        <Info>
                            <h4>Name: <span className='infoSpan'>{coin.CoinInfo.FullName}</span></h4>
                            <h4>Code: <span className='infoSpan'>{coin.CoinInfo.Internal}</span></h4>
                            <h4>Symbol: <span className='infoSpan'>{coin.DISPLAY.USD.FROMSYMBOL}</span></h4>
                        </Info>
                        <Info>
                            <h4>{coin.CoinInfo.Internal}/USD:</h4>
                            <h4><span className='infoSpan'>{coin.RAW.USD.PRICE}</span></h4>
                        </Info>
                        <Info>
                            <h4>Last vol: <span className='infoSpan'>{coin.DISPLAY.USD.LASTVOLUME}</span></h4>
                            <h4>USD amount: <span className='infoSpan'>{coin.DISPLAY.USD.LASTVOLUMETO}</span></h4>
                        </Info>
                        <Info>
                            <h4>Max today:</h4>
                            <span className='infoSpan'> {coin.DISPLAY.USD.HIGH24HOUR}</span>
                        
                            <h4>Min today:</h4>
                            <span className='infoSpan'>{coin.DISPLAY.USD.LOW24HOUR}</span>
                        </Info>
                    </SubCard>

                    <Imagen 
                        src={'https://cryptocompare.com'+coin.CoinInfo.ImageUrl}
                    />

                </Card>
            ))}
        </Fragment>
    )
    return [Labeler];
}

export default useCard
