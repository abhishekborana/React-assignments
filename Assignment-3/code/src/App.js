import React from 'react';
import logo from './logo.svg';
import './App.css';

let obj={
  name:"Alan Ford",
  EmployeeID: "00005152",
  Appointment:"9:00 (24-05-2016)",
  Email:"alan.form@email.ni",
  Phone:"+31123456789",
  orderTime:"10:30 (25-05-2016)",
  productName:"Boltaart Bosbessen",
  productDiscription:"Overheerjike Boltaart met Bosbessen uit de keuksen van de"
}
// var arrow="<";
function App() {
  return (
    <div className="site-container">
        <hr></hr>
        <div className="head">
          <div className="head-content1">
            <img src="data:image/jpeg;base64,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" className="image1"></img>
          </div>
          <div className="head-content2">
            <h3>{obj.name}</h3>
            <h4>{obj.EmployeeID}</h4>
          </div>
          <div className="head-content3">
            <button>Print</button>
          </div>
        </div> 
        <hr></hr> 
  {/*   Second Div Which Contains Appointment email and Phone */}

      <div classname="customer-info" id='secondDiv'>
          <p><strong>Appointment </strong>{obj.Appointment}</p>
          <p><strong>Email: </strong>{obj.Email}</p>
          <p><strong>Phone </strong>{obj.Phone}</p>
      </div>
      
{/* Third Div which contains order info */}
    <div className="head2 order-info">
      <div className="head2-content1">
        <p><strong>Status</strong></p>
        <p>In progress</p>
      </div>
      <div className="head2-content2">
        <p><strong>Door</strong></p>
        <p>Mark</p>
      </div>
      <div className="head2-content3">
        <p><strong>Time</strong></p>
        <p>{obj.orderTime}</p>
      </div>
    </div>

    <div classname="fourthDiv product-list">
      {/* <div className=" Fcontent" id='img2'>
        <img src="https://billennium.com/wp-content/themes/billennium/assets/img/rectangle.svg"></img>
      </div> */}
      <div className="Fcontent" id='img2'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdmhpWrjS8WXZqbRDwO8RaCc9svdotkloa9A&usqp=CAU"></img>
      </div>
      <div className="Fcontent">
        <p><strong>{obj.productName}</strong></p>
        <p>{obj.productDiscription}</p>
      </div>

    </div>

    </div>
  );
}

export default App;
