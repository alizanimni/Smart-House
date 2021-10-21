import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import './AddRoom.css';

export default function AddRoom(props) {

    const[name,setName] = useState('');
    const [color, setColor] = useState("black");
    const [type, setType] = useState("Badroom");

    const insertName = (e) =>{
        setName(e.target.value);
    }
    const insertType = (e) =>{
        setType(e.target.value);
    }

    return (
        <div id="AddDiv">
              <label for ="whichRoom" >choose room:  </label>
            <br></br>
            <select onChange = {insertType} id="whichRoom">
                <option value= "Badroom">Badroom</option>
                <option value= "Bathroom">Bathroom</option>
                <option value= "Kitchen">Kitchen</option>
            </select>
            <br></br>
            <input onChange = {insertName} placeholder='Room name' maxLength={5}></input>
            <br></br>
            <label for ="roomC" >choose room color:  </label>
            <br></br>
            <input  id="roomC" placeholder='Room color' type = 'color' onChange={(e) => setColor(e.target.value)}></input>
            <br></br>
            <Link to = '/'><button onClick = {()=>{props.creatRoom(type,name,color)}}>create room</button> </Link>   
        </div>
    )//
}
