import React, {useState} from 'react'


export default function AddProduct(props) {
   
    const[whichProduct, setWhichProduct]= useState();

    const insertProduct = (e) =>{
        setWhichProduct(e.target.value);
    }


    return (
        <div>
            <label for ="product" >choose product:  </label>
            <br></br>
          <select onChange = {insertProduct} id="product">
                <option value= "lamp">Lamp</option>
                <option value= "AirConditioner">Air-Conditioner</option>
                <option value= "boiler">Boiler</option>
                <option value= "stereoSystem">Stereo system</option>
            </select>
            <br></br>
            <button onClick={()=>props.add(props.name,whichProduct)}>Add</button>
        </div>
    )
}
