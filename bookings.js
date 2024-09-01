
let bookingsHtml = '';
let orders;

window.addEventListener('load', () => {
    orders = (JSON.parse(localStorage.getItem('matchingId')));
    console.log(orders);
    if (orders === null) {
        document.getElementById('no-bookings').style.display = "block";

    }
    orders.forEach((order) => {
        console.log(order)
        retrive(order);

    });
});

function display(m) {
    console.log('displhy ' + m.name)
}
function gererateHTML(data) {
    bookingsHtml += `
    <div class="container-data">
       <div class="img"> 
                <img src="${data.vehicleImage}" class="img-img"   alt="">  
               
            </div>  
        <div class="details">
           
           Owner Name: ${data.name}<br>
            age : ${data.age}<br>
          
            contact Details : ${data.contactDetails}<br>
            Estimated cost :${data.estimatedCost}<br>
             Vehcile Type :${data.vehicleType}<br>
             vehicle name : ${data.vehicleName}  <br>
             
             Arriving date:${data.date}<br>
             mobile Number :${data.phonenumber}<br>
             
        </div> 
             <div class="booked-on">
                <span> <b class="bold"> booked-on :</b>${data.bookingPlacedDate}</span>  <br>
                <span class="from-to"> <b class="bold"> From </b>:${data.source}
                      <b class="bold"> To:</b> ${data.Destination}</span><br>
                      <span class="from-to"> <b class="bold"> Distance </b>:${data.totalDistance} km 
                      </span>
             </div>
                
            
      

    </div>
    
    
    `
}
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
let db = getDatabase();
function retrive(id) {
    let db = getDatabase();
    let m
    const dbref = ref(db);
    get(child(dbref, "Booking Details/" + id)).then((snapshot) => {

        if (snapshot.exists()) {
            m = snapshot.val().details
            console.log(m)
            display(m);
            gererateHTML(m);
            document.querySelector('.container').innerHTML = bookingsHtml;

        }
        return m;
    })


}









/*
document.querySelector('.s').addEventListener('click', () => {
    console.log("from retive")

});*/
