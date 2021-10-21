import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.css';



export default function HomePage(props) {
  


    return (
       <div>
         { props.rooms.map((element)=>{
          return(
            <Link to={`/Room${element.name}`}><button style={{backgroundColor:element.color}} >{element.name}</button></Link>
           )

          })}
           
    
      
          <Link to='/AddRoom'><button id="plusB">+</button></Link>     
        </div>
    )
}
