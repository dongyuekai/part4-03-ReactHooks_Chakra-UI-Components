import React, { useState, useEffect } from 'react'
import axios from 'axios'

// 自定义hook usexxx
// function useGetPost() {
//   const [post, setPost] = useState({})
//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts/1').then(response => setPost(response.data))
//   }, [])
//   return [post, setPost]
// }

// function _SelfHook() {
//   const [post, setPost] = useGetPost()
//   return (
//     <div>
//       <div>{post.title}</div>
//       <div>{post.body}</div>
//     </div>
//   )
// }

// 自定义表单属性的hook
function useUpdateInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

function _SelfHook() {

  // 调用自定义的hook
  const usernameInput = useUpdateInput('')
  const passwordInput = useUpdateInput('')

  const submitForm = event => {
    event.preventDefault();
    console.log(usernameInput.value)
    console.log(passwordInput.value)
  }
  return (
    <form onSubmit={submitForm}>
      <input type='text' name='username' {...usernameInput} />
      <input type='password' name='password' {...passwordInput} />
      <input type='submit' />
    </form>
  )

}


export default _SelfHook