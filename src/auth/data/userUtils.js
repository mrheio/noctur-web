import { Validator } from '../../common/utils';

export const createUser = (data) => {
    const { id, email, username, roles } = data;
    return {
        id,
        email,
        username,
        roles: roles ?? { admin: false },
    };
};

const validator = {
    email: new Validator().required('Emailul trebuie completat'),
    username: new Validator().required('Usernameul trebuie completat'),
    password: new Validator().required('Parola trebuie completata'),
};

export const validateUserData = (data) => {
    validator.email.validate(data.email);
    validator.username.validate(data.username);
};

export const validateLogin = (data) => {
    validator.email.validate(data.email);
    validator.password.validate(data.password);
};

export const validateRegister = (data) => {
    validator.email.validate(data.email);
    validator.username.validate(data.username);
    validator.password.validate(data.password);
};
