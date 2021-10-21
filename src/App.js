import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage.js';
import AddRoom from './Components/AddRoom/AddRoom.js';
import Room from './Components/Room/Room.js';
import {Link} from 'react-router-dom';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
function App() {


  const[rooms,setRooms] = useState([]);
  

  const createRoom = (roomType , roomName , roomColor) =>{
   
      if(roomName !== ''){
        setRooms([...rooms,{name:roomName, type: roomType, color: roomColor , products:[]}  ])
    }
    else{
     
    alert("error");
    }
    
 }

 const addProduct =(roomName,product)=>{
   debugger
let tempRooms = rooms
let newProduct = {product: product , switch:'off'}
   for (let i=0 ;i<rooms.length  ;i++){
     if (rooms[i].name == roomName){
       tempRooms[i].products.push(newProduct)
       break
     }
   }
   setRooms(tempRooms);

 }

 const changeSwitch=(idx ,i)=>{
   
   let tempRooms = rooms;
   if(tempRooms[idx].products[i].switch== 'off'){
     tempRooms[idx].products[i].switch= 'on';
     setRooms(tempRooms);
   }
   else{
    tempRooms[idx].products[i].switch= 'off';
    setRooms(tempRooms);
   }
   
 }

  return (
    

    <div className="App">
       <h1 style = {{fontSize: "50px"}}>Smart House</h1>
      <Router>
       
       <Switch>

         <Route exact path = '/' component={()=>{return <HomePage rooms = {rooms}/>}} />
         <Route exact path = '/AddRoom' component={()=>{return <AddRoom creatRoom = {createRoom} rooms = {rooms}/>}} />
         {rooms.map((element,idx)=>{
          return(
            <Route exact path = {`/Room${element.name}`} component={()=>{return <Room  addProduct={addProduct} changeSwitch={changeSwitch} idx={idx} element = {element}/>}} />
           )

          })}
           

       </Switch>
    

    </Router>

    </div>
  );
}

export default App;
