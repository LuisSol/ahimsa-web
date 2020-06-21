import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { useDispatch, useSelector } from 'react-redux'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { routinesDisplay as routines } from '../routines';
import { routineGradients } from '../common_styles';
import * as actions from '../redux/routineActions'
import Routine from './Routine';

const RoutinesCarousel = styled.section`
    height: 65%;
    width: 100%;
`

export default () => {
    const dispatch = useDispatch();
    const current = useSelector(state => state.routineIndex);

    const changeRoutine = (index) => {
        dispatch(actions.changeRoutine(index))
    }

    return (
        <RoutinesCarousel>            
            <Slider
                initialSlide={current}
                slidesToScroll={1}
                slidesToShow={1}
                speed={400}
                infinite={true}
                dots={true}
                arrows={false}
                afterChange={changeRoutine}
            >
                {
                routines.map((routine, index) => 
                    <Routine 
                        key={routine.id}
                        {...routine}
                        color={routineGradients[index]}
                    />
                )
            }
            </Slider>                          
        </RoutinesCarousel>
    )
}
