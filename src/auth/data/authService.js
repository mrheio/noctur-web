import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
} from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { firstValueFrom, of, switchMap } from 'rxjs';
import { firebaseAuth } from '../../common/firebase';
import { AuthErr } from '../../common/utils';
import userRepo from '../../user/data/userRepo';
import { createUser } from '../../user/data/userUtils';
import { validateLogin, validateRegister } from './authUtils';

const createAuthService = (auth) => {
    const getLoggedUser$ = () => {
        return authState(auth).pipe(
            switchMap((user) => {
                if (user) {
                    return userRepo.getById$(user.uid);
                }
                return of(null);
            })
        );
    };

    const getLoggedUser = () => {
        return firstValueFrom(getLoggedUser$());
    };

    const logInWithEmailAndPassword = async (email, password) => {
        try {
            validateLogin({ email, password });
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    };

    const register = async ({ email, password, username }) => {
        try {
            validateRegister({ email, username, password });
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            await userRepo.add(
                createUser({ id: res.user.uid, email, username })
            );
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    };

    const logOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    };

    return {
        getLoggedUser$,
        getLoggedUser,
        logInWithEmailAndPassword,
        register,
        logOut,
    };
};

const createGoogleAuthService = (auth) => {
    const provider = new GoogleAuthProvider();

    const logInWithGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, provider);
            const user = await userRepo.getById(res.user.uid);
            if (!user) {
                const data = createUser({
                    id: res.user.uid,
                    email: res.user.email,
                });
                await userRepo.add(data);
            }
        } catch (error) {
            throw AuthErr.maybeConvert(error);
        }
    };

    return { logInWithGoogle };
};

export const authService = createAuthService(firebaseAuth);
export const googleAuthService = createGoogleAuthService(firebaseAuth);
