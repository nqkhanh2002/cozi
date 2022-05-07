import {
    Button
} from '@chakra-ui/react'

export default function BtnCompose() {
    return (
        <Button sx={styles.btnCompose}>
            Compose
        </Button> 
    )
}

const styles = {
    btnCompose: {
        position: 'absolute',
        bottom: 72,
        right: 8,
        w: '96px',
        mb: 4,
        bg: 'airmailBlue',
        color: 'white',
        _hover: {
            color: 'black',
            bg: 'none',
            border: '2px solid',
            borderColor: 'airmailBlue',
        }
    }
}