import React from 'react';
import {
  ChakraProvider,
  Flex,
} from '@chakra-ui/react';
import theme from './theme/theme';
import Layout from './components/layout'
import Envelope from './components/envelope';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Flex sx={styles.worldMailbox}>
          <Envelope
            date='22/05/2021'
            from='Ẩn danh'
            tittle='Nỗi cô đơn trong những ngày dãn cách xã hội'
            to='Thế giới'
          />
          <Envelope
            date='22/05/2021'
            from='Ẩn danh'
            tittle='Nỗi cô đơn trong những ngày dãn cách'
            to='Thế giới'
          />
                    <Envelope
            date='22/05/2021'
            from='Ẩn danh'
            tittle='Nỗi cô đơn trong những ngày dãn cách xã hội'
            to='Thế giới'
          />
          <Envelope
            date='22/05/2021'
            from='Ẩn danh'
            tittle='Nỗi cô đơn trong những ngày dãn cách'
            to='Thế giới'
          />
        </Flex>
      </Layout>
    </ChakraProvider>
  );
}

const styles = {
  worldMailbox: {
    bg: 'gray.50',
    p: 4,
    flex: 1,
    flexFlow: 'wrap',
    justifyContent: 'space-around',
  }
}

export default App;
