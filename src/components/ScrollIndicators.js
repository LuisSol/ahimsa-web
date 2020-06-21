import React from 'react'
import styled, { keyframes}  from 'styled-components'

const animate = keyframes`
    0% {
        border-color: #999;
    }
    20% {
        border-color: #999;
    }
    20.1%, 100% {
        border-color: #EEE;
    }
`

const ScrollIndicators = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;    
    .indicator {
        position: relative;
        display: inline-block;
        width: 9px;
        height: 9px;        
    }
    .indicator span{
        position: absolute;
        width: 100%;
        height: 100%;
        border-bottom: 2px solid #6666;
    }
    .left-indicator {        
        margin-right: .5rem;        
        transform: rotate(45deg);
    }    
    .left-indicator span {      
        border-left: 2px solid #6666;
        animation: ${animate} 3s linear infinite;
    }
    .left-indicator span:nth-child(1) {
        left: -5px;
        bottom: -5px;
        animation-delay: 0.2s;
    }
    .left-indicator span:nth-child(2) {
        left: -10px;
        bottom: -10px;
        animation-delay: 0.4s;
    }
    .left-indicator span:nth-child(3) {
        left: -15px;
        bottom: -15px;
        animation-delay: 0.6s;
    }
    .right-indicator {           
        margin-left: .5rem; 
        transform: rotate(-45deg);
    }
    .right-indicator span{
        border-right: 2px solid #6666;
        animation: ${animate} 3s linear infinite;
    }
    .right-indicator span:nth-child(1) {
        right: -5px;
        bottom: -5px;
        animation-delay: 0.2s;
    }
    .right-indicator span:nth-child(2) {
        right: -10px;
        bottom: -10px;
        animation-delay: 0.4s;
    }
    .right-indicator span:nth-child(3) {
        right: -15px;
        bottom: -15px;
        animation-delay: 0.6s;
    }
`

export default () => {
    return (
        <ScrollIndicators>
            <div className="indicator left-indicator">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <small>scroll</small>
            <div className="indicator right-indicator">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </ScrollIndicators>
    )
}
