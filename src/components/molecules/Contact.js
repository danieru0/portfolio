import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import * as emailjs from 'emailjs-com';

import t from '../../helpers/t';

import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import Button from '../atoms/Button';

emailjs.init('user_1DsEz9qOuFoZmSe2wAUp0');

const ContactSchema = Yup.object().shape({
    name: Yup.string().required('required'),
    email: Yup.string().email('email.error').required('required'),
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
`

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 30px;
`

const Contact = ({active, index, prevIndex}) => {
    return (
        <Container active={active} index={index} prevIndex={prevIndex}>
            <Formik
                initialValues={{ name: '', email: '', message: '' }}
                validationSchema={ContactSchema}
                onSubmit={(values) => {
                    emailjs.send('1', 'template_smzehvr', values).then((result) => {
                        
                    }).catch((err) => {
                        console.log(err);
                    })
                }}
            >
                {({values, errors, handleChange}) => (
                    <StyledForm>
                        <Wrapper>    
                            <Input error={errors.name} onChange={handleChange} value={values.name} name="name" placeholder={t("contact")["name"]} />
                            <Input error={errors.email} onChange={handleChange} value={values.email} name="email" placeholder={t("contact")["email"]} />
                        </Wrapper>
                        <TextArea error={errors.message} onChange={handleChange} value={values.message} name="message" placeholder={t("contact")["message"]} />
                        <Button type="submit">{t("contact")["submit"]}</Button>
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