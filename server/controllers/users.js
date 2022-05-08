import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signIn = async(req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (!existingUser) return res.status(404).json({ message: 'Tài khoản không tồn tại!' });
        
        const isPasswordCorrect = await bcryptjs.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Mật khẩu không chính xác!' });

        const token = jwt.sign({
            email: existingUser.email,
            id: existingUser._id,
        }, 'wda', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Đã có lỗi xảy ra!' });
    }
}

export const signUp = async(req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    try {
        const existingUser = await User.findOne({ email });

        if (existingUser) return res.status(400).json({ message: 'Tài khoản đã tồn tại!' });

        if (password !== confirmPassword) return res.status(400).json({ message: 'Mật khẩu không khớp!' });

        const hashedPassword = await bcryptjs.hash(password, 12);

        const result = await User.create({ name, email, password: hashedPassword});

        const token = jwt.sign({
            email: result.email,
            id: result._id,
        }, 'wda', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });
    } catch (error) {
        res.status(500).json({ message: 'Đã có lỗi xảy ra!' });
    }
}