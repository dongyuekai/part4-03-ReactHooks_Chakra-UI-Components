import { Button, Box, useColorMode, Text } from '@chakra-ui/react'

function App() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box w='200px' h='100px' bgColor={colorMode === 'dark' ? 'tomato' : 'skyblue'}>
      <Text>当前颜色模式为{colorMode}</Text>
      <Button onClick={toggleColorMode}>按钮</Button>
    </Box>
  );
}

export default App;
