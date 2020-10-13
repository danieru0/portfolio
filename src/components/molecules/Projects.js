import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../../assets/swiperScrollbar.css';

import t from '../../helpers/t';

import Project from '../atoms/Project';

import VideoPlayerImg from '../../img/video-player.png';
import VideoV2Img from '../../img/video-v2.png';
import KoreanPracticeImg from '../../img/korean-practice.png';
import NotesImg from '../../img/notes.png';
import ChatV2Img from '../../img/chat-v2.png';

SwiperCore.use([Scrollbar, Mousewheel]);

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
    transition: opacity .3s, transform .3s, visibility .3s;

    ${({active, index, prevIndex}) => active || (
        index > prevIndex ? (
            css`
                opacity: 0;
                visibility: hidden;
                transform: translateY(60px);
            `
        ) : (
            css`
                opacity: 0;
                visibility: hidden;
                transform: translateY(-60px);
            `
        )
    )}
`

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 100%;
`

const Projects = ({active, index, prevIndex}) => {
    return (
        <Container active={active} index={index} prevIndex={prevIndex}>
            <StyledSwiper
                slidesPerView={4}
                direction="vertical"
                mousewheel={true}
                scrollbar={{draggable: true}}
                spaceBetween={10}
            >
                <SwiperSlide>
                    <Project title="video-player" description={t('projects')['video-player']} technologies={['react', 'redux', 'typescript', 'node.js']} img={VideoPlayerImg} href="https://github.com/elosiktv/video-editor"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="video-v2" description={t('projects')['video-v2']} technologies={['react', 'redux', 'node.js', 'graphql', 'mongodb']} img={VideoV2Img} href="https://github.com/elosiktv/video-v2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="korean-practice" description={t('projects')['korean-practice']} technologies={['react', 'redux', 'firebase']} img={KoreanPracticeImg} href="https://github.com/elosiktv/korean-practice"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="notes" description={t('projects')['notes']} technologies={['react', 'redux', 'firebase']} img={NotesImg} href="https://github.com/elosiktv/notes"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="chat-v2" description={t('projects')['chat-v2']} technologies={['react', 'redux', 'node.js', 'mongodb', 'socket.io']} img={ChatV2Img} href="https://github.com/elosiktv/chat-v2"/>
                </SwiperSlide>
            </StyledSwiper>
        </Container>
    );
};

Projects.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    prevActive: PropTypes.number.isRequired
}

export default Projects;