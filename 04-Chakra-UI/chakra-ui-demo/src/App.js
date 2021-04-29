import { Button, Box, useColorMode, Text, useColorModeValue, LightMode, DarkMode } from '@chakra-ui/react'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  const bgColor = useColorModeValue('tomato', 'skyblue')
  return (
    // <Box w='200px' h='100px' bgColor={colorMode === 'dark' ? 'tomato' : 'skyblue'}>
    <Box w='200px' h='100px' bgColor={bgColor}>
      <Text>当前颜色模式为{colorMode}</Text>
      <LightMode>
        <Button onClick={toggleColorMode}>按钮</Button>
      </LightMode>
    </Box>
  );
}

export default App;
