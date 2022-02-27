import STATUS_CODES from './statusCodes';

export class Err extends Error {
    constructor(statusCode, code, message) {
        super(message);
        this.statusCode = statusCode;
        this.code = code;
    }

    static emptyField(fieldName) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
            'empty-field',
            `${fieldName} trebuie completat`
        );
    }

    static invalidNumber(fieldName) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
            'invalid-number',
            `${fieldName} trebuie sa fie numar`
        );
    }

    static alreadyExists(id) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.CONFLICT,
            'already-exists',
            `A document with id ${id} already exists`
        );
    }

    static gameAlreadyExists(game) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.CONFLICT,
            'already-exists',
            `Jocul ${game.name} exista deja`
        );
    }

    static teamAlreadyExists(team) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.CONFLICT,
            'already-exists',
            `Ai deja o echipa pentru jocul ${team.gameName}`
        );
    }

    static teamNotFound(teamId) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.NOT_FOUND,
            'not-found',
            `Echipa cu id ${teamId} nu exista`
        );
    }

    static teamCapacityOverflow(game) {
        return new Err(
            STATUS_CODES.CLIENT_ERROR.UNPROCESSABLE,
            'capacity-overflow',
            `Jocul are echipe de maxim ${game.maxTeam} jucatori`
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
