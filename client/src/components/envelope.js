import {
    Box,
    Flex,
    IconButton,
    Text,
    Heading,
} from '@chakra-ui/react';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteLetter } from '../api';


export default function Envelope({ letter, setCurrentId }) {
    const date = new Date(letter.dateCreated);
    const dateStr = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    const navigate = useNavigate();
    const handleEdit = () => {
        navigate('/edit', { state: letter });
    }

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteLetter(letter._id));
    }
    return (
        <Box sx={styles.container}>
            <Flex sx={styles.inner}>
                <Flex sx={styles.advanced}>
                    <IconButton aria-label='Edit' icon={<FaPencilAlt />} onClick={handleEdit} />
                    <IconButton aria-label='Delete' icon={<FaTrashAlt />} onClick={handleDelete} />
                </Flex>
                <Text>
                    {dateStr}
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
        </Box>
    )
}

const styles = {
    container: {
        w: '404px',
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
        position: 'relative',
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
    }
}