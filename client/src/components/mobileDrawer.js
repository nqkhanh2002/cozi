import React from 'react';
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { FaBars } from 'react-icons/fa';
import Menu from './menu'

export default function MobileDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button
                ref={btnRef}
                onClick={onOpen}
                aria-label='Mobile Drawer'
                sx={styles.btnMenu}
            >
                <FaBars />
            </Button>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent sx={styles.content}>
                    <DrawerCloseButton />

                    <DrawerBody>
                        <Menu />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}

const styles = {
    btnMenu: {
        bg: 'none',
        display: {
            base: 'block',
            lg: 'none',
        },
        ml: 2,
        _hover: {
            bg: 'none',
        }
    },
    content: {
        pt: 24,
        pl: 4,
    }
}