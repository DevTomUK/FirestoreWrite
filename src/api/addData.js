// Import the Firestore database
import { db } from '../initializeFirebase';
import { collection, addDoc } from 'firebase/firestore';

export default async function addData(textToPost) {
    try {
        const docRef = await addDoc(collection(db, "items"), {
            name: textToPost,
            description: "Use another text input to add more.",
            createdAt: new Date()
        })
    }
    catch (e) {
        console.error("Error adding document: ", e);
    }
}