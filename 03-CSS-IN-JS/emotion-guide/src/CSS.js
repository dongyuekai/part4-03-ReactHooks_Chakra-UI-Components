import React from 'react'
import { css } from '@emotion/react'

// 调用方式1 推荐
const style = css`
  width: 100px;
  height: 200px;
  background: skyblue;
`

function CSS(props) {
  return (
    <div css={style} {...props}>sfsdf</div>
  );
}

export default CSS;