import React from 'react'
import { Formik, Form, Field, ErrorMessage, useField } from 'formik'
import * as Yup from 'yup'

// 自定义表单控件Input输入框
function MyInput({ label, ...props }) {
  const [field, meta] = useField(props)
  // console.log('field--', field)
  // console.log('meta--', meta)
  return (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? <span>{meta.error}</span> : null}
    </div>
  )
}

function Checkbox({ label, ...props }) {
  const [field, meta, helper] = useField(props);
  const { value } = meta;
  const { setValue } = helper;
  const handleChange = () => {
    const set = new Set(value);
    if (set.has(props.value)) {
      set.delete(props.value);
    } else {
      set.add(props.value);
    }
    setValue([...set])
  }
  console.log('value---', value)
  console.log('props.value---', props.value)
  return <div>
    <label htmlFor="">
      <input checked={value.includes(props.value)} type="checkbox" {...props} onChange={handleChange} /> {label}
    </label>
  </div>
}

function App2() {
  const initialValues = { username: '', hobbies: ['足球', '橄榄球'] };
  const handleSubmit = values => {
    console.log('提交数据----', values)
  }
  const schema = Yup.object({
    username: Yup.string()
      .max(15, '用户名的长度不能大于15')
      .required('请输入用户名'),
    password: Yup.string()
      .min(6, '密码长度不能小于6')
      .required('请输入密码'),
  })
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    // validationSchema={schema}
    >
      <Form>
        {/* 用户名<Field name='username' /> */}
        {/* <ErrorMessage name='username' /> */}
        {/* 自定义表单控件 */}
        {/* <MyInput id='myInput' label='密码' name='password' type='password' placeholder='请输入密码' /> */}
        {/* <Field as='textarea' name='content' />
        <Field as='select' name='subject'>
          <option value='前端'>前端</option>
          <option value='java'>java</option>
        </Field> */}

        <Checkbox value="足球" label="足球" name="hobbies" />
        <Checkbox value="篮球" label="篮球" name="hobbies" />
        <Checkbox value="橄榄球" label="橄榄球" name="hobbies" />

        <input type='submit' />
      </Form>
    </Formik>
  );
}

export default App2;
