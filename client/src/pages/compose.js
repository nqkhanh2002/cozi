import {
    FormControl,
    FormLabel,
    Select,
    Textarea,
    Box,
    Checkbox,
    Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createLetter } from '../actions/letters';

export default function Compose() {
    const [letterData, setLetterData] = useState({
        to: '',
        title: '',
        body: '',
        from: '', 
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createLetter(letterData));
    }

    return (
        <FormControl as="form" sx={styles.composeForm} onSubmit={handleSubmit}>
            <FormLabel htmlFor='to'>Gửi tới</FormLabel>
            <Select
                id='to'
                sx={styles.select}
                value={letterData.from}
                onChange={(e) => setLetterData({ ...letterData, from: e.target.value })}
            >
                <option value='theWorld' selected>Thế giới</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <FormLabel htmlFor='content'>Nội dung thư</FormLabel>
            <Textarea
                id='content'
                value={letterData.body}
                onChange={(e) => setLetterData({ ...letterData, body: e.target.value })}
            />
            <Box sx={styles.checkbox}>
                <Checkbox
                    value='private'
                    isChecked={(e) => setLetterData({ ...letterData, to: (e.target.value === 'private') ? 'Thế giới' : 'Ai đó' })}
                >
                    Ẩn danh
                </Checkbox>
            </Box>
            <Button
                type='submit'
            >
                Gửi thư
            </Button>
        </FormControl>
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
    checkbox: {
        mb: 4,
    }
}