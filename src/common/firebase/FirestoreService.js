import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import { collectionData, docData } from 'rxfire/firestore';
import { Err } from '../err';
import { firestore } from './firebase.config';

export default class FirestoreService {
    constructor(collectionName) {
        this.collection = collection(firestore, collectionName);
    }

    getAll$() {
        return collectionData(this.collection);
    }

    getById$(id) {
        return docData(doc(this.collection, id));
    }

    getWhere$(...where) {
        return collectionData(query(this.collection, ...where));
    }

    async add(data) {
        const docShot = await getDoc(doc(this.collection, data.id));
        if (docShot.exists()) {
            throw Err.alreadyExists(docShot.id);
        }
        await setDoc(doc(this.collection, data.id), data);
        return data.id;
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
        return id;
    }
}
