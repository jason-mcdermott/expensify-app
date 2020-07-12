import * as firebase from 'firebase'
const config = process.env.production ? JSON.parse(process.env.FIREBASE_CONFIG) : require('../../config').firebase

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }