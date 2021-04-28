import React from 'react'
import { Formik, useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      username: 'zhangsan',
      password: '123456',
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <input type='text' name='username' value={formik.values.username} onChange={formik.handleChange} />
      <input type='text' name='password' value={formik.values.password} onChange={formik.handleChange} />
      <input type='submit' />
    </form>
  );
}

export default App;
