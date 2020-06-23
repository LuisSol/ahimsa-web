import React from 'react'
import styled from 'styled-components';

const Routine = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 450px;
    .routine-title {
        font-family: 'Sacramento', cursive;
        font-size: 2.5rem;
    }
    @media (max-width: 430px) {
        height: 400px;   
        .routine-title {
            font-size: 2rem;
        }     
    }
    @media (max-height: 800px) {
        height: 380px;
    }
    @media (max-height: 600px) {
        height: 330px;
    }
    @media (max-height: 420px) {
        height: 230px;
        .routine-title {
            font-size: 1.9rem;
        }
    } 
    @media (max-height: 375px) {
        height: 190px;
        .routine-title {
            font-size: 1.4rem;
        }
    }
    @media (max-height: 350px) {
        height: 160px;
        .routine-title {
            font-size: 1.3rem;
        }
    }
`
const RoutineCircle = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;    
    img {
        height: 90%;
        width: 90%;
    }
    @media (max-width: 430px), (max-height: 800px) {
        height: 330px;
        width: 330px;
    }
    @media (max-width: 360px), (max-height: 600px) {
        height: 280px;
        width: 280px;
    }
    @media (max-height: 520px) {
        height: 200px;
        width: 200px;
    } 
    @media (max-height: 420px) {
        height: 160px;
        width: 160px;
    }
    @media (max-height: 350px) {
        height: 130px;
        width: 130px;
    }
`

export default ({id, image, title, color}) => {
    return (
        <Routine>
            <RoutineCircle style={color}>
                <img src={image} alt={`routine ${id}`} />
            </RoutineCircle>
            <span className="routine-title">{title}</span>
        </Routine>
    )
}
