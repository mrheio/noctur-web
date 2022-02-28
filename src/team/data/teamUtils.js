import { Err } from '../../common/err';
import Validator, { isNumeric, notEmpty } from '../../common/Validator';

export const createTeam = (teamData) => ({
    id: `${teamData.gameName}_${teamData.userId}`,
    name: teamData.name,
    neededPlayers: parseInt(teamData.neededPlayers),
    description: teamData.description,
    gameName: teamData.gameName,
    userId: teamData.userId,
    usersIds: teamData.usersIds || [teamData.userId],
    severity: teamData.severity,
});

const teamDataValidator = {
    name: [{ checker: notEmpty, error: Err.emptyField('Nume echipa') }],
    neededPlayers: [
        { checker: notEmpty, error: Err.emptyField('Capacitate echipa') },
        { checker: isNumeric, error: Err.invalidNumber('Capacitate echipa') },
    ],
    gameName: [{ checker: notEmpty, error: Err.emptyField('Nume joc') }],
};

export const validateTeamData = (teamData) => {
    Validator.validate(teamData, teamDataValidator);
};

export const severities = [
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
