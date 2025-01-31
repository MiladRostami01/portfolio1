import React from 'react'
import styled from 'styled-components'


const ReviewItem = ({ text }) => {
    return (
        <ReviewItemStyle>
            <p>{text}</p>
        </ReviewItemStyle>
    )
}
const ReviewItemStyle = styled.div`
flex:1;
width: 100%;
padding:2rem 1rem;
background-color: var(--background-dark-color-2);
position: relative;
border-left: .3rem var(--border-color) solid;
transition: all .2s ease-in-out;
&:not(:last-child){
margin-right: 1rem;
}
&::after{
    content: '';
    position: absolute;
   top: 100%;
   left: 2rem;
   border-width: 1rem;
   border-style: solid;
   border-color: var(--background-dark-color-2) transparent transparent  var(--background-dark-color-2);
}
&:hover{
   transform: translateY(-15px);
    border-left: .3rem var(--primery-color) solid; 
    transition: all .2s ease-in-out;
}
`
export default ReviewItem
