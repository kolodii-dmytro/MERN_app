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
            submit({...values, _id});

        }}

        render ={({ errors, status, touched, isSubmitting }) => (
            <Form className={'editPostForm'}>
            <div>Edit post</div> 
                <Field type="text" name="title" />
                <ErrorMessage name="title"/>
                <Field type="textarea" name="text" />
                <button type="submit" disabled={isSubmitting}>
                Save
              </button>
              <button onClick = {cancel}>
                Cancel 
              </button>
            </Form>
          )}
        />)

}