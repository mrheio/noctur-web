import { Validator } from '../../common/utils';

export const createUser = (data) => ({
    id: data.id,
    email: data.email,
    username: data.username,
    roles: data.roles ?? { admin: false },
});

const validator = {
    email: new Validator().required('Emailul trebuie completat'),
    username: new Validator().required('Usernameul trebuie completat'),
    password: new Validator().required('Parola trebuie completata'),
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
