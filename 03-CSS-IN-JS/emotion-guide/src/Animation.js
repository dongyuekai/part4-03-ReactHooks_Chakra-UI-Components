import React from 'react'
import { css, keyframes } from '@emotion/react'

const move = keyframes`
  0% {
    background: skyblue;
    left:0;
    top: 0;
  }
  100% {
    top: 300px;
    left: 600px;
    background: gray;
  }
`
const box = css`
  width: 100px;
  height: 100px;
  position: absolute;
  animation: ${move} 2s ease infinate alternate;
`
export default function App() {
  return (
    <div css={box}>
      App dsfsdf
    </div>
  )
}