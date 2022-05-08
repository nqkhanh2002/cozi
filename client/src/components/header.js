import React from 'react';
import {
    Flex,
    Link,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
} from '@chakra-ui/react';
import logo from '../images/wda-logo.png';
import MobileDrawer from './mobileDrawer';
import '../App.css';
export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef()

    return (
        <Flex as='nav' sx={styles.header}>
            <Link href='./'>
            <img style={{width:200,height:100}} src={logo} alt={"logo"}/> 
            </Link>

            <Button
                onClick={onOpen}
                sx={styles.btnSignIn}
            >
                Đăng nhập
            </Button>
            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Đăng nhập</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input ref={initialRef} type="email" />
                    
                    </FormControl>

                    <FormControl mt={4}>
                    <FormLabel>Mật khẩu</FormLabel>
                    <Input type="password" />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                        Đăng nhập
                    </Button>
                </ModalFooter>
                </ModalContent>
            </Modal>

            <MobileDrawer />
        </Flex>
    )
}

const styles = {
    header: {
        maxW: 'container.xl',
        mx: 'auto',
        p: 4,
        alignItems: 'center',
    },
    btnSignIn: {
        ml: 'auto',
        color: 'gray.900',
        bg: 'none',
        border: '2px solid',
        borderColor: 'blue.700',
        _hover: {
            color: 'white',
            bg: 'blue.700',
        }
    }
}