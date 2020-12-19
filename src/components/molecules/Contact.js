import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';
import {NotificationManager} from 'react-notifications';
import { useTranslation } from 'react-i18next';

import useHover from '../../hooks/useHover';
import withHover from '../../hoc/withHover';

import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';
import Spinner from '../atoms/Spinner';
import SectionTitle from '../atoms/SectionTitle';

const ButtonWithHover = withHover(Button);
const InputWithHover = withHover(Input);

emailjs.init('user_1DsEz9qOuFoZmSe2wAUp0');

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('required'),
    email: Yup.string().email('email-error').required('required'),
    message: Yup.string().required('required')
})


const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
    transition: opacity .3s, transform .3s, visibility .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1190px) {
        position: relative;
        opacity: 1;
        visibility: visible;
        height: 500px;
        margin-top: 80px;
        transform: translateY(0px);
        justify-content: center;
        align-items: center;
	}

    @media (max-width: 820px) {
        justify-content: center;
        align-items: flex-start;
    }

    @media (max-width: 540px) {
        align-items: center;
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

const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 600px;
    position: relative;

    @media (max-width: 1305px) {
        width: 560px;
    }

    @media (max-width: 1190px) {
        width: 600px;
    }

    @media (max-width: 680px) {
        width: 100%;
    }
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;

    @media (max-width: 680px) {
        flex-direction: column;
        height: 110px;
    }
`

const SubmittedOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0,0,0,0.3);
    z-index: 9;
    display: ${({submitted}) => submitted ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`

const Contact = ({active, index, prevIndex}) => {
    const { t } = useTranslation();
    const [style, setStyle] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const { handleMouseEnter, handleMouseLeave } = useHover(style);
    
    useEffect(() => {
        if (style) {
            handleMouseEnter(style);
        }
    }, [style]); //eslint-disable-line

    const handleMouseHover = () => {
        setStyle(`transform: scale(1.5) translate(-50%, -50%)`);
    }

    const handleLeave = () => {
        setStyle(null);
        handleMouseLeave();
    }

    return (
        <Container active={active} index={index} prevIndex={prevIndex}>
            <SectionTitle>{t('nav.contact')}</SectionTitle>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={(values) => {
                    if (!submitted) {
                        setSubmitted(true);
                        emailjs.send('1', 'template_smzehvr', values).then(() => {
                            setSubmitted(false);
                            NotificationManager.success(t('contact.success-msg'), t('contact.success-title'));
                        }).catch((err) => {
                            setSubmitted(false);
                            NotificationManager.error(t('contact.error-msg'), t('contact.error-title'));
                            console.log(err);
                        })
                    }
                }}
            >
                {({values, errors, handleChange}) => (
                    <StyledForm>
                        <SubmittedOverlay submitted={submitted}>
                            <Spinner />
                        </SubmittedOverlay>
                        <Wrapper>    
                            <InputWithHover onMouseEnter={handleMouseHover} onMouseLeave={handleLeave} error={errors.name} onChange={handleChange} value={values.name} name="name" placeholder={t("contact.name")} />
                            <InputWithHover onMouseEnter={handleMouseHover} onMouseLeave={handleLeave} error={errors.email} onChange={handleChange} value={values.email} name="email" placeholder={t("contact.email")} />
                        </Wrapper>
                        <TextArea onMouseEnter={handleMouseHover} onMouseLeave={handleLeave} error={errors.message} onChange={handleChange} value={values.message} name="message" placeholder={t("contact.message")} />
                        <ButtonWithHover onMouseEnter={handleMouseHover} onMouseLeave={handleLeave} type="submit">{t("contact.submit")}</ButtonWithHover>
                    </StyledForm>
                )}
            </Formik>
        </Container>
    );
};

Contact.propTypes = {
    active: PropTypes.bool.isRequired,
    index: PropTypes.number.isRequired,
    prevIndex: PropTypes.number.isRequired
}

export default Contact;