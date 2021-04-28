import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function App2() {
  const initialValues = { username: '' }
  const handleSubmit = values => {
    console.log(values)
  }
  const schema = Yup.object({
    username: Yup.string()
      .max(15, '用户名的长度不能大于15')
      .required('请输入用户名')
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <Field name='username' />
        <ErrorMessage name='username' />
        <input type='submit' />
      </Form>
    </Formik>
  );
}

export default App2;
