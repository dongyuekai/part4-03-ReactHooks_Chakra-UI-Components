import React from 'react'
import { css, useTheme } from '@emotion/react'

const primaryColor = props => css`
  color: ${props.colors.primary}
`

function Theme() {
  // 用useTheme也可以获取到属性值
  console.log(useTheme())
  return (
    <div css={primaryColor}>
      App Theme
    </div>
  )
}

export default Theme