import { AuthErr } from '../../common/err';

export const createUser = (id, email, username, password, isAdmin = false) => ({
    id,
    email,
    username,
    password,
    isAdmin,
});

export const validateLogin = (email, password) => {
    if (!email || !email.length) {
        throw AuthErr.emptyField('Email');
    }
    if (!password || !password.length) {
        throw AuthErr.emptyField('Parola');
    }
};

export const validateUserData = (email, username, password) => {
    if (!email || !email.length) {
        throw AuthErr.emptyField('Email');
    }
    if (!username || !username.length) {
        throw AuthErr.emptyField('Username');
    }
    if (!password || !password.length) {
        throw AuthErr.emptyField('Parola');
    }
};
