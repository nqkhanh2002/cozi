import { extendTheme } from '@chakra-ui/react';
import "@fontsource/lora";

export default extendTheme({
    colors: {
        airmailBlue: '#2D4263',
        airmailRed: '#C84B31',
    },
    fonts: {
        heading: 'Lora',
    },
    components: {
        Button: {
            variants: {
                'filled': {
                    w: '128px',
                    bg: 'blue.700',
                    color: 'white',
                    _hover: {
                        bg: 'blue.600',
                    }
                },
            },
        }
    }
})