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
`
const RoutineCircle = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;    
    img {
        height: 370px;
        width: 370px;
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
