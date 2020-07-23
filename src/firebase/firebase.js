import * as firebase from 'firebase'
//const config = process.env.production ? JSON.parse(process.env.FIREBASE_CONFIG) : require('../../config').firebase
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
}

firebase.initializeApp(config)

const database = firebase.database()

export { firebase, database as default }


// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = []

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })

//         console.log(expenses)
//     }, 
//     (e) => { 
//         console.log('Error fetching data', e) 
//     })

// 3 expenses
// 
// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('Error fetching data', e)
// })


// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         console.log(snapshot.val())
//     })
//     .catch((e) => {
//         console.log(`Error fetching data`, e)
//     })

// database.ref().set({
//     name: "Jason McDermott",
//     location: {
//         city: 'Milford',
//         state: "CT"
//     }
// })

// database.ref("location/city").set("Erie")

// database.ref("location/city").remove()