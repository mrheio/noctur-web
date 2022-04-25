import { get } from 'svelte/store';
import { authStore } from '../../auth/authStore';
import { replaceSpacesWithUnderscores, Validator } from '../../common/utils';

export const createTeam = ({
    name,
    game,
    capacity,
    description,
    uid,
    playersIds,
}) => {
    return {
        id: `${replaceSpacesWithUnderscores(game)}--${uid}`,
        name,
        game,
        capacity: parseInt(capacity),
        description,
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
};

export const validateTeamData = (teamData) => {
    validator.name.validate(teamData.name);
    validator.game.validate(teamData.game);
    validator.capacity.validate(teamData.capacity);
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
