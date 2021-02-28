import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled';
import useCard from '../hooks/useCard';
import axios from 'axios';
import Titles from '../components/Titles';
import currencies from '../assets/currencies.png';

export const FlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const ShowCards = () => {

    const [crypto, setCrypto] = useState([]);
        
    const [SetCard] = useCard(crypto);
    
    useEffect(() => {
        const consult = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const response = await axios.get(url)
            setCrypto(response.data.Data)
        }
        consult()
    }, [])
    

    return (
            <FlexContainer>
                <Titles text={'Top currencies'} image={currencies}/>
                <SetCard />
            </FlexContainer>
    );
}

export default ShowCards
