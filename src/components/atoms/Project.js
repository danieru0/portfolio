import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.a`
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.colors.bgsecondary};
    display: flex;
    cursor: none;
    user-select: none;
    color: ${({theme}) => theme.colors.secondary};
    text-decoration: none;
    overflow: hidden;
`

const Details = styled.div`
    width: 55%;
    display: flex;
    flex-direction: column;
    padding: 15px 30px;

    @media (max-width: 1410px) {
        width: 100%;
    }
`

const Image = styled.div`
    width: 45%;
    background-image: ${({img}) => `url(${img})`};
    background-size: cover;

    @media (max-width: 1410px) {
        display: none;
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin-top: -3px;

`

const Technologies = styled.span`
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 1px;
    margin: 3px 3px 0 0;
    font-family: ${({theme}) => theme.fonts.secondary};
    font-weight: bold;

    &:first-of-type {
        margin-left: 0px;
    }
`

const Title = styled.span`
    font-size: 30px;
    text-transform: uppercase;
    margin: 10px 0px 0px 0px;
    font-family: ${({theme}) => theme.fonts.primary};

    @media (max-height: 850px) {
        margin: 0;
    }
`

const Description = styled.span`
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.secondary};
    font-size: 14px;
`

const Project = ({technologies, title, description, img, href}) => {
    return (
        <Container href={href} img={img} target="_blank">
            <Details>
                <Wrapper>
                    {
                        technologies.map((item, key) => {
                            return (
                                <Technologies key={key}>{item}</Technologies>
                            )
                        })
                    }
                </Wrapper>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Details>
            <Image img={img} />
        </Container>
    );
};

Project.propTypes = {
    technologies: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Project;