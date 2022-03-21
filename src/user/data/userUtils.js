import { Validator } from '../../common/utils';

export const createUser = (data) => {
    const { id, email, username, roles } = data;
    return {
        id,
        email,
        username: username ?? '',
        roles: roles ?? { admin: false },
    };
};

const userValidator = {
    email: new Validator().required('Emailul trebuie completat'),
    username: new Validator().required('Usernameul trebuie completat'),
    password: new Validator().required('Parola trebuie completata'),
};

export const validateUpdateProfile = (data) => {
    userValidator.username.validate(data.username);
};

export const validateUserData = (data) => {
    userValidator.email.validate(data.email);
    userValidator.username.validate(data.username);
};
