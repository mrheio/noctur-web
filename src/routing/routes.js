import { Login, Register } from '../auth/pages';
import { GamesHome } from '../game/pages';
import Home from '../Home.svelte';
import { TeamDetails, TeamsHome } from '../team/pages';
import { EmailVerification, UserProfile } from '../user/pages';

class Route {
    constructor({ path, access, component }) {
        this.path = path;
        this.access = access;
        this.component = component;
    }
}
const homeRoute = new Route({
    path: '/',
    access: 'public',
    component: Home,
});

const loginRoute = new Route({
    path: 'login',
    access: 'notLoggedIn',
    component: Login,
});

const registerRoute = new Route({
    path: 'register',
    access: 'notLoggedIn',
    component: Register,
});

const teamsHomeRoute = new Route({
    path: 'teams',
    access: 'private',
    component: TeamsHome,
});

const teamDetailsRoute = new Route({
    path: 'teams/:id',
    access: 'private',
    component: TeamDetails,
});

const gamesHomeRoute = new Route({
    path: 'games',
    access: 'private',
    component: GamesHome,
});

const editAccountRoute = new Route({
    path: 'user/profile',
    access: 'private',
    component: UserProfile,
});

const emailVerificationRoute = new Route({
    path: 'user/email-verification',
    access: 'private',
    component: EmailVerification,
});

const routes = [
    homeRoute,
    loginRoute,
    registerRoute,
    teamsHomeRoute,
    teamDetailsRoute,
    gamesHomeRoute,
    editAccountRoute,
    emailVerificationRoute,
];

export default routes;
