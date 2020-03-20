import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAon-2yJM0Qlgh2-KCN9aIRDkuAxUB_Xqc',
  authDomain: 'test-task-west-s.firebaseapp.com',
  databaseURL: 'https://test-task-west-s.firebaseio.com',
  projectId: 'test-task-west-s',
  storageBucket: 'test-task-west-s.appspot.com',
  messagingSenderId: '269832391904',
  appId: '1:269832391904:web:4f0743787a793c62295485',
  measurementId: 'G-K8N3JHVBN9'
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
