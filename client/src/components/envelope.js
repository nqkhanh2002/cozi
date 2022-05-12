import {
    Box,
    Flex,
    IconButton,
    Text,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    ModalFooter,
} from '@chakra-ui/react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteLetter } from '../actions/letters';
import moment from 'moment';
import 'moment/locale/vi';


export default function Envelope({ letter }) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const user = JSON.parse(localStorage.getItem('profile'));
    moment.locale('vi');

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/edit', { state: {receiverId: '', receiverName: '', letter } });
    }

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteLetter(letter._id));
    }

    const handleRead = () => {
        if (user) {
            navigate('/read', { state: letter });
        } else {
            navigate('/auth');
        }
    }
    return (
        <Box sx={styles.container}>
            {user && (user?.result?._id === letter.sender) && (<Flex sx={styles.advanced}>
                <IconButton aria-label='Edit' icon={<FaPencilAlt />} onClick={handleEdit} />
                <IconButton aria-label='Delete' icon={<FaTrashAlt />} onClick={onOpen} />
            </Flex>)}
            <Flex sx={styles.inner} onClick={handleRead}>
                <Text>
                    {moment(letter.dateCreated).calendar({
                        sameDay: '[Hôm nay lúc] H:m',
                        lastDay: '[Hôm qua lúc] H:m',
                        lastWeek: 'dd, DD/MM/YYYY [lúc] H:m',
                        sameElse: 'dd, DD/MM/YYYY'
                    })}
                </Text>
                <Text>
                    Từ: {letter.from}
                </Text>
                <Heading as='h3' size='md'>
                    {letter.title}
                </Heading>
                <Text>
                    Đến: {letter.to}
                </Text>
            </Flex>

            <Modal onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Text mt='8'>Bạn có chắc muốn xóa thư này?</Text>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='red' onClick={handleDelete}>Xóa</Button>
                    <Button ml='2' onClick={onClose}>Hủy</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

const styles = {
    container: {
        position: 'relative',
        w: {
            base: '320px',
            sm: '404px'
        },
        h: '236px',
        bg: `repeating-linear-gradient(135deg,
            #2D4263 0, #2D4263 0.75rem,
            transparent 0.75rem, transparent 1.25rem,
             #C84B31 1.25rem, #C84B31 2rem,
             transparent 2rem, transparent 2.5rem)`,
        p: 1,
        mb: 8,
        cursor: 'pointer',
        _hover: {
            boxShadow: '0.5rem 0.5rem black',
            transform: 'translate(-0.5rem, -0.5rem)'
        }
    },
    advanced: {
        position: 'absolute',
        top: 4,
        right: 4,
        button: {
            bg: 'none',
            color: 'gray.500',
            _hover: {
                bg: 'gray.100',
                color: 'gray.800',
            }
        }
    },
    inner: {
        w: '100%',
        h: '100%',
        bg: 'white',

        flexDirection: 'column',
        padding: 8,
        p: {
            mb: 4,
        },
        h3: {
            mb: 4,
        },
    },
}