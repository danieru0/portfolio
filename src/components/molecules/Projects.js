import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import SwiperCore, { Scrollbar, Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import '../../assets/swiperScrollbar.css';
import { useTranslation } from 'react-i18next';

import Project from '../atoms/Project';
import SectionTitle from '../atoms/SectionTitle';

import VideoPlayerImg from '../../img/video-player.png';
import VideoV2Img from '../../img/video-v2.png';
import KoreanPracticeImg from '../../img/korean-practice.png';
import NotesImg from '../../img/notes.png';
import ChatV2Img from '../../img/chat-v2.png';
import WindowsImg from '../../img/windowsapp.jpg';
import GlobalImg from '../../img/global.png';
import VocupracticeImg from '../../img/vocupractice.png';
import WatchtogetherImg from '../../img/watchtogether.png';

SwiperCore.use([Scrollbar, Mousewheel]);

const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
    transition: opacity .3s, transform .3s, visibility .3s;

    @media (max-width: 1190px) {
        position: relative;
        opacity: 1;
        visibility: visible;
        height: 760px;
        margin-top: 40px;
        transform: translateY(0px);
        display: flex;
        flex-direction: column;
        align-items: center;
	}

    @media (max-width: 820px) {
        align-items: flex-start;
    }

    @media (max-width: 540px) {
        align-items: center;
    }

    @media (max-width: 600px) {
        height: 400px;
    }
    
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
    height: 700px;

    @media (max-width: 1190px) {
        width: 90%;
        height: 700px !important;
    }

    @media (max-width: 820px) {
        margin: 0;
        width: 100%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }

    @media (max-height: 840px) {
        height: 600px;
    }

    @media (max-height: 740px) {
        height: 100%;
    }
`

const Projects = ({active, index, prevIndex}) => {
    const { t } = useTranslation();

    return (
        <Container active={active} index={index} prevIndex={prevIndex}>
            <SectionTitle>{t('nav.projects')}</SectionTitle>
            <StyledSwiper
                slidesPerView={2}
                direction="horizontal"
                mousewheel={true}
                scrollbar={{draggable: true}}
                spaceBetween={10}
                touchStartPreventDefault={false}
                resistanceRatio={0.5}
                breakpoints={{
                    601: {
                        direction: "vertical",
                        slidesPerView: 4,
                    }
                }}
            >
                <SwiperSlide>
                    <Project title="watch-together" description={t('projects.watch-together')} technologies={['react', 'redux', 'typescript', 'node.js', 'socket.io']} img={WatchtogetherImg} href="https://github.com/elosiktv/watch-together"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="video-editor" description={t('projects.video-editor')} technologies={['react', 'redux', 'typescript', 'node.js']} img={VideoPlayerImg} href="https://github.com/elosiktv/video-editor"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="vocupractice" description={t('projects.vocupractice')} technologies={['react', 'redux', 'typescript']} img={VocupracticeImg} href="https://github.com/elosiktv/vocupractice"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="video-v2" description={t('projects.video-v2')} technologies={['react', 'redux', 'node.js', 'graphql', 'mongodb']} img={VideoV2Img} href="https://github.com/elosiktv/video-v2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="korean-practice" description={t('projects.korean-practice')} technologies={['react', 'redux', 'firebase']} img={KoreanPracticeImg} href="https://github.com/elosiktv/korean-practice"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="notes" description={t('projects.notes')} technologies={['react', 'redux', 'firebase']} img={NotesImg} href="https://github.com/elosiktv/notes"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="chat-v2" description={t('projects.chat-v2')} technologies={['react', 'redux', 'node.js', 'mongodb', 'socket.io']} img={ChatV2Img} href="https://github.com/elosiktv/chat-v2"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="windows" description={t('projects.windows')} technologies={['react', 'redux']} img={WindowsImg} href="https://github.com/elosiktv/windows"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Project title="global" description={t('projects.global')} technologies={['html', 'scss', 'javascript', 'gulp']} img={GlobalImg} href="https://github.com/elosiktv/global"/>
                </SwiperSlide>
            </StyledSwiper>
        </Container>
    );
};

Projects.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    prevIndex: PropTypes.number.isRequired
}

export default Projects;