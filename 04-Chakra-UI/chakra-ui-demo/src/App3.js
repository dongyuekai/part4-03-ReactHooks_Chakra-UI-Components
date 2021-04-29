import React from 'react'
import { chakra } from '@chakra-ui/react'

const MyButton = chakra('button', {
  baseStyle: {
    borderRadius: 'lg'
  },
  sizes: {
    sm: {
      px: '3',
      py: '1',
      fontSize: '12px'
    },
    md: {
      px: '4',
      py: '2',
      fontSize: '14px'
    }
  },
  variants: {
    primary: {
      bgColor: 'blue.500',
      color: 'white'
    },
    danger: {
      bgColor: 'red.500',
      color: 'white'
    }
  },
})

MyButton.defaultProps = {
  size: 'sm',
  variant: 'primary'
}

function App() {
  return (
    <MyButton>按钮</MyButton>
  )
}
export default App