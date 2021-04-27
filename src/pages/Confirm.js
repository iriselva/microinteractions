import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import React from "react";
import Loader from "../components/Loader"
import ConfettiCanvas from 'react-confetti-canvas';

const ConfirmContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
    width: 100%;
`;

const Title = styled.h2`
    position: absolute;
`;

const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 200px;
    heigth: 200px;
    align-items: center;
    align-content: center;
    flex-direction: column;
`;

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
margin: auto;
height: 100vh;
width: 100vw;

`;

export default function Confirm(){
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 3000)
    }, [])

    return (
        <Container>
        {loading === false? (
           <ConfirmContainer>
            
            <ConfettiCanvas
                style={{height: 100, width: 100}}
                colors={[
                    ['#373737', '#BFAEA9'], ['#E7BB7A', '#C2D1CE']
                ]}
                duration={0.02}
                paperCount={120}
                ribbonCount={0}
            />
            <Title>Purchase Confirmed!</Title>

        </ConfirmContainer> 
        ) : (
            <LoaderContainer>
                <Loader />
                <p>Processing order</p>
            </LoaderContainer>
        )}
      </Container>  
    )
    
}