import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

export default function editPostForm (props) {
    const {cancel, submit, title='', text='', _id} = props
    
    const createPostSchema = Yup.object().shape({
        title: Yup.string()
          .min(3, 'Too Short!')
          .required('Required'),
        text: Yup.string()
            .min(3, 'Too Short!')
          .required('Required'),
      });
    
    
    return (<Formik
        initialValues={{title: title, text:text}}
        validationSchema={createPostSchema}
        onSubmit = {(values, actions) => {
          cancel();
            submit({...values, _id});
            

        }}

        render ={({ errors, status, touched, isSubmitting }) => (
            <Form className={'editPostForm'}> 
            <p className='title'>
                 &nbsp;<Field type="text" name="title" />
                
                <ErrorMessage name="title"/>
                </p>
                <p className='text'>
                <Field component='textarea' name="text" />
                </p>
                <p className = 'buttonBlock'>
                <button type="submit" disabled={isSubmitting}>
                Save
              </button>
              <button onClick = {cancel}>
                Cancel 
              </button>
              </p>
            </Form>
          )}
        />)

}