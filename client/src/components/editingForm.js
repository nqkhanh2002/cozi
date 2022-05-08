import {
    FormControl,
    FormLabel,
    Select,
    Input,
    Textarea,
    Box,
    Checkbox,
    Button,
    Text,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createLetter, updateLetter } from '../actions/letters';
import { FaCheckCircle } from 'react-icons/fa';

export default function EditingForm({ currentId, setCurrentId }) {
    const [letterData, setLetterData] = useState({
        from: 'Tôi', 
        title: '',
        body: '',
        to: 'Thế giới',
    });

    // Lấy dữ liệu thư cần chỉnh sửa
    const letter = useSelector((state) => currentId ? state.letters.find((sheet) => sheet.id === currentId) : null);

    const dispatch = useDispatch();

    const { isOpen, onOpen, onClose } = useDisclosure()

    // Đưa dữ liệu thư cần chỉnh sửa vào form
    useEffect(() => {
        if (letter) setLetterData(letter);
    }, [letter]);

    const clear = () => {
        setCurrentId(0);
        setLetterData({
            from: 'Tôi', 
            title: '',
            body: '',
            to: 'Thế giới',
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId === 0) {
            dispatch(createLetter(letterData));
        } else {
            dispatch(updateLetter(currentId, letterData));
        }
        clear();
        onOpen();
    }

    return (
        <>
            <Box width='full' as='form' sx={styles.composeForm} onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel htmlFor='to'>Gửi tới</FormLabel>
                    <Select
                        id='to'
                        sx={styles.select}
                        defaultValue={letterData.to}
                        onChange={(e) => setLetterData({ ...letterData, to: e.target.value })}
                    >
                        <option value='Thế giới'>Thế giới</option>
                        <option value='Ai đó đáng tin cậy'>Ai đó đáng tin cậy</option>
                        <option value='Người quen'>Người quen</option>
                    </Select>

                    <FormLabel htmlFor='tittle'>Tiêu đề</FormLabel>
                    <Input
                        value={letterData.title}
                        onChange={(e) => setLetterData({ ...letterData, title: e.target.value })}
                    />

                    <FormLabel htmlFor='content'>Nội dung thư</FormLabel>
                    <Textarea
                        id='content'
                        value={letterData.body}
                        onChange={(e) => setLetterData({ ...letterData, body: e.target.value })}
                    />
                </FormControl>
                <Box mb={4}>
                        <Checkbox
                            value='Người lạ'
                            onChange={(e) => setLetterData({ ...letterData, from: e.target.value })}
                        >
                            Ẩn danh
                        </Checkbox>
                </Box>
                <Button
                    type='submit'
                >
                    Gửi thư
                </Button>
            </Box>

            <Modal onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                    <Flex sx={styles.notification}>
                        <Text>Thư đã gửi thành công</Text>
                        <FaCheckCircle size={56} color='green'/>
                        <Link to='/home'>
                            <Button>Quay về trang chủ</Button>
                        </Link>
                    </Flex>
                </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

const styles = {
    composeForm: {
        px: 4,
        input: {
            mb: 4,
        },
        label: {
            mt: 4,
        },
        textarea: {
            h: 'sm',
        }
    },
    notification: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: {
            my: 8,
        },
        button: {
            my: 8,
        }
    }
}