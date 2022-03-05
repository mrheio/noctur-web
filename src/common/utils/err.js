import STATUS_CODES from './statusCodes';

export class Err extends Error {
    constructor(statusCode, code, message) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
    }

    static empty(message) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
            'required-empty',
            message
        );
    }

    static NaN(message) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
            'required-number',
            message
        );
    }

    static alreadyExists(message) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.CONFLICT,
            'already-exists',
            message
        );
    }

    static notFound(message) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.NOT_FOUND,
            'not-found',
            message
        );
    }

    static capacityOverflow(message) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.CONFLICT,
            'capacity-overflow',
            message
        );
    }
}

export class AuthErr extends Err {
    static maybeConvert(error) {
        if (error.code === 'auth/invalid-email') {
            return new Err(
                STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
                'invalid-email',
                'Email incorect'
            );
        }
        if (error.code === 'auth/weak-password') {
            return new Err(
                STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
                'weak-password',
                'Parola trebuie sa aiba minim 6 caractere'
            );
        }
        if (
            error.code === 'auth/user-not-found' ||
            error.code === 'auth/wrong-password'
        ) {
            return new Err(
                STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
                'user-not-found',
                'Nu exista user cu aceste credentiale'
            );
        }
        return error;
    }
}
