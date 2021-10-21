import React, {useState} from 'react'
import './Room.css';
import AddProduct from './AddProduct/AddProduct.js';

export default function Room(props) {

    const[flag,setFlag] = useState(true);
    
    
    const show=()=>{
        if(flag == true){
        return(<div>
            <button onClick = {change}>Add Product</button>
            </div>
        )
        }
        else{
            return(<div>
                <AddProduct name={props.element.name} add={props.addProduct}/>
                </div>
            )
        }

    }

    const change=()=>{
     setFlag(!flag);
    }
   
    const color=(element)=>{
         if(element.switch == 'off'){
             return 'red'
         }
         else{
             return 'green'
         }
    }

    return (
        <div id="RoomDiv">
            <h2>room name: {props.element.name}</h2> 
            <br></br>
            <h2 style={{marginTop : "0px"}}>room type: {props.element.type}</h2>
            <br></br>
           {show()}
           
           {props.element.products.map((element, i)=>{
                        return(
                            <button onClick={()=>props.changeSwitch(props.idx,i)} style={{backgroundColor:color(element), border: '1px black solid', width:'200px'}}>
                            {element.product}
                            </button>
                        )
                        
                    })}

         
        </div>
    )
}
