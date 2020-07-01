import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormInput from '../../components/form-input/form-input';
import Button from '../../components/button/button';
import Spinner from '../../components/spinner/spinner';
import {
  selectIsSendingForm,
  selectFormError,
  selectFormWasSent,
} from '../../redux/form/form.selectors';
import { startSendForm } from '../../redux/form/form.actions';
import { ContactPage as S } from './contact-page.styled';

const ContactPage = () => {
  const [contactInformation, setContactInformation] = useState({
    name: '',
    email: '',
    description: '',
  });
  const isSendingForm = useSelector(selectIsSendingForm);
  const formError = useSelector(selectFormError);
  const formWasSent = useSelector(selectFormWasSent);
  const dispatch = useDispatch();

  const { name, email, description } = contactInformation;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(startSendForm({ name, email, description }));
    setContactInformation({ name: '', email: '', description: '' });
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setContactInformation({ ...contactInformation, [name]: value });
  };

  return (
    <div>
      {formWasSent ? (
        <S.MessageContainer>
          <S.Message>Message sent</S.Message>
          <S.Message>We will get back to you soon</S.Message>
        </S.MessageContainer>
      ) : (
        <S.Container>
          {isSendingForm ? (
            <Spinner />
          ) : (
            <S.FormContainer>
              <S.Title>Need to contact us?</S.Title>
              <span>Please use the form below</span>
              <S.Error>
                {formError ? 'Something went wrong, please try again' : null}
              </S.Error>

              <form onSubmit={handleOnSubmit}>
                <FormInput
                  name='name'
                  type='text'
                  value={name}
                  onChange={handleOnChange}
                  label='Name'
                  required
                />
                <FormInput
                  name='email'
                  type='email'
                  value={email}
                  onChange={handleOnChange}
                  label='Email'
                  required
                />
                <FormInput
                  as='textarea'
                  name='description'
                  type='text'
                  value={description}
                  onChange={handleOnChange}
                  rows='5'
                  label='Description'
                  required
                />

                <Button type='submit'> SEND </Button>
              </form>
            </S.FormContainer>
          )}
        </S.Container>
      )}
    </div>
  );
};

export default ContactPage;
