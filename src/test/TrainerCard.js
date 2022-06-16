import React, {useState} from "react";

const TrainerCard = () => {
    const [count,setCount] =  useState(19);
    
    return (
        <div id ="trainer">
            <p>name: Beth  </p>
            <p>Location: Cornwall  </p>
           <span>{count}</span>
        </div>
    )

}

export default TrainerCard;
