// Core
import { object, string, boolean } from 'yup';

// Instruments
import { invite } from '../../REST/';

export const login = {
    shape: {
        email:    'ivan.test@mail.ru',
        password: '00000',
        remember: false,
    },
    schema: object().shape({
        email: string()
            .email()
            .required(),
        password: string()
            .min(5)
            .required(),
        remember: boolean(),
    }),
};

export const signup = {
    shape: {
        firstName: 'Ivan',
        lastName:  'Ivanov',
        email:     'ivan.test@mail.ru',
        password:  '00000',
        invite,
    },
    schema: object().shape({
        firstName: string().required(),
        lastName:  string().required(),
        email:     string()
            .required()
            .email(),
        password: string()
            .required()
            .min(5),
        invite: string()
            .required()
            .min(12)
            .max(12),
    }),
};

export const newPassword = {
    shape: {
        oldPassword: '',
        newPassword: '',
    },
    schema: object().shape({
        oldPassword: string()
            .required()
            .min(5),
        newPassword: string()
            .required()
            .min(5),
    }),
};

export const composer = {
    shape: {
        comment: '',
    },
    schema: object().shape({
        comment: string()
            .required()
            .min(1),
    }),
};
