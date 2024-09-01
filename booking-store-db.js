
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getDatabase, ref, get, set, child, update, remove }
    from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCWJeuvD-m-JGWitFfpHT1lJ5jalfg63wo",
    authDomain: "fir-1-f6699.firebaseapp.com",
    databaseURL: "https://fir-1-f6699-default-rtdb.firebaseio.com",
    projectId: "fir-1-f6699",
    storageBucket: "fir-1-f6699.appspot.com",
    messagingSenderId: "437752703332",
    appId: "1:437752703332:web:9240ff44fa4b6c611ff271"
};
const app = initializeApp(firebaseConfig);
export function storedb(details) {


    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyCWJeuvD-m-JGWitFfpHT1lJ5jalfg63wo",
        authDomain: "fir-1-f6699.firebaseapp.com",
        databaseURL: "https://fir-1-f6699-default-rtdb.firebaseio.com",
        projectId: "fir-1-f6699",
        storageBucket: "fir-1-f6699.appspot.com",
        messagingSenderId: "437752703332",
        appId: "1:437752703332:web:9240ff44fa4b6c611ff271"
    };
    const app = initializeApp(firebaseConfig);
    let db = getDatabase();

    set(ref(db, "Booking Details/" + details.id), {
        details
    })

        .then(() => {
            alert('Booking Successful');
        })
        .catch(() => { alert('unsuccessful' + error); });


}
export function retrive(id) {
    let db = getDatabase();

    const dbref = ref(db);
    get(child(dbref, "Booking Details/" + id)).then((snapshot) => {

        if (snapshot.exists()) {
            return (snapshot.val().details.name)
        }

    })
}


