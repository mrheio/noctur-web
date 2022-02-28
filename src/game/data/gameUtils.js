import { replaceSpacesWithUnderscores } from '../../common/basicUtils';
import { Err } from '../../common/err';
import Validator, { isNumeric, notEmpty } from '../../common/Validator';

export const createGame = (data) => ({
    id: replaceSpacesWithUnderscores(data.name),
    name: data.name,
    maxTeam: parseInt(data.maxTeam),
});

const gameDataValidator = {
    name: [{ checker: notEmpty, error: Err.emptyField('Nume joc') }],
    maxTeam: [
        {
            checker: notEmpty,
            error: Err.emptyField('Capacitate maxima echipa'),
        },
        {
            checker: isNumeric,
            error: Err.invalidNumber('Capacitate maxima echipa'),
        },
    ],
};

export const validateGameData = (gameData) => {
    Validator.validate(gameData, gameDataValidator);
};
