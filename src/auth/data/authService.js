import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { of, switchMap } from 'rxjs';
import { createUser } from '.';
import { firebaseAuth } from '../../common/firebase';
import { AuthErr } from '../../common/utils/';
import {
    default as usersDbService,
    default as userService,
} from './userService';

const authService = {
    getLoggedUser$() {
        return authState(firebaseAuth).pipe(
            switchMap((user) => {
                if (user) {
                    return usersDbService.getUserById$(user.uid);
                }
                return of(null);
            })
        );
    },

    async logInWithEmailAndPassword(data) {
        try {
            await signInWithEmailAndPassword(
                firebaseAuth,
                data.email,
                data.password
            );
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    },

    async logOut() {
        try {
            await signOut(firebaseAuth);
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    },

    async register(data) {
        const { email, username, password } = data;
        try {
            const creds = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            const user = createUser({
                id: creds.user.uid,
                email,
                username,
            });
            const res = userService.addUser(user);
            return res;
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    },
};

export default authService;
