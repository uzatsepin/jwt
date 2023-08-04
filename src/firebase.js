import {initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {onMounted, ref} from "vue";

const firebaseConfig = {
    apiKey: 'AIzaSyB_mtOBnKdoCOgEOJjeDsu0DF80jZ8az4w',
    authDomain: 'jwt-firebase-vue.firebaseapp.com',
    projectId: 'jwt-firebase-vue',
    storageBucket: 'jwt-firebase-vue.appspot.com',
    messagingSenderId: '135078178271',
    appId: '1:135078178271:web:1d9ff431227c583c32686a'
}

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore()
const postsCollection = db.collection('posts')

export const createPost = post => {
    return postsCollection.add(post)
}

export const getPost = async id => {
    const post = await postsCollection.doc(id).get();
    return post.exists ? post.data() : null
}

export const updatePost = (id, post) => {
    return postsCollection.doc(id).update(post)
}

export const deletePost = id => {
    return postsCollection.doc(id).delete()
}

export const useLoadPosts = () => {
    const posts = ref([])
    postsCollection.onSnapshot(snapshot => {
        posts.value = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    })
    onMounted(close)
    return posts;
}