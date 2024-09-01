import { retrive, storedb } from "./booking-store-db.js";
import { bike } from "./vehicles-data/bike.js";
import { large } from "./vehicles-data/large.js";
import { medium } from "./vehicles-data/medium.js";
import { small } from "./vehicles-data/small.js";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
let UserCreds = JSON.parse(sessionStorage.getItem('user-creds'));
let userInfo = JSON.parse(sessionStorage.getItem('user-info'));
console.log(userInfo)
let date = dayjs();
let today = date.format('dddd , MMMM D,  h: mm  A');
let matchingid = [];
let distance;

function check() {

    let sourceinput = document.getElementById('source').value;
    let destination = document.getElementById('destination').value;
    let dateinput = document.querySelector('.date-picker').value;
    let phNumberinput = document.querySelector('.phone-number-input').value;
    let chooseVehicle = document.getElementById('vehicle-select').value;
    let vehicleResultsHTML = '';
    console.log("+91" + phNumberinput);

    if (dateinput === "" || phNumberinput === "" || sourceinput === "" || destination === "" || chooseVehicle === "") {
        alert("Please Fill in the Details ")
    }
    else {
        console.log(sourceinput);
        console.log(destination);
        console.log(dateinput);
        console.log("+91" + phNumberinput);
        console.log(chooseVehicle);

        distance = (distancegot.toFixed(2));
        console.log(distance);
        let vehicle = chooseVehicle;
        console.log(vehicle);





        let loop;
        if (vehicle === 'Bike') {
            loop = bike;
        }
        else if (vehicle === 'Small') {
            loop = small;
        }
        else if (vehicle === 'Medium') {
            loop = medium;
        }
        else if (vehicle === 'Large') {
            loop = large
        }
        else {

            document.querySelector('.result-container-grid').innerHTML = "please choose a vehicle to continue."
        }

        console.log(loop)
        loop.forEach((b) => {


            vehicleResultsHTML += `
    <div class="result-container">
            <div class="show-moredetails">
                <div class="show-moredetails__">
                  <div>
                   Owner Name: ${b.name} <br>
                    age : ${b.age}<br>
                    Experinece : ${b.experience}<br>
                    contact Details : 987654321<br>
                    Esimated cost : ${b.estimatedCost}
                    <div>
                      vehicle name: ${b.vehicleName}
                      <img style="width: 300px; height: 200px; object-fit:contain; " src="${b.ownerImage}">
                    </div>
                  </div>
                  <div class="result-rating-container">Rating:
                    <img class="product-rating-stars"
                        src="${b.rating}">
                    </div>
                    <div class="confirm-page-final-btns ">
                 <button class="chat-btn"><img src="/images/whatsapp.png" alt="">
 Chat </button> 
                 <button class="contact-btn"> <img src="/images/phone.png" alt=""> contact </button> 
                <button class='more-details-btn-js' data-person-Id="${b.id}"  data-toggle="modal" data-target="#exampleModalCenter" 
                data-vehicle-type ='${b.vehicleType}'   ;
            }}> <img src="/images/cargo-truck.png" alt="">  Book </button>   
                </div>
                </div>
                
           </div>
            <div class="result-image-container">
            <img class="result-image"
                src="${b.vehicleImage}">
            </div>

            <div class="result-details limit-text-to-2-lines">
           Owner Name: ${b.name} <br>
            Age:${b.age}<br>
            Vehicle Name :${b.vehicleName}
            </div>
  
            <div class="result-price">
            ${b.estimatedCost}
            </div>  
           

            <button class="book-button button-primary btn-js">
            book 
            </button>
        </div>
    
    
    `
        });

        let id;
        let vehicleType;
        let loop2;
        let details;
        let confirmhtml;
        function confrimPage() {
            console.log(vehicleType + "from oops2")

            if (vehicleType === 'bike') {
                loop2 = bike;
                console.log("from loop2 " + vehicleType)
            }
            else if (vehicleType === 'small') {
                loop2 = small;
                console.log("from loop2 " + vehicleType)
            }
            else if (vehicleType === 'medium') {
                loop2 = medium;
                console.log("from loop2 " + vehicleType)
            }
            else if (vehicleType === 'large') {
                loop2 = large
                console.log("from loop2 " + vehicleType)
            }
            else {

                document.querySelector('.result-container-grid').innerHTML = "please choose a vehicle to continue."
            }
            let matchingVehicle;
            loop2.forEach((vehicle) => {
                let vehicleId = vehicle.id;

                if (id === vehicleId) {
                    console.log("found " + vehicleId);
                    console.log(vehicle.vehicleImage);
                    matchingVehicle = vehicle;
                    matchingid.push(matchingVehicle.id)
                    localStorage.setItem('matchingId', JSON.stringify(matchingid));
                }
            });
            console.log(matchingVehicle.ownerImage);
            details = {
                bookingPlacedDate: today,
                id: matchingVehicle.id,
                ownerImage: matchingVehicle.ownerImage,
                vehicleImage: matchingVehicle.vehicleImage,
                name: matchingVehicle.name,
                age: matchingVehicle.age,
                contactDetails: matchingVehicle.contactDetails,
                estimatedCost: matchingVehicle.estimatedCost,
                vehicleType: matchingVehicle.vehicleType,
                vehicleName: matchingVehicle.vehicleName,
                source: sourceinput,
                Destination: destination,
                date: dateinput,
                phonenumber: phNumberinput,
                totalDistance: distance
            }

            confirmhtml = `
  <div>
          <div class="confirm-page-images-div">
            <img src="${matchingVehicle.ownerImage}" style="width: 100px;object-fit: cover;"" alt="">
            <img src="${matchingVehicle.vehicleImage}"style="width: 200px;object-fit: cover;"" alt="">
          </div>
          <div class="confirm-page-vehicle-details">
              name:${matchingVehicle.name} <br>
              age :${matchingVehicle.age}<br>
            
              contact Details :+${matchingVehicle.contactDetails}<br>
              Estimated cost : ${matchingVehicle.estimatedCost}<br>
               Vehcile Type :${matchingVehicle.vehicleType}<br>
               vehicle name : ${matchingVehicle.vehicleName}
          </div>
          <div class="confirm-page-booking-details ">
            <div class="confirm-page-location-img">
              <img src="images/location/source.png" alt=""> 
              <img src="images/location/destination.png" alt=""> 
            </div>
            <div class="confirm-page-location-img"> 
            <p> FROM:  ${sourceinput}</p>
            <p>TO:${destination}</p>
          </div>
          <div class="confirm-page-vehicle-details">
            Booking Details   <br>
            Total Distance : ${distance}km <br>
           Arriving date: ${dateinput}<br>
           mobile Number :${phNumberinput}<br>
          </div>
          </div>
        </div>
         
 
`
            function confirmOrderEmail() {
                console.log("from mail")
                emailjs.send("service_j6cqqhw", "template_z4hd74c", {
                    Order_Id: id,
                    Customer_Name: userInfo.firstname + " " + userInfo.lastname,
                    Date_Arraival: dateinput,
                    Servie_Location: `From : ${sourceinput} To: ${destination}`,
                    Distance: distance + "km",
                    Booked_Date: today,
                    Porter_Name: matchingVehicle.name,
                    Porter_Age: matchingVehicle.age,
                    Porter_Contact_Details: "+" + matchingVehicle.contactDetails,
                    Vehicle_Type: matchingVehicle.vehicleType,
                    Vehicle_Name: matchingVehicle.vehicleName,
                    to_email: UserCreds.email,
                    reply_to: "-",
                });
            }

            document.querySelector('.confirm-booking-btn').addEventListener('click', () => {

                console.log(details);
                //storing the booking details in the database
                storedb(details);
                confirmOrderEmail();
            });
        }

        document.querySelector('.result-container-grid').innerHTML = vehicleResultsHTML;

        document.querySelectorAll('.more-details-btn-js').forEach((button) => {
            button.addEventListener('click', () => {
                console.log('clicked');
                //console.log(id)
                id = button.dataset.personId;
                vehicleType = button.dataset.vehicleType;
                console.log(id);
                console.log(vehicleType)
                confrimPage();
                document.querySelector('.modal-body').innerHTML = confirmhtml;

            })
        });
    }
}

console.log(matchingid + " from near local torrage");
/*
document.querySelector('.btnclick').addEventListener('click', () => {
    console.log('from retrive');
    console.log(matchingid)
    retrive("6a4e8eef-9e68-45b7-a3a2-6ffe508d6fee");
    console.log(JSON.parse(localStorage.getItem('matchingId')));
});*/
let bt = document.querySelector('.check-btn');
bt.addEventListener('click', check);


