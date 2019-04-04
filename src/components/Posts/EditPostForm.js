import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";

export default function editPostForm (props) {
    const {submit, title='', text=''} = props
    
    const createPostSchema = Yup.object().shape({
        title: Yup.string()
          .min(3, 'Too Short!')
          .required('Required'),
        text: Yup.string()
            .min(3, 'Too Short!')
          .required('Required'),
      });
    
    
    return (<Formik
        initialValues={{title: '', text:''}}
        validationSchema={createPostSchema}
        onSubmit = {(values, actions) => {
            submit(values);

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
            </Form>
          )}
        />)

}