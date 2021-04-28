import React from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues: {
      username: 'zhangsan',
      password: '',
    },
    // validate: values => {
    //   const errors = {
    //   }
    //   if (!values.username) {
    //     errors.username = '请输入用户名'
    //   } else if (values.username.length > 8) {
    //     errors.username = '用户名长度不能大于8'
    //   }
    //   if (values.password.length < 6) {
    //     errors.password = '密码长度不能小于6'
    //   }
    //   return errors
    // },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(15, '用户名的长度不能大于15')
        .required('用户名不能为空'),
      password: Yup.string()
        .min(6, '用户名的长度不能小于6')
        .required('密码不能为空'),
    }),
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type='text'
        name='username'
        // value={formik.values.username}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps('username')}
      />
      <p style={{ color: 'red' }}>{formik.touched.username && formik.errors.username ? formik.errors.username : null}</p>
      <input
        type='text'
        name='password'
        // value={formik.values.password}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
        {...formik.getFieldProps('password')}
      />
      <p style={{ color: 'red' }}>{formik.touched.password && formik.errors.password ? formik.errors.password : null}</p>
      <input type='submit' />
    </form>
  );
}

export default App;
