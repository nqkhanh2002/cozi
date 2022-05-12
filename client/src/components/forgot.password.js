import React, { useState } from 'react';
import {
    FormLabel,
    Input,
    FormControl,
    Box,
    Button,
    Link,
    Stack,
} from '@chakra-ui/react';
import '../App.css';

import {NavLink } from 'react-router-dom';
export default function Forgot() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    // const nodemailer = require('nodemailer');

    const styles = {
        form: {
            minW: 'sm',
            p: 16,
            border: '1px solid',
            borderColor: 'gray.200',
            mx: 'auto',
            label: {
                mt: 2,
            },
        },
    }
    const [email] = useState('')
    return (
         
            <Box sx={styles.form} as='form' onSubmit={handleSubmit}>
            <FormControl isRequired>
            <h3>Quên mật khẩu</h3>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input 
            placeholder='email@address.com' 
            name='email' 
            id='email' 
            type="email"
            autoComplete='email'
            required
            value={email}
            />
            </FormControl>
            <Button variant='filled' w='full' mt={8} colorScheme='blue' type='submit'>
                Lấy lại mật khẩu
            </Button>
            <Stack alignItems='center' mt="4">
                            <Link color='blue'>
                                <NavLink exact activeStyle={{}} to="/auth" className="my-link">Đăng nhập</NavLink>
                            </Link>
                </Stack>
            </Box>
    )}