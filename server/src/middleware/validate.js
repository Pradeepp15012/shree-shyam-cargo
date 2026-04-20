import { body } from 'express-validator';

export const leadValidation = [
  body('name').trim().isLength({ min: 2, max: 80 }).withMessage('Name is required.'),
  body('phone')
    .trim()
    .matches(/^[0-9+\-\s]{10,16}$/)
    .withMessage('Valid phone number is required.'),
  body('pickup').trim().isLength({ min: 2, max: 120 }).withMessage('Pickup location is required.'),
  body('drop').optional({ values: 'falsy' }).trim().isLength({ max: 120 }),
  body('date').isISO8601().withMessage('Valid moving date is required.'),
  body('serviceType').trim().isLength({ min: 3, max: 80 }).withMessage('Service type is required.'),
  body('goodsType').optional({ values: 'falsy' }).trim().isLength({ max: 120 }),
  body('message').optional({ values: 'falsy' }).trim().isLength({ max: 500 })
];

export const updateLeadValidation = [
  body('status')
    .optional()
    .isIn(['new', 'contacted', 'converted', 'closed'])
    .withMessage('Invalid status.')
];

export const loginValidation = [
  body('email').isEmail().withMessage('Valid email required.'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters.')
];

