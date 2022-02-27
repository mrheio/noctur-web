import { Login, Register } from '../auth/pages';
import { GamesHome } from '../game/pages';
import Home from '../Home.svelte';
import { TeamDetails, TeamsHome } from '../team/pages';

const homeRoute = {
    path: '/',
    private: false,
    notAuthed: true,
    component: Home,
};

const loginRoute = {
    path: 'login',
    private: false,
    notAuthed: true,
    component: Login,
};

const registerRoute = {
    path: 'register',
    private: false,
    notAuthed: true,
    component: Register,
};

const teamsHomeRoute = {
    path: 'teams',
    private: true,
    component: TeamsHome,
};

const teamDetailsRoute = {
    path: 'teams/:id',
    private: true,
    component: TeamDetails,
};

const gamesHomeRoute = {
    path: 'games',
    private: true,
    component: GamesHome,
};

const routes = [
    homeRoute,
    loginRoute,
    registerRoute,
    teamsHomeRoute,
    teamDetailsRoute,
    gamesHomeRoute,
];

export default routes;
