import { navigate } from 'svelte-routing';
import { Login, Register } from '../auth/pages';
import { GamesHome } from '../game/pages';
import Home from '../Home.svelte';
import { TeamDetails, TeamsHome } from '../team/pages';

class Route {
    constructor({ path, authRequired, notLoggedInRequired, component }) {
        this.path = path;
        this.authRequired = authRequired;
        this.notLoggedIn = notLoggedInRequired;
        this.component = component;
    }

    goTo() {
        navigate(this.path);
    }
}

export const homeRoute = new Route({
    path: '/',
    authRequired: false,
    notLoggedInRequired: false,
    component: Home,
});

export const loginRoute = new Route({
    path: 'login',
    authRequired: false,
    notLoggedInRequired: true,
    component: Login,
});

export const registerRoute = new Route({
    path: 'register',
    authRequired: false,
    notLoggedInRequired: true,
    component: Register,
});

export const teamsHomeRoute = new Route({
    path: 'teams',
    authRequired: true,
    notLoggedInRequired: false,
    component: TeamsHome,
});

export const teamDetailsRoute = new Route({
    path: 'teams/:id',
    authRequired: true,
    notLoggedInRequired: false,
    component: TeamDetails,
});

export const gamesHomeRoute = new Route({
    path: 'games',
    authRequired: true,
    notLoggedInRequired: false,
    component: GamesHome,
});

const routes = [
    homeRoute,
    loginRoute,
    registerRoute,
    teamsHomeRoute,
    teamDetailsRoute,
    gamesHomeRoute,
];

export default routes;
