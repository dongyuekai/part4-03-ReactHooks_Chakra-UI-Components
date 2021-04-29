// 样式组合
import React from 'react'
import { css } from '@emotion/react'

const base = css`
  background:tomato;
  color: white;
`;
const danger = css`
  color:red;
  background: black;
`;

function App() {
  return (
    <div>
      <div css={[danger, base]}>123</div>
    </div>
  )
}
export default App