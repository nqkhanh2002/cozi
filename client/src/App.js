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
    flex: 1,
    flexFlow: 'wrap',
    justifyContent: 'space-between',
  }
}

export default App;
