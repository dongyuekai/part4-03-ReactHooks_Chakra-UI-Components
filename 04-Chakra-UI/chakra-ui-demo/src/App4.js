import React from 'react'
import { chakra } from '@chakra-ui/react'

const LaGouButton = chakra('button', {
  themeKey: 'LaGouButton'
})

export default function App4() {
  return (
    <div>
      <LaGouButton size="md" variant="danger">我是按钮</LaGouButton>
    </div>
  )
}
