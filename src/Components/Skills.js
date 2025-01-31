import React from 'react'
import SkillData from '../Data/SkilsData'
import styled from 'styled-components';
import ProgressBar from '../Components/ProgressBar'
import Title from './Title';
import { InnerLayout } from '../Styles/MainLayout';


const Skills = () => {
    return (
        <SkillesStyle>
            <Title title="My Skills" span="My Skills" />
            <InnerLayout>
            <div className='skills'>
                {
                    SkillData.map(skill => { return <ProgressBar title={skill.title} width={skill.width} /> })
                }
            </div>
            </InnerLayout>
        </SkillesStyle>
    )
}
const SkillesStyle = styled.div`
.skills{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 3rem;
}
`
export default Skills
