import React from 'react'
import styled from 'styled-components'
import { InnerLayout, MainLayout } from '../Styles/MainLayout'
import Title from '../Components/Title.js'
import ImageSection from '../Components/ImageSection'
import ServicesSection from '../Components/ServicesSection'
import ReviewsSection from '../Components/ReviewsSection'

const About = () => {
    return (
        <MainLayout>
            <AboutStyle>
                <ImageSection />
                <ServicesSection />
                <ReviewsSection />
            </AboutStyle>
        </MainLayout>
    )
}
const AboutStyle = styled.section`


`
export default About
