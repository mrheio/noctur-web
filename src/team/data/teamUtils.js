import { Validator } from '../../common/utils';

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

export const createTeam = (teamData) => ({
    id: `${teamData.game}_${teamData.uid}`,
    name: teamData.name,
    game: teamData.game,
    capacity: parseInt(teamData.capacity),
    description: teamData.description,
    need: teamData.need,
    uid: teamData.uid,
    usids: teamData.usids || [teamData.uid],
});

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
