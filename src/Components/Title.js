import React from 'react'
import styled from 'styled-components'

const Title = ({title, span}) => {
    return (
        <TitleStyle>
            <h2>{title}<span>{span}</span></h2>
        </TitleStyle>
    )
}
const TitleStyle = styled.div`
position: relative;
margin-bottom: 3rem;
h2{
    position: relative;
    color: var(--white-color);
    font-size: 3rem;
    font-weight: 600;
    text-transform: uppercase;
    z-index: 4;
    padding-bottom: .8rem;

    &::before{
        content: '';
        position: absolute;
        width: 8rem;
        height: .33rem;
        border-radius:5rem;
        left: 0;
        bottom: 0;
        background-color: var(--primery-color);
    }
    &::after{
        content: '';
        position: absolute;
        width: 3rem;
        height: .33rem;
        background-color: var(--background-lite-color);
        border-radius:5rem;
        left: 0;
        bottom: 0;
    }
    span{
        position: absolute;
        top: 20%;
        left:0;
        font-size: 4.5rem;
        font-weight: 700;
        color: rgba(25 29 43 /.44);
        z-index: -1;

    }
}

`
export default Title
