import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import monsteraimagen from '../monstera_imagen.png';
import Options from './Options';
import Burger from '../components/Burger';
import Media from 'react-media';

const MainHeader = styled.header`
    height: 5rem;
    width: 100vw;
    background-color: #159E49;
    position: fixed;
    margin-top: -7rem;
`;

const SubHeader = styled.div`
    height: 3rem;
    background-color: #313131;
    margin-top: 2rem;
    position: relative;
`;

const PicContainer = styled.div`
    padding: 3rem;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    bottom: -1.75rem;
    left: 1rem;
    display:inline-block;
`;

const Imagen = styled.img`
    border-radius: 50%;
    height: 90px;
    width: 90px;
    position: absolute;
    display: inline-block;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`;

const Title = styled.h2`
    color: #FFF;
    display: inline-block;
    position: absolute;
    background-color: #313131;
    left: 7.1rem;
    font-size: 1.3rem;
    top: .8rem;
    @media screen and (max-width: 470px){
        font-size: 1rem;
    }
`;

const Header = () => {

    return (
        <Fragment>
        <MainHeader>
            <SubHeader>
                
                <PicContainer>
                    <Imagen
                        src={monsteraimagen}
                        alt={'logo monstera'}
                    />
                </PicContainer>

                <Title>Monstera Movement</Title>

                <Media queries={{
                    small: "(max-width: 767px)",
                    large: "(min-width: 768px)"
                }}>
                
                {matches => (
                
                    <Fragment>
                        {matches.small && <Burger/>}
                        {matches.large && <Options/>}
                    </Fragment>
                
                )}

                </Media>

            </SubHeader>
        </MainHeader>
        </Fragment>
    )
}

export default Header
