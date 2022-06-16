import React, {useState} from  'react';

const Counter= () =>{
    const [counter,setCounter] = useState(0); // when counter initialises, give it value of 0.
    const handleBtnClick = () =>{
        setCounter(counter+1);

    }


    return(
        <>
        <h3 role = "figure">Count:{counter}</h3>
        
        <button 
        onClick={()=> handleBtnClick()}>
        Add one
        </button>


        

        </>
        
    )


}

export default Counter;
