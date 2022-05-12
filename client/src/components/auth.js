import React, { useState } from 'react';
import {
    Box,
    Link,
    Text,
    Button,
    FormControl,
    FormLabel,
    Input,
    useToast,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signIn, signUp } from '../actions/auth';

export default function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);
    const [formData, setFormData ] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const toast = useToast();
    const errMsg = useSelector(state => state.auth.authData);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignIn) {
            dispatch(signIn(formData, navigate));
        } else {
            dispatch(signUp(formData, navigate));
        }
        toast({
            title: `Đăng${isSignIn ? ' nhập ' : ' ký '}thành công`,
            description: "Bạn sẽ được chuyển về trang chủ.",
            status: 'success',
            duration: 4000,
            isClosable: true,
        })
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Box sx={styles.form} as='form' onSubmit={handleSubmit}>
            <FormControl isRequired>
                {!isSignIn && (
                    <>
                        <FormLabel htmlFor='name'>Tên người dùng</FormLabel>
                        <Input name='name' id='name' onChange={handleChange}/>
                    </>
                )}

                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input name='email' id='email' type="email" onChange={handleChange} />
                <FormLabel htmlFor='password'>Mật khẩu</FormLabel>
                <Input name='password' id='password' type='password' onChange={handleChange} />

                {!isSignIn && (
                    <>
                        <FormLabel htmlFor='confirmPassword'>Nhập lại mật khẩu</FormLabel>
                        <Input name='confirmPassword' type='password' id='confirmPassword' onChange={handleChange} />
                    </>
                )}
            </FormControl>
            <Button variant='filled' w='full' mt={8} colorScheme='blue' type='submit'>
                {isSignIn ? 'Đăng nhập' : 'Tạo tài khoản'}
            </Button>
            {isSignIn ? (
                <Text mt={4}>Chưa có tạo khoản? <Link color='blue' onClick={() => setIsSignIn(false)}>Tạo tài khoản</Link></Text>
            ) : (
                <Text mt={4}>Đã có tạo khoản? <Link color='blue' onClick={() => setIsSignIn(true)}>Đăng nhập</Link></Text>
            )}
        </Box>
    )
}

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