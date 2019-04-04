import React, { useState, Fragment } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Icon from 'app_common/Icon';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { thunkActionLogin as submitLoginForm, thunkActionLogin } from 'app_actions/user'
import { openLoginForm, closeLoginForm } from 'app_actions/app';
import Modal from 'app_common/Modal'
import styles from './LoginForm.css';


const LoginForm = (props) => {

    const { user,
        submitLoginForm,
        closeLoginForm,
        isLoginFormOpened
    } = props
    const { id, loading, errors } = user
    const isErrors = !!errors.length

    const checkFields = (data) => {
        const {login, password} = data;

    }
    const SignInSchema = Yup.object().shape({
        login: Yup.string()
          .min(3, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
        password: Yup.string()
            .min(3, 'Too Short!')
          .max(70, 'Too Long!')
          .required('Required'),
      });
    

    const RenderForm = () =>(
        <Formik
        initialValues={{login: '', password:''}}
        validationSchema={SignInSchema}
        onSubmit = {(values, actions) => {
            console.log(values)
            submitLoginForm(values);


            
        }}
        // onSubmit={(values, actions) => {
        //   MyImaginaryRestApiCall(user.id, values).then(
        //     updatedUser => {
        //       actions.setSubmitting(false);
        //       updateUser(updatedUser);
        //       onClose();
        //     },
        //     error => {
        //       actions.setSubmitting(false);
        //       actions.setErrors(transformMyRestApiErrorsToAnObject(error));
        //       actions.setStatus({ msg: 'Set some arbitrary status or data' });
        //     }
        //   );
        // }}
        render ={({ errors, status, touched, isSubmitting }) => (
            <Form className={'loginForm'}>
            <div>Login form</div> 
                <Field type="text" name="login" />
                <ErrorMessage name="login"/>
                <Field type="password" name="password" />
                <button type="submit" disabled={isSubmitting}>
                <Icon iconName={"fas fa-sign-in-alt"}/>Submit
              </button>
            </Form>
          )}
        />
    ) 

    
   

    return (<Modal 
        isOpened = {isLoginFormOpened}
        onClose = {closeLoginForm}
        >
        {
            loading 
            ? <div>data loading</div>
            // : <div>here is the form</div>
            :<RenderForm />
        }
    </Modal>)
}

const mapStateToProps = state => ({
    user: state.user,
    isLoginFormOpened: state.app.isLoginFormOpened
})

const mapDispatchToProps = dispatch => bindActionCreators({
    submitLoginForm,
    openLoginForm,
    closeLoginForm, 
    thunkActionLogin
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)


    // const RenderErrors = () => isErrors ? (<ul>
    //     {
    //         errors.map((item, index) => (<li key={index}>Error: {item}</li>))
    //     }
    // </ul>) : null


    // const RenderForm = () => 

    // { return (<div key={'loginForm'} className={'loginForm'}>
    //     <span>Login form</span> <br />
    //     <input
    //         key = {'login'}
    //         type={'text'}
    //         name={'login'}
    //         ref={ el =>login = el } 
    //     />
    //     <input
    //         key = {'password'}
    //         type={'text'}
    //         name={'password'}

    //         ref={ el =>password = el } 
    //     />
    //     <button onClick={submitForm}>Login</button> <br />
    //     <RenderErrors />
    // </div>)}
    // const submitForm = e => submitLoginForm({ login:login.value, password:password.value })