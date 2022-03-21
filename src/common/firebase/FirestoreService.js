import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { map, Observable } from 'rxjs';
import { Err } from '../utils';
import { firestore } from './firebase.config';

export default class FirestoreService {
    constructor(collectionName) {
        this.collection = collection(firestore, collectionName);
    }

    getAll$() {
        return collectionData(this.collection);
    }

    async getById(id) {
        return (await getDoc(doc(this.collection, id))).data();
    }

    getById$(id) {
        return docData(doc(this.collection, id));
    }

    async getWhere(...where) {
        return (await getDocs(query(this.collection, ...where))).docs.map(
            (doc) => doc.data()
        );
    }

    getWhere$(...where) {
        return new Observable((subscriber) => {
            const q = query(this.collection, ...where);
            const unsub = onSnapshot(q, {
                next: subscriber.next.bind(subscriber),
                error: subscriber.error.bind(subscriber),
                complete: subscriber.complete.bind(subscriber),
            });
            return unsub;
        }).pipe(map((changes) => changes.docs.map((doc) => doc.data())));
    }

    async add(data) {
        if (data.id) {
            const docShot = await getDoc(doc(this.collection, data.id));
            if (docShot.exists()) {
                throw Err.alreadyExists(
                    `A doc with id ${data.id} already exists`
                );
            }
            await setDoc(doc(this.collection, data.id), data);
        } else {
            const docRef = doc(this.collection);
            await setDoc(docRef, { ...data, id: docRef.id });
        }
    }

    async deleteById(id) {
        await deleteDoc(doc(this.collection, id));
    }

    async deleteWhere(...where) {
        const qShot = await getDocs(query(this.collection, ...where));
        for (const doc of qShot.docs) {
            await this.deleteById(doc.id);
        }
    }

    async update(id, newData) {
        await updateDoc(doc(this.collection, id), newData);
    }
}
