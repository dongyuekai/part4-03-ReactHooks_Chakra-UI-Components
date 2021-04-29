import React from 'react'
import { css } from '@emotion/react'

// 调用方式1 推荐
const style = css`
  width: 100px;
  height: 200px;
  background: skyblue;
`
// 调用方式2
const style2 = css({
  width: 100,
  height: 200,
  background: 'yellow'
})

function App() {
  return (
    // <div css={style}>App dsfds</div>
    <div css={style2}>sfsdf</div>
  );
}

export default App;
