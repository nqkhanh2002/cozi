import Envelope from '../components/envelope';
import {
    Flex,
  } from '@chakra-ui/react';

export default function WorldMailbox() {
    return (
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
    )
}

const styles = {
    worldMailbox: {
      bg: 'gray.50',
      py: 8,
      flex: 1,
      flexFlow: 'wrap',
      justifyContent: 'space-around',
    }
  }
  