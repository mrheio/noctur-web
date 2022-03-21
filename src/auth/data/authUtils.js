import { Validator } from '../../common/utils';

const authValidator = {
    email: new Validator().required('Emailul trebuie completat'),
    username: new Validator().required('Usernameul trebuie completat'),
    password: new Validator().required('Parola trebuie completata'),
};

export const validateLogin = ({ email, password }) => {
    authValidator.email.validate(email);
    authValidator.password.validate(password);
};

export const validateRegister = ({ email, username, password }) => {
    authValidator.email.validate(email);
    authValidator.username.validate(username);
    authValidator.password.validate(password);
};
