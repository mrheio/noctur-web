import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { of, switchMap } from 'rxjs';
import { AuthErr } from '../../common/err';
import { firebaseAuth } from '../../common/firebase/firebase.config';
import usersDbService from './usersDbService';
import { createUser, validateLogin, validateUserData } from './userUtils';

const authService = {
    getLoggedUser$() {
        return authState(firebaseAuth).pipe(
            switchMap((user) =>
                user ? usersDbService.getUserById$(user.uid) : of(null)
            )
        );
    },

    async logInWithEmailAndPassword(email, password) {
        try {
            validateLogin(email, password);
            await signInWithEmailAndPassword(firebaseAuth, email, password);
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

    async register(email, username, password) {
        try {
            validateUserData(email, username, password);
            const creds = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            const res = await usersDbService.addUser(
                createUser(creds.user.uid, email, username, password)
            );
            return res;
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    },
};

export default authService;
