import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { firstValueFrom, of, switchMap } from 'rxjs';
import { firebaseAuth } from '../../common/firebase';
import { AuthErr } from '../../common/utils';
import userService from './userService';
import { validateLogin, validateRegister } from './userUtils';

const createAuthService = (auth) => {
    return {
        getLoggedUser$() {
            return authState(auth).pipe(
                switchMap((user) => {
                    if (user) {
                        return userService.getById$(user.uid);
                    }
                    return of(null);
                })
            );
        },

        getLoggedUser() {
            return firstValueFrom(authState(auth));
        },

        async logInWithEmailAndPassword(email, password) {
            try {
                validateLogin({ email, password });
                await signInWithEmailAndPassword(auth, email, password);
            } catch (error) {
                throw AuthErr.maybeConvert(error);
            }
        },

        async register({ email, username, password }) {
            try {
                validateRegister({ email, username, password });
                const res = await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                await userService.add({ id: res.user.uid, email, username });
            } catch (error) {
                throw AuthErr.maybeConvert(error);
            }
        },

        async logOut() {
            try {
                await signOut(auth);
            } catch (error) {
                throw AuthErr.maybeConvert(error);
            }
        },
    };
};

const authService = createAuthService(firebaseAuth);
export default authService;
