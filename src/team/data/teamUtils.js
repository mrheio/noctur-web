import { get } from 'svelte/store';
import { authStore } from '../../auth/authStore';
import { replaceSpacesWithUnderscores, Validator } from '../../common/utils';

export const needLevels = [
    { value: 'low', display: 'Nu e stres, nu ma grabesc' },
    {
        value: 'medium',
        display: 'Mi-ar prinde bine niste tovarasi',
    },
    {
        value: 'high',
        display: 'NU AM PRIETENI, VREAU SA MA JOC!',
    },
];

export const createTeam = ({
    name,
    game,
    capacity,
    description,
    need,
    uid,
    playersIds,
}) => {
    return {
        id: `${replaceSpacesWithUnderscores(game)}--${uid}`,
        name,
        game,
        capacity: parseInt(capacity),
        description,
        need,
        uid,
        playersIds: playersIds || [uid],
    };
};

export const createMessage = ({ uid, message }) => {
    return {
        uid,
        message,
        createdAt: new Date().getTime(),
    };
};

const validator = {
    name: new Validator().required('Nume echipa trebuie completat'),
    game: new Validator().required('Joc trebuie ales'),
    capacity: new Validator()
        .required('Capacitate echipa trebuie completata')
        .numeric('Capacitate echipa trebuie sa fie numar'),
    need: new Validator().required('Cat de disperat esti trebuie ales'),
};

export const validateTeamData = (teamData) => {
    validator.name.validate(teamData.name);
    validator.game.validate(teamData.game);
    validator.capacity.validate(teamData.capacity);
    validator.need.validate(teamData.need);
};

export const isTeamOwner = (team) => {
    const { user } = get(authStore);
    return user.id === team.uid;
};

export const isInTeam = (team) => {
    const { user } = get(authStore);
    return team.playersIds.some((uid) => uid === user.id);
};

export const isTeamFull = (team) => {
    return team.playersIds.length === team.capacity;
};
