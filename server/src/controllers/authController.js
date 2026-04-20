import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

function isPasswordValid(inputPassword) {
  const plainPassword = process.env.ADMIN_PASSWORD;
  const hashedPassword = process.env.ADMIN_PASSWORD_HASH;

  if (hashedPassword) {
    return bcrypt.compareSync(inputPassword, hashedPassword);
  }

  return inputPassword === plainPassword;
}

export function login(req, res) {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: 'Validation failed.',
      errors: errors.array()
    });
  }

  const { email, password } = req.body;

  if (email !== process.env.ADMIN_EMAIL || !isPasswordValid(password)) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const token = jwt.sign(
    { email, role: 'admin' },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );

  return res.json({
    token,
    admin: { email }
  });
}
