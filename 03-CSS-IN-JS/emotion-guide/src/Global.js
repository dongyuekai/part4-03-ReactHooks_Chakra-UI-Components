import React from 'react'
import { css, Global } from '@emotion/react'

const styles = css`
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
    color: red;
  }
`
export default function App() {
  return (
    <div>
      <Global styles={styles} />
      <a href='#'>我是a标记</a>
    </div>
  )
}