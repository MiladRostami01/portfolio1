import React from 'react'
import styled from 'styled-components';

const ProgressBar = ({ title, width }) => {
    return (
        <ProgressBarStyle>
            <h6>{title}</h6>
            <div className='progressbar'>
                <span>{width}</span>
                <div className='progress'>
                    <div style={{ width: width }}></div>
                </div>
            </div>
        </ProgressBarStyle>
    )
}
const ProgressBarStyle = styled.div`
display: flex;
/* align-items: center; */
flex-direction: column;
width: 100%;
h6{
    color: var(--white-color);
    padding-bottom: .7rem;
    
}
.progressbar{
    display: flex;
    align-items: center;
    span{
        padding-right: .5rem;
        font-size: .6rem;
    }
    .progress{
        width: 100%;
        height: .4rem;
        position: relative;
        background-color: var(--border-color);
        display: flex;
        border-radius: 5px;
        div{
            position: absolute;
            left: 0;
            bottom: -1px;
            height: 130%;
            background-color: var(--primery-color);
            border-radius: 5px;
         }
    }
}
`

export default ProgressBar
