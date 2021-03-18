import React from 'react';
import { StyledContainer, StyledFormArea, StyledFormButton, colors, ExtraText, TextLink, CopyrightText } from './style.js';
import Logo from '../../images/logo.png';
import { Avatar, Styledtitle } from '../RegisterUser/style';
import { ButtonGroup } from '@material-ui/core';
import { TextInput } from '../FormLib/FormLib'
//import formik
import { Formik, Form } from 'formik';
//signin loading
import Loader from 'react-loader-spinner';

//icons
import { FiMail, FiLock, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';

//auth and redux
import { connect } from "react-redux";
import { signUpMyUser } from '../../auth/actions/userActions';
import { useHistory } from 'react-router-dom';


function SignUpUser({ signUpMyUser }) {
  const history = useHistory();

  return (
    <div >
      <StyledContainer style={{ position: 'relative' }}>
        <StyledFormArea style={{ backgroundColor: "#E3D0FF" }}>
          <Avatar image={Logo} style={{ width: '80px', height: '80px' }} />
          <Styledtitle size={30} color={colors.theme}>
            Sign up
     </Styledtitle>
          <Formik
            initialValues={{
              email: '',
              password: '',
              repeatPassword: '',
              name: ''
            }}

            validationSchema={
              Yup.object({
                email: Yup.string().email('Invalid email adrress').required('Required'),
                password: Yup.string().min(8, 'Password is too short').max(30, 'Password is too long').required('Required'),
                name: Yup.string().required('Required'),
                repeatPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), 'Password must match!'])
              })
            }
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              console.log(values)
              signUpMyUser(values, history, setFieldError, setSubmitting);
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <TextInput
                  name='name'
                  type='text'
                  label='Full Name'
                  placeholder='Joe Smith'
                  icon={<FiUser />}
                />

                <TextInput
                  name='email'
                  type='text'
                  label='Email address'
                  placeholder='abc@gmail.com'
                  icon={<FiMail />}
                />

                <TextInput
                  name='password'
                  type='password'
                  label='Password'
                  placeholder='********'
                  icon={<FiLock />}
                />
                <br></br>

                <TextInput
                  name='repeatPassword'
                  type='password'
                  label='Repeat Password'
                  placeholder='********'
                  icon={<FiLock />}
                />
                <br></br>

                <ButtonGroup>
                  {!isSubmitting && <StyledFormButton type='submit'>
                    Sign Up
         </StyledFormButton>}

                  {/* add login button loader */}
                  {isSubmitting && (
                    <Loader
                      type='ThreeDots'
                      color={colors.theme}
                      height={49}
                      width={100} />
                  )}
                </ButtonGroup>
              </Form>
            )}
          </Formik>


          {/* signup link */}
          <br></br>
          <ExtraText>
            Already has an account ?
      <TextLink to='/auth'
            >  Login
       </TextLink>
          </ExtraText>
          <br></br><br></br>
          <CopyrightText>
            All rights reserved &copy;2021
    </CopyrightText>
        </StyledFormArea>
      </StyledContainer>
    </div>
  )
}


export default connect(null, { signUpMyUser })(SignUpUser);