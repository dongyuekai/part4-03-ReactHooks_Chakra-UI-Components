import React from 'react'
import { Formik, useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      username: 'zhangsan',
      password: '12345',
    },
    validate: values => {
      const errors = {
      }
      if (!values.username) {
        errors.username = '请输入用户名'
      } else if (values.username.length > 8) {
        errors.username = '用户名长度不能大于8'
      }
      if (values.password.length < 6) {
        errors.password = '密码长度不能小于6'
      }
      return errors
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type='text'
        name='username'
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <p style={{ color: 'red' }}>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</p>
      <input
        type='text'
        name='password'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      <p style={{ color: 'red' }}>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
      <input type='submit' />
    </form>
  );
}

export default App;
