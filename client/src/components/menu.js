import {
    Flex,
    Text,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MenuLink from './menuLink';

export default function Menu() {
    const user = JSON.parse(localStorage.getItem('profile'));
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex sx={styles.menu}>
            <MenuLink to='home' text='Bể thư thế giới' />
            { user?.result?.coziPoints > 10 ? (
                <MenuLink to='secret' text='Bể thư tâm tình' />)
            : (
                <>
                    <Text cursor='pointer' onClick={onOpen}>Bể thư tâm tình</Text>
                    <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Chưa đủ tin cậy</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody mb='4'>
                            Bạn cần "Điểm tin cậy" trên 10 để mở "Bể thư tâm tình".
                        </ModalBody>
                        </ModalContent>
                    </Modal>
                </>
            )}
            <MenuLink to='inbox' text='Hộp thư đến' />
            <MenuLink to='outbox' text='Hộp thư đi' />
            <Text>Thư quan trọng</Text>
            <Text>Thư nháp</Text>
            <Link to='/edit'>
                <Button variant='filled' sx={styles.btnCompose}>
                    Viết thư
                </Button>
            </Link>
        </Flex>
    )
}

const styles = {
    menu: {
        w: '12rem',
        flexDirection: 'column',
        pl: {
            md: 8,
            lg: 16,
        },
        p: {
            mb: 4,
        },
        a: {
            mb: 4,
            _hover: {
                color: 'blue.600',
            }
        },
    },
}