import { replaceSpacesWithUnderscores, Validator } from '../../common/utils';

export const createGame = (data) => ({
    id: replaceSpacesWithUnderscores(data.name),
    name: data.name,
    capacity: parseInt(data.capacity),
});

const validators = {
    name: new Validator().required('Nume joc trebuie completat'),
    capacity: new Validator()
        .required('Capacitate maxima echipa trebuie completata')
        .numeric('Capacitate maxima echipa trebuie sa fie numar'),
};

export const validateGameData = (gameData) => {
    validators.name.validate(gameData.name);
    validators.capacity.validate(gameData.capacity);
};
